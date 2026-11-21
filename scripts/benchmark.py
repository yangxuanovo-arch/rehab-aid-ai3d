import argparse
import csv
import importlib.metadata as metadata
import json
import os
import platform
import re
import statistics
import subprocess
from pathlib import Path

import meshio
import numpy as np
import tetgen
from skfem import Basis, FacetBasis, LinearForm, MeshTet, asm, condense, solve
from skfem.element import ElementTetP1, ElementVector
from skfem.helpers import sym_grad
from skfem.models.elasticity import lame_parameters, linear_elasticity


ROOT = Path(__file__).resolve().parents[1]
ARTIFACTS = ROOT / 'benchmark' / 'artifacts'
RESULTS = ROOT / 'benchmark' / 'results'
SLICER = os.environ.get('PRUSA_SLICER', 'prusa-slicer')
SLICER_ARGS = [
    '--export-gcode', '--center', '110,110', '--bed-shape', '0x0,220x0,220x220,0x220',
    '--max-print-height', '250', '--nozzle-diameter', '0.4', '--layer-height', '0.2',
    '--first-layer-height', '0.2', '--filament-diameter', '1.75', '--filament-density', '1.24',
    '--filament-type', 'PLA', '--fill-density', '20%', '--perimeters', '3',
    '--top-solid-layers', '4', '--bottom-solid-layers', '4', '--temperature', '210', '--bed-temperature', '60',
]
MATERIALS = {
    'PLA': {'young_mpa': 3000, 'poisson': 0.36, 'reference_strength_mpa': 35},
    'PETG': {'young_mpa': 2100, 'poisson': 0.38, 'reference_strength_mpa': 42},
}
TETGEN = {'quality': True, 'fixedvolume': True, 'maxvolume': 18.0, 'minratio': 1.8, 'quiet': True}


def relative(path):
    return str(path.relative_to(ROOT))


def write_json(name, data):
    (RESULTS / name).write_text(json.dumps(data, ensure_ascii=False, indent=2, allow_nan=False) + '\n')


def slice_case(record):
    case_id = record['id']
    path = ARTIFACTS / (case_id + '.gcode')
    log = ARTIFACTS / (case_id + '-slicer.log')
    path.unlink(missing_ok=True)
    run = subprocess.run(
        [SLICER, *SLICER_ARGS, '--output', str(path), str(ARTIFACTS / record['stl'])],
        text=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, timeout=120, check=False,
    )
    log.write_text(run.stdout)
    result = {'id': case_id, 'success': False, 'exit_code': run.returncode, 'log': relative(log)}
    if run.returncode or not path.is_file():
        return result
    gcode = path.read_text()
    time = re.search(r'^; estimated printing time \(normal mode\) = (.+)$', gcode, re.M)
    filament = dict(re.findall(r'^; filament used \[(mm|cm3|g)\] = ([\d.]+)$', gcode, re.M))
    layers = len(re.findall(r'^;LAYER_CHANGE\s*$', gcode, re.M))
    if not time or set(filament) != {'mm', 'cm3', 'g'} or not layers:
        result['error'] = 'G-code does not contain the expected PrusaSlicer statistics'
        return result
    seconds = sum(int(n) * {'d': 86400, 'h': 3600, 'm': 60, 's': 1}[unit]
                  for n, unit in re.findall(r'(\d+)\s*([dhms])', time[1]))
    result.update(success=True, print_seconds=seconds, slicer_time=time[1], layers=layers,
                  filament_mm=float(filament['mm']), filament_cm3=float(filament['cm3']),
                  filament_g=float(filament['g']), gcode=relative(path))
    return result


def fea_case(record):
    case_id = record['id']
    source = ARTIFACTS / (case_id + '-surface.json')
    surface = json.loads(source.read_text())
    mesher = tetgen.TetGen(np.asarray(surface['vertices']), np.asarray(surface['faces'], dtype=np.int32))
    points, cells, *_ = mesher.tetrahedralize(**TETGEN)
    mesh = MeshTet(points.T, cells.T)
    positions = points[cells]
    cell_volumes = np.abs(np.linalg.det(positions[:, 1:] - positions[:, :1])) / 6
    tet_volume = float(np.sum(cell_volumes))
    surface_volume = record['checks']['volume']
    if abs(tet_volume - surface_volume) / surface_volume > 0.01 or np.min(cell_volumes) < 1e-12:
        raise ValueError(f'Tetrahedral mesh does not preserve surface volume: {tet_volume} vs {surface_volume}')
    element = ElementVector(ElementTetP1())
    basis = Basis(mesh, element)
    ends = mesh.boundary_facets()
    end_z = mesh.p[2, mesh.facets[:, ends]]
    base = ends[np.all(np.isclose(end_z, 0), axis=0)]
    top = ends[np.all(np.isclose(end_z, record['params']['length']), axis=0)]
    fixed = basis.get_dofs(facets=base).all()
    loaded = FacetBasis(mesh, element, facets=top)
    area = float(loaded.dx.sum())
    if not len(fixed) or area <= 0:
        raise ValueError('No base DOFs or top facets identified')
    force = record['checks']['structure']['load']

    @LinearForm
    def traction(v, _):
        return force / area * v[0]

    rhs = asm(traction, loaded)
    if not np.isclose(rhs.sum(), force):
        raise ValueError('Unexpected resultant applied force')
    result = {
        'id': case_id, 'success': True, 'load_n': force, 'loaded_area_mm2': area,
        'fixed_facets': len(base), 'loaded_facets': len(top), 'tetrahedra': len(cells), 'nodes': len(points),
        'tetrahedral_volume_mm3': tet_volume, 'surface_volume_mm3': surface_volume,
        'surface': relative(source), 'materials': {},
    }
    for name, config in MATERIALS.items():
        lam, mu = lame_parameters(config['young_mpa'], config['poisson'])
        stiffness = asm(linear_elasticity(lam, mu), basis)
        displacement = solve(*condense(stiffness, rhs, D=fixed))
        strain = sym_grad(basis.interpolate(displacement))
        stress = 2 * mu * strain + lam * np.eye(3)[:, :, None, None] * np.trace(strain, axis1=0, axis2=1)
        deviator = stress - np.eye(3)[:, :, None, None] * np.trace(stress, axis1=0, axis2=1) / 3
        von_mises = np.sqrt(1.5 * np.sum(deviator ** 2, axis=(0, 1))).max(axis=1)
        nodal_displacement = displacement[basis.nodal_dofs].T
        unconstrained = np.setdiff1d(np.arange(basis.N), fixed)
        reaction = stiffness @ displacement - rhs
        residual = float(np.linalg.norm(reaction[unconstrained]) / np.linalg.norm(rhs))
        reaction_x = float(reaction[np.intersect1d(fixed, basis.nodal_dofs[0])].sum())
        maximum = float(von_mises.max())
        max_displacement = float(np.linalg.norm(nodal_displacement, axis=1).max())
        if not np.isfinite([maximum, max_displacement, residual, reaction_x]).all() or maximum <= 0:
            raise ValueError('FEA produced non-finite results or zero stress')
        if residual > 1e-6 or not np.isclose(reaction_x, -force, rtol=1e-6):
            raise ValueError('FEA solution failed equilibrium checks')
        path = ARTIFACTS / f'{case_id}-{name}.vtu'
        meshio.write(path, meshio.Mesh(points, [('tetra', cells)],
                     point_data={'displacement_mm': nodal_displacement},
                     cell_data={'von_mises_mpa': [von_mises]}))
        result['materials'][name] = {
            'max_von_mises_mpa': maximum, 'max_displacement_mm': max_displacement,
            'reference_safety_factor': config['reference_strength_mpa'] / maximum,
            'relative_residual': residual, 'base_reaction_x_n': reaction_x, 'field_output': relative(path),
        }
    return result


def run_each(label, cases, fn):
    results = []
    for case in cases:
        try:
            row = fn(case)
        except (ValueError, RuntimeError, OSError, subprocess.SubprocessError) as error:
            row = {'id': case['id'], 'success': False, 'error': str(error)}
        results.append(row)
        print(f'{label} {row["id"]}: {"OK" if row["success"] else row}', flush=True)
    return results


def summary(generation, slices, analyses, env):
    slicer = {row['id']: row for row in slices}
    csv_rows, lines = [], []
    for kind in ('pen', 'utensil', 'brace'):
        cases = [row for row in generation if row['kind'] == kind]
        generated = [row for row in cases if row['success']]
        sliced = [slicer[row['id']] for row in generated if slicer[row['id']]['success']]
        passed = sum(row['checks']['printable'] for row in generated)
        manifold = sum(row['checks']['manifold'] for row in generated)
        ms = [row['medianMs'] for row in generated]
        fmt = lambda values, digits: f'{min(values):.{digits}f}–{max(values):.{digits}f}' if values else '—'
        med = f'{statistics.median(ms):.2f}' if ms else '—'
        lines.append(f'| {kind} | {len(generated)}/{len(cases)} | {manifold}/{len(cases)} | {passed}/{len(cases)} | '
                     f'{med} | {len(sliced)}/{len(cases)} | {fmt([x["print_seconds"] / 60 for x in sliced], 1)} | '
                     f'{fmt([x["filament_g"] for x in sliced], 2)} | {fmt([x["layers"] for x in sliced], 0)} |')
        for row in cases:
            sliced_row = slicer.get(row['id'], {})
            csv_rows.append({
                'id': row['id'], 'kind': kind, 'generated': row['success'], 'median_ms': row.get('medianMs'),
                'manifold': row.get('checks', {}).get('manifold'), 'printable': row.get('checks', {}).get('printable'),
                'sliced': sliced_row.get('success', False), 'print_seconds': sliced_row.get('print_seconds'),
                'filament_g': sliced_row.get('filament_g'), 'filament_mm': sliced_row.get('filament_mm'),
                'layers': sliced_row.get('layers'),
            })
    with (RESULTS / 'summary.csv').open('w', newline='') as stream:
        writer = csv.DictWriter(stream, fieldnames=list(csv_rows[0]), lineterminator='\n')
        writer.writeheader()
        writer.writerows(csv_rows)
    fe_lines = []
    for row in analyses:
        for name, value in row.get('materials', {}).items():
            fe_lines.append(f'| {row["id"]} | {name} | {row["load_n"]} | {row["tetrahedra"]} | '
                            f'{value["max_von_mises_mpa"]:.3f} | {value["max_displacement_mm"]:.3f} | '
                            f'{value["reference_safety_factor"]:.3f} |')
    report = [
        '# 实测基准：生成耗时、切片与有限元仿真', '',
        '生成管线：' + env['pipeline'] + '。', '',
        '**未进行实体打印、佩戴或临床验证。** 切片时间为软件估算，有限元结果为指定边界条件下的仿真。',
        f'环境：{env["platform"]}；{env["cpu"]}（{env["logical_cpus"]} 逻辑核）；Node {env["node"]}；'
        f'Python {env["python"]}；{env["slicer"]}。',
        '所有用例均计入分母；耗时只量生成及浏览器同款几何检查，每例重复三次取中位数，'
        '分组列为各例中位数的中位数，不包括渲染、STL 序列化或切片。', '',
        '| 类别 | 生成 | 流形 | 浏览器几何筛查 | 生成中位数 (ms) | 切片 | 预计用时 (min) | 耗材 (g) | 层数 |',
        '|---|---:|---:|---:|---:|---:|---:|---:|---:|', *lines, '',
        f'有限元成功 {sum(row["success"] for row in analyses)}/{len(analyses)} 个几何样例，每例两种材料。'
        '固定底端平面、顶端平面均布横向载荷；将实体假设为均质、各向同性、线弹性，'
        '不模拟切片填充、层间结合、连接、接触或实用载荷。峰值对网格和边界条件敏感，未做收敛验证；裕量不代表安全认证。', '',
        '| 编号 | 材料 | 载荷 (N) | 四面体 | 最大 von Mises 应力 (MPa) | 最大位移 (mm) | 参考裕量 |',
        '|---|---|---:|---:|---:|---:|---:|', *fe_lines, '',
        '逐例输入、原始计时和筛查：[generation.json](generation.json)；'
        '逐例切片统计：[slicing.json](slicing.json)；求解配置、平衡误差和仿真输出位置：[fea.json](fea.json)；'
        '版本和环境：[environment.json](environment.json)；逐例表格：[summary.csv](summary.csv)。'
        f'STL、G-code、切片日志和 VTU 场结果由脚本重建至 {relative(ARTIFACTS)}/，未纳入 Git。', '',
    ]
    (RESULTS / 'summary.md').write_text('\n'.join(report))
    print('\n'.join(lines), flush=True)
    print('\n'.join(fe_lines), flush=True)


def main():
    global ARTIFACTS, RESULTS
    parser = argparse.ArgumentParser()
    parser.add_argument('--ai', action='store_true', help='Use the browser AI pipeline and separate output directories.')
    args = parser.parse_args()
    if args.ai:
        ARTIFACTS /= 'ai-print'
        RESULTS /= 'ai-print'
    RESULTS.mkdir(parents=True, exist_ok=True)
    version_output = subprocess.run([SLICER, '--help'], text=True, capture_output=True, check=True).stdout
    version = next(line.strip() for line in version_output.splitlines() if line.startswith('PrusaSlicer-'))
    command = ['node', 'scripts/generate-cases.mjs', str(ARTIFACTS)]
    subprocess.run(command + (['--ai'] if args.ai else []), cwd=ROOT, check=True)
    data = json.loads((ARTIFACTS / 'generation.json').read_text())
    generation = data['records']
    write_json('generation.json', {'measurement': 'performance.now, 15 warmup invocations, 3 samples per case',
                                   'records': generation})
    cpu = re.search(r'^model name\s*:\s*(.+)$', Path('/proc/cpuinfo').read_text(), re.M)
    env = {'pipeline': '本地 AI＋规则回退' if args.ai else '纯规则基线',
           'platform': platform.platform(), 'cpu': cpu[1] if cpu else platform.machine(),
           'logical_cpus': os.cpu_count(), 'node': data['node'], 'python': platform.python_version(),
           'slicer': version, 'packages': {n: metadata.version(n) for n in ('numpy', 'scipy', 'tetgen', 'meshio', 'scikit-fem')}}
    write_json('environment.json', env)
    generated = [row for row in generation if row['success']]
    representatives = [row for row in generated if row['representative']]
    analyses = run_each('FEA', representatives, fea_case)
    write_json('fea.json', {'solver': 'TetGen PLC; scikit-fem vector P1 tetrahedra; SciPy sparse direct solve',
                            'tetgen': TETGEN, 'materials': MATERIALS,
                            'boundary': 'clamp z=0; uniform +x traction on z=length; mm, N, MPa',
                            'attempted': len(representatives), 'records': analyses})
    slices = run_each('Slice', generated, slice_case)
    write_json('slicing.json', {'slicer': version, 'args': SLICER_ARGS, 'attempted': len(generated), 'records': slices})
    summary(generation, slices, analyses, env)
    if not (len(generation) >= 30 and len(generated) == len(generation)
            and len(representatives) == 4 and all(x['success'] for x in slices + analyses)):
        raise SystemExit(1)


if __name__ == '__main__':
    main()

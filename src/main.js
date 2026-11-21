import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { generateAIModel } from './ai.js';
import { binarySTL, families, updateModelParameters } from './generator.js';
import { outlineFromWidths, presets } from './samples.js';
import './style.css';

const $ = id => document.getElementById(id);
const canvas = $('sketch');
const ctx = canvas.getContext('2d');
let strokes = [], drawing = null, pointer = null, model = null, hadSketch = false;

function paint() {
  const rect = canvas.getBoundingClientRect(), dpi = window.devicePixelRatio || 1;
  canvas.width = Math.max(1, Math.round(rect.width * dpi));
  canvas.height = Math.max(1, Math.round(rect.height * dpi));
  ctx.strokeStyle = '#007867';
  ctx.lineWidth = 2.75 * dpi;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  for (const stroke of strokes) {
    ctx.beginPath();
    stroke.forEach(([x, y], i) => ctx[i ? 'lineTo' : 'moveTo'](x * canvas.width, y * canvas.height));
    ctx.stroke();
  }
  $('sketch-hint').hidden = strokes.length > 0;
  $('undo').disabled = $('clear').disabled = strokes.length === 0;
}

function coordinates(event) {
  const rect = canvas.getBoundingClientRect();
  return [(event.clientX - rect.left) / rect.width, (event.clientY - rect.top) / rect.height]
    .map(x => Math.max(0, Math.min(1, x)));
}

canvas.addEventListener('pointerdown', event => {
  if (pointer !== null || event.button !== 0 || strokes.length >= 60) return;
  pointer = event.pointerId;
  canvas.setPointerCapture(pointer);
  drawing = [coordinates(event)];
  strokes.push(drawing);
  paint();
});
canvas.addEventListener('pointermove', event => {
  if (event.pointerId !== pointer || !drawing || drawing.length >= 1200) return;
  const point = coordinates(event), last = drawing.at(-1);
  if (Math.hypot(point[0] - last[0], point[1] - last[1]) < 0.002) return;
  drawing.push(point);
  paint();
});
for (const eventName of ['pointerup', 'pointercancel', 'lostpointercapture']) {
  canvas.addEventListener(eventName, event => {
    if (event.pointerId !== pointer) return;
    if (drawing.length < 2) strokes.pop();
    drawing = pointer = null;
    paint();
  });
}
$('undo').onclick = () => { if (pointer === null) { strokes.pop(); paint(); } };
$('clear').onclick = () => { if (pointer === null) { strokes = []; paint(); } };
new ResizeObserver(paint).observe(canvas);

function createPreview() {
  const container = $('preview');
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 2500);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enablePan = false;
  const render = () => renderer.render(scene, camera);
  controls.addEventListener('change', render);

  scene.add(new THREE.HemisphereLight(0xe7fff5, 0x2d4248, 2.1));
  for (const [color, power, x, y, z] of [[0xffffff, 2.6, 80, 110, 130], [0x74e8ca, 2.2, -85, 10, -60]]) {
    const light = new THREE.DirectionalLight(color, power);
    light.position.set(x, y, z);
    scene.add(light);
  }
  const grid = new THREE.GridHelper(130, 20, 0x457775, 0x335b5a);
  scene.add(grid);
  const material = new THREE.MeshStandardMaterial({ color: 0x64debb, metalness: 0.15, roughness: 0.37 });
  let previewMesh;

  function fit() {
    if (!previewMesh) return;
    const { center, radius } = previewMesh.geometry.boundingSphere;
    const angle = THREE.MathUtils.degToRad(camera.fov / 2);
    const distance = 1.12 * radius / Math.sin(Math.atan(Math.tan(angle) * Math.min(1, camera.aspect)));
    camera.position.copy(new THREE.Vector3(1.15, 0.72, 1.2).normalize().multiplyScalar(distance).add(center));
    controls.target.copy(center);
    controls.minDistance = radius * 0.85;
    controls.maxDistance = radius * 6;
    controls.update();
  }
  function resize() {
    const w = container.clientWidth, h = container.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    fit();
    render();
  }
  new ResizeObserver(resize).observe(container);

  return ({ vertices, faces }) => {
    if (previewMesh) {
      scene.remove(previewMesh);
      previewMesh.geometry.dispose();
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices.flat(), 3));
    geometry.setIndex(faces.flat());
    geometry.rotateX(-Math.PI / 2);
    geometry.computeVertexNormals();
    geometry.computeBoundingSphere();
    previewMesh = new THREE.Mesh(geometry, material);
    scene.add(previewMesh);
    grid.scale.setScalar(Math.max(0.65, geometry.boundingSphere.radius / 49));
    grid.position.y = -0.13;
    fit();
    render();
  };
}

let showPreview;
try {
  showPreview = createPreview();
} catch {
  $('preview-error').hidden = false;
  $('preview-error').textContent = '此设备无法启用 WebGL。仍可生成模型、查看检查结果并下载 STL。';
}

const fixed = (value, digits = 1) => value.toFixed(digits);
const output = $('results');
const parameterLabels = { kind: '类别', side: '侧别', support: '握力辅助', finger: '腕／指模板', length: '长度',
  diameter: '外径', bore: '孔径', circumference: '周长', wall: '壁厚', profile: '轮廓' };
const checkLabels = { pass: '通过', warn: '警告', fail: '未通过' };
const notice = '浏览器几何筛查和简化力学估算，不是实际切片、实体打印或临床验证；护具仅用于设计展示。';
const sideLabels = { left: '左侧', right: '右侧', neutral: '未注明侧别' };
function node(tag, content, className) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  element.textContent = content;
  return element;
}

function provenanceDetails(provenance) {
  const sections = { text: '文字模型', sketch: '草图模型', rule: '规则回退', default: '模板默认', manual: '手动输入' };
  const components = Object.entries(provenance).map(([key, value]) => {
    const score = value.confidence !== undefined ? ' ' + fixed(value.confidence * 100, 0) + '%'
      : value.coverage !== undefined ? '（采样覆盖 ' + fixed(value.coverage * 100, 0) + '%）' : '';
    return parameterLabels[key] + '：' + sections[value.source] + score;
  });
  const details = node('details', '', 'result-text');
  const aiCount = Object.values(provenance).filter(x => x.source === 'text' || x.source === 'sketch').length;
  details.append(node('summary', '参数来源：' + aiCount + ' 项由本地模型推断'),
    node('p', components.join('；') + '。文字百分比为模型分数，不代表真实请求上的正确概率；草图覆盖率为有效扫描线比例。'));
  return details;
}

function renderEditor() {
  const { params } = model;
  const fields = $('parameter-fields');
  fields.replaceChildren();
  function add(key, options) {
    const input = node(options ? 'select' : 'input', '');
    input.name = key;
    if (options) {
      for (const [value, label] of Object.entries(options)) {
        const option = node('option', label);
        option.value = value;
        input.append(option);
      }
    } else {
      input.type = 'number';
      input.required = true;
      input.step = 'any';
    }
    const label = node('label', parameterLabels[key] + (options ? '' : '（mm）'));
    input.value = params[key];
    label.append(input);
    fields.append(label);
  }
  add('length');
  if (params.kind === 'brace') {
    add('circumference');
    add('wall');
    add('finger', { false: '护腕', true: '护指' });
  } else {
    add('diameter');
    add('bore');
    add('support', { false: '标准', true: '加粗默认外径' });
  }
  add('side', sideLabels);
  $('parameter-editor').hidden = false;
}

function checkRows(checks) {
  return [
    { name: '闭合流形', status: checks.manifold ? 'pass' : 'fail',
      explanation: checks.manifold ? '网格闭合、面方向一致且无退化三角形。'
        : '网格未满足闭合定向要求：异常边 ' + checks.nonManifold + '、异常顶点 ' + checks.badVertices
          + '、退化三角形 ' + checks.degenerate + '；有向体积 ' + fixed(checks.volume / 1000, 3) + ' cm³。' },
    { name: '最小壁厚', status: checks.wallPass ? 'pass' : 'fail',
      explanation: fixed(checks.minWall, 2) + ' mm；筛查要求至少 1.60 mm。' },
    { name: '下向悬垂', status: checks.overhangPass ? 'pass' : 'warn',
      explanation: checks.overhangPass ? '未检测到非底面超过 45° 的下向悬垂。'
        : fixed(checks.overhangPercent, 2) + '% 的表面属于非底面超过 45° 的下向悬垂；请调整朝向或在切片时评估支撑。' },
    { name: '构建空间', status: checks.fits ? 'pass' : 'fail',
      explanation: '外包尺寸 ' + checks.size.map(x => fixed(x)).join(' × ') + ' mm；'
        + (checks.fits ? '在' : '超出') + ' 220 × 220 × 250 mm 的参考构建空间。' },
  ];
}

function modelWarnings(model) {
  const { params, profile, checks } = model;
  const warnings = [...params.warnings];
  if (hadSketch && !profile) warnings.push('未提取到可用轮廓，改用默认外形。');
  if (!checks.printable) warnings.push('几何筛查未全部通过，建议修改尺寸或轮廓后再导出。');
  return warnings;
}

function extractedMeasurements(extracted, params) {
  const measurements = ['length', 'diameter', 'bore', 'circumference', 'wall'].flatMap(key => {
    if (extracted[key] === undefined) return [];
    const geometry = params[key] === undefined ? '（不用于当前模板）'
      : params[key] !== extracted[key] ? '（建模 ' + params[key] + ' mm）' : '';
    return [parameterLabels[key] + ' ' + extracted[key] + ' mm' + geometry];
  });
  return node('p', '从原始请求提取的尺寸：' + (measurements.join(' · ') || '无'), 'result-text');
}

function renderModel(elapsed, presetKind) {
  const { params, checks, profile, extracted } = model;
  const details = params.kind === 'brace' ? (params.finger ? '护指' : '护腕') : families[params.kind].label;
  const side = sideLabels[params.side];
  $('model-label').textContent = details + ' · ' + side + ' · ' + (profile ? '已应用草图' : '默认轮廓') + ' · ' + fixed(elapsed) + ' ms';
  showPreview?.(model);
  const report = node('ul', '', 'check-list');
  for (const { name, status, explanation } of checkRows(checks)) {
    const row = node('li', '');
    row.append(node('span', checkLabels[status], 'badge ' + status), node('strong', name),
      node('p', explanation, 'result-text'));
    report.append(row);
  }
  const metrics = node('dl', '', 'metrics');
  for (const [title, value] of [
    ['体积', fixed(checks.volume / 1000) + ' cm³'], ['PLA 实心质量', fixed(checks.mass) + ' g'],
    ['预计用时（实心）', fixed(checks.minutes) + ' min'], ['最小壁厚', fixed(checks.minWall, 2) + ' mm'],
  ]) {
    const item = node('div', '');
    item.append(node('dt', title), node('dd', value));
    metrics.append(item);
  }
  const nominal = params.kind === 'brace'
    ? '周长 ' + params.circumference + ' mm · 名义壁厚 ' + params.wall + ' mm'
    : '名义外径 ' + params.diameter + ' mm · 孔径 ' + params.bore + ' mm';
  const s = checks.structure;
  output.replaceChildren(node('h3', '校验报告'), report, node('p', notice, 'result-text'), metrics,
    node('p', nominal, 'result-text'),
    extractedMeasurements(extracted, params),
    node('p', '仿真估算：' + s.model + '，载荷 ' + s.load + ' N，弯曲应力 ' + fixed(s.stress, 2)
      + ' MPa，参考裕量 ' + fixed(s.factor, 2) + '×（PLA 参考强度 35 MPa）。', 'result-text'),
    provenanceDetails(model.provenance));
  const warnings = modelWarnings(model);
  if (warnings.length) output.append(node('p', warnings.join(' '), 'result-text warnings'));
  $('download').disabled = false;
  $('download-report').disabled = false;
  document.querySelectorAll('.preset').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.kind === presetKind)));
  renderEditor();
}

function generate(presetKind) {
  if (pointer !== null) return;
  const start = performance.now();
  hadSketch = strokes.length > 0;
  model = generateAIModel($('description').value, strokes, $('family').value);
  renderModel(performance.now() - start, presetKind);
}

for (const preset of presets) {
  const button = node('button', '', 'preset');
  button.type = 'button';
  button.dataset.kind = preset.kind;
  button.setAttribute('aria-pressed', 'false');
  const copy = node('span', '');
  copy.append(node('strong', preset.label), node('small', preset.note));
  const symbol = node('span', preset.icon, 'symbol'), arrow = node('span', '↗', 'arrow');
  symbol.setAttribute('aria-hidden', 'true');
  arrow.setAttribute('aria-hidden', 'true');
  button.append(symbol, copy, arrow);
  button.onclick = () => {
    if (pointer !== null) return;
    $('description').value = preset.description;
    $('family').value = 'auto';
    strokes = outlineFromWidths(preset.profile);
    paint();
    generate(preset.kind);
  };
  $('presets').append(button);
}
$('generate').onclick = () => generate();
$('parameter-editor').onsubmit = event => {
  event.preventDefault();
  if (!model) return;
  const edits = Object.fromEntries(Array.from(new FormData(event.currentTarget), ([key, value]) =>
    [key, key === 'side' ? value : ['finger', 'support'].includes(key) ? value === 'true' : Number(value)]));
  const start = performance.now();
  model = updateModelParameters(model, edits);
  renderModel(performance.now() - start);
};
function download(data, mime, filename) {
  const url = URL.createObjectURL(new Blob([data], { type: mime }));
  const link = node('a', '');
  link.href = url;
  link.download = filename;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
$('download').onclick = () => {
  if (model) download(binarySTL(model), 'model/stl', model.params.kind + '-prototype.stl');
};
$('download-report').onclick = () => {
  if (!model) return;
  const { params, checks, extracted, provenance, profile } = model;
  const report = { notice, lengthUnit: 'mm', extracted, params, checks, screening: checkRows(checks),
    warnings: modelWarnings(model), provenance, profile };
  download(JSON.stringify(report, null, 2), 'application/json', params.kind + '-check-report.json');
};
$('presets').firstElementChild.click();

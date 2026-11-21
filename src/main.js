import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { generateAIModel } from './ai.js';
import { binarySTL, updateModelParameters } from './generator.js';
import { outlineFromWidths } from './samples.js';
import { aids, conditions, aidById, guideFor } from './care.js';
import { buildAidModel, customFields } from './aid-models.js';
import './style.css';

const $ = id => document.getElementById(id);
const canvas = $('sketch');
const ctx = canvas.getContext('2d');
let strokes = [], drawing = null, pointer = null, model = null, hadSketch = false;
let currentAid = aids[0];

function paint() {
  const rect = canvas.getBoundingClientRect(), dpi = window.devicePixelRatio || 1;
  canvas.width = Math.max(1, Math.round(rect.width * dpi));
  canvas.height = Math.max(1, Math.round(rect.height * dpi));
  ctx.strokeStyle = '#2467bd';
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

  scene.add(new THREE.HemisphereLight(0xf4faff, 0x6c819b, 2.1));
  for (const [color, power, x, y, z] of [[0xffffff, 2.6, 80, 110, 130], [0x9ecbff, 2.2, -85, 10, -60]]) {
    const light = new THREE.DirectionalLight(color, power);
    light.position.set(x, y, z);
    scene.add(light);
  }
  const grid = new THREE.GridHelper(130, 20, 0xa3b7d2, 0xd3dfec);
  scene.add(grid);
  const material = new THREE.MeshStandardMaterial({ color: 0x347dc5, metalness: 0.08, roughness: 0.43 });
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

  return ({ vertices, faces, aidId }) => {
    if (previewMesh) {
      scene.remove(previewMesh);
      previewMesh.geometry.dispose();
    }
    let geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices.flat(), 3));
    geometry.setIndex(faces.flat());
    if (customFields[aidId]) {
      const indexed = geometry;
      geometry = geometry.toNonIndexed();
      indexed.dispose();
    }
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
  const sections = { text: '文字模型', sketch: '草图模型', rule: '规则回退', default: '模板默认', manual: '手动输入', derived: '几何换算' };
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
      if (currentAid.custom) {
        const [, , min, max] = customFields[currentAid.id][key];
        input.min = min;
        input.max = max;
      }
    }
    const label = node('label', (currentAid.custom ? customFields[currentAid.id][key][0] : parameterLabels[key]) + (options ? '' : '（mm）'));
    input.value = params[key];
    label.append(input);
    fields.append(label);
  }
  if (currentAid.custom) {
    for (const key of Object.keys(customFields[currentAid.id])) add(key);
  } else {
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
  }
  $('parameter-editor').hidden = false;
}

function checkRows(checks) {
  return [
    { name: '闭合流形', status: checks.manifold ? 'pass' : 'fail',
      explanation: checks.manifold ? '网格闭合、面方向一致且无退化三角形。'
        : '网格未满足闭合定向要求：异常边 ' + checks.nonManifold + '、异常顶点 ' + checks.badVertices
          + '、退化三角形 ' + checks.degenerate + '；有向体积 ' + fixed(checks.volume / 1000, 3) + ' cm³。' },
    { name: '最小壁厚', status: checks.wallPass ? 'pass' : 'fail',
      explanation: fixed(checks.minWall, 2) + ' mm；筛查要求至少 1.60 mm。' + (checks.wallMethod ? checks.wallMethod + '。' : '') },
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
      : Math.abs(params[key] - extracted[key]) > 1e-8 ? '（建模 ' + Number(params[key].toFixed(2)) + ' mm）' : '';
    return [parameterLabels[key] + ' ' + extracted[key] + ' mm' + geometry];
  });
  return node('p', '从原始请求提取的尺寸：' + (measurements.join(' · ') || '无'), 'result-text');
}

function renderModel(elapsed) {
  const { params, checks, profile, extracted } = model;
  const details = currentAid.label;
  const side = sideLabels[params.side];
  $('model-label').textContent = details + ' · ' + side + ' · ' + (currentAid.custom ? '参数化板件' : profile ? '已应用草图' : '默认轮廓') + ' · ' + fixed(elapsed) + ' ms';
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
  const nominal = currentAid.custom ? Object.keys(customFields[currentAid.id]).map(key => customFields[currentAid.id][key][0] + ' ' + params[key] + ' mm').join(' · ') : params.kind === 'brace'
    ? '适配周长 ' + Number(params.circumference.toFixed(2)) + ' mm · 名义壁厚 ' + params.wall + ' mm'
    : '名义外径 ' + Number(params.diameter.toFixed(2)) + ' mm · 孔径 ' + Number(params.bore.toFixed(2))
      + ' mm · 名义壁厚 ' + Number(params.wall.toFixed(2)) + ' mm';
  const s = checks.structure;
  output.replaceChildren(node('h3', '校验报告'), report, node('p', notice, 'result-text'), metrics,
    node('p', nominal, 'result-text'),
    extractedMeasurements(extracted, params),
    node('p', s ? '仿真估算：' + s.model + '，载荷 ' + s.load + ' N，弯曲应力 ' + fixed(s.stress, 2)
      + ' MPa，参考裕量 ' + fixed(s.factor, 2) + '×（PLA 参考强度 35 MPa）。' : '结构强度未评估：此板件不适用套筒梁模型；未做载荷、疲劳或实体试验。', 'result-text'));
  if (!currentAid.custom) output.append(provenanceDetails(model.provenance));
  const warnings = modelWarnings(model);
  if (warnings.length) output.append(node('p', warnings.join(' '), 'result-text warnings'));
  $('download').disabled = false;
  $('download-report').disabled = false;
  document.querySelectorAll('.preset').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.kind === currentAid.id)));
  renderEditor();
  renderGuidance();
}

function generate() {
  if (pointer !== null) return;
  const start = performance.now();
  const selected = aidById($('family').value);
  hadSketch = !selected?.custom && strokes.length > 0;
  if (selected?.custom) model = buildAidModel(selected.id);
  else {
    model = generateAIModel($('description').value, strokes, selected?.family ?? 'auto',
      selected?.family === 'brace' ? { finger: selected.id === 'finger' } : {});
  }
  currentAid = selected ?? aidById(model.params.kind === 'brace' ? (model.params.finger ? 'finger' : 'wrist') : model.params.kind);
  model.aidId = currentAid.id;
  configureInput();
  renderModel(performance.now() - start);
}

function configureInput(custom = Boolean(currentAid.custom)) {
  $('sketch-section').hidden = custom;
  $('text-section').hidden = custom;
  $('generate').hidden = custom;
  $('input-note').textContent = custom ? '此方案使用专用几何模板。请在下方直接编辑尺寸，不使用文字或草图识别。' : '填写尺寸或绘制轮廓，生成后还可以精细调整。';
  $('editor-note').textContent = custom ? '单位为毫米；孔洞大小可能为保留材料边距而限制，应用后查看实际建模值。' : '单位为毫米；应用后保留草图并重新筛查。换辅具请使用上方方案库。';
}

function selectAid(aid) {
  if (pointer !== null) return;
  currentAid = aid;
  $('family').value = aid.id;
  $('description').value = aid.description ?? '';
  const profiles = { pen: [0.7, 0.86, 1, 0.91, 0.96, 0.69], utensil: [0.65, 0.8, 1, 0.92, 0.83, 0.69], toothbrush: [0.8, 0.85, 0.91, 1, 0.9, 0.8] };
  strokes = aid.custom ? [] : outlineFromWidths(profiles[aid.id] ?? [0.75, 0.85, 0.93, 1, 0.95, 0.8]);
  configureInput();
  paint();
  generate();
}

for (const preset of aids) {
  const option = node('option', preset.label); option.value = preset.id; $('family').append(option);
  const button = node('button', '', 'preset');
  button.type = 'button';
  button.dataset.kind = preset.id;
  button.setAttribute('aria-pressed', 'false');
  const copy = node('span', '');
  copy.append(node('strong', preset.label), node('small', preset.note));
  const symbol = node('span', preset.icon, 'symbol'), arrow = node('span', '↗', 'arrow');
  symbol.setAttribute('aria-hidden', 'true');
  arrow.setAttribute('aria-hidden', 'true');
  button.append(symbol, copy, arrow);
  button.onclick = () => selectAid(preset);
  $('presets').append(button);
}
$('family').onchange = () => {
  const aid = aidById($('family').value);
  if (aid) selectAid(aid);
  else configureInput(false);
};
$('generate').onclick = () => generate();
$('parameter-editor').onsubmit = event => {
  event.preventDefault();
  if (!model) return;
  const edits = Object.fromEntries(Array.from(new FormData(event.currentTarget), ([key, value]) =>
    [key, key === 'side' ? value : ['finger', 'support'].includes(key) ? value === 'true' : Number(value)]));
  const start = performance.now();
  model = currentAid.custom ? buildAidModel(currentAid.id, edits) : updateModelParameters(model, edits);
  if (model.params.kind === 'brace') {
    currentAid = aidById(model.params.finger ? 'finger' : 'wrist');
    if ($('family').value !== 'auto') $('family').value = currentAid.id;
  }
  model.aidId = currentAid.id;
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
  if (model) download(binarySTL(model), 'model/stl', currentAid.id + '-prototype.stl');
};
$('download-report').onclick = () => {
  if (!model) return;
  const { params, checks, extracted, provenance, profile } = model;
  const report = { notice, aid: currentAid.id, guide: guideFor(currentAid, params), lengthUnit: 'mm', extracted, params, checks, screening: checkRows(checks),
    warnings: modelWarnings(model), provenance, profile };
  download(JSON.stringify(report, null, 2), 'application/json', params.kind + '-check-report.json');
};

function renderCondition(condition) {
  document.querySelectorAll('.condition-tab').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.id === condition.id)));
  const copy = node('div', '', 'recommendation-copy');
  copy.append(node('h3', '可以从这些方案开始'), node('p', condition.summary));
  const choices = node('div', '', 'recommendation-choices');
  for (const id of condition.choices) {
    const aid = aidById(id), button = node('button', aid.label + ' →', 'recommendation-choice');
    button.type = 'button'; button.onclick = () => { selectAid(aid); $('input-title').scrollIntoView({ behavior: 'smooth', block: 'start' }); };
    choices.append(button);
  }
  const caution = node('p', condition.caution, 'care-caution');
  $('recommendations').replaceChildren(copy, choices, caution);
}

for (const condition of conditions) {
  const button = node('button', condition.label, 'condition-tab');
  button.type = 'button'; button.dataset.id = condition.id;
  button.onclick = () => renderCondition(condition);
  $('conditions').append(button);
}

function renderGuidance() {
  const guide = guideFor(currentAid, model.params), grid = node('div', '', 'guidance-grid');
  for (const [title, lines] of [['先测量与试配', [guide.measurement]], ['切片与打印准备', guide.print], ['使用边界与检查', guide.use]]) {
    const section = node('article', '', 'guide-card'), list = node('ol', '');
    section.append(node('h3', title));
    for (const line of lines) list.append(node('li', line));
    section.append(list); grid.append(section);
  }
  $('guidance').replaceChildren(node('p', currentAid.label + ' · ' + guide.status, 'guide-context'), grid);
}

$('download-guide').onclick = () => {
  if (!model) return;
  const guide = guideFor(currentAid, model.params);
  const lines = [guide.aid + ' · 制作准备与使用指导', guide.status, '', '当前建模尺寸（mm）',
    ...Object.entries(guide.dimensions).map(([key, value]) => (customFields[currentAid.id]?.[key]?.[0] ?? parameterLabels[key] ?? key) + '：' + value),
    '', '测量与试配', guide.measurement, '', '切片与打印准备', ...guide.print, '', '使用边界与检查', ...guide.use];
  download(lines.join('\n'), 'text/plain;charset=utf-8', currentAid.id + '-guide.txt');
};
renderCondition(conditions[0]);
$('presets').firstElementChild.click();

import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { generateAIModel, predictText } from '../src/ai.js';
import { binarySTL, buildModel, readRuleIntent, resolveIntent } from '../src/generator.js';

const evaluatedCommit = '38cec054a054ebaf0b5eb2dd3fd3283a88888f23';
const datasetSha256 = '8042e9dd5725af92036bc1e5037b09ac72767f445f9f8e215a042e83c9c28853';
const toleranceMm = 0.5;
const minSlotConfidence = 0.62;
const kindMap = new Map([['pen_grip', 'pen'], ['utensil_handle', 'utensil'], ['brace', 'brace']]);
const sizeFields = { length_mm: 'length', circumference_mm: 'circumference', wall_thickness_mm: 'wall',
  diameter_mm: 'diameter' };
const sizes = Object.values(sizeFields);
const fields = ['kind', 'side', ...sizes];
const methods = ['model', 'rules', 'hybrid'];
const generationMethods = ['rules', 'hybrid'];
const generationFields = ['generated', 'stlValid', 'manifold', 'printable', 'endToEnd'];
const repo = fileURLToPath(new URL('..', import.meta.url));
const fixture = new URL('../benchmark/cases/blind/rehab_aid_blind_test_set.json', import.meta.url);
const out = new URL('../benchmark/results/', import.meta.url);

function loadInputs(bytes) {
  const rows = JSON.parse(bytes);
  if (!Array.isArray(rows) || rows.length !== 60) throw new Error('Expected 60 blind requests');
  const ids = new Set();
  for (const row of rows) {
    if (typeof row.id !== 'string' || ids.has(row.id) || typeof row.text !== 'string' || !row.text.trim()
      || !['zh', 'en'].includes(row.lang) || !kindMap.has(row.category)
      || ![null, 'left', 'right'].includes(row.side)
      || Object.keys(sizeFields).some(key => row[key] !== null && !Number.isFinite(row[key]))) {
      throw new Error('Invalid blind request schema: ' + row.id);
    }
    ids.add(row.id);
  }
  return rows;
}

export function scoreFields(expected, actual) {
  return Object.fromEntries(fields.filter(key => expected[key] != null).map(key => [
    key, typeof expected[key] === 'number'
      ? Number.isFinite(actual[key]) && Math.abs(expected[key] - actual[key]) <= toleranceMm
      : expected[key] === actual[key],
  ]));
}

function modelFields(prediction) {
  const slots = {};
  for (const slot of prediction.slots) {
    if (slot.value !== 'ignore' && slot.confidence >= minSlotConfidence
      && (!slots[slot.value] || slot.confidence > slots[slot.value].confidence)) slots[slot.value] = slot;
  }
  return {
    kind: prediction.intent.kind.value,
    side: prediction.intent.side.value,
    ...Object.fromEntries(Object.entries(slots).map(([key, slot]) => [key, slot.mm])),
  };
}

function generation(makeModel) {
  const result = Object.fromEntries(generationFields.map(key => [key, false]));
  try {
    const { checks, faces, params, provenance, vertices } = makeModel();
    Object.assign(result, { generated: true, manifold: checks.manifold, printable: checks.printable,
      triangles: faces.length, params, provenance, checks });
    const stl = binarySTL({ faces, vertices });
    result.stlValid = faces.length > 0 && stl.byteLength === 84 + 50 * faces.length
      && new DataView(stl).getUint32(80, true) === faces.length;
    result.endToEnd = result.stlValid && result.manifold && result.printable;
  } catch (error) {
    result.error = String(error);
  }
  return result;
}

function evaluate(input) {
  const expected = {
    kind: kindMap.get(input.category), side: input.side,
    ...Object.fromEntries(Object.entries(sizeFields).map(([key, field]) => [field, input[key]])),
  };
  const modelRaw = predictText(input.text);
  const rulesRaw = readRuleIntent(input.text);
  const rules = generation(() => buildModel(resolveIntent(rulesRaw), null));
  const hybrid = generation(() => generateAIModel(input.text));
  const actual = { model: modelFields(modelRaw), rules: rulesRaw, hybrid: hybrid.params ?? {} };
  const scores = Object.fromEntries(methods.map(method => [method, scoreFields(expected, actual[method])]));
  return { input, expected, actual, scores, modelRaw, generation: { rules, hybrid } };
}

const count = outcomes => ({ correct: outcomes.filter(Boolean).length, total: outcomes.length });
const labeled = (rows, keys) => rows.flatMap(row => keys.flatMap(key => key in row ? [row[key]] : []));

export function summarize(rows) {
  return {
    requests: rows.length,
    extraction: Object.fromEntries(methods.map(method => {
      const results = rows.map(row => row.scores[method]);
      return [method, {
        ...Object.fromEntries(fields.map(key => [key, count(labeled(results, [key]))])),
        sizes: count(labeled(results, sizes)),
        joint: count(results.map(row => Object.values(row).every(Boolean))),
      }];
    })),
    generation: Object.fromEntries(generationMethods.map(method => [method, Object.fromEntries(
      generationFields.map(key => [key, count(rows.map(row => row.generation[method][key]))]),
    )])),
  };
}

function markdown(metadata, summary) {
  const tableRows = (routes, group, keys) => Object.entries(summary).flatMap(([lang, slice]) => routes.map(method =>
    '| ' + [lang, method, ...keys.map(key => {
      const { correct, total } = slice[group][method][key];
      return correct + '/' + total;
    })].join(' | ') + ' |'));
  return [
    '# 盲测：独立编写的 60 条中英文请求', '',
    '请求由未查看仓库的独立会话编写，不是用户采集或临床数据。只评测一次，未用该集合训练、校准或调整实现。', '',
    '- 被测代码：' + metadata.evaluatedCommit,
    '- 原始请求集 SHA-256：' + metadata.datasetSha256,
    '- 运行环境：Node ' + metadata.node + '；UTC ' + metadata.runAt, '',
    '## 评分口径', '',
    '类别和侧别必须完全一致；已标注尺寸以毫米比较，允许 ±0.5 mm（含边界）。缺失预测计错，原标签为 null 的字段不计分。'
      + ' 类别映射：pen_grip → pen、utensil_handle → utensil、brace → brace；'
      + '长度、周长、壁厚、直径分别映射至 length、circumference、wall、diameter。原数据未提供孔径标签。', '',
    '- model：文字模型独立推断；类别、侧别取最高分，尺寸按既有 AI 基准规则取每槽最高分且 ≥0.62 的预测。',
    '- rules：只评分规则直接提取的字段，不补模板默认；生成沿用纯规则管线，另用模板解析缺失参数。',
    '- hybrid：按自动类别使用完整产品管线；评分的是最终参数，包括校正与模板默认。', '',
    '## 类别、侧别和已标注尺寸', '',
    '各格为命中数/应评数。尺寸合计按字段计数；整例全对要求类别以及该例每个已标注字段都正确。0/0 表示没有标签。', '',
    '| 语言 | 路线 | 类别 | 侧别 | 长度 | 周长 | 壁厚 | 直径 | 尺寸合计 | 整例全对 |',
    '|---|---|---:|---:|---:|---:|---:|---:|---:|---:|',
    ...tableRows(methods, 'extraction', [...fields, 'sizes', 'joint']), '',
    '## 端到端生成（文本输入，无草图）', '',
    '独立模型只提取文字信息，不单列生成结果。端到端通过指 STL 格式检查、闭合流形和浏览器几何筛查均通过，'
      + '不要求生成类别或尺寸正确。未做切片、实体打印、有限元仿真或临床验证。', '',
    '| 语言 | 路线 | 已生成 | STL 有效 | 流形 | 几何筛查通过 | 端到端通过 |',
    '|---|---|---:|---:|---:|---:|---:|', ...tableRows(generationMethods, 'generation', generationFields), '',
    '[原始请求与标签](../cases/blind/rehab_aid_blind_test_set.json) · [逐例预测与检查](blind.json)', '',
  ].join('\n');
}

function main() {
  const resultJson = new URL('blind.json', out), resultMd = new URL('blind.md', out);
  if (existsSync(resultJson) || existsSync(resultMd)) throw new Error('Blind results already exist; refusing to overwrite');
  const git = (...args) => execFileSync('git', args, { cwd: repo, encoding: 'utf8' }).trim();
  if (git('diff', '--name-only', evaluatedCommit, '--', 'src') || git('status', '--porcelain', '--', 'src')) {
    throw new Error('Working source does not match evaluated commit');
  }
  const bytes = readFileSync(fixture);
  if (createHash('sha256').update(bytes).digest('hex') !== datasetSha256) throw new Error('Blind data checksum mismatch');
  const rows = loadInputs(bytes).map(evaluate);
  const metadata = { evaluatedCommit, datasetSha256, toleranceMm, minSlotConfidence,
    node: process.version, runAt: new Date().toISOString() };
  const summary = { all: summarize(rows), zh: summarize(rows.filter(row => row.input.lang === 'zh')),
    en: summarize(rows.filter(row => row.input.lang === 'en')) };
  writeFileSync(resultJson, JSON.stringify({ metadata, summary, rows }, null, 2) + '\n', { flag: 'wx' });
  writeFileSync(resultMd, markdown(metadata, summary), { flag: 'wx' });
  console.log('Recorded ' + rows.length + ' blind requests in benchmark/results/blind.{json,md}.');
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();

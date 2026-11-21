import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { generateAIModel, predictText } from '../src/ai.js';
import { binarySTL, buildModel, readRuleIntent, resolveIntent } from '../src/generator.js';

const runs = new Map([
  ['1', {
    evaluatedCommit: '38cec054a054ebaf0b5eb2dd3fd3283a88888f23',
    datasetSha256: '8042e9dd5725af92036bc1e5037b09ac72767f445f9f8e215a042e83c9c28853',
    fixturePath: 'blind/rehab_aid_blind_test_set.json',
    outputName: 'blind',
    title: '盲测：独立编写的 60 条中英文请求',
  }],
  ['2', {
    evaluatedCommit: '6829e756ea9295a093e3af534765eb5bb1f38261',
    datasetSha256: '110426622e9aea27d34d206c56bf3ae7d2e5057bda326d2b3cab83dd3b64d228',
    fixturePath: 'blind2/rehab_aid_blind_test_set_2.json',
    outputName: 'blind2',
    title: '盲测 2：独立编写的 60 条中英文请求',
  }],
  ['3', {
    evaluatedCommit: '0d9d9bc4af5164cb49bd00f0fbfbc83789cc3a6b',
    datasetSha256: 'c4dcdeab9011f6de7373c186577dfbde324c657656bca38db93f816f53a54578',
    fixturePath: 'blind3/rehab_blind_test_set_3.json',
    outputName: 'blind3',
    title: '盲测 3：独立编写的 60 条中英文请求',
    rawSizes: true,
  }],
  ['4', {
    evaluatedCommit: '79b270dc4c4587a7c4069c0685eb5873cc4bb6b4',
    datasetSha256: '5254e981e281f9948a600d8994fc6fc3d306f17cd1f75328c9c0966f9ab70c52',
    fixturePath: 'blind4/rehab_blind_test_set_4.json',
    outputName: 'blind4',
    title: '盲测 4：独立编写的 60 条中英文请求',
    rawSizes: true,
  }],
  ['5', {
    evaluatedCommit: '164769ab1c9006c93e5fc3139f5b29d0f43af1dc',
    datasetSha256: 'a9cab00b958ea741386eb202408a3f5413f95fce0fb08084962c3ee54fb6204b',
    fixturePath: 'blind5/rehab_blind_test_set_5.json',
    outputName: 'blind5',
    title: '盲测 5：独立编写的 60 条中英文请求',
    rawSizes: true,
  }],
]);
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
const cases = new URL('../benchmark/cases/', import.meta.url);
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

function generation(makeModel, captureRaw = false) {
  const result = Object.fromEntries(generationFields.map(key => [key, false]));
  try {
    const { checks, faces, params, provenance, vertices, extracted } = makeModel();
    Object.assign(result, { generated: true, manifold: checks.manifold, printable: checks.printable,
      triangles: faces.length, params, provenance, checks });
    if (captureRaw) result.extracted = extracted;
    const stl = binarySTL({ faces, vertices });
    result.stlValid = faces.length > 0 && stl.byteLength === 84 + 50 * faces.length
      && new DataView(stl).getUint32(80, true) === faces.length;
    result.endToEnd = result.stlValid && result.manifold && result.printable;
  } catch (error) {
    result.error = String(error);
  }
  return result;
}

function evaluate(input, rawSizes) {
  const expected = {
    kind: kindMap.get(input.category), side: input.side,
    ...Object.fromEntries(Object.entries(sizeFields).map(([key, field]) => [field, input[key]])),
  };
  const modelRaw = predictText(input.text);
  const rulesRaw = readRuleIntent(input.text);
  const rules = generation(() => buildModel(resolveIntent(rulesRaw), null));
  const hybrid = generation(() => generateAIModel(input.text), rawSizes);
  const actual = { model: modelFields(modelRaw), rules: rulesRaw, hybrid: hybrid.params ?? {} };
  const scores = Object.fromEntries(methods.map(method => [method, scoreFields(expected, actual[method])]));
  return { input, expected, actual, scores, modelRaw, generation: { rules, hybrid } };
}

const count = outcomes => ({ correct: outcomes.filter(Boolean).length, total: outcomes.length });
const labeled = (rows, keys) => rows.flatMap(row => keys.flatMap(key => key in row ? [row[key]] : []));

export function summarizeRawSizes(rows) {
  const scored = rows.map(row => scoreFields(row.expected, row.generation.hybrid.extracted ?? {}));
  return Object.fromEntries([...sizes, 'sizes'].map(key => [
    key, count(labeled(scored, key === 'sizes' ? sizes : [key])),
  ]));
}

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

function markdown(metadata, summary, { title, fixturePath, outputName }, secondary) {
  const tableRows = (routes, group, keys) => Object.entries(summary).flatMap(([lang, slice]) => routes.map(method =>
    '| ' + [lang, method, ...keys.map(key => {
      const { correct, total } = slice[group][method][key];
      return correct + '/' + total;
    })].join(' | ') + ' |'));
  return [
    '# ' + title, '',
    '请求由未查看仓库的独立会话编写，不是用户采集或临床数据。只评测一次，未用该集合训练、校准或调整实现。', '',
    ...(outputName === 'blind2' ? [
      '两轮之间合入了尺寸合并修复 #9；为保持评分口径，混合路线仍按建模参数评分，不改用报告中的原始提取值。两轮请求不同，不作同集前后比较。', '',
    ] : []),
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
    ...(secondary ? [
      '## 次要指标：混合管线的原始尺寸提取', '',
      '沿用 #11 开发评估的提取口径：从同一次生成读取 extracted，不使用建模限幅或模板默认项；仅对已标注尺寸评分，容差 ±0.5 mm。此表不替代主表。', '',
      '| 语言 | 长度 | 周长 | 壁厚 | 直径 | 尺寸合计 |',
      '|---|---:|---:|---:|---:|---:|',
      ...Object.entries(secondary.hybridRawSizes).map(([lang, metrics]) =>
        '| ' + [lang, ...[...sizes, 'sizes'].map(key => metrics[key].correct + '/' + metrics[key].total)].join(' | ') + ' |'), '',
    ] : []),
    '## 端到端生成（文本输入，无草图）', '',
    '独立模型只提取文字信息，不单列生成结果。端到端通过指 STL 格式检查、闭合流形和浏览器几何筛查均通过，'
      + '不要求生成类别或尺寸正确。未做切片、实体打印、有限元仿真或临床验证。', '',
    '| 语言 | 路线 | 已生成 | STL 有效 | 流形 | 几何筛查通过 | 端到端通过 |',
    '|---|---|---:|---:|---:|---:|---:|', ...tableRows(generationMethods, 'generation', generationFields), '',
    '[原始请求与标签](../cases/' + fixturePath + ') · [逐例预测与检查](' + outputName + '.json)', '',
  ].join('\n');
}

function main() {
  const run = runs.get(process.argv[2] ?? '1');
  if (!run || process.argv.length > 3) throw new Error('Usage: node scripts/benchmark-blind.mjs [1|2|3|4|5]');
  const { outputName, evaluatedCommit, datasetSha256, fixturePath, rawSizes } = run;
  const resultJson = new URL(outputName + '.json', out), resultMd = new URL(outputName + '.md', out);
  if (existsSync(resultJson) || existsSync(resultMd)) throw new Error('Blind results already exist; refusing to overwrite');
  const git = (...args) => execFileSync('git', args, { cwd: repo, encoding: 'utf8' }).trim();
  if (git('diff', '--name-only', evaluatedCommit, '--', 'src') || git('status', '--porcelain', '--', 'src')) {
    throw new Error('Working source does not match evaluated commit');
  }
  const bytes = readFileSync(new URL(fixturePath, cases));
  if (createHash('sha256').update(bytes).digest('hex') !== datasetSha256) throw new Error('Blind data checksum mismatch');
  const rows = loadInputs(bytes).map(input => evaluate(input, rawSizes));
  const metadata = { evaluatedCommit, datasetSha256, toleranceMm, minSlotConfidence,
    node: process.version, runAt: new Date().toISOString() };
  const groups = { all: rows, zh: rows.filter(row => row.input.lang === 'zh'), en: rows.filter(row => row.input.lang === 'en') };
  const summary = Object.fromEntries(Object.entries(groups).map(([lang, group]) => [lang, summarize(group)]));
  const secondary = rawSizes ? { hybridRawSizes: Object.fromEntries(
    Object.entries(groups).map(([lang, group]) => [lang, summarizeRawSizes(group)]),
  ) } : undefined;
  writeFileSync(resultJson, JSON.stringify({ metadata, summary, secondary, rows }, null, 2) + '\n', { flag: 'wx' });
  writeFileSync(resultMd, markdown(metadata, summary, run, secondary), { flag: 'wx' });
  console.log('Recorded ' + rows.length + ' blind requests in benchmark/results/' + outputName + '.{json,md}.');
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();

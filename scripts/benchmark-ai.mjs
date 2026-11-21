import { readFileSync, mkdirSync, statSync, writeFileSync } from 'node:fs';
import { arch, cpus, platform, release } from 'node:os';
import { performance } from 'node:perf_hooks';
import { generateAIModel, predictSketch, predictText, understandText } from '../src/ai.js';
import { binarySTL, generateModel, profileFromSketch, readRuleIntent } from '../src/generator.js';

const fixture = new URL('../benchmark/artifacts/ai-heldout.json', import.meta.url);
const dir = new URL('../benchmark/results/', import.meta.url);
const holdout = JSON.parse(readFileSync(fixture, 'utf8'));
const authoredPath = new URL('../benchmark/cases/author-written.tsv', import.meta.url);
const authoredInputs = readFileSync(authoredPath, 'utf8').trimEnd().split('\n').slice(1).map((line, index) => {
  const [language, kind, dimensions, description] = line.split('\t');
  if (!description) throw new Error('Expected four labelled fields in row ' + (index + 2));
  return { id: index + 1, language, kind, dimensions: JSON.parse(dimensions), description };
});
const slots = ['length', 'diameter', 'bore', 'circumference', 'wall'];
const mean = xs => xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : null;
const round = (n, digits = 3) => n === null ? '—' : n.toFixed(digits);
const timed = fn => {
  const start = performance.now(), value = fn();
  return { value, ms: performance.now() - start };
};
function percentiles(values) {
  const sorted = values.toSorted((a, b) => a - b);
  return { medianMs: sorted[Math.ceil(0.5 * sorted.length) - 1], p95Ms: sorted[Math.ceil(0.95 * sorted.length) - 1] };
}
function selectedSlots(prediction) {
  const best = {};
  for (const slot of prediction.slots) {
    if (slot.value === 'ignore' || slot.confidence < 0.62) continue;
    if (!best[slot.value] || slot.confidence > best[slot.value].confidence) best[slot.value] = slot;
  }
  return Object.fromEntries(Object.entries(best).map(([key, x]) => [key, x.mm]));
}
function compare(expected, actual) {
  let tp = 0, fp = 0, fn = 0;
  const errorsMm = [];
  for (const key of slots) {
    const e = expected[key], a = actual[key];
    if (e !== undefined && a !== undefined) errorsMm.push(Math.abs(e - a));
    if (e !== undefined && a !== undefined && Math.abs(e - a) < 1e-8) tp++;
    else {
      if (a !== undefined) fp++;
      if (e !== undefined) fn++;
    }
  }
  return { tp, fp, fn, errorsMm };
}
function summarize(pairs) {
  const [tp, fp, fn] = ['tp', 'fp', 'fn'].map(k => pairs.reduce((n, x) => n + x[k], 0));
  const errors = pairs.flatMap(x => x.errorsMm);
  return { tp, fp, fn, f1: 2 * tp / (2 * tp + fp + fn), maeMm: mean(errors), maeCount: errors.length };
}

function calibration(rows) {
  const bins = Array.from({ length: 10 }, () => []);
  for (const row of rows) bins[Math.min(9, Math.floor(row.ai.kind.confidence * 10))].push(row);
  const ece = bins.reduce((sum, bin) => {
    if (!bin.length) return sum;
    const accuracy = mean(bin.map(row => Number(row.ai.kind.value === row.input.kind)));
    return sum + Math.abs(accuracy - mean(bin.map(row => row.ai.kind.confidence))) * bin.length / rows.length;
  }, 0);
  return { ece, count: rows.length };
}

for (let i = 0; i < 25; i++) {
  predictText(holdout.text[i].description);
  predictSketch(holdout.sketch[i].strokes);
}
generateAIModel(holdout.text[0].description, holdout.sketch[0].strokes);
generateModel(holdout.text[0].description, holdout.sketch[0].strokes);

const text = holdout.text.map(input => {
  const ai = timed(() => predictText(input.description));
  const raw = timed(() => readRuleIntent(input.description));
  const ruleSlots = Object.fromEntries(slots.flatMap(key => raw.value[key] === undefined ? [] : [[key, raw.value[key]]]));
  return { input, ai: { ...ai.value, ms: ai.ms, selectedSlots: selectedSlots(ai.value) },
    rule: { kind: raw.value.kind ?? 'unknown', side: raw.value.side ?? 'neutral', support: Boolean(raw.value.support),
      finger: Boolean(raw.value.finger), slots: ruleSlots, ms: raw.ms } };
});
const dimensionsOf = raw => Object.fromEntries(slots.flatMap(key => raw[key] === undefined ? [] : [[key, raw[key]]]));
const authored = authoredInputs.map(input => {
  const model = predictText(input.description);
  const rule = readRuleIntent(input.description);
  const hybrid = understandText(input.description).raw;
  return { input, ai: { kind: model.intent.kind, dimensions: selectedSlots(model) },
    rule: { kind: rule.kind ?? 'unknown', dimensions: dimensionsOf(rule) },
    hybrid: { kind: hybrid.kind ?? 'pen', dimensions: dimensionsOf(hybrid) } };
});
function authoredSummary(rows) {
  return Object.fromEntries(['ai', 'rule', 'hybrid'].map(key => [key, {
    kind: rows.filter(row => (key === 'ai' ? row.ai.kind.value : row[key].kind) === row.input.kind).length,
    count: rows.length, dimensions: summarize(rows.map(row => compare(row.input.dimensions, row[key].dimensions))),
  }]));
}
const sketch = holdout.sketch.map(({ strokes, target }) => {
  const ai = timed(() => predictSketch(strokes)), rule = timed(() => profileFromSketch(strokes));
  const error = profile => profile && mean(profile.map((value, i) => Math.abs(value - target[i])));
  return { strokes, target, ai: { ...ai.value, ms: ai.ms, mae: error(ai.value?.profile) },
    rule: { profile: rule.value, ms: rule.ms, mae: error(rule.value) } };
});
const app = text.filter(x => x.input.kind !== 'unknown').map(({ input }, i) => {
  const index = i % holdout.sketch.length, strokes = holdout.sketch[index].strokes;
  const ai = timed(() => generateAIModel(input.description, strokes));
  const rule = timed(() => generateModel(input.description, strokes));
  const record = ({ value, ms }) => {
    const file = binarySTL(value);
    const triangles = new DataView(file).getUint32(80, true);
    return { ms, stlValid: triangles === value.faces.length && file.byteLength === 84 + 50 * triangles,
      params: value.params, provenance: value.provenance, manifold: value.checks.manifold, printable: value.checks.printable };
  };
  return { description: input.description, kind: input.kind, sketchIndex: index, ai: record(ai), rule: record(rule) };
});
function textSummary(rows) {
  return {
    count: rows.length,
    ...Object.fromEntries(['ai', 'rule'].map(key => [key, {
      intent: Object.fromEntries(['kind', 'side', 'support', 'finger'].map(field => [field,
        rows.filter(r => (key === 'ai' ? r.ai.intent[field].value : r.rule[field]) === r.input[field]).length])),
      dimensions: summarize(rows.map(r => compare(r.input.dimensions, key === 'ai' ? r.ai.selectedSlots : r.rule.slots))),
      ...percentiles(rows.map(r => r[key].ms)),
    }]))
  };
}
function sketchSummary(key) {
  const valid = sketch.filter(r => r[key].mae !== null);
  return { count: valid.length, mae: mean(valid.map(r => r[key].mae)), ...percentiles(sketch.map(r => r[key].ms)) };
}
function generationSummary(key) {
  const records = app.map(r => r[key]);
  return { count: records.length, validStl: records.filter(x => x.stlValid).length, manifold: records.filter(x => x.manifold).length,
    printable: records.filter(x => x.printable).length, correctKind: app.filter(r => r[key].params.kind === r.kind).length,
    anyTextAI: records.filter(x => Object.values(x.provenance ?? {}).some(v => v.source === 'text')).length,
    sketchAI: records.filter(x => x.provenance?.profile.source === 'sketch').length,
    ...percentiles(records.map(x => x.ms)) };
}

const metadata = {
  node: process.version, system: [platform(), release(), arch()].join(' '), cpu: cpus()[0].model,
  bytes: statSync(new URL('../src/trained-model.js', import.meta.url)).size,
  coverage: '240 synthetic held-out descriptions (120 zh, 120 en); 96 independently seeded and noisier sketch fixtures; 192 supported-category paired cases',
};
const summary = {
  text: { all: textSummary(text), zh: textSummary(text.filter(x => x.input.language === 'zh')),
    en: textSummary(text.filter(x => x.input.language === 'en')) },
  sketch: { ai: sketchSummary('ai'), rule: sketchSummary('rule') },
  generation: { ai: generationSummary('ai'), rule: generationSummary('rule') },
  authored: { all: authoredSummary(authored), zh: authoredSummary(authored.filter(x => x.input.language === 'zh')),
    en: authoredSummary(authored.filter(x => x.input.language === 'en')) },
  categoryCalibration: {
    synthetic: calibration(text.map(row => ({ input: row.input, ai: { kind: row.ai.intent.kind } }))),
    authored: calibration(authored),
  },
};
mkdirSync(dir, { recursive: true });
writeFileSync(new URL('ai.json', dir), JSON.stringify({ metadata, summary, text, authored, sketch, generation: app }) + '\n');
const table = Object.entries(summary.text).flatMap(([lang, x]) => ['ai', 'rule'].map(key => {
  const m = x[key], d = m.dimensions;
  return '| ' + [lang, key, m.intent.kind + '/' + x.count, round(d.f1), round(d.maeMm), d.maeCount,
    round(m.medianMs), round(m.p95Ms)].join(' | ') + ' |';
}));
const sk = Object.entries(summary.sketch).map(([key, m]) =>
  '| ' + [key, m.count + '/' + sketch.length, round(m.mae), round(m.medianMs), round(m.p95Ms)].join(' | ') + ' |');
const authoredTable = Object.entries(summary.authored).flatMap(([language, models]) =>
  Object.entries(models).map(([key, m]) =>
    '| ' + [language, key, m.kind + '/' + m.count, round(m.dimensions.f1), round(m.dimensions.maeMm),
      m.dimensions.maeCount].join(' | ') + ' |'));
const e2e = Object.entries(summary.generation).map(([key, m]) =>
  '| ' + [key, m.validStl + '/' + m.count, m.manifold, m.printable, m.correctKind, m.anyTextAI, m.sketchAI,
    round(m.medianMs), round(m.p95Ms)].join(' | ') + ' |');
const report = [
  '# 本地模型基准：独立留出的合成用例', '',
  '不含真人或真实临床数据，也未进行实体打印。训练与测试使用不同的种子，文字留出不同措辞、仍共享语义和部分字词；草图测试额外加入抖动和随机缺线。不能据此推断真实用户准确率。', '',
  '环境：' + metadata.system + '；' + metadata.cpu + '；Node ' + metadata.node + '；训练权重模块 ' + metadata.bytes + ' 字节。'
    + ' 每项预热后逐例计时、汇总中位数和 P95；生成计时含几何筛查，不含渲染、STL 写入或切片。', '',
  '## 文字识别：模型本身 vs. 规则', '',
  '类别为模型最大分数（含未知类）；尺寸 F1 按正确槽和数值的配对、微平均，模型槽使用 0.62 阈值。'
    + ' MAE 仅对双方都有该槽的预测／标签配对计算，不填补缺失，不用于替代 F1。', '',
  '| 语言 | 路线 | 类别命中 | 尺寸槽 F1 | 尺寸 MAE (mm) | MAE 配对数 | 中位 (ms) | P95 (ms) |',
  '|---|---|---:|---:|---:|---:|---:|---:|', ...table, '',
  '## 独立人工编写请求：文字模型 vs. 规则 vs. 实际混合管线', '',
  '72 条请求由作者逐条编写并标注，不参与训练或温度校准，也不是用户采集或临床数据。'
    + ' 每种语言每类各 12 条，包含口语、错别字、缺项和混合单位。混合路线是产品实际选类，尺寸只统计推断或规则提取，不把模板默认计作提取成功。'
    + ' [请求与标签](../cases/author-written.tsv)。', '',
  '| 语言 | 路线 | 类别命中 | 尺寸槽 F1 | 尺寸 MAE (mm) | MAE 配对数 |',
  '|---|---|---:|---:|---:|---:|', ...authoredTable, '',
  '类别模型的置信度采用独立合成校准集的温度缩放。按 10 个等宽区间计算 ECE（越小越好）：'
    + ' 合成留出 ' + round(summary.categoryCalibration.synthetic.ece) + '，人工请求 ' + round(summary.categoryCalibration.authored.ece) + '。不代表真实使用概率。', '',
  '## 草图轮廓：模型回归 vs. 扫描线插值', '',
  '误差是 13 个归一化轮廓宽度相对生成器噪声前目标的平均绝对误差。', '',
  '| 路线 | 有效样例 | 轮廓 MAE | 中位 (ms) | P95 (ms) |', '|---|---:|---:|---:|---:|', ...sk, '',
  '## 端到端：模型＋回退 vs. 纯规则', '',
  '192 个支持类别的文字样本与留出草图配对。STL 成功仅指预期三角数与字节数相符；几何筛查不等同于切片。'
    + ' 另有固定 36 例的 [AI 切片／有限元实测](ai-print/summary.md) 及对应的 [纯规则基线](summary.md)。', '',
  '| 路线 | STL 序列化 | 流形数 | 筛查通过数 | 类别正确数 | 有文字模型参与 | 有草图模型参与 | 中位 (ms) | P95 (ms) |',
  '|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|', ...e2e, '',
  '逐例输入、模型输出、源标记和原始用时见 [ai.json](ai.json)。', '',
];
writeFileSync(new URL('ai.md', dir), report.join('\n'));
console.log([...table, ...authoredTable, ...sk, ...e2e, 'Model: ' + metadata.bytes + ' bytes'].join('\n'));
if (summary.generation.ai.validStl !== app.length || summary.generation.ai.anyTextAI === 0
    || summary.generation.ai.sketchAI === 0) process.exitCode = 1;

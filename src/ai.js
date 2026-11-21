import { buildModel, profileFromSketch, readRuleIntent, resolveIntent, sampleSketch } from './generator.js';
import model from './trained-model.js';

const number = /([0-9]+(?:\.[0-9]+)?)[ \t]*(毫米|厘米|mm|cm)?/g;
const separator = /[,，;；、。!?！？\n]/;
const dimensionFields = ['length', 'diameter', 'bore', 'circumference', 'wall'];
const intentFields = ['kind', 'side', 'support', 'finger'];
const minTextConfidence = 0.65;
const minSlotConfidence = 0.62;

function features(...parts) {
  const vector = new Float64Array(model.featureWidth);
  let count = 0;
  parts.forEach((part, channel) => {
    const chars = Array.from('^' + part.replace(/\s+/gu, ' ').trim() + '$', ch => ch.codePointAt(0));
    for (let n = 1; n <= 3; n++) {
      for (let i = 0; i <= chars.length - n; i++) {
        let hash = 2166136261 ^ channel;
        for (let j = i; j < i + n; j++) hash = Math.imul(hash ^ chars[j], 16777619);
        vector[(hash >>> 0) % vector.length]++;
        count++;
      }
    }
  });
  if (count) for (let i = 0; i < vector.length; i++) vector[i] = Math.sqrt(vector[i] / count);
  return vector;
}

function dense(layer, input) {
  return layer.weights.map((row, i) => row.reduce((a, w, j) => a + w * input[j], layer.bias[i]));
}

function classify(head, input) {
  const logits = dense(model.heads[head], input);
  const max = Math.max(...logits), index = logits.indexOf(max);
  return { value: model.labels[head][index], confidence: 1 / logits.reduce((a, z) => a + Math.exp(z - max), 0) };
}

export function predictText(description) {
  const text = description.normalize('NFKC').toLowerCase();
  const vector = features(text.replace(number, '#'));
  const intent = Object.fromEntries(intentFields.map(key => [key, classify(key, vector)]));
  const matches = Array.from(text.matchAll(number));
  const slots = matches.map((match, i) => {
    const before = i ? matches[i - 1].index + matches[i - 1][0].length : 0;
    const end = match.index + match[0].length;
    const left = text.slice(before, match.index).split(separator).at(-1).slice(-25);
    const right = text.slice(end, matches[i + 1]?.index).split(separator)[0].slice(0, 25);
    const prediction = classify('slot', features(left, right));
    return { ...prediction, mm: Number(match[1]) * (['厘米', 'cm'].includes(match[2]) ? 10 : 1) };
  });
  return { intent, slots };
}

export function predictSketch(strokes) {
  const widths = sampleSketch(strokes);
  if (!widths) return null;
  const input = [...widths.map(x => x ?? 0), ...widths.map(x => Number(x !== null))];
  const hidden = dense(model.sketch.hidden, input).map(Math.tanh);
  const profile = dense(model.sketch.output, hidden).map(x => Math.max(0.66, Math.min(1, x)));
  return { profile, coverage: input.slice(13).reduce((a, x) => a + x, 0) / 13 };
}

export function generateAIModel(description, strokes = [], selected = 'auto') {
  const raw = readRuleIntent(description);
  const provenance = Object.fromEntries([...intentFields, ...dimensionFields]
    .map(key => [key, { source: raw[key] === undefined ? 'default' : 'rule' }]));
  let text, sketch;
  try {
    text = predictText(description);
    sketch = predictSketch(strokes);
  } catch {
    // Keep the deterministic generator usable if model inference fails.
  }
  if (text && description.trim()) {
    for (const [key, { value, confidence }] of Object.entries(text.intent)) {
      if (confidence >= minTextConfidence && value !== 'unknown' && (key !== 'kind' || selected === 'auto')
        && (raw[key] === undefined || raw[key] === value)) {
        raw[key] = value;
        provenance[key] = { source: 'text', confidence };
      }
    }
    const best = {};
    const kind = selected === 'auto' ? (raw.kind ?? 'pen') : selected;
    const allowed = kind === 'brace' ? ['length', 'circumference', 'wall'] : ['length', 'diameter', 'bore'];
    for (const slot of text.slots) {
      if (allowed.includes(slot.value) && slot.confidence >= minSlotConfidence
        && slot.confidence > (best[slot.value]?.confidence ?? 0)) best[slot.value] = slot;
    }
    for (const [key, { mm, confidence }] of Object.entries(best)) {
      if (raw[key] !== undefined && Math.abs(raw[key] - mm) > 1e-8) continue;
      raw[key] = mm;
      provenance[key] = { source: 'text', confidence };
    }
  }
  if (selected !== 'auto') provenance.kind = { source: 'manual' };
  const params = resolveIntent(raw, selected);
  const profile = sketch?.profile ?? profileFromSketch(strokes);
  provenance.profile = sketch ? { source: 'sketch', coverage: sketch.coverage } : { source: profile ? 'rule' : 'default' };
  for (const key of [...intentFields, ...dimensionFields]) {
    if (!(key in params) || (key === 'finger' && params.kind !== 'brace') || (key === 'support' && params.kind === 'brace')) {
      delete provenance[key];
    }
  }
  return { ...buildModel(params, profile), provenance };
}

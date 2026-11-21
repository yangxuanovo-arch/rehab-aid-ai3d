import { readFileSync } from 'node:fs';
import { predictText, understandText } from '../src/ai.js';
import { readRuleIntent } from '../src/generator.js';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const tsv = path => read(path).trimEnd().split('\n').slice(1).map(line => {
  const [language, kind, fields, description] = line.split('\t');
  return { language, kind, fields: JSON.parse(fields), description };
});
const fields = ['kind', 'side', 'length', 'circumference', 'wall', 'diameter', 'bore'];
const fixtures = {
  dev: tsv('benchmark/cases/dev/measurement-merge.tsv'),
  authored: tsv('benchmark/cases/author-written.tsv'),
  synthetic: JSON.parse(read('benchmark/artifacts/ai-heldout.json')).text.map(input =>
    ({ ...input, fields: { side: input.side, ...input.dimensions } })),
};

function predict(input) {
  const text = predictText(input.description);
  const slots = {};
  for (const slot of text.slots) {
    if (slot.value !== 'ignore' && slot.confidence >= 0.62
      && (!slots[slot.value] || slot.confidence > slots[slot.value].confidence)) slots[slot.value] = slot;
  }
  const rules = readRuleIntent(input.description);
  const hybrid = understandText(input.description).raw;
  return {
    input,
    model: { kind: text.intent.kind.value, side: text.intent.side.value,
      ...Object.fromEntries(Object.entries(slots).map(([key, slot]) => [key, slot.mm])) },
    rules: { ...rules, kind: rules.kind ?? 'unknown', side: rules.side ?? 'neutral' },
    hybrid: { ...hybrid, kind: hybrid.kind ?? 'pen', side: hybrid.side ?? 'neutral' },
  };
}

function score(rows, route, field) {
  const expected = input => field === 'kind' ? input.kind : input.fields[field];
  const labeled = rows.filter(row => expected(row.input) != null);
  const hits = labeled.filter(row => typeof expected(row.input) === 'number'
    ? Number.isFinite(row[route][field]) && Math.abs(expected(row.input) - row[route][field]) <= 0.5
    : row[route][field] === expected(row.input)).length;
  return [hits, labeled.length];
}

const results = Object.fromEntries(Object.entries(fixtures).map(([set, inputs]) => {
  const rows = inputs.map(predict);
  const summary = Object.fromEntries(['all', 'zh', 'en'].map(language => {
    const selected = rows.filter(row => language === 'all' || row.input.language === language);
    return [language, Object.fromEntries(['model', 'rules', 'hybrid'].map(route => {
      const scores = Object.fromEntries(fields.map(field => [field, score(selected, route, field)]));
      scores.sizes = fields.slice(2).reduce(([h, n], field) => [h + scores[field][0], n + scores[field][1]], [0, 0]);
      return [route, scores];
    }))];
  }));
  return [set, { summary, rows: set === 'dev' ? rows : undefined }];
}));
console.log(JSON.stringify({ toleranceMm: 0.5, results }, null, 2));

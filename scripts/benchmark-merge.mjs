import { readFileSync } from 'node:fs';
import { generateAIModel, predictText, understandText } from '../src/ai.js';
import { binarySTL, readRuleIntent } from '../src/generator.js';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const tsv = path => read(path).trimEnd().split('\n').slice(1).map(line => {
  const [language, kind, fields, description] = line.split('\t');
  return { language, kind, fields: JSON.parse(fields), description };
});
const fields = ['kind', 'side', 'length', 'circumference', 'wall', 'diameter', 'bore'];
const fixtures = {
  dev3: tsv('benchmark/cases/dev3/english-diameter.tsv'),
  dev2: tsv('benchmark/cases/dev2/measurement-extraction.tsv'),
  dev: tsv('benchmark/cases/dev/measurement-merge.tsv'),
  authored: tsv('benchmark/cases/author-written.tsv'),
  synthetic: JSON.parse(read('benchmark/artifacts/ai-heldout.json')).text.map(input =>
    ({ ...input, fields: { side: input.side, ...input.dimensions } })),
};
const geometry = process.argv.includes('--geometry');
if (geometry) {
  const categories = { pen_grip: 'pen', utensil_handle: 'utensil', brace: 'brace' };
  for (const [number, name] of [[1, 'blind/rehab_aid_blind_test_set.json'], [2, 'blind2/rehab_aid_blind_test_set_2.json'],
    [3, 'blind3/rehab_blind_test_set_3.json'], [4, 'blind4/rehab_blind_test_set_4.json']]) {
    fixtures['consumed' + number] = JSON.parse(read('benchmark/cases/' + name)).map(row => ({
      language: row.lang, description: row.text, kind: categories[row.category],
      fields: { side: row.side, length: row.length_mm, circumference: row.circumference_mm,
        wall: row.wall_thickness_mm, diameter: row.diameter_mm },
    }));
  }
}

function predict(input) {
  const text = predictText(input.description);
  const slots = {};
  for (const slot of text.slots) {
    if (slot.value !== 'ignore' && slot.confidence >= 0.62
      && (!slots[slot.value] || slot.confidence > slots[slot.value].confidence)) slots[slot.value] = slot;
  }
  const rules = readRuleIntent(input.description);
  const generated = geometry ? generateAIModel(input.description) : null;
  const hybrid = generated?.extracted ?? understandText(input.description).raw;
  const stl = generated && binarySTL(generated);
  return {
    input,
    model: { kind: text.intent.kind.value, side: text.intent.side.value,
      ...Object.fromEntries(Object.entries(slots).map(([key, slot]) => [key, slot.mm])) },
    rules: { ...rules, kind: rules.kind ?? 'unknown', side: rules.side ?? 'neutral' },
    hybrid: { ...hybrid, kind: hybrid.kind ?? 'pen', side: hybrid.side ?? 'neutral' },
    ...(geometry ? { final: generated.params, screened: generated.checks.printable,
      stl: stl.byteLength === 84 + 50 * generated.faces.length
        && new DataView(stl).getUint32(80, true) === generated.faces.length } : {}),
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
    return [language, Object.fromEntries(['model', 'rules', 'hybrid', ...(geometry ? ['final'] : [])].map(route => {
      const scores = Object.fromEntries(fields.map(field => [field, score(selected, route, field)]));
      scores.sizes = fields.slice(2).reduce(([h, n], field) => [h + scores[field][0], n + scores[field][1]], [0, 0]);
      return [route, scores];
    }))];
  }));
  return [set, { summary, ...(geometry ? { stl: [rows.filter(row => row.stl).length, rows.length],
    screened: [rows.filter(row => row.screened).length, rows.length] } : {}),
  rows: !geometry && ['dev', 'dev2', 'dev3'].includes(set) ? rows : undefined }];
}));
console.log(JSON.stringify({ toleranceMm: 0.5, results }, null, 2));

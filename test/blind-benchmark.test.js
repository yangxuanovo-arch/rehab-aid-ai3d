import assert from 'node:assert/strict';
import { test } from 'node:test';
import { scoreFields, summarize, summarizeRawSizes } from '../scripts/benchmark-blind.mjs';

test('blind scoring includes the tolerance boundary, ignores unlabeled fields and counts missing predictions as wrong', () => {
  assert.deepEqual(
    scoreFields({ kind: 'brace', side: 'right', length: 70, wall: 3, circumference: null, diameter: null },
      { kind: 'brace', length: 69.5, wall: 3.51, circumference: 180 }),
    { kind: true, side: false, length: true, wall: false },
  );
});

test('blind summary keeps the labeled-field and generation denominators separate', () => {
  const scores = { model: { kind: true }, rules: { kind: true }, hybrid: { kind: true } };
  const generation = { rules: { generated: true }, hybrid: { generated: true, endToEnd: true } };
  const result = summarize([{ scores, generation }, {
    scores: { ...scores, model: { kind: false, length: true }, rules: { kind: true, length: false } }, generation,
  }]);
  assert.deepEqual(result.extraction.model.kind, { correct: 1, total: 2 });
  assert.deepEqual(result.extraction.model.length, { correct: 1, total: 1 });
  assert.deepEqual(result.extraction.model.side, { correct: 0, total: 0 });
  assert.deepEqual(result.extraction.model.joint, { correct: 1, total: 2 });
  assert.deepEqual(result.extraction.rules.sizes, { correct: 0, total: 1 });
  assert.deepEqual(result.generation.hybrid.endToEnd, { correct: 2, total: 2 });
});

test('secondary blind scores use only raw stated sizes, never modelled defaults or clamps', () => {
  const result = summarizeRawSizes([{
    expected: { kind: 'pen', length: 17, diameter: 28 },
    generation: { hybrid: { extracted: { length: 17.5 }, params: { kind: 'pen', length: 22, diameter: 28 } } },
  }, {
    expected: { wall: 3, circumference: null },
    generation: { hybrid: {} },
  }]);
  assert.deepEqual(result.length, { correct: 1, total: 1 });
  assert.deepEqual(result.diameter, { correct: 0, total: 1 });
  assert.deepEqual(result.wall, { correct: 0, total: 1 });
  assert.deepEqual(result.circumference, { correct: 0, total: 0 });
  assert.deepEqual(result.sizes, { correct: 1, total: 3 });
});

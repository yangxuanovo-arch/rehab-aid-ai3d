import { test } from 'node:test';
import assert from 'node:assert/strict';
import { generateAIModel, predictSketch, predictText } from '../src/ai.js';
import { binarySTL, readRuleIntent } from '../src/generator.js';
import { outlineFromWidths, presets } from '../src/samples.js';

test('learned slots and category reach geometry even when rules have no corresponding match', () => {
  const description = '我想为自己做一个前臂腕托，手腕周长为18厘米，壳壁厚度4毫米';
  assert.equal(readRuleIntent(description).kind, undefined);
  assert.equal(readRuleIntent(description).wall, undefined);
  const prediction = predictText(description);
  assert.equal(prediction.intent.kind.value, 'brace');
  const result = generateAIModel(description);
  assert.equal(result.params.kind, 'brace');
  assert.equal(result.params.circumference, 180);
  assert.equal(result.params.wall, 4);
  assert.equal(result.provenance.kind.source, 'text');
  assert.equal(result.provenance.wall.source, 'text');
  assert.ok(result.provenance.wall.confidence > 0.62);
  assert.equal(result.checks.manifold, true);
});

test('learned sketch profile controls exported geometry; empty input has explicit defaults', () => {
  const traced = outlineFromWidths([0.65, 0.75, 1, 0.84, 0.7]);
  const alternate = outlineFromWidths([0.95, 1, 0.7, 0.8, 0.72]);
  const profile = predictSketch(traced);
  assert.equal(profile.coverage, 1);
  assert.equal(profile.profile.length, 13);
  assert.notDeepEqual(profile.profile, predictSketch(alternate).profile);
  const model = generateAIModel(presets[0].description, traced);
  assert.deepEqual(model.profile, profile.profile);
  assert.equal(model.provenance.profile.source, 'sketch');
  assert.equal(model.params.support, true);
  assert.equal(new DataView(binarySTL(model)).getUint32(80, true), model.faces.length);
  const fallback = generateAIModel('', [], 'utensil');
  assert.equal(fallback.provenance.kind.source, 'manual');
  assert.equal(fallback.provenance.length.source, 'default');
  assert.equal(fallback.provenance.profile.source, 'default');
});

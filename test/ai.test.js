import { test } from 'node:test';
import assert from 'node:assert/strict';
import { generateAIModel, predictSketch, predictText } from '../src/ai.js';
import { binarySTL, readRuleIntent, updateModelParameters } from '../src/generator.js';
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

test('edited parameters rebuild geometry and validation without rerunning inference', () => {
  const strokes = outlineFromWidths([0.65, 0.75, 1, 0.84, 0.7]);
  const original = generateAIModel(presets[0].description, strokes);
  const edited = updateModelParameters(original, { length: 75, diameter: 16, bore: 20 });
  assert.equal(edited.params.length, 75);
  assert.equal(edited.params.bore, 11);
  assert.match(edited.params.warnings.join(' '), /孔径/);
  assert.equal(edited.checks.size[2], 75);
  assert.equal(edited.provenance.bore.source, 'manual');
  assert.equal(edited.provenance.kind, original.provenance.kind);
  assert.equal(edited.profile, original.profile);
  assert.notDeepEqual(binarySTL(edited), binarySTL(original));

  const sleeve = generateAIModel('', [], 'pen');
  const supported = updateModelParameters(sleeve, { support: true, diameter: sleeve.params.diameter });
  assert.equal(supported.params.diameter, sleeve.params.diameter + 4);
  assert.equal(supported.provenance.diameter.source, 'default');
});

test('clamp warnings survive rechecks until the corresponding parameter is edited', () => {
  const result = generateAIModel('腕托，前臂周长999厘米，长度999厘米，壁厚0.01毫米');
  assert.equal(result.params.kind, 'brace');
  assert.deepEqual([result.params.length, result.params.circumference, result.params.wall], [140, 320, 2]);
  const clampWarnings = result.params.warnings.filter(warning => warning.includes('超出模板范围'));
  assert.equal(clampWarnings.length, 3);
  const reapplied = updateModelParameters(result, { length: 140, circumference: 320, wall: 2 });
  assert.deepEqual(reapplied.params.warnings, result.params.warnings);
  const edited = updateModelParameters(reapplied, { wall: 4, side: 'left' });
  assert.deepEqual(edited.params.warnings, result.params.warnings.filter(warning => !warning.startsWith('壁厚')));
  const reclamped = updateModelParameters(edited, { wall: 100 });
  assert.ok(reclamped.params.warnings.some(warning => warning.startsWith('壁厚') && warning.includes('8 mm')));
  assert.deepEqual(updateModelParameters(reclamped, { wall: 8 }).params.warnings, reclamped.params.warnings);
});

test('fallback intent stays at template defaults without model confidence', () => {
  const result = generateAIModel('asdf qwerty zzz 123');
  assert.equal(result.params.kind, 'pen');
  assert.equal(result.params.side, 'neutral');
  assert.equal(result.params.support, false);
  for (const key of ['kind', 'side', 'support', 'length']) {
    assert.deepEqual(result.provenance[key], { source: 'default' });
  }
  const pen = generateAIModel('pen grip');
  assert.deepEqual(pen.provenance.side, { source: 'default' });
  assert.deepEqual(pen.provenance.support, { source: 'default' });
  assert.notEqual(generateAIModel('右手握力弱，握笔器').provenance.support.source, 'default');
});

test('signed negative and zero dimensions are clamped to the lower limits', () => {
  const description = 'pen length -999mm, diameter 999cm, bore 0.01mm';
  assert.equal(readRuleIntent(description).length, -999);
  assert.equal(predictText(description).slots[0].mm, -999);
  const { params } = generateAIModel(description);
  assert.deepEqual([params.length, params.diameter, params.bore], [22, 55, 5]);
  assert.equal(params.warnings.length, 3);
  assert.match(params.warnings.join(' '), /长度.*22 mm/);

  const zeroAndUnicodeMinus = generateAIModel('握笔器，−.2厘米的长度，外径0mm');
  assert.equal(readRuleIntent('握笔器，−.2厘米的长度').length, -2);
  assert.deepEqual([zeroAndUnicodeMinus.params.length, zeroAndUnicodeMinus.params.diameter], [22, 16]);
  assert.equal(zeroAndUnicodeMinus.params.warnings.length, 2);
});

test('Chinese category inference recognizes an object described after the opening clause', () => {
  const requests = [
    ['pen', '外形我还没决定，能做个给蜡笔用的握套吗？大概五公分长。'],
    ['utensil', '麻烦先画一下，喝汤那把匙想装一个不滑的粗手柄。'],
    ['brace', '先做个开口的样子吧；我需要托住前臂，不让腕关节往下弯。'],
  ];
  for (const [kind, description] of requests) {
    assert.equal(predictText(description).intent.kind.value, kind, description);
  }
});

test('written Chinese metric dimensions are shared by rule and learned text paths', () => {
  const description = '护腕，周长十八公分，长度六点五厘米，壁厚四毫米';
  const parsed = readRuleIntent(description);
  assert.deepEqual([parsed.circumference, parsed.length, parsed.wall], [180, 65, 4]);
  assert.deepEqual(predictText(description).slots.map(slot => slot.mm), [180, 65, 4]);
  assert.equal(readRuleIntent('握笔器，长度一寸半').length, undefined);
  assert.equal(readRuleIntent('护腕，周长一百零五毫米').circumference, 105);
  assert.equal(readRuleIntent('护腕，周长一百二毫米').circumference, undefined);
  assert.equal(generateAIModel('握笔器，长度负两公分').params.length, 22);
});

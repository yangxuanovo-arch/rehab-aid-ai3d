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
  assert.deepEqual([result.params.length, result.params.circumference, result.params.wall], [220, 320, 2]);
  const clampWarnings = result.params.warnings.filter(warning => warning.includes('超出模板范围'));
  assert.equal(clampWarnings.length, 3);
  const reapplied = updateModelParameters(result, { length: 220, circumference: 320, wall: 2 });
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

test('English clinical shorthand and target phrases select the requested side', () => {
  assert.equal(readRuleIntent('Wrist splint, L wrist, circumference 160 mm.').side, 'left');
  assert.equal(readRuleIntent('Pen grip: side R; not for the left hand.').side, 'right');
  assert.equal(readRuleIntent('I injured my left wrist last year. Make a brace for my right wrist.').side, 'right');
  assert.equal(readRuleIntent("I'm right-handed, but need a pen grip for my non-dominant hand.").side, 'left');
  assert.equal(readRuleIntent('I already use a brace on my left wrist; I need another for the other hand.').side, 'right');
});

test('ambiguous or incidental English mentions do not orient a brace or claim model provenance', () => {
  for (const description of ['A wrist brace for my dominant hand.', 'Brace for either hand, left or right.',
    'Brace, not for my left wrist.', 'Brace; the image on the left is the right size.']) {
    const model = generateAIModel(description);
    assert.equal(model.params.side, 'neutral', description);
    assert.equal(model.extracted.side, undefined, description);
    assert.deepEqual(model.provenance.side, { source: 'default' }, description);
  }
  const left = generateAIModel('Wrist brace, L wrist');
  const right = generateAIModel('Wrist brace, R wrist');
  assert.deepEqual([left.params.side, right.params.side], ['left', 'right']);
  assert.notDeepEqual(binarySTL(left), binarySTL(right));
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

test('extracted dimensions survive geometry limits, template selection, edits and rechecks', () => {
  const model = generateAIModel('左手握笔器，长度1.7公分，外径20毫米，孔径16毫米，指围58毫米');
  assert.deepEqual(model.extracted,
    { kind: 'pen', side: 'left', length: 17, diameter: 20, bore: 16, circumference: 58 });
  assert.equal(model.params.length, 22);
  assert.equal(model.params.bore, 15);
  assert.equal(model.params.circumference, undefined);
  assert.match(model.params.warnings.join(' '), /长度.*22 mm/);
  assert.equal(updateModelParameters(model, { length: 22 }).extracted.length, 17);
  const edited = updateModelParameters(model, { length: 30 });
  assert.equal(edited.extracted.length, 17);
  assert.equal(edited.params.length, 30);
  assert.equal(edited.provenance.length.source, 'manual');
});

test('a named measurement owns its numeric span and a default does not become an extracted value', () => {
  const description = 'Pen grip length 42 mm diameter';
  assert.equal(readRuleIntent(description).diameter, undefined);
  const model = generateAIModel(description);
  assert.deepEqual(model.extracted, { kind: 'pen', length: 42 });
  assert.equal(model.provenance.length.source, 'rule');
  assert.deepEqual(model.provenance.length.span, [16, 18]);
  assert.equal(model.provenance.diameter.source, 'default');
  assert.equal(model.params.diameter, 28);
});

test('sleeve circumference and wall thickness determine actual sleeve geometry', () => {
  const model = generateAIModel('Spoon handle length 160 mm, circumference 100 mm, wall 2 mm');
  assert.deepEqual([model.params.length, model.params.circumference, model.params.wall], [160, 100, 2]);
  assert.equal(model.params.diameter, 100 / Math.PI);
  assert.equal(model.params.bore, model.params.diameter - 4);
  assert.equal(model.checks.size[2], 160);
  assert.ok(model.checks.minWall >= 1.6);
  assert.ok(model.checks.printable);
  assert.deepEqual(updateModelParameters(model, { length: 160 }).params, model.params);
});

test('incompatible sleeve dimensions preserve the request and warn through rechecks', () => {
  const model = generateAIModel('Pen grip diameter 30 mm, bore 10 mm, wall 3 mm');
  assert.equal(model.extracted.wall, 3);
  assert.equal(model.params.wall, 10);
  assert.match(model.params.warnings.join(' '), /壁厚.*10 mm/);
  assert.deepEqual(updateModelParameters(model, { diameter: 30 }).params, model.params);
  const edited = updateModelParameters(model, { bore: 24 });
  assert.equal(edited.params.wall, 3);
  assert.equal(edited.extracted.wall, 3);
  assert.deepEqual(edited.params.warnings, []);
});

test('brace fitting diameter drives circumference but outside width does not', () => {
  const model = generateAIModel('Finger brace, diameter 20 mm, length 50 mm, wall 2 mm');
  assert.equal(model.params.diameter, 20);
  assert.equal(model.params.circumference, 20 * Math.PI);
  assert.ok(model.checks.printable);
  const edited = updateModelParameters(model, { circumference: 70 });
  assert.equal(edited.params.diameter, 70 / Math.PI);
  assert.equal(edited.extracted.diameter, 20);
  const outer = generateAIModel('Finger brace, outer diameter 20 mm');
  assert.equal(outer.extracted.diameter, 20);
  assert.equal(outer.params.diameter, undefined);
  assert.equal(outer.params.circumference, 60);
});

test('English diameter shorthand and fractional inches distinguish OD from the bore', () => {
  const sleeve = generateAIModel('Spoon handle: O.D. 1¼ inches, I.D. 9 mm; length 95 mm.');
  assert.deepEqual([sleeve.extracted.diameter, sleeve.extracted.bore, sleeve.extracted.length], [31.75, 9, 95]);
  const measured = readRuleIntent('Pen grip to fit a 7 mm pencil; 28 mm outside dia.');
  assert.equal(measured.diameter, 28);
  assert.equal(measured.bore, 7);
  assert.equal(readRuleIntent('Spoon handle, 1.25 inches diameter').diameter, 31.75);
  assert.equal(readRuleIntent('Fork handle: 30 mm thick, 3 mm thick walls').diameter, 30);
  assert.equal(readRuleIntent('Fork handle: 30 mm thick, 3 mm thick walls').wall, 3);
});

test('finger measurements inform brace fit without turning explicit outer size into fit', () => {
  const fitted = generateAIModel('Finger splint. Finger measures 19 mm across; wall 2 mm.');
  assert.equal(fitted.params.diameter, 19);
  assert.equal(fitted.params.circumference, Math.PI * 19);
  assert.equal(fitted.extracted.wall, 2);
  const outside = generateAIModel('Finger splint, O.D. 22 mm; 3 mm wall.');
  assert.equal(outside.extracted.diameter, 22);
  assert.equal(outside.params.diameter, undefined);
});

test('inner and outer measurements retain distinct spans in mixed phrasing', () => {
  const model = generateAIModel('Left spoon handle; internal diameter of 8 mm, outer diameter is 28 mm, 7 cm long.');
  assert.deepEqual(model.extracted, { kind: 'utensil', side: 'left', length: 70, diameter: 28, bore: 8 });
  assert.notDeepEqual(model.provenance.diameter.span, model.provenance.bore.span);
});

test('extraction normalizes inch fractions and closed metric ranges', () => {
  const model = generateAIModel('Right pen grip: 1½ inches long, 24–28 mm wide, with a ¼″ bore.');
  assert.deepEqual(model.extracted, { kind: 'pen', side: 'right', length: 38.1, diameter: 26, bore: 6.35 });
  assert.equal(generateAIModel('护腕，腕围16到18厘米，壳厚约3毫米').extracted.circumference, 170);
  assert.equal(generateAIModel('餐具手柄，外径一又二分之一英寸').extracted.diameter, 38.1);
});

test('object measurements do not replace device dimensions, but wrist girth is a fit measurement', () => {
  const grip = generateAIModel('Right pen grip; the pencil is 175 mm long. Grip length about 42 mm.');
  assert.equal(grip.extracted.length, 42);
  const brace = generateAIModel('Left wrist brace; arm length 240 mm; wrist measures 7 inches around; 4 mm thick shell.');
  assert.equal(brace.extracted.length, undefined);
  assert.equal(brace.extracted.circumference, 177.8);
  assert.equal(brace.extracted.wall, 4);
});

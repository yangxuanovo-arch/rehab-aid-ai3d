import { test } from 'node:test';
import assert from 'node:assert/strict';
import { binarySTL, generateModel, inspectMesh, parseIntent, profileFromSketch } from '../src/generator.js';
import { outlineFromWidths, presets } from '../src/samples.js';

test('Chinese and English descriptions parse units, family, side and brace subtype', () => {
  const wrist = parseIntent('右腕护具，腕围１８厘米、长度6.5cm、壁厚 4 mm');
  assert.equal(wrist.kind, 'brace');
  assert.equal(wrist.side, 'right');
  assert.equal(wrist.circumference, 180);
  assert.equal(wrist.length, 65);
  assert.equal(wrist.wall, 4);
  const preset = parseIntent(presets[2].description);
  assert.equal(preset.side, 'right');
  assert.equal(preset.length, 65);
  assert.equal(preset.circumference, 180);
  assert.equal(parseIntent('右腕护具，前臂周长18cm').length, 65);
  assert.equal(parseIntent('left finger splint').finger, true);
  const pen = parseIntent('pen grip for tremor, inner diameter 9mm, length 4.5cm');
  assert.equal(pen.diameter, 32);
  assert.equal(pen.bore, 9);
  assert.equal(pen.length, 45);
  assert.equal(parseIntent('pencil grip, 3cm diameter').diameter, 30);
  assert.ok(parseIntent('笔 孔径100mm').warnings.length);
});

test('sketch changes axial geometry without changing the tool bore or model length', () => {
  const strokes = outlineFromWidths([0.66, 0.75, 1, 0.9, 0.8]);
  assert.equal(profileFromSketch(strokes).length, 13);
  assert.equal(profileFromSketch([[[0.5, 0.1], [0.5, 0.9]]]), null);
  const sketched = generateModel('pen grip', strokes);
  const neutral = generateModel('pen grip');
  assert.notEqual(sketched.checks.volume, neutral.checks.volume);
  assert.equal(sketched.checks.size[2], neutral.checks.size[2]);
  assert.deepEqual(sketched.vertices[64], neutral.vertices[64]);
});

test('all presets and finger variant are closed, printable and export the same triangles', () => {
  for (const preset of [...presets, { description: 'left finger brace', profile: presets[2].profile }]) {
    const model = generateModel(preset.description, outlineFromWidths(preset.profile));
    assert.equal(model.checks.manifold, true, JSON.stringify(model.checks));
    assert.equal(model.checks.printable, true, JSON.stringify(model.checks));
    assert.ok(model.checks.volume > 0);
    assert.ok(model.checks.structure.stress > 0);
    const stl = binarySTL(model);
    assert.equal(new DataView(stl).getUint32(80, true), model.faces.length);
    assert.equal(stl.byteLength, 84 + 50 * model.faces.length);
  }
});

test('mesh inspection flags missing or reversed triangles and walls below threshold', () => {
  const { vertices, faces, params } = generateModel('pen grip');
  assert.equal(inspectMesh(vertices, faces.slice(1), 3, params, 5).manifold, false);
  assert.equal(inspectMesh(vertices, [faces[0].toReversed(), ...faces.slice(1)], 3, params, 5).manifold, false);
  const thin = generateModel('finger brace wall 2mm', outlineFromWidths([0.65, 1, 1, 1, 0.65]));
  assert.equal(inspectMesh(vertices, faces, 1, params, 5).wallPass, false);
  assert.equal(thin.checks.manifold, true);
});

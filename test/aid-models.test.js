import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildAidModel, customFields } from '../src/aid-models.js';
import { binarySTL } from '../src/generator.js';
import { aids, conditions, guideFor } from '../src/care.js';
import { generateAIModel } from '../src/ai.js';

test('explicit wrist/finger catalogue choices apply before dimension clamping', () => {
  const finger = generateAIModel('周长60mm，长度34mm，壁厚3mm', [], 'brace', { finger: true });
  assert.equal(finger.params.finger, true);
  assert.equal(finger.params.circumference, 60);
  assert.equal(finger.params.length, 34);
  assert.deepEqual(finger.params.warnings, []);
  assert.equal(finger.provenance.finger.source, 'manual');
  const wrist = generateAIModel('finger brace circumference 180mm length 120mm wall 4mm', [], 'brace', { finger: false });
  assert.equal(wrist.params.finger, false);
  assert.equal(wrist.params.circumference, 180);
  assert.equal(wrist.params.length, 120);
});

test('new flat aid meshes remain closed, oriented and printable across editable limits', () => {
  for (const [id, fields] of Object.entries(customFields)) {
    const cases = [{}, ...['min', 'max'].map(limit => Object.fromEntries(Object.entries(fields).map(([key, field]) => [key, field[limit === 'min' ? 2 : 3]]))),
      ...Object.entries(fields).flatMap(([key, field]) => [{ [key]: field[2] }, { [key]: field[3] }])];
    for (const edits of cases) {
      const model = buildAidModel(id, edits), checks = model.checks;
      assert.equal(checks.manifold, true, id + JSON.stringify(edits));
      assert.equal(checks.printable, true, id + JSON.stringify(edits));
      assert.equal(checks.structure, null);
      assert.ok(checks.volume > 0);
      assert.equal(binarySTL(model).byteLength, 84 + model.faces.length * 50);
    }
    const initial = buildAidModel(id), changed = buildAidModel(id, { length: fields.length[3] });
    assert.notEqual(initial.checks.volume, changed.checks.volume);
  }
});

test('each recommended aid has specific measurement, fabrication and use guidance', () => {
  assert.equal(new Set(aids.map(aid => aid.id)).size, 8);
  for (const condition of conditions) for (const id of condition.choices) assert.ok(aids.some(aid => aid.id === id));
  for (const aid of aids) {
    const guide = guideFor(aid, { length: 50 });
    assert.equal(guide.dimensions.length, 50);
    assert.ok(guide.measurement && guide.print.length && guide.use.length);
    assert.match(guide.status, /未实体打印/);
  }
});

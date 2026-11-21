import { mkdirSync, writeFileSync } from 'node:fs';
import { performance } from 'node:perf_hooks';
import { resolve } from 'node:path';
import { binarySTL, generateModel } from '../src/generator.js';
import { outlineFromWidths, presets } from '../src/samples.js';

const output = resolve(process.argv[2] ?? 'benchmark/artifacts');
const generator = process.argv.includes('--ai') ? (await import('../src/ai.js')).generateAIModel : generateModel;
mkdirSync(output, { recursive: true });
const cases = [];
for (const { kind, description, profile } of presets) {
  const examples = kind === 'pen' ? [
    description, 'left pen grip for tremor diameter 32mm bore 9mm length 44mm',
    '铅笔握笔器 外径21毫米 内径8毫米 长度35毫米', 'pencil grip 4cm diameter, length 50 mm',
    '左手握笔器 直径24mm 孔径11mm 长46mm', 'pen grip diameter 16mm bore 11mm length 34mm',
    '右手笔套 外径45mm 内径12mm 长度60mm', 'pen grip diameter 54mm bore 7mm length 23mm',
    '握笔器外径3.1厘米，长度4.9厘米', 'left pen for weak grip, 12mm bore, 4cm length',
    '加长握笔器 外径28mm 长度75mm', 'pencil grip diameter 23mm bore 14mm length 40mm',
  ] : kind === 'utensil' ? [
    description, 'right spoon handle diameter 32mm bore 10mm length 82mm',
    '叉子手柄 直径38mm 孔径15mm 长度110mm', 'utensil for tremor length 12cm bore 14mm',
    '左手餐具手柄 直径27mm 孔径12mm 长度71mm', 'fork handle diameter 19mm bore 14mm length 55mm',
    '右手勺柄直径4.8厘米长度10厘米', 'utensil handle diameter 51mm bore 18mm length 130mm',
    '餐具手柄 孔径9mm 长度120mm', 'left spoon handle for weak grip, diameter 39mm, length 90mm',
    '加长餐具柄 外径30mm 长度140mm', 'fork handle diameter 24mm bore 16mm length 73mm',
  ] : [
    description, 'left wrist brace circumference 16cm length 55mm wall 3mm',
    '右腕护具 周长200mm 长度75mm 壁厚5mm', 'finger brace circumference 5.4cm length 29mm wall 2.5mm',
    '左手护指 指围47mm 长度26mm 壁厚2mm', 'wrist splint circumference 215mm wall 6mm length 100mm',
    '护腕 腕围14厘米 长度50毫米 壁厚3.5毫米', 'right finger splint circumference 7.9cm length 50mm wall 4mm',
    '左腕支具 周长250mm 长度100mm 壁厚5mm', 'wrist orthosis circumference 110mm length 30mm wall 2mm',
    '护指 周长63mm 长度35mm', 'forearm brace circumference 31cm length 130mm wall 7mm',
  ];
  examples.forEach((input, i) => {
    const widths = [profile, [0.85, 1, 0.8, 0.7, 0.85, 0.89], [0.7, 0.8, 0.9, 1, 0.87, 0.78],
      [0.9, 0.95, 1, 1, 0.97, 0.94], [0.88, 0.7, 0.87, 1, 0.91, 0.95], [1, 1, 0.66, 0.66, 1, 1]][i % 6];
    cases.push({ id: kind + '-' + String(i + 1).padStart(2, '0'), kind, description: input,
      strokes: i === 11 ? [] : outlineFromWidths(widths), representative: i === 0 || (kind === 'brace' && i === 3) });
  });
}
for (const preset of presets) for (let n = 0; n < 5; n++) generator(preset.description, outlineFromWidths(preset.profile));
const records = cases.map(input => {
  const { id, description, strokes, representative } = input;
  const durationsMs = [];
  try {
    let model;
    for (let n = 0; n < 3; n++) {
      const started = performance.now();
      model = generator(description, strokes);
      durationsMs.push(performance.now() - started);
    }
    const stl = id + '.stl';
    writeFileSync(resolve(output, stl), new Uint8Array(binarySTL(model)));
    if (representative) {
      writeFileSync(resolve(output, id + '-surface.json'), JSON.stringify({ vertices: model.vertices, faces: model.faces }));
    }
    return { ...input, success: true, durationsMs, medianMs: durationsMs.toSorted((a, b) => a - b)[1],
      params: model.params, usedSketch: Boolean(model.profile), provenance: model.provenance, checks: model.checks,
      vertices: model.vertices.length, triangles: model.faces.length, stl };
  } catch (error) {
    return { ...input, success: false, durationsMs, error: String(error) };
  }
});
writeFileSync(resolve(output, 'generation.json'), JSON.stringify({ node: process.version, records }, null, 2) + '\n');

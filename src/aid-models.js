import { Shape, ShapeUtils, Vector2 } from 'three';
import { inspectMesh } from './generator.js';

export const customFields = {
  key: { length: ['总长', 70, 50, 100], width: ['总宽', 38, 28, 55], thickness: ['厚度', 8, 4, 12], slotWidth: ['钥匙头槽长', 25, 12, 40], slotHeight: ['钥匙头槽宽', 6, 3, 12] },
  zipper: { length: ['总长', 50, 44, 80], width: ['总宽', 28, 26, 40], thickness: ['厚度', 4, 3, 8], gripHole: ['手指孔径', 18, 12, 28], attachmentHole: ['连接孔径', 5, 3, 6] },
  page: { length: ['双翼总长', 84, 65, 110], width: ['中央宽度', 34, 30, 48], thickness: ['厚度', 4, 3, 8], gripHole: ['拇指孔径', 22, 16, 32] },
};

const ellipse = (rx, ry, cx = 0, cy = 0) => Array.from({ length: 96 }, (_, i) => {
  const angle = 2 * Math.PI * i / 96;
  return new Vector2(cx + rx * Math.cos(angle), cy + ry * Math.sin(angle));
});

function roundedRect(w, h, radius) {
  const x = -w / 2, y = -h / 2, r = Math.min(radius, w / 2, h / 2), s = new Shape();
  s.moveTo(x + r, y); s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r); s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
  const points = s.getPoints(12);
  if (points[0].equals(points.at(-1))) points.pop();
  return points;
}

function distanceToSegment(p, a, b) {
  const d = b.clone().sub(a), t = Math.max(0, Math.min(1, p.clone().sub(a).dot(d) / d.lengthSq()));
  return p.distanceTo(a.clone().addScaledVector(d, t));
}

function contourGap(a, b) {
  return Math.min(...a.map(p => Math.min(...b.map((q, i) => distanceToSegment(p, q, b[(i + 1) % b.length])))),
    ...b.map(p => Math.min(...a.map((q, i) => distanceToSegment(p, q, a[(i + 1) % a.length])))));
}

export function buildAidModel(id, edits = {}) {
  if (!customFields[id]) throw new Error('未知辅具模板');
  const warnings = [], params = { kind: id, side: 'neutral', warnings };
  for (const [key, [label, fallback, min, max]] of Object.entries(customFields[id])) {
    const input = Number(edits[key] ?? fallback), value = Number.isFinite(input) ? Math.max(min, Math.min(max, input)) : fallback;
    if (input !== value) warnings.push(label + '已限制为 ' + value + ' mm。');
    params[key] = value;
  }
  function cap(key, max) {
    if (params[key] > max) { params[key] = max; warnings.push(customFields[id][key][0] + '为保留材料边距，已限制为 ' + Number(max.toFixed(2)) + ' mm。'); }
  }
  let outer, holes;
  if (id === 'key') {
    cap('slotWidth', params.length - 16); cap('slotHeight', params.width - 16);
    outer = roundedRect(params.length, params.width, 8);
    holes = [roundedRect(params.slotWidth, params.slotHeight, 1.5)];
  } else if (id === 'zipper') {
    cap('gripHole', Math.min(params.width - 10, params.length * 0.4));
    outer = ellipse(params.width / 2, params.length / 2);
    holes = [ellipse(params.gripHole / 2, params.gripHole / 2, 0, params.length * 0.1),
      ellipse(params.attachmentHole / 2, params.attachmentHole / 2, 0, -params.length * 0.32)];
  } else {
    cap('gripHole', params.width - 10);
    outer = ellipse(params.length / 2, params.width / 2);
    holes = [ellipse(params.gripHole / 2, params.gripHole / 2)];
  }
  if (ShapeUtils.isClockWise(outer)) outer.reverse();
  for (const hole of holes) if (!ShapeUtils.isClockWise(hole)) hole.reverse();
  const triangles = ShapeUtils.triangulateShape(outer, holes), loops = [outer, ...holes], points = loops.flat(), n = points.length;
  const vertices = [0, params.thickness].flatMap(z => points.map(p => [p.x, p.y, z])), faces = [];
  for (const triangle of triangles) {
    let [a, b, c] = triangle;
    if (points[b].clone().sub(points[a]).cross(points[c].clone().sub(points[a])) < 0) [b, c] = [c, b];
    faces.push([c, b, a], [a + n, b + n, c + n]);
  }
  let offset = 0;
  for (const loop of loops) {
    for (let i = 0; i < loop.length; i++) {
      const a = offset + i, b = offset + (i + 1) % loop.length;
      faces.push([a, b, b + n], [a, b + n, a + n]);
    }
    offset += loop.length;
  }
  let minWall = params.thickness;
  for (let i = 0; i < loops.length; i++) for (let j = i + 1; j < loops.length; j++) minWall = Math.min(minWall, contourGap(loops[i], loops[j]));
  // Reuse only the mesh screening; the old sleeve beam approximation does not apply.
  const checks = inspectMesh(vertices, faces, minWall, { kind: 'pen', length: params.length }, 0);
  checks.structure = null;
  checks.wallMethod = '取板厚与孔洞间 / 孔洞到外缘二维最小距离的较小值';
  return { params, checks, vertices, faces, extracted: {}, provenance: {}, profile: null, parameterWarnings: new Map(), aidId: id };
}

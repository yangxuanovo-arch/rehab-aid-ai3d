export const families = {
  pen: { label: '握笔器', length: 45, diameter: 28, bore: 10, load: 15 },
  utensil: { label: '餐具手柄', length: 95, diameter: 34, bore: 13, load: 20 },
  brace: { label: '矫形护具', length: 65, circumference: 180, wall: 4, load: 30 },
};

const clamp = (value, low, high) => Math.max(low, Math.min(value, high));
const mix = (a, b, t) => a + (b - a) * t;
const number = '([0-9]+(?:\\.[0-9]+)?)\\s*(毫米|厘米|mm|cm)?';

function dimension(text, names, min, max, fallback, warnings, label) {
  const forward = text.match(new RegExp('(?:' + names + ')\\s*(?:[:：=为]\\s*)?' + number));
  const reverse = text.match(new RegExp(number + '\\s*(?:的\\s*)?(?:' + names + ')'));
  const match = forward ?? (reverse?.[2] ? reverse : null);
  if (!match) return fallback;
  const value = Number(match[1]) * (['厘米', 'cm'].includes(match[2]) ? 10 : 1);
  const limited = clamp(value, min, max);
  if (limited !== value) warnings.push(label + '超出模板范围，已限制为 ' + limited + ' mm。');
  return limited;
}

export function parseIntent(description, selected = 'auto') {
  const text = description.normalize('NFKC').toLowerCase();
  const inferred = /护具|护腕|护指|支具|矫形|brace|orthos|splint/.test(text) ? 'brace'
    : /餐具|勺|筷|叉|utensil|spoon|fork|cutlery/.test(text) ? 'utensil'
      : /笔|pencil|\bpen\b/.test(text) ? 'pen' : null;
  const kind = selected === 'auto' ? (inferred ?? 'pen') : selected;
  if (!families[kind]) throw new Error('未知辅具类别。');
  const warnings = [];
  if (!inferred && selected === 'auto') warnings.push('未识别到类别关键词，使用握笔器模板。');
  if (selected !== 'auto' && inferred && selected !== inferred) warnings.push('文字中的类别与所选类别不同，采用所选类别。');
  const defaults = families[kind];
  const side = /左手|左腕|左侧|\bleft\b/.test(text) ? 'left' : /右手|右腕|右侧|\bright\b/.test(text) ? 'right' : 'neutral';
  const support = /震颤|颤抖|握力弱|tremor|weak\s*grip/.test(text);
  const finger = kind === 'brace' && /护指|手指|finger/.test(text);
  const length = dimension(text, '长度|(?<!周)长|\\blength\\b', kind === 'utensil' ? 55 : 22, finger ? 70 : 140,
    finger ? 34 : defaults.length, warnings, '长度');
  const params = { kind, side, support, finger, length, warnings };
  if (kind === 'brace') {
    params.circumference = dimension(text, '周长|围度|腕围|指围|臂围|circumference|girth', finger ? 42 : 100,
      finger ? 95 : 320, finger ? 60 : defaults.circumference, warnings, '周长');
    params.wall = dimension(text, '壁厚|wall thickness|wall', 2, 8,
      finger ? 3 : defaults.wall, warnings, '壁厚');
  } else {
    params.diameter = dimension(text, '外径|直径|outer diameter|(?<!inner )\\bdiameter', 16, 55,
      defaults.diameter + (support ? 4 : 0), warnings, '外径');
    params.bore = dimension(text, '孔径|内径|bore|inner diameter', 5, Math.min(24, params.diameter - 5),
      Math.min(defaults.bore, params.diameter - 5), warnings, '孔径');
  }
  return params;
}

export function profileFromSketch(strokes) {
  const points = strokes.flat();
  if (points.length < 8) return null;
  const xs = points.map(p => p[0]), ys = points.map(p => p[1]);
  const left = Math.min(...xs), right = Math.max(...xs), top = Math.min(...ys), bottom = Math.max(...ys);
  if (right - left < 0.05 || bottom - top < 0.08) return null;
  const widths = Array.from({ length: 13 }, (_, i) => {
    const y = mix(bottom, top, (i + 0.5) / 13);
    const intersections = [];
    for (const stroke of strokes) {
      for (let j = 1; j < stroke.length; j++) {
        const a = stroke[j - 1], b = stroke[j];
        if ((a[1] <= y && b[1] > y) || (b[1] <= y && a[1] > y)) {
          intersections.push(mix(a[0], b[0], (y - a[1]) / (b[1] - a[1])));
        }
      }
    }
    return intersections.length >= 2 ? Math.max(...intersections) - Math.min(...intersections) : null;
  });
  const valid = widths.filter(x => x !== null);
  if (valid.length < 7 || Math.max(...valid) < 0.04) return null;
  const maxWidth = Math.max(...valid);
  const filled = widths.map((w, i) => {
    if (w !== null) return w;
    const before = widths.slice(0, i).findLastIndex(x => x !== null);
    const after = widths.findIndex((x, j) => j > i && x !== null);
    return before < 0 ? widths[after] : after < 0 ? widths[before]
      : mix(widths[before], widths[after], (i - before) / (after - before));
  });
  return filled.map((w, i) => clamp((filled[Math.max(0, i - 1)] + 2 * w
    + filled[Math.min(i + 1, filled.length - 1)]) / (4 * maxWidth), 0.66, 1));
}

export function generateModel(description, strokes = [], selected = 'auto') {
  const params = parseIntent(description, selected);
  const profile = profileFromSketch(strokes);
  const segments = 64, rows = 24, stride = segments + Number(params.kind === 'brace');
  const isBrace = params.kind === 'brace';
  const inner = isBrace ? params.circumference / (2 * Math.PI) + 0.75 : params.bore / 2;
  const baseWall = isBrace ? params.wall : params.diameter / 2 - inner;
  const opening = params.finger ? 82 : 76;
  const shift = params.side === 'left' ? -15 : params.side === 'right' ? 15 : 0;
  const vertices = [], faces = [];
  for (let row = 0; row <= rows; row++) {
    const t = row / rows;
    const index = t * ((profile?.length ?? 1) - 1);
    const shape = profile ? mix(profile[Math.floor(index)], profile[Math.ceil(index)], index % 1)
      : 0.79 + 0.21 * Math.sin(Math.PI * t);
    const wall = baseWall * (isBrace ? 1 + 0.55 * (shape - 0.8) : shape);
    for (const radius of [inner + wall, inner]) {
      for (let j = 0; j < stride; j++) {
        const angle = (isBrace ? ((opening / 2 + shift) + (360 - opening) * j / segments) : 360 * j / segments)
          * Math.PI / 180;
        vertices.push([radius * Math.cos(angle), radius * Math.sin(angle), params.length * t]);
      }
    }
  }
  const at = (r, innerSide, j) => 2 * r * stride + innerSide * stride + j;
  const quad = (a, b, c, d) => faces.push([a, b, c], [a, c, d]);
  for (let j = 0; j < segments; j++) {
    const k = (j + 1) % stride;
    for (let r = 0; r < rows; r++) {
      quad(at(r, 0, j), at(r, 0, k), at(r + 1, 0, k), at(r + 1, 0, j));
      quad(at(r, 1, k), at(r, 1, j), at(r + 1, 1, j), at(r + 1, 1, k));
    }
    quad(at(0, 0, k), at(0, 0, j), at(0, 1, j), at(0, 1, k));
    quad(at(rows, 0, j), at(rows, 0, k), at(rows, 1, k), at(rows, 1, j));
  }
  if (isBrace) {
    for (let r = 0; r < rows; r++) {
      quad(at(r, 0, 0), at(r + 1, 0, 0), at(r + 1, 1, 0), at(r, 1, 0));
      quad(at(r + 1, 0, segments), at(r, 0, segments), at(r, 1, segments), at(r + 1, 1, segments));
    }
  }
  const minWall = Math.min(...Array.from({ length: rows + 1 }, (_, r) => (
    Math.hypot(...vertices[at(r, 0, 0)].slice(0, 2)) - inner
  ))) * Math.cos(Math.PI / segments);
  return { params, profile, vertices, faces, checks: inspectMesh(vertices, faces, minWall, params, inner) };
}

function subtract(a, b) {
  return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}

function cross(a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

export function normalOf(a, b, c) {
  const n = cross(subtract(b, a), subtract(c, a));
  const length = Math.hypot(...n);
  return length ? n.map(x => x / length) : n;
}

export function inspectMesh(vertices, faces, minWall, params, inner) {
  const lower = [Infinity, Infinity, Infinity], upper = [-Infinity, -Infinity, -Infinity];
  for (const vertex of vertices) for (let j = 0; j < 3; j++) {
    lower[j] = Math.min(lower[j], vertex[j]);
    upper[j] = Math.max(upper[j], vertex[j]);
  }
  const size = upper.map((x, j) => x - lower[j]);
  const edges = new Map();
  const vertexLinks = vertices.map(() => []);
  let volume = 0, unsupported = 0, area = 0, degenerate = 0;
  for (const face of faces) {
    const [a, b, c] = face.map(i => vertices[i]);
    const n = cross(subtract(b, a), subtract(c, a));
    const norm = Math.hypot(...n);
    if (norm < 1e-8) degenerate++;
    area += norm / 2;
    if (Math.max(a[2], b[2], c[2]) > lower[2] + 1e-8) {
      if (n[2] < -norm / Math.SQRT2) unsupported += norm / 2;
    }
    volume += (a[0] * n[0] + a[1] * n[1] + a[2] * n[2]) / 6;
    for (let j = 0; j < 3; j++) {
      const i = face[j], k = face[(j + 1) % 3], l = face[(j + 2) % 3];
      const key = i < k ? i + ':' + k : k + ':' + i;
      const edge = edges.get(key) ?? [0, 0];
      edge[0]++;
      edge[1] += i < k ? 1 : -1;
      edges.set(key, edge);
      vertexLinks[i].push([k, l]);
    }
  }
  let nonManifold = 0;
  for (const [count, orientation] of edges.values()) if (count !== 2 || orientation !== 0) nonManifold++;
  const badVertices = vertexLinks.filter(link => {
    if (!link.length) return true;
    const next = new Map(link);
    if (next.size !== link.length) return true;
    const start = link[0][0];
    let at = start, visited = 0;
    do {
      at = next.get(at);
      if (at === undefined || ++visited > link.length) return true;
    } while (at !== start);
    return visited !== link.length;
  }).length;
  const manifold = nonManifold === 0 && badVertices === 0 && degenerate === 0 && volume > 0;
  const fits = size.every((x, i) => x <= [220, 220, 250][i]);
  const wallPass = minWall >= 1.6;
  const overhangPass = unsupported <= 1e-8;
  const load = params.finger ? 12 : families[params.kind].load;
  const radialOuter = inner + minWall;
  const stress = params.kind === 'brace'
    ? 6 * load * inner / (params.length * minWall ** 2)
    : load * params.length * radialOuter / (Math.PI * (radialOuter ** 4 - inner ** 4) / 4);
  return {
    manifold, nonManifold, badVertices, degenerate, size, fits, minWall, wallPass, overhangPass,
    overhangPercent: 100 * unsupported / area, volume, mass: volume * 0.00124,
    minutes: volume / 6 / 60 + size[2] / 0.2 * 1.5 / 60,
    printable: manifold && fits && wallPass && overhangPass,
    structure: { load, stress, factor: 35 / stress, model: params.kind === 'brace' ? '开口环近似' : '空心悬臂梁近似' },
  };
}

export function binarySTL({ vertices, faces }) {
  const buffer = new ArrayBuffer(84 + faces.length * 50), bytes = new DataView(buffer);
  bytes.setUint32(80, faces.length, true);
  for (const [index, face] of faces.entries()) {
    const [a, b, c] = face.map(i => vertices[i]);
    const values = [...normalOf(a, b, c), ...a, ...b, ...c];
    values.forEach((x, j) => bytes.setFloat32(84 + index * 50 + 4 * j, x, true));
  }
  return buffer;
}

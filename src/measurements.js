const digits = Object.fromEntries(Array.from('零一二三四五六七八九', (digit, value) => [digit, value]));
digits['〇'] = 0;
digits['两'] = 2;
const places = { 十: 10, 百: 100, 千: 1000 };
const writtenMetric = /(负|[-+−])?([零〇一二两三四五六七八九十百千]+)(?:点([零〇一二两三四五六七八九]+))?[ \t]*(毫米|厘米|公分|mm|cm)(?!半)/g;

function writtenInteger(text) {
  if (!/[十百千]/.test(text)) return Array.from(text, digit => digits[digit]).join('');
  let total = 0, previousPlace = Infinity, digit, skippedPlace = false;
  for (const char of text) {
    if (char in digits) {
      if (digit !== undefined) return null;
      if (digits[char] === 0 && previousPlace !== Infinity) skippedPlace = true;
      else digit = digits[char];
    } else {
      const place = places[char];
      if (place >= previousPlace || (digit === undefined && previousPlace !== Infinity)) return null;
      total += (digit ?? 1) * place;
      previousPlace = place;
      digit = undefined;
      skippedPlace = false;
    }
  }
  if (digit !== undefined && previousPlace > 10 && !skippedPlace) return null;
  return String(total + (digit ?? 0));
}

export function normalizeMetricText(text) {
  return text.normalize('NFKC').toLowerCase().replace(writtenMetric, (match, sign, whole, fraction, unit) => {
    const integer = writtenInteger(whole);
    if (integer === null) return match;
    const decimal = fraction ? '.' + Array.from(fraction, digit => digits[digit]).join('') : '';
    const prefix = ['负', '-', '−'].includes(sign) ? '-' : '';
    return prefix + integer + decimal + unit;
  }).replaceAll('公分', '厘米');
}

const fractions = { '¼': '1/4', '½': '1/2', '¾': '3/4', '⅛': '1/8', '⅜': '3/8', '⅝': '5/8', '⅞': '7/8',
  '⅓': '1/3', '⅔': '2/3', '⅕': '1/5', '⅖': '2/5', '⅗': '3/5', '⅘': '4/5', '⅙': '1/6', '⅚': '5/6' };
const quantity = String.raw`[+\-−]?(?:\d+(?:[ \t]+|又))?\d+\s*[/⁄]\s*\d+|[+\-−]?(?:\d+(?:\.\d+)?|\.\d+)`;
const inch = String.raw`英寸|[″”"]|\bin(?:ch(?:es)?)?\b(?!\s+(?:diameter|length|width|thickness)\b)`;
const unit = String.raw`毫米|厘米|(?:mm|cm)\b|` + inch;

function quantityValue(text) {
  const unsigned = text.replace(/^[+\-−]/, '');
  const parts = unsigned.match(/^(?:([0-9]+)(?:[ \t]+|又))?([0-9]+)\s*[/⁄]\s*([0-9]+)$/);
  const value = parts ? Number(parts[1] ?? 0) + Number(parts[2]) / Number(parts[3]) : Number(unsigned);
  return /^[\-−]/.test(text) ? -value : value;
}

function inMillimetres(value, units) {
  return quantityValue(value) * (units === '厘米' || units === 'cm' ? 10 : /^(?:mm|毫米)$/.test(units) ? 1 : 25.4);
}

export function normalizeMeasurements(text) {
  const written = text.replaceAll('″', '"').replace(/([0-9])?(¼|½|¾|⅛|⅜|⅝|⅞|⅓|⅔|⅕|⅖|⅗|⅘|⅙|⅚)/g,
    (_, whole, fraction) => (whole ? whole + ' ' : '') + fractions[fraction])
    .replace(/(?:([零〇一二两三四五六七八九十百千]+)又)?([零〇一二两三四五六七八九十]+)分之([零〇一二两三四五六七八九十]+)(?=\s*英寸)/g,
      (match, whole, denominator, numerator) => {
        const parts = [whole, numerator, denominator].map(x => x ? writtenInteger(x) : '');
        return parts.includes(null) ? match : (parts[0] ? parts[0] + ' ' : '') + parts[1] + '/' + parts[2];
      })
    .replace(/([零〇一二两三四五六七八九十百千]+)(?=\s*(?:又\d|英寸))/g, (match, number) => writtenInteger(number) ?? match);
  const normalized = normalizeMetricText(written)
    .replace(/\bmillimet(?:er|re)s?\b/g, 'mm').replace(/\bcentimet(?:er|re)s?\b/g, 'cm');
  const range = new RegExp('(?<![\\d./])(?:\\bbetween\\s+|\\bfrom\\s+)?(' + quantity + ')\\s*(' + unit
    + ')?\\s*(?:[-–—~～]|到|至|\\bto\\b|(?<=\\S)\\s+and\\s+)\\s*(' + quantity + ')\\s*(' + unit + ')', 'gi');
  const inches = new RegExp('(?<![\\d./])(' + quantity + ')[ \\t]*-?[ \\t]*(' + inch + ')', 'gi');
  const format = value => Number(value.toFixed(6)) + 'mm';
  return normalized.replace(range, (match, a, unitA, b, unitB) => {
    if (/\band\b/i.test(match) && !/^between\b/i.test(match)) return match;
    const from = inMillimetres(a, unitA ?? unitB), to = inMillimetres(b, unitB);
    return Number.isFinite(from + to) && from <= to ? format((from + to) / 2) : match;
  }).replace(inches, (match, value, units) => {
    const mm = inMillimetres(value, units);
    return Number.isFinite(mm) ? format(mm) : match;
  });
}

const qualifiers = /(?:\s|[:：=为~～]|(?:大约|约莫|差不多|大概|约|做成|在)|\b(?:is|of|about|approx(?:imately)?\.?|around|roughly|near|needs?\s+to\s+be|should\s+be|measures?|measuring|between|from)\b)*$/u;
const suffixLead = /^(?:\s|的|(?:\b(?:in|for|of)\b))*/u;
const bodyObject = /(?:\b(?:finger|forearm|arm|wrist|shaft|box|photo|the (?:pencil|pen|spoon|fork))(?:\s+itself)?\s*(?:is\s+|measures?\s+)?|(?:手指|前臂|手腕|盒子|铅笔|笔|勺子)(?:本身|本体)?)$/u;
const words = {
  length: [/\b(?:length|long)\b|长度|全长|(?<!周|围)长/u, /\b(?:length|long)\b|长度|长/u],
  circumference: [/\b(?:circumference|girth)\b|周长|围度|腕围|指围|臂围|(?:绕)?一圈/u,
    /\b(?:circumference|girth|around)\b|周长|围度|腕围|指围|臂围|一圈/u],
  bore: [/\b(?:inner(?: hole)? diameter|internal (?:diameter|opening)|opening diameter|inner opening|hole|opening|bore)\b|孔径|内径|内孔|开孔/u,
    /\b(?:inner(?: hole)? diameter|internal (?:diameter|opening)|opening diameter|inner opening|hole|opening|bore)\b|孔径|内径|内孔|开孔/u],
  diameter: [/\b(?:outer diameter|outer width|width)\b|(?<!inner |inner hole |internal |opening )\bdiameter\b|外径|直径|横宽|最宽处|宽度|宽|粗/u,
    /\b(?:outer diameter|outer width|width|wide|across|from side to side)\b|(?<!inner |inner hole |internal |opening )\bdiameter\b|外径|直径|宽度|宽|粗/u],
  wall: [/\b(?:wall thickness|shell thickness|wall|shell|thickness)\b|壁厚|壳厚|(?<!壁)厚度|厚/u,
    /\b(?:wall thickness|wall|walls|thickness|thick)\b|壁厚|壳厚|厚度|厚/u],
};
const near = Object.fromEntries(Object.entries(words).map(([key, [before, after]]) => [key, [
  new RegExp('(' + before.source + ')' + qualifiers.source),
  new RegExp(suffixLead.source + '(' + after.source + ')'),
]]));

export function attributeMeasurements(text, kind) {
  const dimensions = {}, blocked = new Set(), candidates = [];
  for (const match of text.matchAll(/(?<![\d./⁄])([-+−]?(?:\d+(?:\.\d+)?|\.\d+))[ \t]*(毫米|厘米|mm|cm)?(?![\d/⁄]|\.\d)/g)) {
    const [token, value, unit] = match;
    const start = match.index, end = start + token.length;
    const before = text.slice(0, start).split(/[,;，；。!?！？\n]|\.(?!\d)/).at(-1);
    const after = text.slice(end);
    const bodyPrefix = before.replace(qualifiers, '');
    const reference = /\b(?:reference photo|shaft|box|the pencil|the spoon itself)\b|笔本体|勺子本身|盒子/u.test(before)
      && !/\b(?:grip|handle|splint|brace)\b|握笔器|握套|握柄|手柄|护具/u.test(before);
    const mm = inMillimetres(value, unit ?? 'mm');
    const span = [start, start + value.length];
    for (const [key, [prefix, suffix]] of Object.entries(near)) {
      const left = before.match(prefix), right = unit && after.match(suffix);
      if (!left && !right) continue;
      const subject = left ? before.slice(0, left.index) : bodyPrefix;
      const body = bodyObject.test(subject);
      if ((reference || body) && ['length', 'diameter', 'wall'].includes(key)) {
        blocked.add(start);
        continue;
      }
      const label = (left ?? right)[1];
      if (key === 'wall' && kind !== 'brace' && !/wall|shell|壁|壳/u.test(label)) continue;
      if (key === 'circumference' && label === 'around' && kind !== 'brace' && !body) continue;
      if (key === 'diameter' && label === '宽' && kind === 'brace') continue;
      const broad = /^(?:wall|shell|thickness|thick|厚|wide|width|across|粗|宽|around)$/u.test(label);
      const priority = (broad ? 0 : 4) + (left ? 2 : 1) + Number(Boolean(unit));
      const bodyFit = key === 'circumference' && (body || /腕围|指围|臂围/u.test(label));
      candidates.push({ key, mm, span, unit: unit ?? null, forward: Boolean(left), priority, bodyFit, label });
    }
  }
  const claimed = new Set();
  for (const candidate of candidates.sort((a, b) => b.priority - a.priority)) {
    const { key, span } = candidate;
    if (claimed.has(span[0]) || dimensions[key]) continue;
    dimensions[key] = candidate;
    claimed.add(span[0]);
  }
  return { dimensions, blocked };
}

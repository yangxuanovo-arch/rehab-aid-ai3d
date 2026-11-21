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

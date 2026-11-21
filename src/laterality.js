const direction = /\b(?:(left|right)(?:-?\s?(?:handed|sided)|y)?\b|([lr])\.?(?=\s+(?:hand|wrist|arm|forearm|finger|thumb|side)\b)|(?<=\bside[: ]{1,3})([lr])\b)/g;
const bodyPart = /^\s*(?:hand|wrist|arm|forearm|finger|thumb|side)\b/;
const requested = /\b(?:for|on|to fit|to suit)\s+(?:(?:my|the|their|his|her)\s+)?$/;
const negated = /\b(?:not|rather than|instead of|except|never)\s+(?:(?:for|on|the|my|their|his|her)\s+)*$/;
const alternate = /\b(?:the|my) other (?:hand|wrist|arm|side)\b/;
const relative = /\b(non[- ]?)?dominant\s+(?:hand|side|arm|wrist)\b/;
const bilateral = /\b(?:bilateral|ambidextrous|(?:both|either)\s+(?:hands?|wrists?|sides?|arms?)|(?:left\s*(?:and|or|\/)\s*right|right\s*(?:and|or|\/)\s*left))\b/;
const foreignSubject = /\bmy\s+(?:sister|brother|mother|father|wife|husband|friend|partner|son|daughter|dad|mom)\b/;
const opposite = side => side === 'left' ? 'right' : 'left';
const directions = candidates => new Set(candidates.map(({ side }) => side));

export function readSide(text) {
  const chinese = /左手|左腕|左侧/.test(text) ? 'left' : /右手|右腕|右侧/.test(text) ? 'right' : undefined;
  if (chinese) return { side: chinese };

  const candidates = [];
  let cue = false, otherReference, relativeHand, dominance;
  for (const clause of text.split(/[;!?。！？]|\.(?=\s|$)/)) {
    const ownDominance = clause.match(/\b(?:i am|i'm|i’m)\s+(left|right)[- ]?handed\b|\bmy dominant hand is (left|right)\b/);
    if (ownDominance) dominance = ownDominance[1] ?? ownDominance[2];
    const relativeMatch = clause.match(relative);
    if (relativeMatch && !/^dominant hand is (?:left|right)\b/.test(clause.slice(relativeMatch.index))) {
      relativeHand = relativeMatch[1] ? 'opposite' : 'same';
    }
    const other = clause.match(alternate);
    for (const match of clause.matchAll(direction)) {
      cue = true;
      const before = clause.slice(0, match.index), after = clause.slice(match.index + match[0].length);
      if (negated.test(before) || /\b(?:left|right)\s+(?:of|size|amount|angle|shape|choice|answer|one|here|there)\b/.test(clause.slice(match.index))) continue;
      if (foreignSubject.test(before) && !/\b(?:for|on)\s+my\s*$/.test(before)) continue;
      const side = match[1] ?? ((match[2] ?? match[3]) === 'l' ? 'left' : 'right');
      const shorthand = Boolean(match[2] || match[3]);
      const target = requested.test(before) && (bodyPart.test(after) || !after.trim() || /^\s*[,)]/.test(after));
      if (other && match.index >= other.index) continue;
      candidates.push({ side, target, dominance: Boolean(ownDominance),
        priority: target ? 3 : shorthand || bodyPart.test(after) || /handed|sided|y$/.test(match[0]) ? 2 : 1 });
    }
    if (other) otherReference = directions(candidates.filter(candidate => !candidate.dominance && candidate.priority >= 2));
  }
  if (otherReference) return otherReference.size === 1 ? { side: opposite([...otherReference][0]) } : { blocked: true };
  const explicit = directions(candidates.filter(candidate => candidate.target));
  if (explicit.size === 1 && !/\b(?:left|right)(?:\s+(?:hand|wrist|side))?\s*(?:or|and|\/)\s*(?:the\s+)?(?:left|right)\b/.test(text)) {
    return { side: [...explicit][0] };
  }
  if (bilateral.test(text) || explicit.size > 1) return { blocked: true };
  if (relativeHand) {
    return dominance ? { side: relativeHand === 'opposite' ? opposite(dominance) : dominance } : { blocked: true };
  }
  const priority = Math.max(...candidates.map(candidate => candidate.priority));
  const preferred = directions(candidates.filter(candidate => candidate.priority === priority));
  if (preferred.size === 1) return { side: [...preferred][0] };
  return { blocked: cue || /\b(?:affected|unaffected) side\b/.test(text) };
}

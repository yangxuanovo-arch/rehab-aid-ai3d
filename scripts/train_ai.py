import argparse
import json
import re
import unicodedata
from pathlib import Path

import numpy as np


ROOT = Path(__file__).resolve().parents[1]
WIDTH = 512
NUM = re.compile(r'([0-9]+(?:\.[0-9]+)?)[ \t]*(毫米|厘米|mm|cm)?')
SEPARATOR = re.compile(r'[,，;；、。!?！？\n]')
LABELS = {
    'kind': ['pen', 'utensil', 'brace', 'unknown'],
    'side': ['neutral', 'left', 'right'],
    'support': [False, True],
    'finger': [False, True],
    'slot': ['ignore', 'length', 'diameter', 'bore', 'circumference', 'wall'],
}
CATEGORIES = {
    'pen': [('握笔器|笔套|铅笔加粗握套|签字笔辅助套', '写字用握笔套|铅笔握持器|笔杆加粗套'),
            ('pen grip|pencil sleeve|writing grip|pen adapter', 'writing aid for a pencil|pen holder sleeve|writing handle')],
    'utensil': [('餐具手柄|勺柄|叉子握套|筷子加粗套', '勺子手柄|辅助餐叉手柄|吃饭餐具握套'),
                ('spoon handle|cutlery sleeve|fork adapter|utensil grip', 'eating utensil handle|fork gripping aid|spoon hand grip')],
    'wrist': [('护腕|腕部支具|矫形护具|前臂护具', '腕关节护具|腕部矫形支具|前臂腕托'),
              ('wrist brace|wrist splint|forearm orthosis|wrist support brace', 'brace for the forearm|wrist orthotic splint|wrist orthosis')],
    'finger': [('护指|手指夹板|手指护具|护指支具', '手指矫形夹板|护指器|指部护具'),
               ('finger splint|finger brace|finger orthosis|finger support', 'brace for a finger|finger orthotic support|finger joint splint')],
    'unknown': [('做个东西|我想试试看|设计个盒子|需要原型', '想生成一个玩具|试做模型'),
                ('make something|try a prototype|build a toy|design a box', 'make a prototype|need a model')],
}
SLOTS = {
    'length': [('长度|长|部件长度|轴向长度', '总长度|整体长度|全长'),
               ('length|long|axial length', 'overall length|part length|longitudinal length')],
    'diameter': [('直径|外径|外部直径|套筒直径', '外侧直径|总外径|握套直径'),
                 ('diameter|outer diameter|outside diameter', 'external diameter|body diameter|outer grip diameter')],
    'bore': [('孔径|内径|内部直径|开孔直径', '套孔孔径|圆孔直径|中心内径'),
             ('bore|inner diameter|hole diameter', 'internal diameter|central bore|inner hole diameter')],
    'circumference': [('周长|腕围|前臂周长|指围|围度', '手腕周长|截面周长|前臂围度'),
                      ('circumference|girth|wrist circumference|finger girth', 'circumference of wrist|outer girth|arm circumference')],
    'wall': [('壁厚|侧壁厚度|壁厚度', '壳壁厚度|壳体壁厚|护具壁厚'),
             ('wall|wall thickness|shell thickness', 'thickness of shell|brace wall thickness|outer shell thickness')],
    'ignore': [('数量|版本|编号|年龄', '样例编号|版本号|使用者年龄'),
               ('version|quantity|age|sample number', 'prototype number|version number|user age')],
}
RANGES = {'length': (30, 110), 'diameter': (22, 50), 'bore': (6, 15),
          'circumference': (110, 260), 'wall': (2, 7), 'ignore': (1, 60)}


def pick(rng, values):
    return values[int(rng.integers(len(values)))]


def lexicon(rng, book, word, language, heldout):
    return pick(rng, book[word][language][int(heldout)].split('|'))


def make_text(rng, count, heldout):
    cases = []
    for i in range(count):
        lang = (i // 5) % 2
        category = list(CATEGORIES)[i % 5]
        kind = 'brace' if category in ('wrist', 'finger') else category
        side = pick(rng, LABELS['side'])
        support = rng.random() < 0.4
        finger = category == 'finger'
        name = lexicon(rng, CATEGORIES, category, lang, heldout)
        handed = {
            'neutral': '',
            'left': pick(rng, ['左手', '左侧'] if not lang else ['left', 'left-handed']),
            'right': pick(rng, ['右手', '右侧'] if not lang else ['right', 'right-handed']),
        }[side]
        need = pick(rng, ['握力弱', '轻微颤抖', '手部震颤'] if not lang else ['weak grip', 'hand tremor', 'tremor']) if support else ''
        intro = ' '.join(x for x in (handed, need, name) if x)
        if heldout:
            intro = ('我想为自己做一个 ' if not lang else 'Could you design a ') + intro
        allowed = ('length', 'circumference', 'wall') if kind == 'brace' else ('length', 'diameter', 'bore')
        slots = [s for s in allowed if kind != 'unknown' and rng.random() < 0.84]
        if rng.random() < 0.38:
            slots.append('ignore')
        rng.shuffle(slots)
        chunks, expected = [], {}
        for slot in slots:
            low, high = RANGES[slot]
            if slot == 'circumference' and finger:
                low, high = 45, 86
            if slot == 'length' and finger:
                low, high = 23, 60
            if slot == 'length' and kind == 'utensil':
                low = 56
            value = int(rng.integers(low, high))
            term = lexicon(rng, SLOTS, slot, lang, heldout)
            cm = slot != 'ignore' and rng.random() < 0.33
            unit = (('厘米' if cm else '毫米') if not lang else (' cm' if cm else ' mm')) if slot != 'ignore' else ''
            numeric = (f'{value / 10:g}' if cm else str(value)) + unit
            if rng.random() < 0.33:
                chunks.append(numeric + (' for ' if lang else ' 的') + term)
            else:
                chunks.append(term + pick(rng, [' ', ': ', ' is ']) + numeric if lang
                              else term + pick(rng, ['', '为', '：']) + numeric)
            if slot != 'ignore':
                expected[slot] = value
        cases.append({'description': (', ' if lang else '，').join([intro, *chunks]),
                      'language': 'en' if lang else 'zh', 'kind': kind, 'side': side,
                      'support': bool(support), 'finger': finger, 'slotLabels': slots, 'dimensions': expected})
    return cases


def normalize(text):
    return unicodedata.normalize('NFKC', text).lower()


def context(text, matches, i):
    left = text[matches[i - 1].end() if i else 0:matches[i].start()]
    right = text[matches[i].end():matches[i + 1].start() if i + 1 < len(matches) else len(text)]
    return SEPARATOR.split(left)[-1][-25:], SEPARATOR.split(right)[0][:25]


def features(*parts):
    vector = np.zeros(WIDTH)
    for channel, part in enumerate(parts):
        clean = '^' + re.sub(r'\s+', ' ', part).strip() + '$'
        for n in (1, 2, 3):
            for start in range(len(clean) - n + 1):
                code = 2166136261 ^ channel
                for char in clean[start:start + n]:
                    code = ((code ^ ord(char)) * 16777619) & 0xffffffff
                vector[code % WIDTH] += 1
    return np.sqrt(vector) / max(1, np.sqrt(vector.sum()))


def rounded(array):
    return np.round(array, 6).tolist()


def softmax(z):
    ex = np.exp(z - z.max(axis=1, keepdims=True))
    return ex / ex.sum(axis=1, keepdims=True)


def fit_head(x, y, size):
    w = np.zeros((x.shape[1], size))
    b = np.zeros(size)
    target = np.eye(size)[y]
    for _ in range(340):
        residual = (softmax(x @ w + b) - target) / len(y)
        w -= 7 * (x.T @ residual + 0.00016 * w)
        b -= 7 * residual.sum(axis=0)
    return {'bias': rounded(b), 'weights': rounded(w.T)}


def make_sketch(rng, count, heldout):
    rows = np.linspace(0, 1, 13)
    data = []
    for i in range(count):
        amplitude, center, spread = rng.uniform(0.11, 0.44), rng.uniform(.2, .8), rng.uniform(.15, .4)
        wave = amplitude * np.exp(-((rows - center) / spread) ** 2)
        taper = rng.uniform(-.24, .24) * rows
        if heldout:
            taper += rng.uniform(-.09, .09) * np.sin(2 * np.pi * rows)
        width = 0.8 + wave * (1 if i % 2 else -1) + taper
        target = np.clip(width / width.max(), .66, 1)
        observed = width + rng.normal(0, .047 if heldout else .036, len(rows))
        observed[rng.integers(1, 12)] += rng.uniform(-.18, .18)
        middle = .5 + np.cumsum(rng.normal(0, .005, len(rows)))
        missing = set(rng.choice(13, size=int(rng.integers(0, 4)), replace=False))
        norms = observed / max(observed[j] for j in range(13) if j not in missing)
        x = np.r_[[0 if j in missing else norms[j] for j in range(13)], [j not in missing for j in range(13)]]
        strokes = []
        for side in (-1, 1):
            # Each short stroke crosses exactly one sampled horizontal band.
            for j in range(13):
                if j in missing and side == 1:
                    continue
                y = .9 - (j + .5) * .8 / 13
                xx = middle[j] + side * .17 * observed[j]
                strokes.append([[xx, .1 if j == 12 else y - .01], [xx, .9 if j == 0 else y + .01]])
        data.append((x, target, strokes))
    return data


def fit_sketch(samples, rng):
    x = np.array([s[0] for s in samples])
    target = np.array([s[1] for s in samples])
    a = rng.normal(0, .15, (26, 32))
    b = np.zeros(32)
    w = rng.normal(0, .13, (32, 13))
    bias = np.full(13, .85)
    for _ in range(2200):
        subset = rng.integers(0, len(x), 128)
        inputs = x[subset]
        hidden = np.tanh(inputs @ a + b)
        error = (hidden @ w + bias - target[subset]) / len(subset)
        backprop = (error @ w.T) * (1 - hidden ** 2)
        a -= .06 * (inputs.T @ backprop)
        b -= .06 * backprop.sum(axis=0)
        w -= .06 * (hidden.T @ error)
        bias -= .06 * error.sum(axis=0)
    return {'hidden': {'bias': rounded(b), 'weights': rounded(a.T)},
            'output': {'bias': rounded(bias), 'weights': rounded(w.T)}}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--test-data', type=Path, default=ROOT / 'benchmark/artifacts/ai-heldout.json')
    args = parser.parse_args()
    train = make_text(np.random.default_rng(2027), 3000, False)
    normalized = [normalize(row['description']) for row in train]
    text_x = np.array([features(NUM.sub('#', t)) for t in normalized])
    heads = {key: fit_head(text_x, [values.index(row[key]) for row in train], len(values))
             for key, values in LABELS.items() if key != 'slot'}
    slot_x, slot_y = [], []
    for row, text in zip(train, normalized):
        matches = list(NUM.finditer(text))
        for i, label in enumerate(row['slotLabels']):
            slot_x.append(features(*context(text, matches, i)))
            slot_y.append(LABELS['slot'].index(label))
    heads['slot'] = fit_head(np.array(slot_x), slot_y, len(LABELS['slot']))
    sketch = fit_sketch(make_sketch(np.random.default_rng(42), 2400, False), np.random.default_rng(43))
    model = {'featureWidth': WIDTH, 'labels': LABELS, 'heads': heads, 'sketch': sketch}
    path = ROOT / 'src' / 'trained-model.js'
    path.write_text('export default ' + json.dumps(model, separators=(',', ':')) + ';\n')
    tests = {'text': make_text(np.random.default_rng(202703), 240, True),
             'sketch': [{'target': rounded(target), 'strokes': strokes}
                        for _, target, strokes in make_sketch(np.random.default_rng(712), 96, True)]}
    args.test_data.parent.mkdir(parents=True, exist_ok=True)
    args.test_data.write_text(json.dumps(tests, ensure_ascii=False) + '\n')
    print(f'Trained on {len(train)} descriptions, {len(slot_y)} number contexts, 2400 sketches; model {path.stat().st_size} bytes.')
    print(f'Held out {len(tests["text"])} descriptions and {len(tests["sketch"])} sketches.')


if __name__ == '__main__':
    main()

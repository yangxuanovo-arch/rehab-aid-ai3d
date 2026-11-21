export const presets = [
  { kind: 'pen', icon: '✎', label: '握笔器', note: '细杆适配 · 握力辅助', description: '右手握力弱，握笔器直径28mm，孔径10mm，长度45mm', profile: [0.7, 0.86, 1, 0.91, 0.96, 0.69] },
  { kind: 'utensil', icon: '♧', label: '餐具手柄', note: '加粗握持 · 勺叉套筒', description: '左手轻微震颤，需要勺子手柄，直径36mm，孔径13mm，长度95mm', profile: [0.65, 0.8, 1, 0.92, 0.83, 0.69] },
  { kind: 'brace', icon: '◫', label: '矫形护具', note: '开口结构 · 腕指适配', description: '右侧 wrist brace，前臂周长18cm，长度65mm，壁厚4mm', profile: [0.66, 0.74, 0.88, 0.98, 1, 0.83] },
];

export function outlineFromWidths(widths) {
  const left = [], right = [];
  widths.forEach((width, i) => {
    const y = 0.15 + 0.70 * i / (widths.length - 1);
    left.push([0.5 - 0.23 * width, y]);
    right.push([0.5 + 0.23 * width, y]);
  });
  return [[...left, ...right.reverse(), left[0]]];
}

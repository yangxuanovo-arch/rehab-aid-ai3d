// The care catalogue is a design aid, not a diagnosis or treatment engine.
export const aids = [
  { id: 'pen', label: '握笔器', icon: '01', task: '书写', family: 'pen', note: '放大细杆，减少捏持', description: '右手握力弱，握笔器直径28mm，孔径10mm，长度45mm', measure: '测量笔杆外径，并在孔径中预留装配间隙；外径按舒适握持调整。', use: '先在桌面装入笔杆，检查不会滑脱，再尝试短时间书写。', limits: '不用于矫正手指姿势或治疗震颤。', orientation: '套筒端面朝下，孔轴竖直；先确认首层与孔径补偿。', material: 'PLA 可做尺寸样件；接触边缘需打磨，无尖角后再做非医疗评估。' },
  { id: 'utensil', label: '餐具加粗柄', icon: '02', task: '进食', family: 'utensil', note: '勺叉握持，减少紧握', description: '左手握力弱，需要餐具手柄，直径36mm，孔径13mm，长度95mm', measure: '测量原餐具手柄最宽处；当前圆孔不适合所有扁柄，需先试装。', use: '先用空勺验证防滑与控制，再在看护下评估；不改变吞咽能力。', limits: '不能解决吞咽障碍；不得把未验证的打印件伸入口腔或直接接触食物。', orientation: '端面朝下，孔轴竖直；检查细长件附着，必要时加 brim。', material: '仅作手柄外套样件；层纹难清洁，不宣称食品级，不高温消毒。' },
  { id: 'toothbrush', label: '牙刷加粗柄', icon: '03', task: '洗漱', family: 'utensil', note: '大握把，适配细柄', description: '右手握力弱，牙刷加粗手柄，直径32mm，孔径12mm，长度85mm', measure: '测量牙刷柄截面；圆孔只作初步适配，非圆柄需要另行设计。', use: '仅握持外套，不入口；先在干燥状态检查固定，湿手状态另做防滑评估。', limits: '不适合电动牙刷充电触点周围；不可遮挡排水或拆卸位置。', orientation: '端面朝下，孔轴竖直；确认内孔无支撑残留。', material: '先用 PLA 试尺寸；潮湿环境材料和清洁方式需另行验证，使用后保持干燥。' },
  { id: 'key', label: '钥匙助转柄', icon: '04', task: '开门', custom: true, note: '扩大力臂，平面钥匙槽', measure: '测量钥匙头的长宽与厚度；槽应配合钥匙头而不是钥匙齿。', use: '当前是通槽试配原型，需要另行设计可靠锁紧后才能转动钥匙；不要强扭卡住的锁。', limits: '不适配汽车电子钥匙；通槽本身不能可靠固定钥匙。', orientation: '大平面贴平台，无需把钥匙槽转为水平悬空。', material: 'PLA 仅做试配；实际扭转载荷需材料、锁紧结构与耐久试验，不能按预览直接使用。' },
  { id: 'zipper', label: '拉链拉环', icon: '05', task: '穿衣', custom: true, note: '双孔结构，便于勾拉', measure: '测量可供连接绳通过的拉链孔；连接孔不是卡扣，请另配短绳。', use: '用短绳连接小孔，在不穿衣的状态下先测试拉动与松脱；不要绕颈或长距离悬垂。', limits: '不用于儿童用品、承重或快速脱离要求的装备。', orientation: '大平面贴平台，两孔朝上；检查小孔是否被首层挤压堵塞。', material: 'PLA 可做形状试样；边缘打磨后检查绳结、裂纹和勾挂风险。' },
  { id: 'page', label: '拇指翻书架', icon: '06', task: '阅读', custom: true, note: '拇指圆孔，双翼压页', measure: '测量拇指最粗处并预留松量；孔径仅为模板输入，不代表人体适配。', use: '放在摊开的书页上，轻触双翼评估压页；拇指不应被夹紧，不要强行套入。', limits: '有手指肿胀、感觉减退或皮肤损伤时不试戴；不是固定手指的矫形器。', orientation: '双翼平放平台，圆孔朝上；取件后去除孔边毛刺。', material: '先做低成本尺寸样件；避免锐边与过紧环孔。' },
  { id: 'wrist', label: '开口腕托', icon: '07', task: '支托展示', family: 'brace', note: '开口环，腕围参数化', description: '右侧护腕，腕围180mm，长度65mm，壁厚4mm', measure: '腕围、长度须由专业人员定义；模板间隙不是临床配适数据。', use: '只展示开口壳体与尺寸，不可直接打印后佩戴；先由康复治疗师评估压力点和关节活动。', limits: '不用于骨折固定、术后保护或治疗；尚无绑带、衬垫和临床验证。', orientation: '按默认长轴竖直进行软件切片评估；需要支撑时避免接触皮肤的一侧留残点。', material: '仅做展示样件；材料、衬垫、接触压力及清洁流程都未验证。' },
  { id: 'finger', label: '开口指托', icon: '08', task: '支托展示', family: 'brace', note: '短壳体，独立指围', description: '左手护指，指围60mm，长度34mm，壁厚3mm', measure: '指围应由专业人员测量；不得通过缩小周长形成夹紧固定。', use: '只展示指托壳体；不用于自行固定、拉伸或矫正手指。', limits: '急性受伤、肿胀、麻木或皮肤破损需要先就医；不应试戴。', orientation: '长轴竖直；检查薄壁与开口边缘，软件筛查不等于可安全佩戴。', material: '仅作设计展示；无压力、疲劳、皮肤接触或临床验证。' },
];

export const conditions = [
  { id: 'weak', label: '握力下降 / 中风后', summary: '如果主要困难是握不住细杆，可先比较加粗握持方案；需有主动控制能力。', choices: ['pen', 'utensil', 'toothbrush'], caution: '中风后有痉挛、肩手综合征或感觉障碍时，先请治疗师评估，不能仅按病名选择。' },
  { id: 'joint', label: '关节不适 / 捏持费力', summary: '按要完成的动作挑选：放大握持面积，或减少精细捏持。', choices: ['key', 'zipper', 'pen'], caution: '急性疼痛、明显肿胀或红热时暂停试用；这些原型不是关节炎治疗方案。' },
  { id: 'tremor', label: '手部震颤', summary: '可探索较大的接触面，但加粗不等于减震，也没有加重或稳定机构。', choices: ['utensil', 'pen', 'page'], caution: '不能保证抑制震颤；先评估能否控制工具，进食时尤其注意热液与尖锐餐具。' },
  { id: 'dexterity', label: '精细动作困难', summary: '把小拉片、细笔杆或翻页动作换成较大的抓握目标。', choices: ['zipper', 'page', 'toothbrush'], caution: '先检查感觉、视力与主动活动能力；手指环孔不能紧勒。' },
  { id: 'support', label: '腕指支托需求', summary: '浏览腕托与指托的尺寸结构，作为与康复治疗师沟通的设计示意。', choices: ['wrist', 'finger'], caution: '支托模板仅用于设计展示，不提供诊断或佩戴处方，不可用于急性损伤固定。' },
];

export const aidById = id => aids.find(aid => aid.id === id);

export function guideFor(aid, params) {
  return {
    aid: aid.label, status: '设计原型 / 软件仿真，未实体打印、未临床验证',
    measurement: aid.measure,
    dimensions: Object.fromEntries(Object.entries(params).filter(([key, value]) => typeof value === 'number')),
    print: [aid.orientation, '参考起点：0.4 mm 喷嘴、0.2 mm 层高、3–4 道外墙、20–30% 填充；不是经过验证的生产工艺。', aid.material, '导入切片器时使用毫米；检查实际尺寸、首层、孔洞、支撑和层间方向，再生成 G-code。'],
    use: [aid.use, aid.limits, '出现疼痛、麻木、压痕或皮肤变色立即停止。先进行尺寸与固定方式评估，不能仅凭几何筛查投入使用。'],
  };
}

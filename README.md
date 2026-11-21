# 适形工坊｜草图＋文字康复辅具生成器

「适形工坊」是一个无需登录、完全在浏览器中运行的设计原型。用户可以生成握笔器、餐具手柄以及开口式腕／指护具，预览模型并下载毫米单位的 STL。输入不上传；无模型 API、账号或后端。

**免登录演示**：[打开适形工坊](https://rawcdn.githack.com/yangxuanovo-arch/rehab-aid-ai3d/1640ce78ed3f46abeac8aff4e598146b4365e764/index.html)。若 RawGitHack 显示外部内容提示，点击 **Open the page** 即可，无需账号。此地址指向公开 `site` 分支上的一个静态构建版本；发布新版本时，将 `npm run build` 生成的 `dist/` 内容更新到该分支，再用新的提交 SHA 更新演示链接。

备用部署：[GitHub Pages](https://yangxuanovo-arch.github.io/rehab-aid-ai3d/) 需先由仓库管理员在 [Settings → Pages](https://github.com/yangxuanovo-arch/rehab-aid-ai3d/settings/pages) 将 Source 设为 **GitHub Actions**。启用后，合并到 `main` 触发 [Deploy GitHub Pages](.github/workflows/pages.yml)；也可在 Actions 手动运行。

## 试用或本地运行

打开网页后，点击「握笔器」「餐具手柄」「矫形护具」，即可填入草图及需求、生成模型。默认打开握笔器样例。也可以清空后从上到下画出辅具左右外缘，填写例如「右手握力弱，握笔器直径28mm，孔径10mm」或 `left wrist brace circumference 18cm length 65mm wall 4mm`，再点「生成 3D 原型」。支持 `mm`、`cm`、毫米、厘米。下载 STL 后用切片器按毫米导入。

```sh
# Node.js 22.12+。
npm ci
npm test
npm run dev
# 生产构建及本地预览
npm run build
npm run preview
```

## 实现路线

- **文字 → 参数**：在中英文字符 n-gram 特征上训练 softmax 分类器，预测类别、侧别、握持辅助、腕／指及每个数值的尺寸槽。尺寸统一换算成毫米。低分、明确规则冲突和缺失值依次由规则或模板处理；手动选择优先。
- **草图 → 轮廓**：在纵向 13 个位置采样外缘，通过在合成草图上训练的 32 隐层单元回归网络，预测用于生成外壁的归一化轮廓。草图不用于实物测量。有效扫描线不足时回退到模板并提示。
- **本地推理**：训练权重与 JS 一同发布，不从模型平台下载，也不调用第三方推理服务或上传输入。展开「参数来源」可查看模型／规则／手动／默认来源、文字分类分数和草图采样覆盖率。模型分数不是校准后的正确概率；草图覆盖率不是模型精度。
- **参数 → 网格**：握笔器与餐具手柄是通孔套筒；护具是侧边封闭的 C 形曲面壳体，护腕／护指有不同的尺寸范围和默认开口。Three.js 预览，STL 使用同一三角网格。
- **浏览器几何筛查**：检查非退化、闭合、定向的三角流形；按模板求最薄处、识别非底面向下超过 45° 的悬垂面、核对 220×220×250 mm 构建空间。体积换算 PLA 实心质量，按固定体积流率和层间开销给出粗略用时。梁／开口环公式提供简化的应力估算，不替代离线有限元或真实切片。

**作品只做切片与仿真，没有进行实体打印、人体试验或临床验证。护具仅供设计展示，不用于医疗佩戴。** 套筒采用圆形通孔原型，不保证实际装配、止转或防脱。

## 模型训练与可复现基准

在 Linux 上安装 Node.js、Python 3.10+ 和 PrusaSlicer CLI（Ubuntu 仓库包名 `prusa-slicer`）。运行：

```sh
npm ci
python3 -m venv .venv
.venv/bin/pip install -r scripts/requirements-benchmark.txt
OPENBLAS_NUM_THREADS=1 .venv/bin/python scripts/train_ai.py
node scripts/benchmark-ai.mjs
.venv/bin/python scripts/benchmark.py --ai
```

模型训练使用 3,000 个合成文字描述、7,122 个数值上下文和 2,400 个合成草图。使用不同种子留出 240 条描述和 96 个草图，比较类别准确率、尺寸槽 F1、MAE、模型体积及本地推理耗时；另将 192 条支持类别的描述与草图配对验证生成流程。样例不含患者数据；合成样例不能代表真实使用效果。详情：[模型结果](benchmark/results/ai.md) · [逐例记录](benchmark/results/ai.json)。

可通过 `PRUSA_SLICER=/path/to/prusa-slicer` 指定切片器。切片／有限元脚本用固定的另 36 个合成输入（每类 12 个）测试从浏览器同款生成器到 G-code 的流程；四个代表样例使用 TetGen 和 scikit-fem 分别评估参考 PLA、PETG 参数。有限元条件与实际打印件的层向属性、空隙和填充不同，参考裕量不是安全认证。去掉 `--ai` 可复跑纯规则基线。

| 记录 | 位置 |
|---|---|
| AI 切片／有限元 | [中文汇总与原始记录索引](benchmark/results/ai-print/summary.md) |
| 纯规则基线中文汇总／逐例 CSV | [summary.md](benchmark/results/summary.md) · [summary.csv](benchmark/results/summary.csv) |
| 草图、描述、耗时、尺寸及几何检查原始记录 | [generation.json](benchmark/results/generation.json) |
| 切片配置、用时估计、耗材、层数 | [slicing.json](benchmark/results/slicing.json) |
| 网格与材料配置、边界条件、位移／应力／裕量 | [fea.json](benchmark/results/fea.json) |
| 测量环境与版本 | [environment.json](benchmark/results/environment.json) |

STL、G-code、切片日志、有限元表面及 VTU 场数据在 `benchmark/artifacts/`（AI 切片为 `benchmark/artifacts/ai-print/`）中按编号生成，不纳入 Git；运行上述基准即可重建。浏览器耗时和其他机器的离线耗时可能不同。

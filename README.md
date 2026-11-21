# 适形工坊｜草图＋文字康复辅具生成器

「适形工坊」是一个无需登录、完全在浏览器中运行的设计原型。用户可以生成握笔器、餐具手柄以及开口式腕／指护具，预览模型并下载毫米单位的 STL。输入不上传；无模型 API、账号或后端。

**免登录演示**：[打开适形工坊](https://rawcdn.githack.com/yangxuanovo-arch/rehab-aid-ai3d/35e44ba7f5f26cd7757f23b74bef98297625e4e3/index.html)。若 RawGitHack 显示外部内容提示，点击 **Open the page** 即可，无需账号。此地址指向公开 `site` 分支上的一个静态构建版本；发布新版本时，将 `npm run build` 生成的 `dist/` 内容更新到该分支，再用新的提交 SHA 更新演示链接。

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

- **文字 → 参数**：中英文规则／关键词提取类别、侧别、握持需求以及尺寸；未识别参数用模板默认值，超出范围的输入会提示。不是大语言模型或照片重建。
- **草图 → 轮廓**：在纵向 13 个位置提取线条最左与最右的交点间距并平滑。归一化轮廓驱动各高度的外壁，文字尺寸提供毫米尺度。不从像素推算真实人体尺寸；交点不足时回退到默认轮廓并提示。
- **参数 → 网格**：握笔器与餐具手柄是通孔套筒；护具是侧边封闭的 C 形曲面壳体，护腕／护指有不同的尺寸范围和默认开口。Three.js 预览，STL 使用同一三角网格。
- **浏览器几何筛查**：检查非退化、闭合、定向的三角流形；按模板求最薄处、识别非底面向下超过 45° 的悬垂面、核对 220×220×250 mm 构建空间。体积换算 PLA 实心质量，按固定体积流率和层间开销给出粗略用时。梁／开口环公式提供简化的应力估算，不替代离线有限元或真实切片。

**作品只做切片与仿真，没有进行实体打印、人体试验或临床验证。护具仅供设计展示，不用于医疗佩戴。** 套筒采用圆形通孔原型，不保证实际装配、止转或防脱。

## 可复现基准

在 Linux 上安装 Node.js、Python 3.10+ 和 PrusaSlicer CLI（Ubuntu 仓库包名 `prusa-slicer`）。运行：

```sh
npm ci
python3 -m venv .venv
.venv/bin/pip install -r scripts/requirements-benchmark.txt
.venv/bin/python scripts/benchmark.py
```

可通过 `PRUSA_SLICER=/path/to/prusa-slicer` 指定切片器。脚本运行与浏览器相同的生成器，基于 36 个合成输入（每类 12 个，不含患者数据），记录每例三次计时、生成／几何筛查结果以及真实 PrusaSlicer 生成的 G-code 统计。四个代表样例（握笔器、餐具手柄、护腕和护指）使用 TetGen 四面体划分、scikit-fem 解线弹性问题，分别评估参考 PLA、PETG 参数。有限元条件与实际打印件的层向属性、空隙和填充不同，参考裕量不是安全认证。

| 记录 | 位置 |
|---|---|
| 中文汇总／逐例 CSV | [summary.md](benchmark/results/summary.md) · [summary.csv](benchmark/results/summary.csv) |
| 草图、描述、耗时、尺寸及几何检查原始记录 | [generation.json](benchmark/results/generation.json) |
| 切片配置、用时估计、耗材、层数 | [slicing.json](benchmark/results/slicing.json) |
| 网格与材料配置、边界条件、位移／应力／裕量 | [fea.json](benchmark/results/fea.json) |
| 测量环境与版本 | [environment.json](benchmark/results/environment.json) |

STL、G-code、切片日志、有限元表面及 VTU 场数据在 `benchmark/artifacts/` 中按编号生成，不纳入 Git；运行上述基准即可重建。浏览器耗时和其他机器的离线耗时可能不同。

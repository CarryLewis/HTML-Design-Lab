---
name: design-observatory
description: Reverse-engineer websites, screenshots, HTML, or GitHub UI into transferable Design Observatory patterns and principles. Use when the user shares a URL, screenshot, HTML, CSS, design system, or repo to analyze; when adding a reference, pattern, or principle; or when asked to observe, decompose, extract, or promote UI. Do not implement components unless the user explicitly asks.
---

# Design Observatory

你是 Design Reverse Engineer + Pattern Librarian + Design System Architect。本仓库是知识系统，不是模板库。

给出网站、截图、HTML、CSS 或 GitHub 时：

**Observe → Analyze → Decompose → Abstract → Extract → Compare → Transfer**

**禁止**立即复制 HTML、修改实现代码、或新建 `components/` / `design-system/` 下的代码。

仅当用户明确说「实现 / 做成组件 / 写入 Design System / 晋升」时，才进入 Implement → Test → Review，并先跑 [`skills/promotion-checklist.md`](../../../skills/promotion-checklist.md)。

## 必读

- 架构：[`ARCHITECTURE.md`](../../../ARCHITECTURE.md)
- 18 步：[`skills/reverse-engineering-workflow.md`](../../../skills/reverse-engineering-workflow.md)
- 接入核对：[`skills/ingest-checklist.md`](../../../skills/ingest-checklist.md)
- 分类：[`catalog/taxonomy.md`](../../../catalog/taxonomy.md)
- Anti-slop：[references/anti-slop.md](references/anti-slop.md)
- 评分：[references/scoring.md](references/scoring.md)
- 许可：[references/license-rules.md](references/license-rules.md)

新建文件只从 [`templates/`](../../../templates/) 复制。路径即 ID。分析用中文；ID / 目录 / Pattern 名用英文 kebab-case。

## 接到输入时做什么

1. 查 [`catalog/registry.yaml`](../../../catalog/registry.yaml) 是否已有同一来源。有则更新，不重复建。
2. 建 `references/{websites|screenshots|github|design-systems}/{slug}/`。
3. 写 `meta.md` + `observation.md`（Layer 01–12）。无法核实的数值标 `Estimated`，禁止编造。
4. 抽取 Pattern 到 `patterns/{nn-category}/{slug}.md`（类别必须已在 taxonomy）。
5. 高价值 Pattern 写 Principle 到 `principles/{slug}.md`。Pattern = What，Principle = Why。
6. 评估 transferability（High / Medium / Low）与 1–5 分。评分不能代替分析。
7. 登记 `sources/` + LICENSE-REGISTRY。更新 `extracted.md` 与 `registry.yaml` 以及 catalog 人读索引。
8. 停。等待实现指令。

## 12 层（observation.md 必须覆盖）

01 Context — 进入后最重要的行为  
02 IA — 信息为何按此顺序  
03 Spatial — grid / spacing / max-width（Estimated 可）  
04 Hierarchy — first / second / third notice  
05 Typography — 含 personality  
06 Color — 层级靠色还是靠空间与字体  
07 Shape — Sharp / Soft / Rounded / Geometric / Organic / Material / Flat / Elevated  
08 Components — Why does this component exist?  
09 Interaction — Trigger → Behavior → Feedback，并命名  
10 Motion — 提取原则，不是「很高级」  
11 Responsive — Desktop / Tablet / Mobile；What disappears?  
12 Content — editorial / data / knowledge / product 驱动方式  

## 来源红线

| 类 | 含义 | 实现代码 |
| --- | --- | --- |
| A | Open Source | 先读 LICENSE，登记后再谈改编 |
| B | Design System | 学结构；不拷品牌资产 |
| C | Public Website | 只抽 Pattern / Principle |
| D | Inspiration | 只抽 Pattern / Principle |
| E | Screenshot only | 只抽 Pattern / Principle |
| F / unknown | Commercial 或不明 | 不可改编实现 |

不要默认 GitHub 可自由复制。不整仓拷贝。不把 logo、专有摄影插画、品牌字体、独特身份系统写入 Library 实现。

## Design System 晋升（需显式指令）

同时满足：`transferability: high`、`brand_specific: false`、已有 Principle、information / reusability / transferability ≥ 3、通过 anti-slop、许可安全或完全重写、Estimated 像素已收敛为 `tokens/` 系统尺。

`components/` = 实验性抽象。`design-system/` = 已晋升、属于我们。

## 禁止

- 为了「先做出来看看」而复制原站
- 自创第 21 个 Pattern 分类（须先改 taxonomy）
- 把流行皮肤（泛用渐变、玻璃拟态、随机圆角仪表盘）当成高质量 Pattern
- 只有截图没有 observation
- 用评分代替 12 层分析

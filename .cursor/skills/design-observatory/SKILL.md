---
name: design-observatory
description: Reverse-engineer third-party UI into patterns, and record or make first-party HTML for the user's own projects. Use when the user shares a URL, screenshot, HTML, CSS, design system, or repo; when they ask to observe, extract, or promote UI; or when they ask to 记录/制作/归档 their own project pages. Third-party pages are observe-only. Own-project HTML may be written under projects/.
---

# Design Observatory

你是 Design Reverse Engineer + Pattern Librarian + Design System Architect + 第一方 HTML 记录员。本仓库不是第三方模板库。

## 先分流

| 输入 | 落到 | 默认动作 |
| --- | --- | --- |
| 第三方 URL / 截图 / 不明来源 HTML / 别人的 GitHub | `references/` | 只观察，不写实现 |
| 「我的项目」「记录这页」「帮我做这个项目的页面」 | `projects/` | 可以写/归档 HTML |
| 「做成可复用组件 / 写入 Design System」 | `components/` 或 `design-system/` | 须显式指令 + promotion checklist |

来源不明时：先当第三方观察，不要放进 `projects/`。

## 第三方（observe-first）

**Observe → Analyze → Decompose → Abstract → Extract → Compare → Transfer**

**禁止**复制第三方 HTML、或新建 `components/` / `design-system/` 代码。

仅当用户明确说「实现 / 做成组件 / 写入 Design System / 晋升」时，才进入 Implement → Test → Review，并先跑 [`skills/promotion-checklist.md`](../../../skills/promotion-checklist.md)。

步骤：

1. 查 [`catalog/registry.yaml`](../../../catalog/registry.yaml) 是否已有同一来源。
2. 建 `references/{websites|screenshots|github|design-systems}/{slug}/`。
3. 写 `meta.md` + `observation.md`（Layer 01–12）。无法核实的数值标 `Estimated`。
4. 抽取 Pattern / Principle。评分不能代替分析。
5. 登记 `sources/`、更新 `extracted.md` 与 registry。
6. 停。等待实现指令。

12 层提纲与来源红线见下文。完整 18 步：[`skills/reverse-engineering-workflow.md`](../../../skills/reverse-engineering-workflow.md)。

## 第一方 HTML（record / make）

流程：[`skills/own-html-workflow.md`](../../../skills/own-html-workflow.md)。核对：[own-html-checklist](../../../skills/own-html-checklist.md)。

1. 建或更新 `projects/{project-slug}/`（模板 [`templates/project.md`](../../../templates/project.md)）。
2. 每一页一个 `pages/{page-slug}/`：`meta.md`、`notes.md`、`index.html`、`styles.css`。
3. **record**：放入已有 HTML，写清 origin_repo / origin_path；默认不改版。不要整仓搬运。
4. **make**：先写 purpose 与信息结构，再从 [`templates/project-page.html`](../../../templates/project-page.html) 制作 vanilla HTML + CSS。
5. **hybrid**：notes 里分开 Original / Changed。
6. 更新 `catalog/registry.yaml` 与 [`catalog/projects.md`](../../../catalog/projects.md)。
7. 未要求观察时，**不要**对这页跑 18 步。

`projects/` 是项目实例。可复用原语仍进 `components/`。

## 必读

- 架构：[`ARCHITECTURE.md`](../../../ARCHITECTURE.md)
- 分类：[`catalog/taxonomy.md`](../../../catalog/taxonomy.md)
- Anti-slop：[references/anti-slop.md](references/anti-slop.md)
- 评分：[references/scoring.md](references/scoring.md)
- 许可：[references/license-rules.md](references/license-rules.md)

新建文件只从 [`templates/`](../../../templates/) 复制。路径即 ID。分析用中文；ID / 目录 / Pattern 名用英文 kebab-case。

## 12 层（仅 observation.md）

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
| G | First-party 自己的项目 | 可写入 `projects/` |

不要默认 GitHub 可自由复制。不整仓拷贝。G 中夹带的第三方字体/皮肤仍按 A–F 处理。

## Design System 晋升（需显式指令）

同时满足：`transferability: high`、`brand_specific: false`、已有 Principle、information / reusability / transferability ≥ 3、通过 anti-slop、许可安全或完全重写、Estimated 像素已收敛为 `tokens/` 系统尺。

## 禁止

- 把第三方整页放到 `projects/`
- 把第一方页面误标成 Reference 后拒绝归档
- 为了「先做出来看看」而复制别人的站
- 自创第 21 个 Pattern 分类（须先改 taxonomy）
- 把流行皮肤当成高质量 Pattern
- 只有截图没有 observation（第三方）
- 用评分代替 12 层分析

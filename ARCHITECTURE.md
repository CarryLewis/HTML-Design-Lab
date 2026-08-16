# Design Observatory Architecture

HTML-Design-Lab 的知识系统。本文是目录契约、身份边界与晋升规则的权威说明。

相关操作清单：

- 18 步拆解：[skills/reverse-engineering-workflow.md](skills/reverse-engineering-workflow.md)
- 接入检查：[skills/ingest-checklist.md](skills/ingest-checklist.md)
- 自己的 HTML：[skills/own-html-workflow.md](skills/own-html-workflow.md)
- 晋升检查：[skills/promotion-checklist.md](skills/promotion-checklist.md)
- Cursor Skill：[.cursor/skills/design-observatory/SKILL.md](.cursor/skills/design-observatory/SKILL.md)

---

## 1. 核心哲学

1. **Observe before reproduce** — 先理解问题、用户、信息组织与可抽象部分，再谈实现。
2. **Extract principles, not screenshots** — 截图是输入；最终知识是 Pattern 与 Principle。
3. **Separate appearance from underlying system** — 「巨大标题」不是知识；「大尺度字体作为概念层级与入口」才是。
4. **Design should be transferable** — 每个 Pattern 必须回答 Where else can this be used?

不要把品牌身份当成可复用系统。可以学习布局、层级、交互、信息架构、间距、动效原则、组件结构。谨慎处理 logo、品牌资产、专有插画/摄影、独特身份系统。

---

## 2. 知识晋升管线

两条入管线，汇合到同一套 Pattern / Principle：

```
第三方网站 / 截图 / 开源 UI
→ Reference（observe only）
→ 12-layer Decomposition
→ Pattern / Principle
→ Tokens 与重写 Component
→ Design System

自己的其他项目
→ Project HTML（record 或 make）
→ （可选）观察自己的页面并抽取
→ Pattern / Principle / Design System
```

不能从别人的截图直接变成「我们的组件」。自己的页面可以在 `projects/` 里直接写 HTML。

| 层 | 身份 | 允许做什么 |
| --- | --- | --- |
| **Reference** | 别人的实例 | 观察、拆解、截图、记录来源；不复制品牌资产，不整仓拷贝代码 |
| **Project** | 自己的页面实例 | 记录或制作自己其他项目的 HTML；可以编辑；不要整仓搬运 |
| **Library** | 抽象知识 | Pattern / Principle / Token 草稿；回答 What / Why / Where else |
| **Design System** | 我们的系统 | 仅晋升后的、许可安全的、重写后的实现与 tokens |

`projects/` 是具体项目页面。`components/` 是 Library 里的实验性原语。`design-system/components/` 是已晋升系统。

---

## 3. 目录结构

```
HTML-Design-Lab/
├── README.md
├── ARCHITECTURE.md
├── catalog/
│   ├── taxonomy.md
│   ├── registry.yaml
│   ├── patterns.md
│   └── principles.md
├── templates/
├── references/
│   ├── websites/{slug}/
│   ├── screenshots/{slug}/
│   ├── github/{slug}/
│   └── design-systems/{slug}/
├── projects/{project-slug}/pages/{page-slug}/
├── patterns/{nn-category}/
├── principles/
├── components/{slug}/
├── tokens/
├── design-system/
├── sources/
├── skills/
└── .cursor/skills/design-observatory/
```

### ID 规则

路径即 ID，使用点分英文，避免自增编号：

| 类型 | 格式 | 示例 |
| --- | --- | --- |
| Reference | `ref.{kind}.{slug}` | `ref.web.linear-homepage` |
| Project | `proj.{project}` | `proj.thinking-db` |
| Project page | `proj.{project}.{page}` | `proj.thinking-db.case-page` |
| Pattern | `pat.{category}.{slug}` | `pat.layout.editorial-split-view` |
| Principle | `pri.{slug}` | `pri.typography-as-spatial-architecture` |
| Component | `cmp.{slug}` | `cmp.editorial-split-view` |
| Source | `src.{kind}.{slug}` | `src.github.radix-themes` |

`kind`：`web` / `ss` / `github` / `ds`  
`category`：与 [catalog/taxonomy.md](catalog/taxonomy.md) 中的 slug 一致（如 `layout`，不含序号）。

分析文档用中文。ID、Pattern 名、目录名用英文 kebab-case。

---

## 4. Reference

一类来源一个文件夹。禁止把截图或 HTML 扔在仓库根目录。

```
references/{kind}/{slug}/
├── meta.md
├── observation.md
├── screenshots/
├── code-notes.md      # 仅开源且已记录许可时
└── extracted.md
```

`kind` 目录：`websites` / `screenshots` / `github` / `design-systems`。

### 来源分类

| 代码 | 类型 | 默认可改编实现 |
| --- | --- | --- |
| A | Open Source | 仅在读完 LICENSE 并登记后 |
| B | Design System | 视许可；通常可学结构，不可拷品牌资产 |
| C | Public Website | 否。只抽 Pattern / Principle |
| D | Inspiration | 否 |
| E | Screenshot only | 否 |
| F | Commercial / Proprietary | 否 |

`status`：`captured` → `observing` → `decomposed` → `extracted` → `archived`

### 截图

- 有网站：放在该 reference 的 `screenshots/`
- 无网站：`references/screenshots/{slug}/`，仍须写 `observation.md`
- 命名：`{viewport}--{optional-section}.png`（`desktop` / `tablet` / `mobile`）
- 多 viewport 必须对比：What disappears / What becomes more important
- 超大原图不入库（`*.orig.png`、`raw/`）
- 禁止只有图没有 `observation.md`

### 代码

即使来源开源，也不整仓复制。先分析架构、组件结构、CSS 策略、tokens、响应式、动效、无障碍、依赖，再提取可复用实现概念并重写。

---

## 5. Project（自己的 HTML）

`projects/` 收录 **自己其他项目** 的页面：可以归档（record），也可以在本仓库制作（make）。

```
projects/{project-slug}/
├── meta.md
├── README.md
└── pages/{page-slug}/
    ├── meta.md
    ├── notes.md
    ├── index.html
    └── styles.css
```

| mode | 含义 |
| --- | --- |
| `record` | 从自己的仓库/路径归档一页，写清 origin，默认不改版 |
| `make` | 在本仓库为该项目写 vanilla HTML + CSS |
| `hybrid` | 归档后再改；notes 里分开 Original / Changed |

分流：第三方 → `references/`；自己的页面 → `projects/`；可复用原语 → `components/`。

规则：

- 不要整仓搬运其他项目，只收需要的页面及其直接样式
- 不要把第三方整页 HTML 放进本目录
- 默认不跑 18 步；只有明确要求观察自己的页面时才拆解
- 制作前写 purpose 与信息结构（见 [skills/own-html-workflow.md](skills/own-html-workflow.md)）

---

## 6. Pattern / Principle / Component

### Pattern = What

一篇一个文件：`patterns/{nn-category}/{slug}.md`。必须回答问题、结构、原则、何时用/不用、可迁移到何处。评分 1–5 不能代替分析。`implementation` 分高表示实现复杂（成本，不是质量加分）。

### Principle = Why

`principles/{slug}.md`。只回答为什么有效。禁止再写具体栏宽比例或品牌皮肤。

### Component

默认不实现。仅在明确要求「实现 / 做成组件 / 写入 Design System」之后，于 `components/{slug}/` 写入 **重写后的** vanilla HTML + CSS。禁止带入原品牌色、字体、logo、插画。

实现路径：Source implementation → Extract concept → Rewrite abstraction → Adapt to our tokens。

---

## 7. Design System 晋升

同时满足才可进入 `design-system/`：

- Pattern `transferability: high` 且 `brand_specific: false`
- 许可允许改编，或实现完全重写且不含原品牌资产
- 已有 Principle
- 已评分，且 **information / reusability / transferability 均 ≥ 3**
- 通过 Anti-slop：设计提升了信息、交互或可迁移身份，而不是流行皮肤
- Tokens 已从观察中的 `Estimated` 像素收敛为系统尺

晋升后 Pattern `status: promoted`。清单见 [skills/promotion-checklist.md](skills/promotion-checklist.md)。

### 只应留在 Reference 的内容

- 截图、原站 URL、整页 HTML、专有摄影/插画/logo
- 品牌特有色彩、字体、吉祥物、图形系统
- 许可不明或商业/专有代码
- 低迁移性、强语境绑定的皮肤
- AI slop 反例（可标 `rejected`，仍属 Reference）
- 未核实的网格数值（标 `Estimated`，不得当作 Design System token）

自己其他项目的整页 HTML 不属于 Reference，放到 `projects/`。

---

## 8. License

[sources/LICENSE-REGISTRY.md](sources/LICENSE-REGISTRY.md) 是总表。开源或可复用来源另写 `sources/{slug}.md`。

默认：**F / unknown = 不可改编实现**。C 与 D 只允许抽象，不允许拷 HTML、logo、插画、摄影。A 必须先读 LICENSE 再标 `license_safe_to_adapt`。不要默认 GitHub 项目可以自由复制。

**G First-party**：自己的项目。HTML 可以进入 `projects/`。仍须在项目 `meta.md` 记录 origin 与 license。夹带的第三方片段（字体、图标、抄来的皮肤）按 A–F 处理，不能因为外层是自己的项目就整段洗白。

---

## 9. Cursor 的职责

Cursor 是 Design Reverse Engineer + Pattern Librarian + Design System Architect + 第一方 HTML 记录员。

- 第三方网站 / 截图 / 不明 HTML：观察与抽取，**不写实现代码**
- 自己的项目、或「记录/制作我的页面」：写入 `projects/`，可以写 HTML
- 「做成组件 / 写入 Design System」：先跑 promotion checklist，再 Implement → Test → Review

---

## 10. Anti-slop

判断标准：Does the design improve information, interaction or identity?

主动识别并避免：泛用渐变、过度玻璃拟态、随机圆角卡片、过度阴影、无意义动画、泛用 dashboard 布局、pill 滥用、随机图标、装饰 blob、AI 视觉陈词、不一致的间距与字体。流行不等于优秀。

---

## 11. 第一期范围

本仓库当前提供骨架、模板、taxonomy、Skill、空 catalog，以及空的 `projects/` 层。不采集真实第三方网站，不建浏览 UI，不引入打包工具。填充 Reference 或录入第一个自己的项目，需要另一次明确任务。

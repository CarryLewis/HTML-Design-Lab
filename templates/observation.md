---
id: ref.{kind}.{slug}
status: observing
estimated_tokens: true
---

# Observation — {title}

按 12 层拆解。无法核实的数值写 **Estimated**，禁止编造精确 token。截图是输入，本文件才是知识入口。

完成 Layer 01–12 后，将 `meta.md` 的 `status` 改为 `decomposed`，再抽取 Pattern / Principle。

---

## Layer 01 — Context

| 字段 | 内容 |
| --- | --- |
| Website | |
| Page | |
| Purpose | |
| Target user | |
| Primary task | |
| Content type | |
| Business / product context | |

用户进入这个页面以后最重要的行为是什么？

---

## Layer 02 — Information Architecture

- Navigation
- Hierarchy
- Sections
- Content grouping
- Relationships
- Entry points / Exit points
- Primary CTA / Secondary CTA

### 信息树

```
Page
├── Navigation
├── Hero
├── Primary content
│   ├── Section
│   ├── Section
│   └── Section
├── Secondary content
└── Footer
```

Information 为什么以这种顺序出现？

---

## Layer 03 — Spatial System

| 项目 | 值 | 确定 / Estimated |
| --- | --- | --- |
| Viewport | | |
| Max width | | |
| Container | | |
| Grid | | |
| Columns | | |
| Gutters | | |
| Margins | | |
| Padding | | |
| Vertical rhythm | | |
| Section spacing | | |
| Alignment | | |
| Whitespace | | |

推测（全部标 Estimated 除非能量化）：

- Grid system
- Spacing scale
- Container width
- Column ratio

---

## Layer 04 — Visual Hierarchy

用户第一眼看到什么？

| 层级 | 元素 | Size / Weight / Contrast / Position / Density / Whitespace / Color / Motion |
| --- | --- | --- |
| Primary | | |
| Secondary | | |
| Tertiary | | |
| Metadata | | |

What does the designer want the user to notice first, second and third?

---

## Layer 05 — Typography System

| 项目 | 值 | 确定 / Estimated |
| --- | --- | --- |
| Font family | | |
| Font category | | |
| Sizes | | |
| Weights | | |
| Line height | | |
| Letter spacing | | |
| Text width | | |
| Heading hierarchy | | |
| Body hierarchy | | |
| Metadata typography | | |
| Monospace usage | | |

Typography personality（可多选）：Editorial / Technical / Humanist / Institutional / Minimal / Experimental / Dense / Luxury / Playful

---

## Layer 06 — Color System

| 角色 | 值 | 确定 / Estimated |
| --- | --- | --- |
| Background | | |
| Surface | | |
| Primary text | | |
| Secondary text | | |
| Muted text | | |
| Border | | |
| Accent | | |
| Semantic colors | | |
| Interactive states | | |

- Contrast / Temperature / Saturation / Color density / Accent frequency
- 层级主要靠 **颜色** 还是靠 **空间与 typography**？

---

## Layer 07 — Shape Language

- Border radius / Corner treatment / Line / Border / Shadow / Elevation
- Container / Button / Card / Icon shape

提炼（可多选）：Sharp / Soft / Rounded / Geometric / Organic / Material / Flat / Elevated

---

## Layer 08 — Components

将页面拆成 UI primitives。对每个组件写：

| Component | Why it exists | Structure | Purpose | Content | Hierarchy | State | Interaction | Responsive |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| | | | | | | | | |

不要只复制 HTML。

---

## Layer 09 — Interaction Design

一律写成：

**Trigger → Behavior → Feedback**

然后起 Pattern 名（如 Hover-Reveal）。

覆盖：Hover / Click / Focus / Scroll / Drag / Expand / Collapse / Filter / Search / Navigation / Keyboard / Gesture

---

## Layer 10 — Motion Design

| 类型 | Duration | Easing | Direction | Distance | Opacity | Scale | Trigger |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Entrance | | | | | | | |
| Exit | | | | | | | |
| Transition | | | | | | | |
| Hover | | | | | | | |
| Scroll reveal | | | | | | | |
| Page transition | | | | | | | |
| Micro interaction | | | | | | | |
| Loading | | | | | | | |

提取原则，而不是「动画很高级」。例如：Progressive reveal reduces initial cognitive load while maintaining spatial continuity.

---

## Layer 11 — Responsive Design

至少 Desktop / Tablet / Mobile。

- Grid collapse
- Navigation transformation
- Typography scaling
- Card transformation
- Image behavior
- Spacing changes
- Content prioritization
- Interaction changes

What disappears?

What becomes more important on smaller screens?

---

## Layer 12 — Content Presentation

页面如何展示：Text / Images / Video / Data / Quotes / References / Metadata / Numbers / Dates / Tags / Relationships

驱动方式（择一或组合）：

- Editorial → typography driven
- Data → visualization driven
- Knowledge → relationship driven
- Product → interaction driven

---

## 下一步

- [ ] 抽取 Pattern → `patterns/{nn-category}/{slug}.md`
- [ ] 抽取 Principle → `principles/{slug}.md`
- [ ] 评估 transferability
- [ ] 登记来源与 license
- [ ] 更新 `catalog/registry.yaml`
- [ ] **不要实现组件**，除非被明确要求

---
id: pat.{category}.{slug}
name: ""
category: 01-layout
status: extracted # extracted | evaluated | promoted | rejected
source_refs: []
principles: []
transferability: medium # high | medium | low
brand_specific: false
scores:
  visual: 0
  information: 0
  interaction: 0
  consistency: 0
  accessibility: 0
  reusability: 0
  transferability: 0
  implementation: 0
pattern_score: 0
---

# {name}

复制到 `patterns/{nn-category}/{slug}.md`。`category` 必须已存在于 [catalog/taxonomy.md](../catalog/taxonomy.md)。

评分 1–5。`implementation` 高 = 实现复杂（成本，不是质量加分）。评分不能代替下列分析。

`pattern_score` 建议为除 `implementation` 外七项的算术平均，保留一位小数。

---

## Problem

这个 Pattern 解决什么问题？

## Design Solution

设计如何解决问题？写逻辑，不写品牌皮肤。

## Structure

布局/信息结构。比例无法核实则标 Estimated。

## Visual Characteristics

可迁移的视觉特征（层级、密度、对比），不含 logo 与专有图形。

## Interaction

Trigger → Behavior → Feedback。若无交互，写 None 并说明为何成立。

## Underlying Principle

指向 `pri.{slug}`。此处只写一句 Why，全文放在 Principle 文件。

## Strength

## Weakness

## When to Use

## When NOT to Use

## Transferable To

Original context → Underlying problem → Underlying solution → Potential contexts。

给出 3+ 个迁移场景，并判定 High / Medium / Low transferability。

## Implementation Notes

概念级实现提示（HTML 结构、token 依赖）。不是原站 CSS 粘贴。未获实现指令时不要写代码文件。

## Anti-slop check

- 是否提升了信息、交互或可迁移身份？
- 是否依赖泛用渐变、玻璃拟态、随机圆角、过度阴影、无意义动画、泛用 dashboard、pill 滥用、装饰 blob？
- 结论：keep / revise / reject

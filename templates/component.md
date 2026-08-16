---
id: cmp.{slug}
name: ""
status: draft # draft | implemented | promoted | rejected
pattern_refs: []
principle_refs: []
license_safe_to_adapt: false
brand_assets_removed: false
---

# {name}

仅在明确要求实现之后，把本文件作为 `components/{slug}/README.md`。

实现前确认：

- [ ] 已有 Pattern 与 Principle
- [ ] 许可允许改编，或实现是完全重写
- [ ] 不含 logo / 专有摄影插画 / 品牌字体与独特身份色（除非那就是我们自己的系统）
- [ ] 已做 Anti-slop
- [ ] 使用 `tokens/`，而不是从原站拷贝 CSS

路径：

```
components/{slug}/
├── README.md
├── anatomy.md
├── index.html
└── styles.css
```

代码路径必须是：Source implementation → Extract concept → Rewrite abstraction → Adapt to our tokens。

---

## Why this exists

## Linked knowledge

- Patterns
- Principles
- Tokens

## Anatomy

结构槽位与层级。细节可拆到 `anatomy.md`。

## States

default / hover / focus / disabled / empty / loading（按需）

## Responsive

## Accessibility

## Out of scope

明确不复制的品牌与来源细节。

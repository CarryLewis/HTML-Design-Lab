# Components

Library 层的实验性抽象。默认 **不实现**。

仅当明确要求「实现 / 做成组件」时，才创建 `components/{slug}/`：

```
{slug}/
├── README.md
├── anatomy.md
├── index.html
└── styles.css
```

代码必须是重写后的 vanilla HTML + CSS，使用 `tokens/`，不含原品牌资产。晋升到未来项目前还须通过 [skills/promotion-checklist.md](../skills/promotion-checklist.md)，进入 [design-system/components/](../design-system/components/)。

从 [templates/component.md](../templates/component.md) 复制 README。

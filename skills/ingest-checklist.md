# Ingest checklist

加入任意 Reference 时勾选。未完成前不要谈实现。

## Capture

- [ ] 文件夹位于 `references/websites|screenshots|github|design-systems/{slug}/`
- [ ] `meta.md` 含 id / kind / source_class / status / license 字段
- [ ] 来源分类 A–F 已填，未知则按不可改编处理
- [ ] 截图命名符合 `{viewport}--{section}.png`，无 `raw/` 原图
- [ ] 没有「只有截图、没有 observation.md」

## Decomposition

- [ ] Layer 01–12 均有实质内容，不是标题空壳
- [ ] 已回答：进入后最重要的行为
- [ ] 已回答：信息为何按此顺序
- [ ] 空间 / 字体 / 颜色无法核实处标了 Estimated
- [ ] 交互写成 Trigger → Behavior → Feedback 并已命名
- [ ] 至少考虑 Desktop / Tablet / Mobile；记下消失与被强化的内容

## Extraction

- [ ] 至少抽取可辩护的 Pattern（或明确记录「无可迁移 Pattern」及原因）
- [ ] 高价值 Pattern 有对应 Principle
- [ ] Transferable To 写了 3+ 场景与 High/Medium/Low
- [ ] 已区分品牌身份 vs 可复用逻辑
- [ ] Anti-slop：该设计提升了信息、交互或身份，或已标 rejected

## Source

- [ ] `sources/` 与 LICENSE-REGISTRY 已更新
- [ ] `catalog/registry.yaml` 已追加
- [ ] `catalog/patterns.md` / `principles.md` 人读目录已更新（若有新条目）
- [ ] `extracted.md` 列出 Pattern / Principle IDs
- [ ] **未**拷贝整页 HTML、logo、专有摄影插画
- [ ] **未**创建 `components/` 或 `design-system/` 代码（除非有明确实现指令）

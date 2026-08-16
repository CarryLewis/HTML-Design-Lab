# Promotion checklist

把 Library 中的 Pattern / Token / Component 晋升到 `design-system/` 之前必须全部满足。

默认不晋升。需要用户明确说「写入 Design System / 晋升」。

## Knowledge

- [ ] Pattern `status` 已是 `evaluated`（先评完再晋升）
- [ ] `transferability: high`
- [ ] `brand_specific: false`
- [ ] 已有 Principle，且 Statement 能脱离原站成立
- [ ] Transferable To 不是原品类的同义词重复

## Quality

- [ ] `scores.information` ≥ 3
- [ ] `scores.reusability` ≥ 3
- [ ] `scores.transferability` ≥ 3
- [ ] 其余分数已填写，不是全 0
- [ ] Anti-slop 结论为 keep（见 [anti-slop](../.cursor/skills/design-observatory/references/anti-slop.md)）

## License

- [ ] 实现是完全重写，或来源许可明确允许改编
- [ ] `license_safe_to_adapt` 与 LICENSE-REGISTRY 一致
- [ ] 无 logo、品牌字体文件、专有插画/摄影、独特身份色硬编码为「我们的品牌」
- [ ] C / D / E / F / unknown 来源没有被当成可复制代码

## Tokens and implementation

- [ ] 观察中的 Estimated 像素已收敛进 `tokens/` 的系统尺，而不是原站魔法数
- [ ] `components/{slug}/` 若存在：vanilla HTML + CSS，解剖清晰，有基本状态与可访问性说明
- [ ] 代码路径是 Extract → Rewrite → Adapt，不是复制

## Bookkeeping

- [ ] 文件进入 `design-system/foundations/` 或 `design-system/components/`
- [ ] Pattern `status: promoted`
- [ ] `catalog/registry.yaml` 的 `design_system` 列表已追加
- [ ] Design System README 索引已更新

任一项不满足：留在 Reference 或 Library，不要标 promoted。

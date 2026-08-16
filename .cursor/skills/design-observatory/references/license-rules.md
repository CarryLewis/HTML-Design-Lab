# License rules

许可未查清之前，当作不可改编实现。不要默认 GitHub 可以自由复制。

## 来源分类

| 代码 | 类型 | Pattern / Principle | 重写实现 | 拷贝代码或资产 |
| --- | --- | --- | --- | --- |
| A | Open Source | 可以 | 读完 LICENSE 并登记后 | 仅许可允许的范围，且须摘录而非整仓 |
| B | Design System | 可以 | 视许可 | 品牌资产一律不拷 |
| C | Public Website | 可以 | 仅完全重写的抽象，且无品牌资产 | 否 |
| D | Inspiration | 可以 | 否（除非用户坚持完全重写且无资产） | 否 |
| E | Screenshot only | 可以 | 否 | 否 |
| F | Commercial / Proprietary | 可以抽象逻辑 | 否 | 否 |
| G | First-party（自己的项目） | 可以 | 写入 `projects/` | 可以收录自己的页面；夹带的第三方片段仍按 A–F |
| unknown | 未查清 | 可以观察 | 否 | 否 |

## 必须登记

开源或准备改编的来源：`sources/{slug}.md` + [`sources/LICENSE-REGISTRY.md`](../../../../sources/LICENSE-REGISTRY.md)。

字段：Repository / Author / License (SPDX) / URL / Framework / Dependencies / Relevant files / What we may adapt / What we must not copy。

## 禁止进入 Design System 的

- Logo、品牌色作为「我们的品牌」、品牌字体文件
- 专有摄影、插画、吉祥物、独特图形系统
- 整页 HTML/CSS
- LICENSE 为 unknown / proprietary / 明确 NC 或闭源且用户要「复制」

C 类网站可以产生 `pat.*` 与 `pri.*`。它们描述结构与原则。实现必须是我们重写的骨架，使用 `tokens/`，不能让人认成原品牌。

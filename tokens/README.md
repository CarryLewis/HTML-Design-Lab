# Tokens

设计尺的草稿与系统值。观察阶段的像素标 **Estimated**，写在 Reference 的 observation 里，**不要**直接当成本目录的正式 token。

晋升进 Design System 时，把多次出现的尺度收敛到这里，再被 `design-system/` 引用。

| 文件 | 收什么 |
| --- | --- |
| [color.md](color.md) | 角色色（background / surface / text / border / accent / semantic），不是某品牌的专有色盘 |
| [typography.md](typography.md) | 字号、行高、字重、行长；personality 只作注释 |
| [spacing.md](spacing.md) | 间距尺度（优先 4/8 系，除非观察反复证明另一尺度） |
| [radius.md](radius.md) | 圆角阶梯 |
| [shadow.md](shadow.md) | 层级，而不是装饰阴影 |
| [motion.md](motion.md) | duration / easing / 触发原则 |
| [breakpoints.md](breakpoints.md) | Desktop / Tablet / Mobile 及中间值 |

当前为空。没有从真实网站晋升过来的值。禁止为了「看起来完整」而编造色板或 8px 系统。

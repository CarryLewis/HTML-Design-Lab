# Scoring

每个 Pattern 评 1–5。评分是压缩信号，**不能代替** 12 层分析与 Transferable To。

| 维度 | 问什么 |
| --- | --- |
| visual | 层级与密度是否克制、是否服务阅读而非装饰 |
| information | 用户能否更快完成主任务、信息顺序是否成立 |
| interaction | Trigger → Behavior → Feedback 是否可预测、是否减少认知负担 |
| consistency | 内部规则是否可复述（间距、类型、形状） |
| accessibility | 对比、焦点、语义、运动是否可被残障用户使用（未知则保守打分并注明） |
| reusability | 去掉品牌后结构是否仍可用 |
| transferability | 能否迁到完全不同的内容域 |
| implementation | **成本**：越高越复杂。不计入 `pattern_score` 平均 |

`pattern_score` = 前七项的算术平均，一位小数。

晋升阈值（见 [`skills/promotion-checklist.md`](../../../../skills/promotion-checklist.md)）：

- `information` ≥ 3
- `reusability` ≥ 3
- `transferability` ≥ 3
- 且 `transferability` 字段为 `high`
- Anti-slop = keep

未观察响应式或交互时，对应维度不要打 5。无法判断可访问性时打 ≤ 3 并写原因。

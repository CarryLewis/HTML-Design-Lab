# Pattern Taxonomy

锁定的 20 类。新建 Pattern 必须放入已有类别。禁止随手新建分类文件夹。

| 序号 | 目录 | category slug | 收什么 |
| --- | --- | --- | --- |
| 01 | [patterns/01-layout](../patterns/01-layout/) | `layout` | 网格、分栏、页面骨架、区域比例 |
| 02 | [patterns/02-navigation](../patterns/02-navigation/) | `navigation` | 顶栏、侧栏、面包屑、目录、跨页路径 |
| 03 | [patterns/03-typography](../patterns/03-typography/) | `typography` | 字号层级、行长、标题作为空间结构 |
| 04 | [patterns/04-color](../patterns/04-color/) | `color` | 色彩角色、强调频率、用色还是用空间做层级 |
| 05 | [patterns/05-content](../patterns/05-content/) | `content` | 正文、引用、元数据、图文关系的组织方式 |
| 06 | [patterns/06-cards](../patterns/06-cards/) | `cards` | 卡片解剖、密度、集合与单卡 |
| 07 | [patterns/07-data](../patterns/07-data/) | `data` | 表格、统计、数值层级、数据密度 |
| 08 | [patterns/08-search](../patterns/08-search/) | `search` | 搜索入口、命令面板、空状态、结果层级 |
| 09 | [patterns/09-filtering](../patterns/09-filtering/) | `filtering` | 筛选、分面、排序、可见约束 |
| 10 | [patterns/10-forms](../patterns/10-forms/) | `forms` | 表单分组、校验反馈、多步 |
| 11 | [patterns/11-interaction](../patterns/11-interaction/) | `interaction` | Trigger → Behavior → Feedback 的可命名交互 |
| 12 | [patterns/12-motion](../patterns/12-motion/) | `motion` | 入场、滚动揭示、微交互的原则而非片头 |
| 13 | [patterns/13-responsive](../patterns/13-responsive/) | `responsive` | 折叠、优先级重排、小屏上消失与强化的内容 |
| 14 | [patterns/14-visualization](../patterns/14-visualization/) | `visualization` | 图、时间线、关系图的阅读逻辑 |
| 15 | [patterns/15-editorial](../patterns/15-editorial/) | `editorial` | 长文、杂志式、研究页的叙事布局 |
| 16 | [patterns/16-dashboard](../patterns/16-dashboard/) | `dashboard` | 监控与概览；须通过 anti-slop，拒绝泛用仪表盘皮肤 |
| 17 | [patterns/17-knowledge](../patterns/17-knowledge/) | `knowledge` | 知识库、双向链接、分类与关系驱动 |
| 18 | [patterns/18-portfolio](../patterns/18-portfolio/) | `portfolio` | 作品叙事、图主导、项目索引 |
| 19 | [patterns/19-product](../patterns/19-product/) | `product` | 产品营销与功能说明的交互驱动呈现 |
| 20 | [patterns/20-experimental](../patterns/20-experimental/) | `experimental` | 高风险实验；默认低迁移性，晋升需额外论证 |

Pattern ID 使用 **不含序号** 的 slug：`pat.layout.editorial-split-view`，文件仍放在 `patterns/01-layout/`。

一个 Pattern 只选一个主类。次要类写在正文里，不要复制文件。

## 如何新增第 21 类

1. 说明现有 20 类为何都放不下（不是「看起来酷」）。
2. 给出至少 3 个将要归入的 Pattern 候选。
3. 同时改本文件、`patterns/{nn}-{slug}/` 目录、以及 [registry.yaml](registry.yaml) 的注释。
4. 在 PR / 提交说明里记录决策。未改 taxonomy 之前，Skill 不得自创分类。

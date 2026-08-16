# HTML Design Lab

Design Observatory：系统性收集优秀 Web UI，逆向拆解，提取可迁移的 Pattern 与 Principle，再按许可与可复用性晋升到自有 Design System。

这不是网页模板库，也不是截图收藏夹。每一个外来网页都被当作一个 Design System 的实例来观察；自己其他项目的 HTML 则在 `projects/` 里制作与记录。

```
Website
→ Observation
→ Decomposition
→ Pattern
→ Principle
→ Reusable Component
→ Transfer
```

## 两条工作流

**第三方**（网站、截图、别人的 HTML / GitHub）：

**Observe → Analyze → Decompose → Abstract → Extract → Compare → Transfer**

默认不实现。

**自己的项目**（记录已有页面，或在本仓库制作）：

写入 [`projects/`](projects/)。可以写 HTML。流程见 [skills/own-html-workflow.md](skills/own-html-workflow.md)。

只有明确要求「做成组件 / 写入 Design System」时，才把实例晋升为抽象。

Cursor 会自动加载 [`.cursor/skills/design-observatory/SKILL.md`](.cursor/skills/design-observatory/SKILL.md)。

## 四层身份

| 层 | 身份 | 允许做什么 |
| --- | --- | --- |
| **Reference** | 别人的实例 | 观察、拆解、截图、记录来源。不复制品牌资产，不整仓拷贝代码 |
| **Project** | 自己的页面实例 | 记录或制作自己其他项目的 HTML |
| **Library** | 抽象知识 | Pattern / Principle / Token 草稿。回答 What / Why / Where else |
| **Design System** | 我们的系统 | 仅晋升后的、许可安全的、重写后的实现与 tokens |

## 目录

| 路径 | 用途 |
| --- | --- |
| [`references/`](references/) | 来源观察（网站 / 截图 / GitHub / Design System） |
| [`projects/`](projects/) | 自己其他项目的 HTML（记录 / 制作） |
| [`patterns/`](patterns/) | 抽象 Pattern（What） |
| [`principles/`](principles/) | 设计原则（Why） |
| [`components/`](components/) | 重写后的实验性抽象（需显式实现指令） |
| [`tokens/`](tokens/) | 设计 token 草稿与系统尺 |
| [`design-system/`](design-system/) | 已晋升、可直接用于未来项目的系统 |
| [`sources/`](sources/) | 许可与来源登记 |
| [`catalog/`](catalog/) | taxonomy 与机器索引 |
| [`templates/`](templates/) | 新建条目时复制的模板 |
| [`skills/`](skills/) | 人读的 workflow 文档 |
| [`ARCHITECTURE.md`](ARCHITECTURE.md) | 完整架构与晋升规则 |

## 约定

- 分析文档用中文；ID、Pattern 名、目录用英文 kebab-case
- 路径即 ID，例如 `pat.layout.editorial-split-view`
- 可复用实现用 vanilla HTML + CSS
- 无法核实的数值标 `Estimated`，禁止编造
- 来源分类：A–F 为第三方；**G First-party** 为自己的项目，进入 `projects/`

## 加入一条 Reference

1. 从 [`templates/`](templates/) 复制对应模板
2. 按 [`skills/reverse-engineering-workflow.md`](skills/reverse-engineering-workflow.md) 走完 18 步
3. 更新 [`catalog/registry.yaml`](catalog/registry.yaml)
4. 在 [`sources/LICENSE-REGISTRY.md`](sources/LICENSE-REGISTRY.md) 登记来源
5. **不要**实现组件，除非被明确要求

## 记录或制作自己的 HTML

1. 确认是第一方，不要把别人的整页放进 `projects/`
2. 从 [`templates/project.md`](templates/project.md) 与 [`templates/project-page.md`](templates/project-page.md) 复制
3. `record`：归档该页 HTML，写清 origin；`make`：先写结构再写页面
4. 更新 [`catalog/registry.yaml`](catalog/registry.yaml) 与 [`catalog/projects.md`](catalog/projects.md)
5. 未要求观察时，不要对这页跑 18 步拆解

完整规则见 [`ARCHITECTURE.md`](ARCHITECTURE.md)。

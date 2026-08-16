# Projects

第一方 HTML：**制作**与**记录**自己其他项目的页面。这里是实例，不是别人的 Reference，也不是可复用 Component。

| 对比 | `references/` | `projects/` | `components/` |
| --- | --- | --- | --- |
| 身份 | 别人的实例 | **自己的页面实例** | 抽象原语 |
| 默认动作 | 只观察 | 可以写 HTML、可以归档 | 需显式「实现组件」 |
| 拷贝 | 禁止整页拷贝第三方 | 可以收录自己的 HTML | 必须重写抽象 |
| 目标 | 抽 Pattern | 服务某个具体项目 | 将来进 Design System |

## 两种模式

| mode | 何时 | 做什么 |
| --- | --- | --- |
| `record` | 从自己的其他仓库/项目归档一页 | 保留可用的 HTML/CSS，写清来源路径，记录意图与改动 |
| `make` | 在本仓库为某个自己的项目制作页面 | 先写用途与结构，再写 vanilla HTML + CSS |
| `hybrid` | 归档后在本仓库继续改 | 注明哪些是原件、哪些是后来改的 |

## 目录

```
projects/{project-slug}/
├── meta.md
├── README.md
└── pages/{page-slug}/
    ├── meta.md
    ├── notes.md
    ├── index.html
    ├── styles.css
    └── screenshots/          # 可选
```

ID：

- 项目：`proj.{project-slug}`
- 页面：`proj.{project-slug}.{page-slug}`

从 [templates/project.md](../templates/project.md) 与 [templates/project-page.md](../templates/project-page.md) 复制。流程见 [skills/own-html-workflow.md](../skills/own-html-workflow.md)。

## 不要放进来的

- 第三方网站的整页 HTML（那是 Reference）
- 未读 LICENSE 的开源整仓拷贝
- 可复用原语（应进 `components/`）
- 已晋升系统（应进 `design-system/`）

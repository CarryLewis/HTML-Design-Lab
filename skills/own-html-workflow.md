# Own HTML workflow

用于 **制作** 或 **记录** 自己其他项目的 HTML。第三方网站仍然走 [reverse-engineering-workflow.md](reverse-engineering-workflow.md)，禁止把别人的整页放进 `projects/`。

接到材料时先分流：

```
第三方 URL / 截图 / 不明来源 HTML  →  references/   （只观察）
「我的项目 / 记录这页 / 帮我做这个项目的页面」 →  projects/
「做成可复用组件」 →  components/     （仍须显式指令）
```

核对用 [own-html-checklist.md](own-html-checklist.md)。

---

## 共同步骤

1. 确认这是第一方内容（自己的仓库、自己写的页面、或明确要求在本仓库制作）。
2. 查 [catalog/registry.yaml](../catalog/registry.yaml) 与 [catalog/projects.md](../catalog/projects.md)，避免重复项目。
3. 若项目文件夹不存在：从 [templates/project.md](../templates/project.md) 建立 `projects/{project-slug}/meta.md` 与简短 `README.md`。
4. 为每一页建 `pages/{page-slug}/`。
5. 更新 registry 的 `projects` 列表。

不要整仓搬运其他项目。只收录需要制作或归档的页面（以及它真正依赖的 CSS/小脚本）。

---

## RECORD — 记录已有 HTML

1. `mode: record`。`origin_repo` / `origin_path` / `origin_commit` 尽量填全。
2. 把该页的 HTML/CSS 放入 `pages/{page-slug}/`，入口为 `index.html`。
3. 写 `meta.md` 与 `notes.md`：这一页干什么、原路径、保留了什么、没收录什么。
4. 不要为了「顺便变好看」改版，除非用户要求 hybrid。
5. **不要**自动跑 18 步拆解。只有用户要求「观察我自己的这页 / 抽 Pattern」时，才另写 observation，并链回本页。
6. 第三方依赖（字体文件、图标库、抄来的整段皮肤）在 notes 里标明，不要假装全是自己的。

## MAKE — 在本仓库制作

1. `mode: make`。先写 `meta.md` 的 purpose / 用户 / 主任务，以及 `notes.md` 的信息结构。
2. 复制 [templates/project-page.html](../templates/project-page.html) 与 [templates/project-page.css](../templates/project-page.css)。
3. 实现 vanilla HTML + CSS。优先用已有 `tokens/` 与 `design-system/`；没有则写清楚临时尺度。
4. 过 anti-slop：这一页是否提升了信息或任务，而不是流行皮肤。
5. 至少考虑 Desktop / Tablet / Mobile 的内容优先级。
6. 若用户说「做完以后抽 Pattern」，再进入 18 步；默认制作完成即停。

## HYBRID — 记录后再改

在 notes 里分节：**Original** vs **Changed**。`meta.mode: hybrid`。

---

## 与 Observatory 的边界

- `projects/` 里的 HTML 是项目实例，可以直接编辑。
- 从自己页面抽出的 Pattern 仍然进 `patterns/`，与来自 Reference 的 Pattern 同一套模板。
- 可复用原语不要长期只活在某一页里：稳定后按 promotion 进 `components/` / `design-system/`。
- 回到原项目时，用 notes 的 Transfer back 说明该拷哪些文件。

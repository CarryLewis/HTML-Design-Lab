# Own HTML checklist

制作或记录自己的页面时勾选。第三方内容不要用本表，改走 [ingest-checklist.md](ingest-checklist.md)。

## Routing

- [ ] 已确认是第一方（自己的项目 / 明确要求制作）
- [ ] 没有把第三方整页 HTML 放进 `projects/`
- [ ] 可复用原语没有误放到这里（应进 `components/`）

## Project

- [ ] `projects/{project-slug}/meta.md` 存在，id 为 `proj.{slug}`
- [ ] `mode` 为 `record` / `make` / `hybrid`
- [ ] record 时填写了 origin_repo 或 origin_path
- [ ] 没有整仓复制其他项目

## Page

- [ ] `pages/{page-slug}/meta.md`、`notes.md`、`index.html` 存在
- [ ] 已写清：打开后最重要的行为
- [ ] make 时先有信息结构再写样式
- [ ] record 时注明原路径、保留与未收录
- [ ] hybrid 时 Original / Changed 已分开
- [ ] 第三方字体、图标、抄来的皮肤已在 notes 标明
- [ ] `catalog/registry.yaml` 与 `catalog/projects.md` 已更新

## 不要做的

- [ ] 未要求观察时，没有对这页跑 18 步拆解
- [ ] 未要求晋升时，没有把整页搬进 `design-system/`

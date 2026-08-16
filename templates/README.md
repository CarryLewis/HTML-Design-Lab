# Templates

新建条目时复制，不要改模板本身来写真实内容。

| 模板 | 落到 |
| --- | --- |
| [reference.md](reference.md) | `references/{kind}/{slug}/meta.md` |
| [observation.md](observation.md) | `references/{kind}/{slug}/observation.md` |
| [pattern.md](pattern.md) | `patterns/{nn-category}/{slug}.md` |
| [principle.md](principle.md) | `principles/{slug}.md` |
| [component.md](component.md) | `components/{slug}/README.md`（仅显式实现时） |
| [source.md](source.md) | `sources/{slug}.md` |
| [extracted.md](extracted.md) | `references/{kind}/{slug}/extracted.md` |

复制后填写 YAML frontmatter，并把条目追加到 [catalog/registry.yaml](../catalog/registry.yaml)。

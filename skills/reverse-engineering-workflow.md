# Reverse Engineering Workflow

每当加入一个新的 Website / Screenshot / HTML / GitHub Reference，按顺序执行 18 步。不要跳到实现。

Cursor 操作指令见 [`.cursor/skills/design-observatory/SKILL.md`](../.cursor/skills/design-observatory/SKILL.md)。接入核对用 [ingest-checklist.md](ingest-checklist.md)。晋升用 [promotion-checklist.md](promotion-checklist.md)。

---

## STEP 01 — Capture

建立 `references/{kind}/{slug}/`。复制 [templates/reference.md](../templates/reference.md) 为 `meta.md`。

- 记下 URL、页面名、日期、来源分类 A–F
- 截图放入 `screenshots/`，命名 `{viewport}--{optional-section}.png`
- 原图不入库
- `status: captured`

## STEP 02 — Context analysis

写 Layer 01。必答：用户进入后最重要的行为是什么？`status: observing`

## STEP 03 — Information architecture

写 Layer 02。画出信息树。解释信息为什么以这种顺序出现。不要只记录视觉区块名。

## STEP 04 — Spatial analysis

写 Layer 03。推测 grid / spacing / max-width / 栏比。不确定就标 **Estimated**。

## STEP 05 — Visual hierarchy

写 Layer 04。Primary / Secondary / Tertiary / Metadata。回答 first, second, third notice。

## STEP 06 — Typography

写 Layer 05。字体名不够；必须提取 typography personality。

## STEP 07 — Color

写 Layer 06。判断层级靠颜色还是靠空间与 typography。

## STEP 08 — Shape language

写 Layer 07。提炼 Sharp / Soft / Rounded / Geometric / Organic / Material / Flat / Elevated。

## STEP 09 — Components

写 Layer 08。每个组件回答 Why does this component exist？不要只列 HTML 标签。

## STEP 10 — Interaction

写 Layer 09。一律 Trigger → Behavior → Feedback，并命名（如 Hover-Reveal）。

## STEP 11 — Motion

写 Layer 10。记录 duration / easing / trigger。提取原则，禁止停在「动画很高级」。

## STEP 12 — Responsive behavior

写 Layer 11。至少 Desktop / Tablet / Mobile。What disappears? What becomes more important?

## STEP 13 — Content presentation

写 Layer 12。判断 editorial / data / knowledge / product 的驱动方式。`status: decomposed`

## STEP 14 — Extract patterns

每个 Pattern 一篇，使用 [templates/pattern.md](../templates/pattern.md)，放入正确 taxonomy 目录。回答 Where else can this be used?

## STEP 15 — Extract principles

高价值 Pattern 必须有 Principle。[templates/principle.md](../templates/principle.md)。Pattern = What，Principle = Why。

## STEP 16 — Evaluate transferability

Original context → Underlying problem → Underlying solution → Potential contexts。标 High / Medium / Low。评 1–5 分，但评分不能代替分析。跑 Anti-slop。

## STEP 17 — Extract reusable implementation

只提取概念与 token 草稿。重写抽象，适配我们的系统。**此步不创建 `components/` 代码**，除非用户明确要求实现。

## STEP 18 — Record source and license

写 `sources/{slug}.md`，更新 [LICENSE-REGISTRY.md](../sources/LICENSE-REGISTRY.md) 与 [catalog/registry.yaml](../catalog/registry.yaml)。更新 `extracted.md`。`status: extracted`

C / D / E / F / unknown：不得把原站 HTML 或品牌资产写入实现目录。

---

完成后对照 [ingest-checklist.md](ingest-checklist.md)。若要进入 Design System，再走 [promotion-checklist.md](promotion-checklist.md)。

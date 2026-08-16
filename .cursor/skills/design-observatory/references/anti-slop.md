# Anti-slop

判断标准只有一句：

**Does the design improve information, interaction or identity?**

Identity 指可迁移的视觉语言，不是某个品牌的 logo 皮肤。流行不等于优秀。

## 主动识别

出现下列特征时，提高怀疑，不要默认收录为高质量 Pattern：

- Generic gradient
- Excessive glassmorphism
- Random rounded cards
- Excessive shadows
- Unnecessary animations
- Generic dashboard layout
- Overuse of pills
- Random icons
- Huge decorative blobs
- AI-generated visual clichés
- Inconsistent spacing
- Inconsistent typography

## 如何处理

1. 在 observation 里点名这些特征。
2. 问：去掉它们之后，信息结构是否仍然成立？若成立，抽象结构，丢掉皮肤。
3. 若整页只靠这些特征成立，Pattern `status: rejected`，可作为反例留在 Reference，**不**晋升。
4. Dashboard / cards / motion 三类尤其容易 slop，抽取时必须写清它解决了什么信息问题。

## Pattern 正文

每个 Pattern 的 Anti-slop check 必须有结论：`keep` / `revise` / `reject`。

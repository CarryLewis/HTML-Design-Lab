---
id: proj.{project-slug}
title: ""
status: planned # planned | recording | making | active | archived
mode: record # record | make | hybrid
owner: self
origin_repo: ""
origin_path: ""
origin_commit: ""
license: all-rights-reserved
uses_design_system: false
pattern_refs: []
created_at: YYYY-MM-DD
---

# {title}

复制到 `projects/{project-slug}/meta.md`。本层只收 **自己的** 项目。第三方页面走 `references/`。

## 这个项目是什么

- 服务谁
- 解决什么问题
- 在本 Observatory 里要做什么：记录 / 制作 / 两者

## 来源（record 必填）

- 仓库 / 本地路径：
- 相关目录或文件：
- 记录时的 commit（如有）：
- 收录范围：整页 / 某一屏 / 某一模块（不要整仓搬运）

## 页面

| ID | 页面 | mode | 入口 |
| --- | --- | --- | --- |
| proj.{project-slug}.{page-slug} | | | pages/{page-slug}/index.html |

## 与知识库的关系

- 使用的 Pattern / Principle / tokens：
- 以后打算抽回 Library 的结构：

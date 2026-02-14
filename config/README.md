# Site Config 说明

所有可配置项统一放在 `config/site-config.json`。

## 字段总览

- `site`: 页面基础信息
- `profile.readme`: 顶部介绍文案
- `socialLinks`: 社交链接列表
- `entries`: 下方入口卡片（博客/跑步）
- `footer`: 页脚链接
- `slogans`: 顶部随机大标题文案（`#slogan`）
- `tags`: Roll 标签池

## 字段说明

### `site`

- `lang`: 页面语言，如 `zh` / `en`
- `title`: 浏览器标签标题
- `description`: `<meta name="description">`
- `keywords`: `<meta name="keywords">`

### `profile.readme`

- `line1Html`: 第一段文案（支持 HTML）
- `line2Html`: 第二段文案（支持 HTML）
- `rollPromptPrefixHtml`: Roll 链接前半句（支持 HTML）
- `rollLinkText`: Roll 链接文字
- `rollPromptSuffixHtml`: Roll 链接后半句（支持 HTML）
- `line4Html`: 最后一段文案（支持 HTML）

说明：Roll 链接会自动渲染为 `<a id="roll-trigger">`，不用自己写。

### `socialLinks`

数组，每一项：

- `label`: 显示名称
- `iconClass`: 图标类名（推荐使用 Font Awesome，如 `fa-brands fa-github fa-fw`）
- `url`: 跳转链接
- `newTab`: 是否新开页，`true/false`

如何找 `iconClass`：

1. 打开 Font Awesome 图标库：`https://fontawesome.com/icons`
2. 搜索目标平台（例如 `github`、`x-twitter`、`steam`）
3. 进入图标详情页，复制对应 class
4. 推荐在末尾加 `fa-fw`，让不同图标宽度更整齐

常见示例：

- GitHub: `fa-brands fa-github fa-fw`
- X(Twitter): `fa-brands fa-x-twitter fa-fw`
- Telegram: `fa-brands fa-telegram fa-fw`
- Email: `fa-solid fa-envelope fa-fw`

### `entries`

- `entries.blog.label` / `entries.blog.url`: 博客卡片
- `entries.running.label` / `entries.running.url`: 跑步卡片

### `footer`

- `text`: 页脚文案
- `url`: 页脚链接
- `newTab`: 是否新开页

### `slogans`

字符串数组，点击/刷新时随机显示在顶部主标题。支持 `<br>`。

### `tags`

字符串数组，Roll 功能从这里随机抽取。

## 快速示例

```json
{
  "entries": {
    "blog": {
      "label": "技术博客",
      "url": "https://example.com/blog"
    },
    "running": {
      "label": "运动记录",
      "url": "https://example.com/run"
    }
  },
  "tags": [
    "Go Developer",
    "Cloud Native",
    "Open Source"
  ]
}
```

## 注意事项

- `site-config.json` 必须是合法 JSON，不能写注释。
- `line1Html/line2Html/...` 支持 HTML，写错标签会直接影响页面渲染。
- `socialLinks` 建议保持 8 项以内，避免超过当前样式的配色预设。

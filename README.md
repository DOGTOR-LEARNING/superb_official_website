# SuperB 超棒軟體科技 官方網站

依 `spec.md`（Website Product & Design Specification v1.0）實作的公司官網。

## 技術架構

- **Next.js 16**（App Router、Cache Components、Turbopack）＋ TypeScript
- **Tailwind CSS v4**：design tokens 位於 `styles/globals.css`
- **Motion for React**：動畫按需載入（`LazyMotion`），支援 `prefers-reduced-motion`
- **next-intl**：`/zh-TW`（預設）、`/en`，語言切換保留目前頁面
- **Lucide** icons、**Zod** 表單驗證（前後端共用）、**Resend** 寄信（Server Action）
- 內容：作品為 TypeScript 結構化資料（`content/projects`），文章為 MDX（`content/insights`）

## 開發

```bash
npm install
cp .env.example .env.local   # 依需求填寫
npm run dev                  # http://localhost:3000 → 導向 /zh-TW
npm run build && npm start
```

`predev` / `prebuild` 會自動執行 `scripts/subset-fonts.mjs`：掃描所有文案，
把 Noto Sans TC 子集化成只含網站用字的 woff2（約 240 KB），新增文案後不需手動處理。

開發模式下，尚未核准的佔位資料會顯示橘色「待確認」標籤；正式建置不會顯示。

## 專案結構

| 路徑 | 內容 |
|---|---|
| `app/[locale]/` | 多語系頁面（首頁、作品、DOGTOR、關於、觀點、聯絡、隱私權） |
| `app/sitemap.ts`、`app/robots.ts` | SEO（未設定正式網域時 robots 會禁止索引） |
| `components/layout`、`ui`、`sections`、`brand`、`motion`、`forms` | 元件 |
| `content/projects/` | 作品資料（含 `relationshipType`、`companyOwnership`、`publicationApproval`） |
| `content/insights/` | 文章 metadata（`index.ts`）與 MDX 內文（`bodies.ts`） |
| `content/team.ts`、`content/legal/privacy.ts` | 團隊、隱私權政策 |
| `messages/` | 中英文介面文案 |
| `lib/site-config.ts` | **所有官方資訊的唯一來源**（Email、統編、DOGTOR 網址…） |
| `public/brand/` | 正式 Logo（SVG，由 `superb_logo.png` 向量化） |
| `fonts/` | Noto Sans TC 原始字型（SIL OFL 1.1，見 `fonts/OFL.txt`） |

## 新增內容

- **作品**：在 `content/projects/` 新增檔案並加入 `index.ts`。`publicationApproval.status` 為 `withheld` 的作品不會出現在任何頁面、路由或 sitemap。
- **文章**：在 `content/insights/index.ts` 新增 metadata，於 `bodies.ts` 加入 MDX。缺少某語言時會自動顯示另一語言並提示讀者。
- **作品／文章 slug** 由 `proxy.ts` 檢查，不存在的 slug 會回傳正確的 404 狀態碼。

## Logo

`public/brand/` 的 Logo 由 `superb_logo.png` 向量化而成。橫式組合（標誌＋中文＋英文）以下列指令重新產生：

```bash
python3 scripts/build-logo-english.py scripts/logo-paths.source.json  # 英文名稱（Montserrat，需 fonttools）
node scripts/generate-logo.mjs scripts .                               # 產生 SVG、favicon 與 components/brand/logo-paths.ts
```

上線前請完成 `LAUNCH_CHECKLIST.md`。

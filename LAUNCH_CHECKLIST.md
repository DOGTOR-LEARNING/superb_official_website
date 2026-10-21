# 上線前檢查清單

spec §15、§17、§18 要求上線前完成內容與品牌審核。
產品資料與圖片已從 `../landing_page`（DOGTOR 官網）與 `../pierre-portfolio`（團隊作品集）整理匯入。
開發模式（`npm run dev`）中，仍待確認的位置會顯示橘色「待確認」標籤。

## 官方資訊 — `lib/site-config.ts`

- [x] 官方 Email：hello@superb-tutor.com
- [x] 統一編號 62214225、地址、電話（與 DOGTOR 官網 `lib/company.js` 一致）
- [x] 英文正式全名：SuperB Software Technology Co., Ltd.
- [x] DOGTOR 官網 https://dogtor.superb-tutor.com 與 App Store／Google Play 連結
- [ ] 公司官網正式網域 → 設定 `NEXT_PUBLIC_SITE_URL`（設定前 robots.txt 會禁止索引）
- [ ] 可公開的社群連結（`socialLinks`）

## 環境變數

- [ ] `RESEND_API_KEY`、`CONTACT_TO_EMAIL`、`CONTACT_FROM_EMAIL`
- [ ] 選用：`NEXT_PUBLIC_PLAUSIBLE_DOMAIN`

## 品牌素材

- [x] 公司 Logo（由 `superb_logo.png` 向量化）；橫式組合依精湛教育 Logo 的對齊方式：標誌與文字等高、英文全大寫與中文等寬（Montserrat，`scripts/build-logo-english.py`、`scripts/generate-logo.mjs`）— 請品牌負責人確認；若有原始向量檔請替換 `components/brand/logo-paths.ts`
- [x] DOGTOR 標誌、角色、學習島嶼、App 畫面、家長報告、產品 Demo 圖（來源：DOGTOR 官網、作品集）
- [x] 團隊照片（來源：DOGTOR 官網「關於我們」）

## DOGTOR 數據 — `content/projects/dogtor.ts`

數據皆附資料日期，請定期更新：

- [x] 10,000+ 累積註冊使用者（2026-10-12，來源：作品集）
- [x] App Store 教育類第 4 名、首月 MAU 2,600（上線首月 2026 年 3 月，來源：作品集；上架日 2026-03-01 取自 App Store）
- [x] App Store 4.8★／257 則（2026-10-21，App Store 公開資料）、Google Play 5.0★／63 則（2026-10-16，DOGTOR 官網資料）
- [ ] 確認排行榜紀錄的確切日期與地區

## 作品 — `content/projects/*.ts`

內容依作品集整理，並改以「團隊成員參與」的角度描述，不宣稱為公司資產。待確認：

- [ ] 各作品 `companyOwnership`（目前多為 `unconfirmed`）
- [ ] 七桃、aiPlanner：作品集標示「已完成」，請確認是否曾公開上架（目前標示為 Prototype）
- [ ] MapIt：尚未發布，已在 `content/projects/index.ts` 與 `content/insights/` 中註解隱藏；發布並取得專題成員（花紫晏、鄭博宇、陳奕蓁）署名同意後再開啟
- [ ] 200OK：其他組員署名
- [ ] 中星害蟲防治 ERP：內容已備妥，取得客戶書面同意後將 `publicationApproval.status` 改為 `approved`

## 團隊 — `content/team.ts`

- [ ] 專業領域與個人介紹（選填，未填不顯示）
- [ ] 台大教授顧問：取得同意後公開姓名與職稱（目前以「台大教授顧問群」說明）

## 文章 — `content/insights/`

- [ ] 3 篇觀點文章為草稿（`draft: true`），需經內容審核
- [x] 創業小聚 Podcast 專訪（2026-08-05）

## 法務

- [ ] 隱私權政策（`content/legal/privacy.ts`）經公司與法務審閱

## SEO／GEO／AEO

- [x] 每頁獨立 title、description、canonical、hreflang（zh-TW／en／x-default）、Open Graph、Twitter card
- [x] sitemap.xml（含 lastModified 與語言對應）、robots.txt（明確允許主要 AI 爬蟲）
- [x] 結構化資料：Organization、WebSite、BreadcrumbList、AboutPage、FAQPage、Person、CollectionPage／ItemList、CreativeWork、SoftwareApplication（含 App Store 評分）、Article、VideoObject
- [x] `/llms.txt`、`/llms-full.txt`（由網站內容自動產生）
- [x] 關於我們：公司簡介事實清單與常見問題
- [x] favicon.ico、apple-icon、web manifest
- [ ] 上線後：設定 `NEXT_PUBLIC_SITE_URL`，在 Google Search Console／Bing Webmaster Tools 提交 sitemap，並用 Rich Results Test 驗證
- [ ] DOGTOR 評分與使用者數據定期更新（`content/projects/dogtor.ts`、`content/faq.ts`、`app/[locale]/products/dogtor/page.tsx` 的 aggregateRating）

## 驗收（本機 production build，設定網域後）

- Desktop：Performance 98–100、Accessibility 100、Best Practices 100、SEO 100
- Mobile（模擬慢速 4G）：Performance 83–84、Accessibility 100、Best Practices 100、SEO 100
  - 未達 90 的原因：Noto Sans TC 子集（約 270 KB）位於關鍵路徑
- [ ] 部署後以真實裝置驗證 Core Web Vitals

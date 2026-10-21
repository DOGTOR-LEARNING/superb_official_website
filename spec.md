# SuperB Corporate Website
## Website Product & Design Specification — v1.0

**專案：** 超棒軟體科技有限公司官方網站  
**英文品牌：** SuperB Software Technology  
**文件版本：** 1.0  
**日期：** 2026-10-21  
**階段：** Website Planning / UIUX Specification / Development Handoff  
**主要語言：** 繁體中文（預設）、英文  
**網站類型：** Corporate Website + Product Showcase + Selected Work

---

# 1. Project Overview｜專案概述

## 1.1 專案目標

建立超棒軟體科技有限公司的官方品牌網站，以教育科技（EdTech）為核心定位，呈現公司的理念、旗艦產品、研發能力、團隊與其他軟體作品。

網站必須讓訪客清楚理解：

1. **Who We Are：** 我們是一家以教育科技為核心、重視使用者體驗與實際影響力的軟體科技公司。
2. **What We Believe：** 我們相信科技不只是提升效率，更應該讓知識、服務與好的體驗更容易被人們取得。
3. **What We Build：** 我們打造真正能被使用的軟體產品，旗艦產品是 DOGTOR 逗課。
4. **What We Can Do：** 除了教育科技，我們也具備 AI 應用、行動軟體、平台系統與人機互動設計能力。
5. **How to Connect：** 學校、企業、合作夥伴可以方便地了解公司並建立聯繫。

## 1.2 品牌定位

**Brand Category：** Education Technology & Human-Centered Software Company

**Core Business：** 教育科技、AI 輔助學習、數位學習產品與相關技術創新。

**Extended Capabilities：** AI Application Development、Mobile & Web Products、Human-Computer Interaction、Software Engineering。

公司並非純軟體外包公司，也不是個人作品集，更不是 DOGTOR 產品官網的複製版本。

網站應表現出一家具有自主產品、教育使命與跨領域研發能力的科技公司。

## 1.3 品牌主張

### Primary Brand Statement

**讓科技不只解決問題，更創造改變。**

Building technology that makes a difference.

### Supporting Statement

我們以教育為起點，結合人工智慧、軟體工程與以人為本的設計，打造真正能融入生活、帶來正向影響的數位產品。

### Brand Personality

- **Innovative：** 有創造力，勇於探索新技術。
- **Approachable：** 親切、活潑，不給人冰冷或難以接近的感覺。
- **Professional：** 技術成熟，設計精緻，重視品質。
- **Human-Centered：** 關注人的真實需求，而不只是技術本身。
- **Optimistic：** 相信科技能為教育與生活帶來更好的可能性。

### Tone of Voice

文字應簡潔、具溫度、有自信，但不誇大。

使用清楚易懂的敘事代替技術術語堆疊。

建議使用「我們打造」「我們相信」「我們正在探索」，避免「業界最領先」「革命性技術」「全方位最佳解決方案」等空泛表述。

---

# 2. Audience & Goals｜目標客群

| 客群 | 主要需求 | 網站目標 |
|---|---|---|
| 一般訪客 | 了解公司在做什麼 | 建立品牌印象 |
| 學生與家長 | 認識 DOGTOR | 引導至 DOGTOR 官網 |
| 學校與教育機構 | 評估教育科技合作 | 建立教育領域的專業信任 |
| 企業合作夥伴 | 評估團隊能力及合作機會 | 展示實際產品與技術成果 |
| 潛在人才 | 了解團隊理念與文化 | 產生加入或聯繫意願 |
| 投資人、評審及媒體 | 了解公司的產品、成果與成長方向 | 快速掌握公司價值與可信度 |

## 核心轉換目標

1. 前往 DOGTOR 官網。
2. 瀏覽公司其他產品及作品。
3. 了解公司背景及價值觀。
4. 提交合作洽詢。

DOGTOR 產品導流為優先轉換目標，合作洽詢為次要轉換目標。

公司網站不負責 DOGTOR 訂閱結帳、學生登入、家長服務或完整產品客服。

---

# 3. Information Architecture｜網站架構

## 3.1 Primary Navigation

桌面版 Header：

**SuperB Logo　｜　首頁　產品與作品　關於我們　觀點與研究　聯絡我們　｜　EN / 中**

其中「觀點與研究」若上線時缺乏足夠正式內容，可暫時移出主要導覽，但保留路由架構。

桌面版最右側可加入較醒目的「探索 DOGTOR ↗」按鈕。

手機版使用 Hamburger Menu，展開後顯示完整選單及語言切換。

## 3.2 Sitemap

### A. Home — 首頁
Route：`/`

品牌理念、DOGTOR 旗艦產品、精選作品、核心能力、公司介紹摘要及合作入口。

### B. Products & Work — 產品與作品
Route：`/work`

旗艦產品及其他精選軟體作品。

子頁面：

- `/products/dogtor` — DOGTOR 公司層級介紹頁
- `/work/superbot`
- `/work/mapit`
- `/work/seven-peach`
- `/work/200ok`
- `/work/aiplanner`
- 其他作品依實際需要逐步擴充

### C. About Us — 關於我們
Route：`/about`

公司故事、使命願景、設計理念、團隊、技術能力及未來方向。

### D. Insights — 觀點與研究
Route：`/insights`

教育科技觀點、AI 與人機互動研究、產品設計心得、公司消息。

文章內頁：`/insights/[slug]`

### E. Contact — 聯絡我們
Route：`/contact`

合作洽詢表單、官方聯絡方式及必要的公司資訊。

### F. Supporting Pages

- `/privacy` — 公司官網隱私權政策
- `/404` — Not Found
- `/sitemap.xml`
- `/robots.txt`

## 3.3 URL Language Strategy

建議正式多語系 URL 採用：

- `/zh-TW/`
- `/en/`
- `/zh-TW/about`
- `/en/about`

根目錄 `/` 可以依網站預設語言導向繁體中文首頁。

語言切換須保留使用者目前瀏覽的相同頁面；如果沒有對應翻譯，採取明確的 fallback，而非顯示不存在的頁面。

---

# 4. Homepage Specification｜首頁

首頁為整個網站的最重要頁面，必須完整呈現公司的品牌敘事。

## 4.1 Section 01 — Hero

### 目的

建立第一印象：現代科技公司、教育科技背景、親切、專業、有創造力。

### 建議文字

Eyebrow：

`HUMAN-CENTERED TECHNOLOGY`

H1：

**讓科技不只解決問題，  
更創造改變。**

Supporting Text：

「我們以教育為起點，結合人工智慧、設計與軟體工程，打造真正讓生活變得更好的數位產品。」

English：

**Building technology that makes a difference.**

Subtext：

We bring together AI, thoughtful design, and software engineering to create meaningful digital experiences, starting with education.

### CTA

Primary：`探索我們的產品 →`  
Secondary：`認識 SuperB`

### Layout

Desktop：

- 左側約 55%：標題、敘述、CTA。
- 右側約 45%：品牌視覺。
- 使用極淡藍背景及大量留白。
- Hero 高度約 650–760px，依螢幕大小調整。
- 右側可以將 Logo 菱形幾何、交錯線條、柔和圓角模組結合成抽象視覺。

Mobile：

- 單欄排版。
- 文字在上，視覺在下。
- H1 保持清楚的換行。
- 兩個 CTA 可改為直向排列。

### Hero 動畫

- 標題由下方 16px 淡入。
- 副標與按鈕依序出現。
- 右側幾何線條可進行一次性繪製動畫。
- 背景只允許極緩慢的局部裝飾位移，不製造干擾。
- 頁面載入完成後不需要永久循環的大型動畫。

## 4.2 Section 02 — Featured Product: DOGTOR

### 目的

突出公司最重要的產品，展示真實產品及市場成果。

本區應是首頁 Hero 之後最具視覺份量的區塊。

### 標題

Eyebrow：`OUR FLAGSHIP PRODUCT`

H2：

**讓每一次學習，都更接近真正理解。**

產品名稱：

**DOGTOR 逗課**

介紹文字：

DOGTOR 是專為台灣國高中生打造的 AI 學習應用，結合知識點練習、弱點診斷、AI 解題與互動式學習體驗，幫助學生找到真正需要加強的觀念。

### 特色重點

- AI 輔助個人化學習
- 知識點練習與弱點追蹤
- 遊戲化互動與好友對戰
- 家長學習進度與分析服務

### Social Proof / Product Metrics

建議展示：

- 10,000+ 累積註冊使用者（資料日期：2026-10-12）
- App Store 教育類排行榜紀錄（需標示當時排名及日期）
- 其他經核實、可公開且可定期維護的使用成果

不要使用自動增長的假數據或沒有依據的即時數字。

### Visual Layout

- 採取大型 Feature Card 或完整雙欄區塊。
- 一側放標題及內容。
- 另一側放 2–3 張真實手機畫面。
- 搭配官方 DOGTOR 角色視覺或學習島嶼。
- DOGTOR 原有插畫可保留在本區，但不可主導整個公司網站。

### CTA

Primary：`前往 DOGTOR 官網 ↗`

Secondary：`了解產品故事 →`

前者前往現有產品官網；後者前往公司的 `/products/dogtor` 頁面。

## 4.3 Section 03 — Our Beliefs

Eyebrow：`WHAT WE BELIEVE`

H2：

**我們相信，好的科技應該從人出發。**

Three Values：

### 01. Make Learning Accessible
**讓好的教育更容易取得。**

我們希望透過軟體與 AI，降低優質學習資源的門檻，讓更多學生能以適合自己的方式成長。

### 02. Design for People
**理解需求，比追逐技術更重要。**

我們重視真實使用情境、使用者體驗，以及科技如何融入日常。

### 03. Build for Impact
**讓好的想法真正落地。**

從發現問題、設計體驗到實際開發與持續改善，我們相信產品的價值來自真實使用。

### Layout

Desktop 三欄卡片，Mobile 單欄。

以極簡線條插畫、簡單幾何圖形搭配文字。

不使用大量 emoji 或過度可愛的吉祥物。

## 4.4 Section 04 — Selected Work

Eyebrow：`BEYOND THE CLASSROOM`

H2：

**從教育出發，探索更多可能。**

Supporting Text：

除了教育科技，我們也持續探索 AI 應用、數位平台與以人為本的產品設計。這些作品記錄了團隊成員將不同想法轉化為實際產品的經驗。

### 首頁精選卡片

第一版建議：

1. SuperBot — 教育行政自動化
2. MapIt — AI 社交地圖與人機互動探索
3. Seven Peach — 樂齡社交與活動探索
4. 200OK — 軟體專案媒合平台

卡片呈現：

- 作品封面
- 名稱
- 一句價值說明
- 作品類型
- 參與關係／開發狀態
- View Project →

### Layout

Desktop 使用 2 × 2 作品網格。

每張卡片以大圖為主，文字簡潔，不直接列出大量技術標籤。

### CTA

`探索更多作品 →`

## 4.5 Section 05 — How We Build

Eyebrow：`FROM IDEAS TO IMPACT`

H2：

**從真實問題，到真正被使用的產品。**

### 四個階段

**01 Discover**  
理解使用者、情境與真正需要解決的問題。

**02 Design**  
規劃產品體驗、驗證想法、設計互動流程。

**03 Build**  
結合 AI、軟體工程與系統架構，打造可運作的產品。

**04 Learn & Improve**  
從真實使用回饋與數據持續改進。

### 視覺

以一條柔和的流程線串起四個步驟。

Desktop 橫向排列；Mobile 改成直向時間軸。

Scroll 進入時，流程線及節點依序呈現。

## 4.6 Section 06 — About Preview

Eyebrow：`MEET SUPERB`

H2：

**一群相信科技可以帶來改變的人。**

介紹文字：

我們結合教育現場經驗、軟體開發與產品設計的不同視角，持續尋找值得被解決的問題，並將想法轉化為有溫度、真正可使用的科技產品。

### 視覺

- 真實團隊照片或開發工作紀錄。
- 不使用通用商務會議素材。
- 可搭配公司創立故事的簡短時間線。

CTA：`認識我們 →`

## 4.7 Section 07 — Final CTA

背景使用柔和的品牌藍或淡藍。

H2：

**一起，打造更好的可能。**

Supporting Text：

無論你來自教育現場、科技產業，或是擁有一個值得實現的想法，我們都期待與你交流。

CTA：`與我們聯繫 →`

---

# 5. Products & Work｜產品與作品頁

## 5.1 頁面目標

呈現公司及團隊的完整產品實力，但必須明確區分旗艦產品、其他產品及團隊參與作品。

本頁不應像 GitHub Repository 列表，也不應像一般設計師 Portfolio。

## 5.2 Page Hero

H1：

**好的產品，從理解問題開始。**

Supporting Text：

從 AI 學習應用到跨領域數位產品，我們探索科技如何在不同情境下創造價值。

## 5.3 Featured Product

DOGTOR 獨立大型展示，視覺占比顯著高於其他作品。

包含：

- 完整產品標誌
- 產品類型與定位
- 主要解決的問題
- 3–4 張精選 App 截圖
- 產品成果數據
- 官方網站連結

## 5.4 Selected Work

### 建議作品清單

| Project | 分類 | 展示重點 | 建議關係標示 |
|---|---|---|---|
| DOGTOR | Education / AI | 個人化學習與知識點追蹤 | Flagship Product |
| SuperBot | EdTech / Automation | 教育行政流程自動化 | Team Member Project / Historical Work |
| MapIt | AI / HCI / Mobile | 社群收藏、地圖與共同決策 | NTU Team Capstone |
| Seven Peach | Social Impact / Mobile | 樂齡友善設計與活動推薦 | Team-Led Project |
| 200OK | Web Platform | 軟體媒合與完整平台流程 | Collaborative Project |
| aiPlanner | AI / iOS | 自然語言日程管理 | Selected Work |
| Zhongxing ERP | Enterprise Software | 企業流程數位化 | Client Work，須確認揭露授權 |

**Important：** 上述關係標示為建議分類，不代表每個作品都屬於公司資產。正式上線前需確認各專案的開發主體、著作權、團隊成員授權及可公開內容。

## 5.5 Filtering

支援簡單的分類篩選：

- All
- Education
- AI & Apps
- Social Impact
- Business Systems

選擇分類時在原頁更新卡片，不必重新載入。

分類數量少，第一版不需要全文搜尋。

## 5.6 Project Detail Template

每個作品案例頁使用一致的資訊架構：

1. Project Hero：名稱、年度、類型、狀態、代表圖片。
2. The Challenge：想解決什麼問題？
3. Our Approach：採取什麼設計與開發方法？
4. Key Features：2–4 個主要功能。
5. Product Showcase：介面截圖、Demo、使用流程。
6. Technology & Design：技術及設計決策。
7. Our Involvement：團隊或成員實際參與的部分。
8. Outcomes：可核實的成果、限制或研究狀態。
9. Credits & Attribution：合作團隊及相關授權標示。
10. Next Project：導覽到其他作品。

若是未正式上線或研究中的專案，必須明確標示 Prototype / In Progress / Research Project。

不應讓原型專案看起來像已經商業化營運。

---

# 6. DOGTOR Corporate Product Page

Route：`/products/dogtor`

## 6.1 頁面角色

這是 DOGTOR 的公司層級產品案例頁，不是第二個 DOGTOR 行銷網站。

重點在回答：

- 我們為什麼打造 DOGTOR？
- DOGTOR 想改善什麼教育問題？
- 公司如何透過 AI、學習設計及軟體工程實踐這個想法？
- 目前取得哪些成果？
- 我們接下來想探索什麼？

## 6.2 Content Sections

**Hero：** DOGTOR 逗課｜讓每個學生找到適合自己的學習方式。

**The Problem：** 傳統複習容易陷入大量刷題，卻不一定知道真正的觀念弱點。

**Our Approach：** 透過知識點、AI 輔助解題、個人化練習及友善的遊戲化體驗改善學習過程。

**Product in Action：** 真實產品畫面及使用流程。

**Impact：** 經核實的使用者數據、產品里程碑、回饋及成長紀錄。

**Beyond Features：** 從真實學習行為理解使用者，並持續探索 Human-AI Interaction 與教育科技設計。

**CTA：** 前往 DOGTOR 官網，了解完整功能或下載 App。

## 6.3 品牌區隔

公司頁面使用 SuperB 的設計系統。

DOGTOR 的黃色、角色、遊戲化視覺只在產品內容區較大量出現。

禁止把整個公司官網改成 DOGTOR 風格，避免母品牌被子品牌覆蓋。

---

# 7. About Us｜關於我們

## 7.1 Hero

Eyebrow：`ABOUT SUPERB`

H1：

**以教育為起點，以人為核心。**

Supporting Text：

我們相信科技的價值不只來自它能做什麼，更來自它能為誰帶來改變。

## 7.2 Our Story

以一個自然、有溫度的故事描述公司背景。

敘事架構：

**教育現場的觀察 → 透過軟體解決問題 → 建立 DOGTOR → 持續探索更多具有實際價值的數位產品。**

不要虛構創辦年份、團隊成員人數、投資背景或已取得的研究成果。

## 7.3 Mission & Vision

### Mission

以科技降低學習與數位服務的門檻，打造簡單、有效且以人為本的產品。

### Vision

讓好的科技不只服務少數人，而能成為更多人探索、學習與成長的助力。

## 7.4 Our Principles

四項核心原則：

- Education with Purpose
- Human-Centered Design
- Thoughtful Engineering
- Continuous Learning

各搭配一段簡短說明和幾何圖示。

## 7.5 Team

使用真實團隊成員資料。

每張成員卡包含：

- 照片
- 姓名
- 公司角色
- 專業領域
- 個人介紹
- 可選個人網站或 LinkedIn

不強制所有成員都放社群連結。

顧問與合作教授需獨立分類，並在取得同意後公開姓名、職稱及合作關係。

## 7.6 Capabilities

三個核心能力領域：

**AI & Educational Technology**  
AI 輔助學習、學習數據分析、AI 應用整合。

**Product Design & Development**  
跨平台 App、Web 應用、端到端產品設計與開發。

**Human-Centered Innovation**  
使用者研究、HCI、互動設計與產品驗證。

技術名稱可以作為能力的佐證，但不能取代能力的描述。

---

# 8. Insights｜觀點與研究

## 8.1 目的

建立公司長期的知識與研發形象，讓網站不只展示成果，也呈現團隊思考的深度。

## 8.2 分類

- Education & Learning
- AI & Technology
- Human-Computer Interaction
- Product & Design
- Company Updates

## 8.3 建議第一批內容

1. **為什麼我們選擇從教育科技開始？**
2. **從 DOGTOR 看個人化學習產品的設計思考**
3. **AI 不只是回答問題：如何讓技術真正幫助學習？**
4. **從 MapIt 探索數位收藏與實際行動之間的距離**（標示研究仍進行中）

內容定位為觀點、產品紀錄與研究探索，而非未經審查的學術結論。

## 8.4 Article Design

文章頁：

- 標題、摘要、日期、作者、分類。
- 最大內文寬度約 720px。
- 足夠的行距與段落間距。
- 可加入圖片、引言、表格及參考資料。
- 文章底部推薦其他文章。
- 第一版不提供留言功能。

如果正式文章尚未準備好，可先完成頁面架構，首頁不顯示空的 Insights 區塊。

---

# 9. Contact｜聯絡我們

## 9.1 Hero

H1：

**讓我們一起創造更多可能。**

Supporting Text：

教育科技合作、產品交流、企業合作或其他提案，都歡迎與我們聯繫。

## 9.2 Contact Form

表單欄位：

- 姓名／稱呼（必填）
- Email（必填）
- 單位／公司（選填）
- 洽詢類型（必填）
  - 教育機構合作
  - 產品／技術合作
  - 媒體／活動邀請
  - 其他
- 訊息內容（必填）
- 隱私權同意（必填）

Submit Button：

`送出訊息 →`

## 9.3 Form States

必須設計：

- Default
- Input Focus
- Field Validation Error
- Submitting
- Submission Success
- Submission Failure

成功狀態提示：

「訊息已成功送出！感謝你的來信，我們會在確認內容後儘快回覆。」

不要承諾未經確認的固定回覆時間。

失敗時保留使用者已填寫的資訊，並提供重新送出的方式。

## 9.4 Other Contact Details

Footer 和 Contact 頁可顯示：

- 正式公司名稱
- 官方聯絡 Email
- 公司登記資訊
- 適合公開的社群連結
- 必要的法律資訊

以公司核准的正式資料為準，避免直接把創辦人的私人 Email 當成公司主要聯絡方式。

---

# 10. Visual Design System｜視覺設計系統

## 10.1 Creative Direction

**Design Theme：Bright Human-Centered EdTech**

關鍵字：

Clean / Modern / Warm / Optimistic / Approachable / Educational / Precise

### 風格比例

- 60% — 明亮、親切的現代教育科技視覺（Brilliant 類型）
- 25% — 友善、有創意、有辨識度的品牌表現（Duolingo 類型）
- 15% — 精緻排版、秩序與微互動（Linear 類型）

比例僅代表設計參考方向，不是素材複製比例。

### Must Feel Like

一家有原創產品、有教育理念、懂設計也懂工程的現代科技公司。

### Must Not Feel Like

- 制式企業形象網站
- 學校補習班招生網站
- 個人開發者 Portfolio
- 深色工程師作品集
- 過度活潑的兒童遊戲網站
- 滿版 AI 機器人與科技光效的模板網站

## 10.2 Color System

Logo 現有主要視覺為藍色與黃色，所有設計都應延續此品牌識別。

以下為建議的 UI Design Tokens，非正式 Logo 精準取色；正式實作時應從品牌原始向量檔建立主色。

| Token | Color | Usage |
|---|---|---|
| Brand Primary | `#2C6FA8` | 按鈕、連結、品牌強調 |
| Brand Primary Hover | `#235B8A` | Hover 與 Active |
| Brand Gold | `#F5B438` | 裝飾、高亮元素、視覺重點 |
| Dark Navy | `#163247` | 主要文字、深色區塊 |
| Secondary Text | `#526879` | 次要描述 |
| Page Background | `#F8FAFC` | 大部分頁面背景 |
| Surface | `#FFFFFF` | 卡片與內容區 |
| Soft Blue | `#EAF4FB` | 柔和背景、Section |
| Soft Gold | `#FFF4D8` | 輕量裝飾與區分 |
| Border | `#DEE8F0` | 卡片、分隔線 |

### 色彩使用比例

建議視覺面積：

- 75–80%：白色、極淡灰藍。
- 15–20%：品牌藍及深藍文字。
- 5% 左右：品牌黃色強調。

黃色不作為白色背景上的一般文字色，重要資訊需符合對比度要求。

### Gradient

允許使用：

- 白色到極淡藍的柔和過渡。
- 局部金黃色光暈。
- 極淡藍色幾何背景。

避免高飽和藍紫色科技漸層、霓虹和玻璃特效堆疊。

## 10.3 Typography

### Font Family

繁體中文：Noto Sans TC  
英文：Inter 或 Manrope

採用無襯線字體，以易讀、清楚、現代為主。

### Typography Scale

| Element | Desktop | Mobile |
|---|---|---|
| H1 | 56–68px | 36–42px |
| H2 | 36–44px | 28–34px |
| H3 | 24–28px | 21–24px |
| Body Large | 18–20px | 16–18px |
| Body | 16–18px | 16px |
| Caption | 13–14px | 13px |
| Button | 15–16px | 15–16px |

### Typography Rules

- H1 字重 700。
- H2 字重 650–700。
- 內文 400–500。
- 中文內文行高 1.7 左右。
- 大標題行高 1.15–1.25。
- 重要標題可透過不同字色強調一小段文字。
- 不使用整段高飽和漸層文字。
- 英文 Eyebrow 可使用較寬字距及半粗體。

## 10.4 Layout System

### Desktop

- 12-column grid。
- 最大內容寬度 1200–1280px。
- Content Gutter 24–32px。
- Section Vertical Spacing 96–120px。
- Header Height 約 72–80px。

### Tablet

- 8-column grid。
- Section Vertical Spacing 72–96px。

### Mobile

- 4-column grid 或單欄。
- Content Gutter 20–24px。
- Section Vertical Spacing 56–72px。
- 卡片寬度 100%。
- 避免橫向捲動。
- 互動元素觸控區域至少約 44 × 44px。

### Responsive Breakpoints

- Small Mobile：320–479px
- Mobile：480–767px
- Tablet：768–1199px
- Desktop：1200px 以上

元件應以內容需求做響應式調整，不必所有區塊都硬性綁定同一個 breakpoint。

## 10.5 Radius & Shadows

### Radius

- Button：12px
- Small Card：16px
- Large Card：24px
- Feature Section：28–32px
- Pill：999px

### Shadows

使用柔和、不顯眼的陰影。

Default：

低透明度陰影，主要依靠背景色及邊框區分卡片。

Hover：

陰影稍微增加。

禁止大量重陰影、厚重浮雕感或強烈光暈。

## 10.6 Iconography

使用簡潔、統一的線條圖示。

建議：Lucide Icons。

規範：

- 線條粗細一致。
- 一般圖示 20–24px。
- 顏色以藍色、深藍、次要灰藍為主。
- 不混用多套不同風格 Icon。
- 不使用 emoji 作為正式 UI 元件。

## 10.7 Illustration & Graphics

### 品牌視覺語言

從 SuperB Logo 延伸：

1. 圓角菱形
2. 交錯線條
3. 垂直與斜向的連結
4. 柔和幾何形狀
5. 表示成長、合作與連結的抽象線條

這些幾何元素可以應用於：

- Hero Illustration
- Section Background
- Timeline
- Product Category Icon
- Animated Divider
- Loading Decoration

### Graphic Style

- 平面向量與少量柔和立體層次。
- 大量留白。
- 使用品牌色及淡色系。
- 不使用過度複雜的 3D 模型。
- 不讓裝飾性圖形搶走文字和產品截圖的注意力。

### Product Media

產品呈現優先順序：

1. 真實 App / Web UI
2. 精緻的 Device Mockup
3. 真實使用情境
4. 少量抽象品牌插畫

避免生成與實際產品不符的假 UI 畫面。

## 10.8 Component System

建立可重用元件：

### Navigation
- SiteHeader
- DesktopNav
- MobileMenu
- LanguageSwitcher
- SiteFooter

### Brand
- BrandLogo
- SectionEyebrow
- HighlightHeading
- BrandPattern
- AnimatedLogoGraphic

### Content
- SectionHeading
- FeatureSplitSection
- FeatureCard
- ValueCard
- ProjectCard
- MetricCard
- TeamCard
- Timeline
- ArticleCard
- CategoryFilter

### Actions
- PrimaryButton
- SecondaryButton
- TextLink
- ContactForm
- FormField
- SuccessState

### Shared
- Container
- Section
- ImageFrame
- Breadcrumb
- EmptyState
- LoadingState

---

# 11. Motion & Interaction Specification

## 11.1 Motion Principles

**Subtle, Purposeful, Delightful.**

動畫應強化資訊層級與操作回饋，不能單純為了炫技。

整站採用簡潔且有節奏感的動畫設計。

### Motion Tokens

| Motion | Duration | Easing |
|---|---|---|
| Button Hover | 150–180ms | ease-out |
| Card Hover | 180–240ms | ease-out |
| Scroll Reveal | 400–550ms | ease-out |
| Page Transition | 200–320ms | ease-in-out |
| Modal / Mobile Menu | 220–300ms | ease-out |
| Hero Illustration | 900–1400ms | 自訂平滑 easing |

## 11.2 Page Load Animation

Hero 文字依序進場：

1. Eyebrow 淡入。
2. H1 往上浮現約 16px。
3. Supporting Text 淡入。
4. CTA 顯示。
5. 品牌圖形完成一次性動畫。

文字間延遲約 80–120ms。

避免在使用者等待動畫時隱藏主要資訊。

## 11.3 Scroll Reveal

當 Section 進入 viewport：

- Opacity：0 → 1
- TranslateY：16px → 0
- Duration：450ms
- Stagger：60–90ms

大部分元素只執行一次。

避免所有卡片都從不同方向飛入。

## 11.4 Header Behavior

Desktop：

- 頂部為正常 Header。
- 捲動後變成 Sticky Navigation。
- 背景由接近透明轉成白色半透明。
- 加入輕微 backdrop blur 及下邊框。
- 保持 Logo、導覽與 CTA 位置穩定。

Mobile：

- 使用全寬下拉選單。
- 展開時背景及項目柔和淡入。
- 支援 Esc 關閉、焦點控制及鍵盤操作。

## 11.5 Button Interaction

Primary Button：

Default：品牌藍底、白字。  
Hover：背景變深，箭頭右移 2–3px。  
Active：輕微視覺回饋。  
Focus：清晰的鍵盤 focus ring。

Secondary Button：

白底／透明背景搭配邊框。

Hover 時使用淡藍背景。

## 11.6 Project Card Interaction

Hover：

- Card 往上移約 4px。
- 陰影稍微增加。
- 圖片可放大至 1.015–1.025 倍。
- 箭頭向右或右上移動 2px。

Mobile：

不依賴 Hover 才能顯示必要資訊。

整張卡片可以點擊，但必須保有清楚的可操作提示。

## 11.7 Logo-Based Interaction

在 Hero 或 Section Divider 可以加入 Logo 延伸動畫：

- 線條沿著菱形輪廓描繪。
- 黃色與藍色交錯線條依序出現。
- 最終形成穩定的幾何構圖。

初次瀏覽時播放一次即可。

正式公司 Logo 本身不應因動畫而扭曲比例或改變標準造型。

## 11.8 Timeline Animation

How We Build：

- 每個流程節點進入 viewport 時點亮。
- 連接線逐步延伸。
- 當前節點有非常輕微的強調。
- 無須隨捲動進行高成本的複雜運算。

## 11.9 Reduced Motion

必須支援 `prefers-reduced-motion: reduce`。

啟用時：

- 取消大幅移動與循環動畫。
- 使用直接顯示或極簡淡入。
- 保留功能必要的狀態回饋。

動畫不可影響內容閱讀、互動操作及無障礙使用。

## 11.10 Interaction Restrictions

不要採用：

- Scroll Hijacking
- 大面積 Parallax
- 自動播放有聲影片
- 持續移動的背景粒子
- 需要等待動畫才能操作的按鈕
- 會跟著滑鼠持續漂浮的大型物件
- 過度複雜的 3D WebGL 場景

---

# 12. Responsive UX Specification

## 12.1 Desktop

以寬裕的留白、雙欄敘事、大圖與清楚的視覺層級為核心。

DOGTOR Feature Section 和精選作品是主要視覺重點。

## 12.2 Tablet

雙欄區塊可保留，但圖片及文字比例應自動調整。

需要時切換為上下排列，避免文字過窄。

## 12.3 Mobile

優先確保：

- 首屏快速理解品牌。
- 主要 CTA 立即可見。
- DOGTOR 介紹不過長。
- 作品卡片以單欄呈現。
- 圖片沒有裁切重要內容。
- Header 不佔用過多高度。
- 表單易於填寫。
- 重要資訊不只能透過 Hover 顯示。

## 12.4 Mobile Menu

Menu 展開後：

- 清楚顯示五個主要導覽項目。
- 顯示語言切換。
- 可加入 DOGTOR CTA。
- 選擇項目後自動關閉。
- 支援鍵盤與螢幕閱讀器。

---

# 13. Technical Architecture

## 13.1 Proposed Stack

**Framework：** Next.js App Router  
**Language：** TypeScript  
**Styling：** Tailwind CSS  
**Animation：** Motion for React（Framer Motion）  
**Icons：** Lucide  
**i18n：** next-intl  
**Content：** MDX 或 TypeScript Structured Content  
**Forms：** Server Actions / Route Handlers + Zod  
**Email：** Resend 或公司核准的郵件服務  
**Deployment：** Vercel（建議）或符合現有部署規範的平台

不需要為第一版架設獨立資料庫。

## 13.2 Suggested Project Structure

- `app/[locale]/` — 多語系頁面路由
- `app/api/` — 必要的伺服器端 API
- `components/layout/` — Header、Footer、Container
- `components/ui/` — Buttons、Cards、Inputs
- `components/sections/` — Hero、Features、Values
- `components/motion/` — 可重用動畫元件
- `content/projects/` — 產品與作品資料
- `content/insights/` — 文章 MDX
- `messages/` — 中英文翻譯檔
- `lib/` — 工具、資料驗證、SEO helpers
- `styles/` — Design Tokens 與全域樣式
- `public/brand/` — 公司 Logo 與品牌素材
- `public/projects/` — 各專案圖片及縮圖

## 13.3 Content Management

初期使用 Git-based Content，不需要立刻加入 CMS。

優點：

- 開發成本低。
- 容易版本控制。
- 靜態頁面效能好。
- 適合目前網站更新頻率。

未來如果非工程師需要頻繁編輯文章、新聞及作品內容，可以導入 Sanity、Contentful 或其他 Headless CMS。

## 13.4 Project Content Schema

每個作品至少需包含：

- slug
- title
- subtitle
- category
- status
- year
- relationshipType
- companyOwnership
- overview
- challenge
- solution
- keyFeatures
- technology
- contributors / credits
- results
- images
- externalLinks
- publicationApproval
- localeContent

`relationshipType` 用於決定是旗艦產品、團隊參與作品或客戶專案。

`companyOwnership` 不得根據開發者的個人參與自動判定。

## 13.5 Performance

建議驗收目標：

- Lighthouse Performance：90+
- Accessibility：95+
- Best Practices：95+
- SEO：95+
- LCP：良好網路條件下 2.5 秒以內
- CLS：不大於 0.1
- INP：不大於 200ms

以上是目標值，不應視為未經測試就能保證達成的結果。

優先使用：

- Next.js Image Optimization
- AVIF / WebP
- Static Rendering
- Lazy Loading
- Font Subsetting
- Minimal Client-side JavaScript
- 動畫程式碼按需載入

首頁 Hero 主圖不應被不必要的 lazy loading 延遲。

## 13.6 SEO

每頁必須具有：

- 獨立 Title
- Meta Description
- Canonical URL
- Open Graph 圖片
- 正確的 Heading Hierarchy
- 語意化 HTML
- `hreflang` 語言對應
- Sitemap
- Robots 設定

建議 Structured Data：

- Organization
- WebSite
- BreadcrumbList
- Article（文章頁）
- SoftwareApplication（適用且內容可核實的產品頁）

公司官網與 DOGTOR 官網應有不同的搜尋定位：

SuperB：品牌、教育科技公司、軟體產品研發、合作。

DOGTOR：國高中複習 App、AI 解題、題庫、會考學測相關產品搜尋。

## 13.7 Security & Privacy

- Contact 表單伺服器端驗證。
- 防垃圾訊息與 Rate Limiting。
- 不暴露 API Keys。
- 不在前端放置私密服務憑證。
- 避免未必要的追蹤與第三方腳本。
- 公司官網建立獨立隱私權政策。
- 收集的聯絡資料只能用於明確揭露的目的。
- 聯絡資料傳送失敗時應提供清楚提示。

Analytics 建議採取隱私友善方案，衡量：

- DOGTOR CTA 點擊
- Selected Work 點擊
- Contact 表單送出成功
- 主要頁面瀏覽
- 語言切換使用情形

---

# 14. Accessibility & Inclusive Design

以 WCAG 2.2 AA 作為設計及驗收目標。

必要規範：

1. 一般文字至少 4.5:1 色彩對比。
2. 大型文字至少 3:1。
3. 所有操作可使用鍵盤完成。
4. 明確顯示 Focus Indicator。
5. 圖片提供適合的 Alt Text。
6. 動畫支援 Reduced Motion。
7. 表單具備 Label 與可理解的 Error Message。
8. 正確使用 Landmark 及 Heading。
9. 不僅依賴顏色傳達資訊。
10. 中英文頁面使用正確的 HTML lang 屬性。

網站呈現教育科技公司的理念，因此無障礙與易讀性應是設計的核心，而非額外加分項。

---

# 15. Brand & Content Governance

## 15.1 Brand Hierarchy

**Level 1：SuperB**

公司品牌、價值觀、團隊與技術實力。

**Level 2：DOGTOR**

公司的旗艦教育科技產品，擁有獨立產品識別和官網。

**Level 3：Selected Work**

公司成員過去或目前參與的其他專案。

不同 Level 不使用完全相同的展示比重。

## 15.2 Content Accuracy

所有內容需確認：

- 公司正式中英文名稱。
- 公司 Logo 正式版本。
- 公司官方聯絡方式。
- DOGTOR 公開數據及統計日期。
- 排行榜成果及來源。
- 專案權利歸屬與參與角色。
- 客戶名稱及案例是否可公開。
- 團隊與教授顧問是否同意公開資訊。
- 研究是否完成、是否已有正式結果。

不得將研究中的假說寫成已證實的研究結論。

不得將個人參與的作品自動宣稱為公司獨立開發或公司擁有。

## 15.3 Visual Asset Ownership

公司 Logo 必須使用正式品牌素材。

DOGTOR 使用已有授權的官方視覺素材。

其他專案使用經授權的實際截圖、Demo 或重新排版後的產品展示圖。

若使用第三方 Icon、圖片或字型，需符合授權規範。

---

# 16. Implementation Phases

## Phase 1 — MVP Launch

必須完成：

- 全站 Design System
- Responsive Navigation
- Home
- Products & Work
- DOGTOR 公司介紹頁
- 4 個精選作品案例
- About Us
- Contact Form
- Bilingual UI
- SEO 基礎設定
- Accessibility 與 Performance 檢查

目標是先建立一個完整、可信、精緻的公司官方形象。

## Phase 2 — Content Expansion

- 增加其他作品案例。
- 上線 Insights。
- 加入產品開發故事。
- 增加團隊、研究與活動照片。
- 優化作品導覽與相關推薦。
- 補充經授權的成果數據與合作案例。

## Phase 3 — Growth

依實際營運需要：

- 新增產品。
- 新增官方招募頁。
- 建立教育機構合作專區。
- 建立媒體素材包。
- 加入文章 CMS。
- 依分析數據調整重要 CTA 和首頁敘事。

不應在第一版預先製作沒有實際內容或業務需求的功能。

---

# 17. Acceptance Criteria｜驗收標準

## 17.1 品牌

- [ ] 第一眼能辨識為 SuperB 公司官網。
- [ ] 藍黃品牌配色統一且不過度。
- [ ] 整體明亮、乾淨、現代。
- [ ] 具教育科技特色，但不幼稚。
- [ ] Logo 與其幾何延伸元素運用一致。

## 17.2 資訊架構

- [ ] 使用者可以快速理解公司主要業務。
- [ ] DOGTOR 明確為旗艦產品。
- [ ] 其他作品有清楚的獨立展示區。
- [ ] 不同作品的參與／擁有關係標示正確。
- [ ] 聯絡入口容易尋找。

## 17.3 UI / UX

- [ ] Desktop、Tablet、Mobile 版面完整。
- [ ] 手機沒有橫向溢出。
- [ ] 作品圖片不被不合理裁切。
- [ ] 導覽選單能正常操作。
- [ ] Hover、Focus、Active 狀態完整。
- [ ] 動畫自然、不影響閱讀。
- [ ] Reduced Motion 有對應處理。

## 17.4 Functionality

- [ ] 所有內部路由正常。
- [ ] DOGTOR 官方連結正確。
- [ ] 中英文切換正常。
- [ ] Contact 表單驗證正常。
- [ ] 表單寄送成功與失敗狀態正常。
- [ ] 404 頁面可正確引導訪客返回。
- [ ] SEO Metadata 正確。
- [ ] 公司正式資訊及著作權標示正確。

## 17.5 Quality

- [ ] 通過手機及桌面瀏覽器測試。
- [ ] 重要互動可使用鍵盤。
- [ ] 圖片有合理 Alt Text。
- [ ] 色彩對比符合規範。
- [ ] Lighthouse 達到設定目標，或記錄未達標原因。
- [ ] 沒有 Lorem Ipsum、假成果、測試聯絡方式或未授權素材。
- [ ] 正式上線前完成內容及品牌審核。

---

# 18. Required Assets Before Development

## Brand Assets

- 正式公司 Logo SVG
- Logo 深色及淺色應用版本
- 品牌名稱最終確認
- 官方公司 Email
- 官方網域
- 公司可公開的正式資訊

## Product Assets

- DOGTOR Logo
- DOGTOR 產品介紹文字
- 3–5 張高品質 App 截圖
- DOGTOR 官方網站連結
- DOGTOR 成果數據及統計日期
- 其他作品封面與截圖
- 各作品的參與及授權資料

## Team & Company

- 公司創立故事
- 團隊成員姓名與職稱
- 團隊照片（如有）
- 團隊公開資訊同意
- 顧問及合作單位公開資料授權

## Content

- 中英文公司簡介
- 公司使命願景
- 各作品的一句簡介及完整案例內容
- 聯絡洽詢收件方式
- 隱私權政策內容

---

# 19. Final Design Direction

## The SuperB Experience

使用者進入網站時，應先感受到這是一個乾淨、成熟、有創造力的科技品牌。

繼續往下探索，會發現這家公司以教育科技為核心，打造了真正被學生使用的 DOGTOR。

再往下瀏覽，會看見團隊在 AI、行動軟體、產品設計、人機互動及其他領域的探索。

最終訪客應記住的不是「這家公司會寫很多程式」，而是：

**SuperB 是一家理解真實問題、用科技打造有影響力產品的公司。**

網站的每一個畫面、動畫、文案與互動，都應服務於這個核心印象。

**Professional enough to trust. Playful enough to love.**

— End of Specification v1.0 —
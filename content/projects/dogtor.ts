import type { Metric, ProjectImage, ProjectVideo } from "../types";
import { siteConfig } from "@/lib/site-config";

/**
 * DOGTOR 公司層級資料。
 * 素材與數據來源：DOGTOR 官網（landing_page）、團隊作品集（pierre-portfolio）、App Store 公開資料。
 */
export const dogtor = {
  slug: "dogtor",
  url: siteConfig.dogtorUrl,
  stores: siteConfig.dogtorStores,
  /** 中文標誌 + 英文標誌 */
  logo: {
    zh: { src: "/projects/dogtor/logo.svg", width: 295, height: 147 },
    en: { src: "/projects/dogtor/logo-en.svg", width: 290, height: 53 },
    alt: { "zh-TW": "DOGTOR 逗課", en: "DOGTOR" },
  },
  /** 學習島嶼插畫 */
  island: {
    src: "/projects/dogtor/island.webp",
    width: 945,
    height: 709,
    alt: { "zh-TW": "DOGTOR 的數學學習島嶼插畫", en: "DOGTOR math learning island illustration" },
  } satisfies ProjectImage,
  /** 官方角色：學霸小狗博士 */
  character: {
    src: "/projects/dogtor/corgi.webp",
    width: 800,
    height: 800,
    alt: { "zh-TW": "DOGTOR 的角色：拿著書的柯基狗博士", en: "The DOGTOR character: a corgi reading a book" },
  } satisfies ProjectImage,
  /** 含手機外框的 App 畫面 */
  appScreen: {
    src: "/projects/dogtor/app-login.webp",
    width: 555,
    height: 978,
    kind: "phone",
    alt: { "zh-TW": "DOGTOR App 登入畫面", en: "DOGTOR app sign-in screen" },
  } satisfies ProjectImage,
  /** 家長每日學習報告（真實介面） */
  reportCards: [1, 2, 3, 4].map(
    (i): ProjectImage => ({
      src: `/projects/dogtor/report-${i}.webp`,
      width: 900,
      height: 1165,
      kind: "phone",
      alt: { "zh-TW": `DOGTOR 家長學習報告卡片 ${i}`, en: `DOGTOR parent learning report card ${i}` },
    }),
  ),
  /** 產品 Demo 說明圖（含真實 App 畫面） */
  demos: {
    test: {
      src: "/projects/dogtor/demo-test.webp",
      width: 1600,
      height: 900,
      alt: {
        "zh-TW": "DOGTOR 模擬測驗：作答後即時回饋，並追蹤每個知識點的掌握程度",
        en: "DOGTOR simulated test: instant feedback after each question, tracking mastery of each knowledge point",
      },
    },
    classification: {
      src: "/projects/dogtor/demo-classification.webp",
      width: 1600,
      height: 900,
      alt: {
        "zh-TW": "DOGTOR 錯題分類系統：上傳題目後自動對應知識點，建立個人錯題紀錄",
        en: "DOGTOR classification system: uploaded questions map to knowledge points and build a personal error log",
      },
    },
    conversation: {
      src: "/projects/dogtor/demo-conversation.webp",
      width: 1600,
      height: 900,
      alt: {
        "zh-TW": "DOGTOR 對話系統：AI 學伴記得學生的困難、興趣與學習脈絡",
        en: "DOGTOR conversational system: the AI companion remembers students' struggles, interests and study context",
      },
    },
  } satisfies Record<string, ProjectImage>,
  parentPro: {
    src: "/projects/dogtor/parent-pro.webp",
    width: 1200,
    height: 1500,
    alt: {
      "zh-TW": "DOGTOR Parent Pro：孩子的學習報告直接送到家長的 LINE",
      en: "DOGTOR Parent Pro: learning reports delivered to parents on LINE",
    },
  } satisfies ProjectImage,
  video: {
    youtubeId: "97PbV861JYs",
    vertical: true,
    title: { "zh-TW": "DOGTOR 逗課 App 介紹", en: "DOGTOR app introduction" },
  } satisfies ProjectVideo,
  metrics: [
    {
      value: "10,000+",
      label: { "zh-TW": "累積註冊使用者", en: "registered users" },
      asOf: "2026-10-12",
      verified: true,
    },
    {
      value: "#4",
      label: { "zh-TW": "App Store 教育類排行", en: "App Store Education ranking" },
      period: { "zh-TW": "上線首月（2026 年 3 月）", en: "First month after launch (March 2026)" },
      verified: true,
    },
    {
      value: "2,600",
      label: { "zh-TW": "上線首月月活躍使用者（MAU）", en: "monthly active users in the first month" },
      period: { "zh-TW": "2026 年 3 月", en: "March 2026" },
      verified: true,
    },
    {
      value: "4.8 ★",
      label: { "zh-TW": "App Store 評分（257 則評分）", en: "App Store rating (257 ratings)" },
      asOf: "2026-10-21",
      verified: true,
    },
    {
      value: "5.0 ★",
      label: { "zh-TW": "Google Play 評分（63 則評分）", en: "Google Play rating (63 ratings)" },
      asOf: "2026-10-16",
      verified: true,
    },
  ] as Metric[],
};

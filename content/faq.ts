import type { Localized } from "./types";

/**
 * 常見問題（AEO：以「問題 → 直接答案」呈現，並輸出 FAQPage 結構化資料）。
 * 答案只使用網站上已核實的事實與數據；更新數據時請同步修改。
 */
export const faq: { id: string; q: Localized<string>; a: Localized<string> }[] = [
  {
    id: "what-is-superb",
    q: {
      "zh-TW": "超棒軟體科技是什麼樣的公司？",
      en: "What kind of company is SuperB Software Technology?",
    },
    a: {
      "zh-TW":
        "超棒軟體科技有限公司（SuperB Software Technology Co., Ltd.）是位於臺北的教育科技公司，結合人工智慧、軟體工程與以人為本的設計打造數位產品。旗艦產品是專為台灣國高中生打造的 AI 學習 App「DOGTOR 逗課」。",
      en: "SuperB Software Technology Co., Ltd. (超棒軟體科技有限公司) is an education technology company based in Taipei, Taiwan. It combines AI, software engineering and human-centered design to build digital products. Its flagship product is DOGTOR, an AI learning app for secondary school students in Taiwan.",
    },
  },
  {
    id: "what-is-dogtor",
    q: { "zh-TW": "DOGTOR 逗課是什麼？", en: "What is DOGTOR?" },
    a: {
      "zh-TW":
        "DOGTOR 逗課是專為台灣國高中生打造的 AI 學習 App，結合知識點練習、弱點診斷、AI 解題、遊戲化互動與家長學習報告。2026 年 3 月上架，上線首月登上 App Store 教育類第 4 名；截至 2026 年 10 月 12 日累積超過 10,000 位註冊使用者。iOS 與 Android 皆可下載。",
      en: "DOGTOR is an AI learning app for junior and senior high school students in Taiwan. It combines concept-based practice, weakness diagnosis, AI problem-solving, game-like interaction and learning reports for parents. It launched in March 2026, reached #4 in App Store Education in its first month, and passed 10,000 registered users as of October 12, 2026. It is available on iOS and Android.",
    },
  },
  {
    id: "who-built-dogtor",
    q: { "zh-TW": "DOGTOR 是由誰開發的？", en: "Who develops DOGTOR?" },
    a: {
      "zh-TW":
        "DOGTOR 由超棒軟體科技開發與營運。產品由台大學生團隊與精湛教育的補習班老師聯手開發，並由多位國立臺灣大學教授在 AI、軟體、人機互動與學習互動等方面擔任顧問。",
      en: "DOGTOR is developed and operated by SuperB Software Technology. It was built by a team of National Taiwan University students together with teachers from Superb Education, with several NTU professors advising on AI, software, human–computer interaction and learning interaction.",
    },
  },
  {
    id: "superb-education",
    q: { "zh-TW": "SuperB 與精湛教育是什麼關係？", en: "How is SuperB related to Superb Education?" },
    a: {
      "zh-TW":
        "我們自 2023 年起與補教機構精湛教育合作。精湛教育的補習班老師參與 DOGTOR 的產品設計，我們也曾為精湛教育打造 LINE 行政助手 SuperBot。",
      en: "We have partnered with the tutoring school Superb Education (精湛教育) since 2023. Its teachers took part in designing DOGTOR, and we built SuperBot, a LINE admin assistant, for Superb Education.",
    },
  },
  {
    id: "collaborate",
    q: { "zh-TW": "如何與 SuperB 合作？", en: "How can I work with SuperB?" },
    a: {
      "zh-TW":
        "歡迎教育機構合作、產品與技術合作，以及媒體或活動邀請。請透過「聯絡我們」頁面的合作洽詢表單，或寄信至 hello@superb-tutor.com。",
      en: "We welcome education partnerships, product and technology collaborations, and media or event invitations. Use the enquiry form on our Contact page, or email hello@superb-tutor.com.",
    },
  },
  {
    id: "dogtor-support",
    q: { "zh-TW": "DOGTOR 的帳號、訂閱或使用問題要找誰？", en: "Where do I get help with a DOGTOR account or subscription?" },
    a: {
      "zh-TW": "DOGTOR 的下載、登入、訂閱、家長服務與產品客服，請前往 DOGTOR 官網 dogtor.superb-tutor.com。",
      en: "For DOGTOR downloads, sign-in, subscriptions, parent services and product support, please visit the DOGTOR website at dogtor.superb-tutor.com.",
    },
  },
];

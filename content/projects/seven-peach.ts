import type { Project } from "../types";
import { projectImage } from "./placeholder";

export const sevenPeach: Project = {
  slug: "seven-peach",
  category: ["social-impact"],
  status: "prototype",
  year: "2024",
  relationshipType: "team-led-project",
  companyOwnership: "unconfirmed",
  publicationApproval: {
    status: "pending",
    notes: ["作品集標示為「已完成」，請確認是否曾公開上架；若有，狀態可改為 completed", "確認其他團隊成員署名"],
  },
  homeOrder: 2,
  images: {
    cover: projectImage("/projects/seven-peach/cover.webp", 1600, 900, {
      "zh-TW": "七桃：一款專為退休人士設計的休閒交友 App——輕鬆交友，樂活逍遙",
      en: "Seven Peach: a leisure and social app designed for retirees",
    }),
    gallery: [],
  },
  video: {
    youtubeId: "gFHqAii7p5Y",
    title: { "zh-TW": "七桃 App 介紹", en: "Seven Peach introduction" },
  },
  externalLinks: [],
  localeContent: {
    "zh-TW": {
      title: "七桃 Seven Peach",
      subtitle: "樂齡社交與活動探索",
      summary: "以熟齡友善的活動探索，鼓勵長輩出門走走、參加活動、交新朋友。",
      typeLabel: "行動 App",
      overview:
        "七桃是一款為熟齡族群設計的行動應用，透過活動推薦與易於操作的介面，幫助長輩拓展社交圈、參與社區活動。",
      challenge:
        "我們想到家裡的長輩常常長時間待在家裡，生活容易無聊，也少了出門認識人的機會；而許多數位服務對長輩來說並不好用。",
      solution:
        "做一個真正適合長輩使用的產品：從活動與興趣出發，讓「要做什麼」和「如何參與」形成連續的流程，並透過共同活動成為認識人的入口。設計過程中與長輩進行使用者研究與測試，持續調整介面。",
      keyFeatures: [
        { title: "熟齡友善介面", description: "簡潔、易讀、容易操作，針對長輩的使用習慣設計。" },
        { title: "個人化活動推薦", description: "依興趣、朋友的參與狀況與距離推薦活動。" },
        { title: "以活動認識人", description: "讓參加活動成為拓展社交的入口。" },
      ],
      technology: {
        decisions: [
          "以無障礙與易用性作為設計前提，並透過長輩的使用者測試調整設計。",
          "推薦演算法綜合考量興趣、社交參與與地點距離。",
        ],
        stack: ["Flutter", "Dart", "Firebase Authentication", "Firestore"],
      },
      involvement:
        "由 SuperB 成員 Pierre Chen（陳冠宇）擔任創辦人與技術負責人，主導產品方向、熟齡友善 UX 與推薦演算法開發，並進行長輩使用者研究。正式權利歸屬待確認。",
      results: [
        { kind: "outcome", text: "完成從概念、使用者研究到 App 開發的完整產品流程（2024 年 8 月）。" },
      ],
      credits: [{ name: "Pierre Chen（陳冠宇）", role: "創辦人與技術負責人" }],
      userFlow: ["建立個人檔案與興趣", "瀏覽推薦活動", "選擇想參加的活動", "透過共同活動認識人"],
    },
    en: {
      title: "Seven Peach",
      subtitle: "Social and activity discovery for older adults",
      summary: "Age-friendly activity discovery that encourages older adults to get out, join in and make new friends.",
      typeLabel: "Mobile app",
      overview:
        "Seven Peach is a mobile app for older adults. Activity recommendations and an easy-to-use interface help them widen their social circles and take part in community life.",
      challenge:
        "We thought of older family members spending long stretches at home, with few reasons to go out and meet people — and many digital services that simply aren't easy for them to use.",
      solution:
        "Build a product that genuinely fits older adults: start from activities and interests so that \"what to do\" and \"how to join\" form one continuous flow, with shared activities as the way to meet people. User research and testing with older adults shaped the interface.",
      keyFeatures: [
        { title: "Age-friendly interface", description: "Simple, legible and easy to use, designed around older adults' habits." },
        { title: "Personalized recommendations", description: "Activities recommended by interests, friends' participation and distance." },
        { title: "Meet people through activities", description: "Joining an activity becomes the way into new connections." },
      ],
      technology: {
        decisions: [
          "Accessibility and ease of use as design prerequisites, refined through testing with older adults.",
          "A recommendation algorithm weighing interests, social participation and proximity.",
        ],
        stack: ["Flutter", "Dart", "Firebase Authentication", "Firestore"],
      },
      involvement:
        "SuperB member Pierre Chen was the founder and technical lead, driving product direction, age-friendly UX and the recommendation algorithm, and running user research with older adults. Formal ownership is to be confirmed.",
      results: [
        { kind: "outcome", text: "Completed the full product cycle from concept and user research to app development (August 2024)." },
      ],
      credits: [{ name: "Pierre Chen", role: "Founder and technical lead" }],
      userFlow: ["Set up a profile and interests", "Browse recommended activities", "Choose an activity to join", "Meet people through shared participation"],
    },
  },
};

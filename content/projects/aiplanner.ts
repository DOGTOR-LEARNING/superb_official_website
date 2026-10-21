import type { Project } from "../types";
import { projectImage } from "./placeholder";

const screens = [
  { "zh-TW": "aiPlanner 啟動畫面", en: "aiPlanner launch screen" },
  { "zh-TW": "aiPlanner 今日總覽：一眼看到今天的行程、會議與個人任務", en: "aiPlanner day at a glance: today's events, meetings and personal tasks" },
  { "zh-TW": "aiPlanner 任務管理：依優先順序整理並追蹤待辦", en: "aiPlanner tasks: organize by priority and track what matters" },
  { "zh-TW": "aiPlanner Smart Add：用自然語言描述行程，由 AI 解析細節", en: "aiPlanner Smart Add: describe your schedule in natural language and let AI handle the details" },
];

export const aiPlanner: Project = {
  slug: "aiplanner",
  category: ["ai-apps"],
  status: "prototype",
  year: "2025",
  relationshipType: "selected-work",
  companyOwnership: "unconfirmed",
  publicationApproval: {
    status: "pending",
    notes: ["作品集標示為「已完成」，請確認是否曾上架 App Store；若有，狀態可改為 completed", "確認截圖對應的畫面說明"],
  },
  homeOrder: 4,
  images: {
    cover: projectImage("/projects/aiplanner/cover.webp", 1600, 900, {
      "zh-TW": "aiPlanner：Your Smart Daily Planner，iOS 智慧行程助理",
      en: "aiPlanner: your smart daily planner for iOS",
    }),
    gallery: screens.map((alt, i) => projectImage(`/projects/aiplanner/screen-${i + 1}.webp`, 1080, 1080, alt)),
  },
  externalLinks: [],
  localeContent: {
    "zh-TW": {
      title: "aiPlanner",
      subtitle: "自然語言日程管理",
      summary: "輸入或說出一句話，就能把計畫變成行事曆上的行程。",
      typeLabel: "iOS App",
      overview:
        "aiPlanner 是一款 iOS 智慧行程應用。使用者只要輸入或說出像「下週五晚上七點和 John 吃晚餐」這樣的句子，事件就會自動解析並加入行事曆。",
      challenge:
        "建立行程需要填寫日期、時間、地點等多個欄位；但我們日常說的一句話，本身就已經帶著大部分需要的資訊。",
      solution:
        "把文字或語音輸入接到事件結構，再接到行事曆，讓輸入方式貼近日常表達；同時以 iCloud 同步個人資料，兼顧便利與隱私。",
      keyFeatures: [
        { title: "一句話建立行程", description: "以自然語言文字或語音解析日期、時間與事件。" },
        { title: "今日總覽與任務管理", description: "一眼掌握今天的行程，並依優先順序追蹤待辦事項。" },
        { title: "帳號與共享行程", description: "透過 Supabase 提供帳號驗證與共享事件儲存。" },
        { title: "隱私優先", description: "個人行程透過 iCloud 同步。" },
      ],
      technology: {
        decisions: [
          "iOS 原生開發，讓操作與系統習慣一致。",
          "個人資料以 iCloud 同步，共享功能才使用雲端後端，兼顧隱私與協作。",
        ],
        stack: ["Swift", "iOS", "Natural Language Processing", "Supabase", "iCloud"],
      },
      involvement: "由 SuperB 成員 Pierre Chen（陳冠宇）設計與開發（2025 年 7–8 月）。正式權利歸屬待確認。",
      results: [{ kind: "outcome", text: "完成支援文字與語音輸入的 iOS 行事曆 App。" }],
      credits: [{ name: "Pierre Chen（陳冠宇）", role: "設計與開發" }],
      userFlow: ["輸入或說出計畫", "解析日期、時間與事件", "加入行事曆", "查看或共享行程"],
    },
    en: {
      title: "aiPlanner",
      subtitle: "Natural-language scheduling",
      summary: "Type or say one sentence, and your plan becomes an event on the calendar.",
      typeLabel: "iOS app",
      overview:
        "aiPlanner is a smart iOS calendar. Type or say something like \"Dinner with John next Friday at 7 PM\" and the event is parsed and added to your calendar automatically.",
      challenge:
        "Creating an event means filling in date, time, place and more — yet the sentence we'd naturally say already carries most of that information.",
      solution:
        "Connect text or voice input to an event structure and then to the calendar, so entering plans feels like everyday speech — with personal data synced through iCloud to balance convenience and privacy.",
      keyFeatures: [
        { title: "Events from one sentence", description: "Parses dates, times and events from natural-language text or speech." },
        { title: "Day overview and tasks", description: "See today's schedule at a glance and track to-dos by priority." },
        { title: "Accounts and shared events", description: "Authentication and shared event storage via Supabase." },
        { title: "Privacy first", description: "Personal events sync through iCloud." },
      ],
      technology: {
        decisions: [
          "Native iOS development consistent with system conventions.",
          "Personal data syncs through iCloud; the cloud backend is used only for sharing, balancing privacy and collaboration.",
        ],
        stack: ["Swift", "iOS", "Natural Language Processing", "Supabase", "iCloud"],
      },
      involvement: "Designed and developed by SuperB member Pierre Chen (July–August 2025). Formal ownership is to be confirmed.",
      results: [{ kind: "outcome", text: "Completed an iOS calendar app supporting text and voice input." }],
      credits: [{ name: "Pierre Chen", role: "Design and development" }],
      userFlow: ["Type or speak a plan", "Parse its date, time and event", "Add it to the calendar", "View or share the schedule"],
    },
  },
};

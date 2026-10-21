import type { Project } from "../types";
import { projectImage } from "./placeholder";

export const superbot: Project = {
  slug: "superbot",
  category: ["education", "business-systems"],
  status: "completed",
  year: "2024",
  relationshipType: "team-member-project",
  companyOwnership: "unconfirmed",
  publicationApproval: {
    status: "pending",
    notes: ["確認作品權利歸屬（為合作夥伴精湛教育開發）", "確認是否仍在使用中"],
  },
  homeOrder: 1,
  images: {
    cover: projectImage("/projects/superbot/cover.webp", 1600, 900, {
      "zh-TW": "SuperBot 精湛教育課務機器人：LINE 上的老師打卡與上課資訊介面",
      en: "SuperBot, the Superb Education class assistant: teacher check-in and class info on LINE",
    }),
    gallery: [],
  },
  video: {
    youtubeId: "fnHZp87Gb9g",
    vertical: true,
    title: { "zh-TW": "SuperBot 操作示範", en: "SuperBot demo" },
  },
  externalLinks: [],
  localeContent: {
    "zh-TW": {
      title: "SuperBot",
      subtitle: "教育行政自動化",
      summary: "在熟悉的 LINE 裡完成上課提醒、作業追蹤與出勤打卡，把時間還給教學。",
      typeLabel: "LINE 行政助手",
      overview:
        "SuperBot 是 SuperB 共同創辦人 Pierre Chen 為合作夥伴精湛教育獨立開發的 LINE 行政助手，處理上課提醒、作業追蹤與師生出勤。它也是團隊「從教育現場的真實問題出發」的起點。",
      challenge:
        "在精湛教育的教學現場，每天都要處理出缺勤、作業追蹤與補課時間詢問。這些小事不能漏，卻不斷擠掉教學與陪伴學生的時間。",
      solution:
        "與其讓師生多學一套新系統，不如把功能放進大家每天都在用的 LINE：透過聊天指令查詢與打卡，資料交由 Google Sheets 記錄與統計，行政人員也能直接在試算表中協作。",
      keyFeatures: [
        { title: "LINE 上課提醒", description: "自動發送上課提醒給學生與老師。" },
        { title: "作業指派與追蹤", description: "指派作業並追蹤學生的完成狀況。" },
        { title: "師生上課打卡", description: "在聊天中完成打卡，紀錄即時同步。" },
        { title: "時數計算與匯出", description: "自動計算出席時數並匯出紀錄。" },
      ],
      technology: {
        decisions: [
          "沿用學生與老師熟悉的 LINE 對話介面，降低導入門檻。",
          "以 Google Sheets 作為即時資料庫，讓行政人員不需學習新工具就能協作與統計。",
          "部署於雲端，讓系統可全天候回應。",
        ],
        stack: ["Python", "LINE Messaging API", "Google Sheets API", "Heroku"],
      },
      involvement:
        "由 Pierre Chen（陳冠宇）獨立完成需求設計、開發與部署，用於精湛教育的日常營運。本作品為團隊成員的個人作品，非 SuperB 公司產品。",
      results: [
        { kind: "outcome", text: "將例行的提醒、打卡與時數統計自動化，減少行政負擔，讓老師能專注在教學。" },
        { kind: "outcome", text: "這次經驗成為團隊日後以教育現場問題為起點打造 DOGTOR 的基礎。" },
      ],
      credits: [{ name: "Pierre Chen（陳冠宇）", role: "獨立開發者" }, { name: "精湛教育", role: "使用單位" }],
      userFlow: ["設定課程與任務", "透過 LINE 發送提醒", "收集作業與打卡紀錄", "計算時數並匯出資料"],
    },
    en: {
      title: "SuperBot",
      subtitle: "Education admin automation",
      summary: "Class reminders, homework tracking and attendance — all inside familiar LINE chats, giving time back to teaching.",
      typeLabel: "LINE admin assistant",
      overview:
        "SuperBot is a LINE admin assistant built independently by SuperB co-founder Pierre Chen for our partner, the tutoring school Superb Education. It handles class reminders, homework tracking and attendance — and it is where our habit of starting from real problems in education began.",
      challenge:
        "Teaching at Superb Education meant handling attendance, homework follow-ups and make-up class questions every day. None of it could be missed, yet it kept crowding out time for teaching and supporting students.",
      solution:
        "Instead of asking students and teachers to learn a new system, the features live inside LINE, which everyone already uses. Chat commands handle queries and check-ins, while Google Sheets stores and totals the data so staff can collaborate in a familiar spreadsheet.",
      keyFeatures: [
        { title: "Class reminders on LINE", description: "Automatically reminds students and teachers about classes." },
        { title: "Homework assignment and tracking", description: "Assigns homework and tracks completion." },
        { title: "Check-ins for teachers and students", description: "Check in from the chat, with records synced instantly." },
        { title: "Hours calculation and export", description: "Calculates attendance hours and exports records." },
      ],
      technology: {
        decisions: [
          "Reuse the LINE chat interface students and teachers already know, lowering the barrier to adoption.",
          "Use Google Sheets as a real-time database so staff can collaborate and report without learning a new tool.",
          "Deploy to the cloud so the assistant responds around the clock.",
        ],
        stack: ["Python", "LINE Messaging API", "Google Sheets API", "Heroku"],
      },
      involvement:
        "Designed, built and deployed independently by Pierre Chen for the daily operations of Superb Education. This is a team member's personal project, not a SuperB company product.",
      results: [
        { kind: "outcome", text: "Automated routine reminders, check-ins and hour tracking, reducing admin work so teachers could focus on teaching." },
        { kind: "outcome", text: "The experience laid the groundwork for building DOGTOR from real problems in education." },
      ],
      credits: [{ name: "Pierre Chen", role: "Independent developer" }, { name: "Superb Education", role: "User organization" }],
      userFlow: ["Set up classes and tasks", "Send reminders through LINE", "Collect homework and check-ins", "Calculate hours and export records"],
    },
  },
};

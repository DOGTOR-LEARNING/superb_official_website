import type { Localized } from "./types";

export const solutionCategories = ["communication", "teaching", "operations"] as const;
export type SolutionCategory = (typeof solutionCategories)[number];
export type EducationSolution = {
  slug: string;
  category: SolutionCategory;
  content: Localized<{ title: string; description: string; features: string[] }>;
};

/** 可洽談的客製開發方向；不代表已上線的獨立產品。 */
export const educationSolutions: EducationSolution[] = [
  {
    slug: "ai-parent-updates", category: "communication",
    content: {
      "zh-TW": { title: "AI 家長聯絡與學習報告", description: "把成績、作業完成度與課堂紀錄整理成家長看得懂的學習近況，讓老師把時間留給真正需要的溝通。", features: ["AI 彙整成績與作業狀況", "老師確認後發送 LINE 通知", "保留聯絡紀錄與追蹤事項"] },
      en: { title: "AI parent updates & reports", description: "Turn grades, homework completion and classroom notes into clear learning updates, giving teachers more time for meaningful conversations.", features: ["AI summaries of grades and homework", "Teacher-reviewed LINE notifications", "Communication history and follow-ups"] },
    },
  },
  {
    slug: "ai-grading", category: "teaching",
    content: {
      "zh-TW": { title: "AI 智慧批改系統", description: "從紙本作業辨識、客觀題批改到作文回饋，依科目與評分規準設計批改流程，協助老師更快找出共通錯誤。", features: ["紙本與手寫作答辨識", "評分規準與逐題回饋", "老師複核及班級錯誤分析"] },
      en: { title: "AI-assisted grading", description: "Build subject-specific grading workflows, from scanned homework and objective questions to writing feedback, helping teachers spot shared misconceptions.", features: ["Scanned and handwritten answer recognition", "Rubrics and per-question feedback", "Teacher review and class error analysis"] },
    },
  },
  {
    slug: "ai-question-bank", category: "teaching",
    content: {
      "zh-TW": { title: "AI 出題與智慧題庫", description: "依教材、章節、知識點與難度產生練習題，搭配解析與組卷工具，讓每一份考卷更貼近教學進度。", features: ["教材匯入與知識點標籤", "AI 生成題目與解題說明", "審題、組卷與試卷匯出"] },
      en: { title: "AI question bank & test builder", description: "Create practice questions by material, chapter, concept and difficulty, with explanations and test-building tools aligned to your teaching plan.", features: ["Material imports and concept tags", "AI questions and worked explanations", "Question review and printable tests"] },
    },
  },
  {
    slug: "homework-app", category: "teaching",
    content: {
      "zh-TW": { title: "作業發派與繳交 App", description: "在同一個地方完成作業指派、學生繳交與老師回饋，不再逐一翻找群組訊息或追問誰還沒交。", features: ["依班級或學生分派作業", "拍照繳交與截止時間提醒", "完成度追蹤及補交紀錄"] },
      en: { title: "Homework assignment app", description: "Assign, collect and review homework in one place, without searching chat threads or manually checking who has yet to submit.", features: ["Class and individual assignments", "Photo submissions and due-date reminders", "Completion tracking and late submissions"] },
    },
  },
  {
    slug: "student-attendance", category: "communication",
    content: {
      "zh-TW": { title: "學生出缺席即時通知", description: "串起學生到班、請假與離班紀錄，讓櫃檯掌握現場狀況，也讓家長即時收到孩子到班的消息。", features: ["QR Code 或櫃檯點名", "到班、離班與缺席通知", "請假申請及補課紀錄"] },
      en: { title: "Live attendance & notifications", description: "Connect arrival, absence and departure records so staff can see who is on site and parents can receive timely check-in updates.", features: ["QR code or staff check-in", "Arrival, departure and absence alerts", "Leave requests and make-up class records"] },
    },
  },
  {
    slug: "learning-analytics", category: "communication",
    content: {
      "zh-TW": { title: "學生成績與學習分析", description: "把分散在試算表、考卷與作業裡的紀錄整合成學習儀表板，看見每位學生的進步與需要加強的地方。", features: ["成績登錄與趨勢比較", "知識點弱項與班級概況", "家長報表與導師追蹤"] },
      en: { title: "Learning analytics dashboard", description: "Bring spreadsheets, tests and homework records into one dashboard to understand each student's progress and areas for improvement.", features: ["Grade records and progress trends", "Concept gaps and class overview", "Parent reports and teacher follow-ups"] },
    },
  },
  {
    slug: "digital-communication-book", category: "communication",
    content: {
      "zh-TW": { title: "電子聯絡簿與親師生平台", description: "讓課堂紀錄、公告與家長回覆有一致的入口，減少私人訊息四散，也方便交接與後續追蹤。", features: ["班級公告與每日聯絡簿", "家長確認與雙向回覆", "依角色管理訊息權限"] },
      en: { title: "Digital communication book", description: "Keep class notes, announcements and parent replies in one shared space, making communication easier to hand over and follow up.", features: ["Class announcements and daily notes", "Parent acknowledgements and replies", "Role-based message access"] },
    },
  },
  {
    slug: "personalized-practice", category: "teaching",
    content: {
      "zh-TW": { title: "個人化複習與錯題本", description: "從學生的作答紀錄整理錯題與觀念弱點，安排適合的練習與複習提醒，讓課後學習更有方向。", features: ["錯題分類與觀念標記", "依學習狀況推薦練習", "複習排程與進度追蹤"] },
      en: { title: "Personalized practice & revision", description: "Organize mistakes and concept gaps from answer history, then plan relevant practice and revision reminders for more focused study.", features: ["Mistake logs and concept tags", "Practice based on learning needs", "Revision plans and progress tracking"] },
    },
  },
  {
    slug: "class-scheduling", category: "operations",
    content: {
      "zh-TW": { title: "補習班排課與補課系統", description: "把老師、教室、班級與學生時段放在同一份課表，協助行政人員處理調課、衝堂與補課安排。", features: ["老師與教室排程", "衝堂提醒及調課通知", "補課預約與堂數管理"] },
      en: { title: "Class & make-up scheduling", description: "Coordinate teachers, rooms, classes and student availability in one timetable, helping staff manage conflicts and make-up sessions.", features: ["Teacher and room schedules", "Conflict alerts and schedule updates", "Make-up bookings and lesson balances"] },
    },
  },
  {
    slug: "tuition-management", category: "operations",
    content: {
      "zh-TW": { title: "學費收繳與帳務管理", description: "整合學生報名、繳費進度與收據紀錄，讓櫃檯減少重複對帳，管理者也能掌握各班的收款狀況。", features: ["學費帳單與繳費提醒", "金流串接及對帳紀錄", "收據、退費與營運報表"] },
      en: { title: "Tuition & payment management", description: "Connect enrollments, payment status and receipts to reduce manual reconciliation and give managers a clear view of class payments.", features: ["Tuition bills and payment reminders", "Payment integrations and reconciliation", "Receipts, refunds and operational reports"] },
    },
  },
  {
    slug: "enrollment-crm", category: "operations",
    content: {
      "zh-TW": { title: "招生 CRM 與試聽預約", description: "從家長第一次詢問、安排試聽到正式報名，集中管理招生流程，讓每一次聯絡都有紀錄、每一個需求有人追蹤。", features: ["招生表單與名單管理", "試聽預約與自動提醒", "洽詢進度及報名轉換分析"] },
      en: { title: "Enrollment CRM & trial bookings", description: "Manage the journey from a parent's first enquiry through trial lessons to enrollment, with clear records and ownership for every follow-up.", features: ["Lead forms and contact management", "Trial bookings and reminders", "Enquiry pipeline and conversion analysis"] },
    },
  },
  {
    slug: "branded-learning-platform", category: "operations",
    content: {
      "zh-TW": { title: "品牌學習 App 與線上教學平台", description: "把教材、影音課程、測驗與學習紀錄整合成你的品牌平台，延伸實體課程，也支援學生課後自主學習。", features: ["品牌專屬網站與 App", "影音教材及線上測驗", "會員、課程與學習紀錄管理"] },
      en: { title: "Branded learning app & LMS", description: "Bring materials, video lessons, assessments and learning records into your own branded platform, extending classes into independent study.", features: ["Branded website and app", "Video lessons and online assessments", "Members, courses and learning records"] },
    },
  },
];

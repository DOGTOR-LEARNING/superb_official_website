import type { Project } from "../types";
import { projectImage } from "./placeholder";

/**
 * 依使用者指示加入官網產品；內容來源為 pierre-portfolio 的 ERP 案例。
 * CRM 為其中的客戶與聯絡紀錄管理功能，補教應用列為可延伸的開發方向。
 */
export const zhongxingErp: Project = {
  slug: "zhongxing-erp",
  category: ["business-systems"],
  status: "completed",
  year: "2025",
  relationshipType: "client-work",
  companyOwnership: "not-company-owned",
  publicationApproval: {
    status: "approved",
  },
  homeOrder: 2,
  images: {
    cover: projectImage("/projects/zhongxing-erp/cover.webp", 1600, 900, {
      "zh-TW": "中星管理系統 ERP 使用說明封面",
      en: "Zhongxing management system ERP user guide cover",
    }),
    gallery: [],
  },
  video: {
    youtubeId: "ViVosgnhEbM",
    title: { "zh-TW": "中星 ERP 系統操作說明", en: "Zhongxing ERP walkthrough" },
  },
  externalLinks: [],
  localeContent: {
    "zh-TW": {
      title: "中星 CRM 與營運管理系統",
      subtitle: "從客戶聯絡，到排程與營運追蹤",
      summary: "整合客戶資料、聯絡紀錄、工單排程與營運報表，讓行政與現場團隊掌握同一份進度。",
      typeLabel: "客戶關係管理 CRM／企業營運系統 ERP",
      overview: "為中星害蟲防治公司打造的客製營運管理系統，結合客戶關係管理（CRM）與企業資源規劃（ERP），整合客戶檔案、聯絡紀錄、工單、外勤排程、任務追蹤與報表，讓一筆服務從接案到完成都有清楚的紀錄。",
      challenge: "害蟲防治服務涉及客戶資料、施工安排與外勤進度；這些紀錄若分散，行政與現場人員就難以追蹤同一筆服務。",
      solution: "以實際服務流程整理客戶、工單、排程、任務狀態與報表，讓資料能從接案一路連到完成。",
      keyFeatures: [
        { title: "客戶資料與聯絡紀錄", description: "集中管理客戶檔案與往來紀錄。" },
        { title: "工單與任務追蹤", description: "記錄施工安排、服務細節與處理狀態，追蹤每一筆工作的進度。" },
        { title: "人員排程與提醒", description: "安排前線人員的服務行程，讓行政與現場人員依同一份紀錄協作。" },
        { title: "營運報表", description: "提供決策用的統計分析。" },
      ],
      technology: {
        decisions: ["以客戶與工單串起各階段資料，讓排程與狀態更新有對應的服務脈絡。", "以 Firebase Rules 進行權限控管。"],
        stack: ["React", "TypeScript", "Firebase Authentication", "Firestore"],
      },
      involvement: "客戶專案（2025 年 6 月）。SuperB 成員 Pierre Chen（陳冠宇）主導前後端開發，Dino Ting（丁崇耘）參與開發。",
      results: [{ kind: "outcome", text: "完成直接支援公司前線營運的端到端 ERP 系統。" }],
      credits: [{ name: "開發團隊", role: "Pierre Chen、Stonk Tsai、Yu Liu、Angelica Wang、Shawn Hsu、Dino Ting" }],
      userFlow: ["建立客戶資料", "建立工單並安排外勤", "現場完成服務", "更新任務狀態", "查看服務報表"],
      relatedApplications: {
        title: "把這套管理方式，帶進補習班",
        description: "從中星的客戶管理、排程與任務追蹤出發，同樣的流程設計也能用來規劃補教工具。以下是可依機構需求討論的延伸方向。",
        items: [
          { title: "學生、家長與招生名單", description: "集中管理學生與家長資料、聯絡紀錄、試聽安排及報名進度，讓每次洽詢都有後續。" },
          { title: "排課、補課與老師行程", description: "把班級、老師、教室與可用時段放在同一份排程，協助處理調課與補課安排。" },
          { title: "行政任務與親師追蹤", description: "整理待聯絡家長、待確認作業與交辦事項，清楚標記負責人、進度及下一步。" },
          { title: "營運概況與管理報表", description: "依需求彙整招生、出席、堂數與收費紀錄，讓管理者更容易掌握各班的營運狀況。" },
        ],
        link: { label: "看看更多補教系統與教育解決方案", href: "/solutions" },
      },
    },
    en: {
      title: "Zhongxing CRM & Operations System",
      subtitle: "From customer conversations to schedules and operations",
      summary: "Connect customer profiles, contact history, work orders, schedules and reports so office and field staff share the same progress.",
      typeLabel: "Customer relationship management / Enterprise resource planning",
      overview: "A custom operations system built for Zhongxing Pest Control, combining CRM and ERP. Customer profiles, contact history, work orders, field schedules, task tracking and reports connect each service from request to completion.",
      challenge: "Pest-control services involve customer records, job scheduling and field progress; when these are scattered, office and field staff struggle to follow the same job.",
      solution: "Organize customers, work orders, schedules, task status and reports around the real service process, so data flows from request to completion.",
      keyFeatures: [
        { title: "Customer records", description: "Customer profiles and contact history in one place." },
        { title: "Work orders and task tracking", description: "Record service details, assignments and status to follow each job through completion." },
        { title: "Staff scheduling and reminders", description: "Coordinate field visits so office and field staff work from the same records." },
        { title: "Business reports", description: "Analytics for decision-making." },
      ],
      technology: {
        decisions: ["Customers and work orders connect every stage, giving schedules and status updates their service context.", "Access control with Firebase Rules."],
        stack: ["React", "TypeScript", "Firebase Authentication", "Firestore"],
      },
      involvement: "Client work (June 2025). SuperB member Pierre Chen led full-stack development; Dino Ting contributed to development.",
      results: [{ kind: "outcome", text: "Delivered an end-to-end ERP that directly supports frontline operations." }],
      credits: [{ name: "Development team", role: "Pierre Chen, Stonk Tsai, Yu Liu, Angelica Wang, Shawn Hsu, Dino Ting" }],
      userFlow: ["Create a customer record", "Open and schedule a work order", "Field staff complete the visit", "Update task status", "Review service reports"],
      relatedApplications: {
        title: "Bring the same approach to your tutoring center",
        description: "The workflow design behind Zhongxing's customer records, schedules and tasks can also inform education tools. These are potential extensions to discuss around your institution's needs.",
        items: [
          { title: "Students, parents and enrollment leads", description: "Keep student and parent profiles, contact history, trial bookings and enrollment progress together so every enquiry has a follow-up." },
          { title: "Classes, make-up sessions and teacher schedules", description: "Coordinate classes, teachers, rooms and availability in one timetable to handle changes and make-up sessions." },
          { title: "Admin tasks and parent follow-ups", description: "Organize parent contacts, homework checks and staff tasks with clear owners, progress and next steps." },
          { title: "Operational overview and reports", description: "Scope reports around enrollment, attendance, lesson balances and payments so managers can understand each class's operations." },
        ],
        link: { label: "Explore more education systems and solutions", href: "/solutions" },
      },
    },
  },
};

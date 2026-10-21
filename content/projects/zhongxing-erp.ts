import type { Project } from "../types";
import { projectImage } from "./placeholder";

/**
 * 客戶專案：須確認揭露授權（spec §5.4）。
 * 內容已依團隊作品集整理完成；取得客戶書面同意後，將 publicationApproval.status 改為 "approved" 即可上線。
 */
export const zhongxingErp: Project = {
  slug: "zhongxing-erp",
  category: ["business-systems"],
  status: "completed",
  year: "2025",
  relationshipType: "client-work",
  companyOwnership: "not-company-owned",
  publicationApproval: {
    status: "withheld",
    notes: ["取得中星害蟲防治書面同意後才能公開名稱、內容與截圖"],
  },
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
      title: "中星害蟲防治 ERP",
      subtitle: "企業流程數位化",
      summary: "把一筆服務從接案追到完成：整合客戶、工單、外勤排程與報表。",
      typeLabel: "企業系統",
      overview: "為中星害蟲防治公司打造的 ERP 系統，整合客戶管理、工單、外勤排程、任務追蹤與營運報表。",
      challenge: "害蟲防治服務涉及客戶資料、施工安排與外勤進度；這些紀錄若分散，行政與現場人員就難以追蹤同一筆服務。",
      solution: "以實際服務流程整理客戶、工單、排程、任務狀態與報表，讓資料能從接案一路連到完成。",
      keyFeatures: [
        { title: "客戶資料與聯絡紀錄", description: "集中管理客戶檔案與往來紀錄。" },
        { title: "工單管理", description: "管理施工安排與服務細節。" },
        { title: "外勤排程與提醒", description: "為前線人員安排行程並提醒。" },
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
    },
    en: {
      title: "Zhongxing Pest Control ERP",
      subtitle: "Business process digitization",
      summary: "Follow a service job from request to completion: customers, work orders, field scheduling and reports.",
      typeLabel: "Enterprise software",
      overview: "An ERP system built for Zhongxing Pest Control, covering customer management, work orders, field scheduling, task tracking and reporting.",
      challenge: "Pest-control services involve customer records, job scheduling and field progress; when these are scattered, office and field staff struggle to follow the same job.",
      solution: "Organize customers, work orders, schedules, task status and reports around the real service process, so data flows from request to completion.",
      keyFeatures: [
        { title: "Customer records", description: "Customer profiles and contact history in one place." },
        { title: "Work orders", description: "Manage job scheduling and service details." },
        { title: "Field scheduling", description: "Schedule and remind field staff." },
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
    },
  },
};

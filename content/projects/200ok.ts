import type { Project } from "../types";
import { projectImage } from "./placeholder";

export const twoHundredOk: Project = {
  slug: "200ok",
  category: ["business-systems"],
  status: "prototype",
  year: "2025",
  relationshipType: "collaborative-project",
  companyOwnership: "not-company-owned",
  publicationApproval: {
    status: "pending",
    notes: ["確認團隊（Group 18）其他成員的署名與公開同意", "確認是否為課程專題"],
  },
  homeOrder: 4,
  images: {
    cover: projectImage("/projects/200ok/cover.webp", 1600, 1165, {
      "zh-TW": "200OK 首頁：歡迎來到 200 OK，專為軟體工程設計的接案平台",
      en: "200OK home page: a project marketplace designed for software engineering",
    }),
    gallery: [],
  },
  video: {
    youtubeId: "3eJiVbF_AcI",
    title: { "zh-TW": "200OK 平台操作示範", en: "200OK platform demo" },
  },
  externalLinks: [],
  localeContent: {
    "zh-TW": {
      title: "200OK",
      subtitle: "軟體外包接案平台",
      summary: "專為軟體案件設計的發案、提案與即時討論平台，讓需求在合作前先被釐清。",
      typeLabel: "Web 平台",
      overview:
        "200OK 是專為軟體外包設計的接案平台，連結需求方與工程師，支援發案、提案、即時溝通與代幣付費的完整流程，並以 AI 輔助媒合。",
      challenge:
        "許多接案平台不是為軟體專案設計：工程師在意的需求資訊沒有被問到，有些問題業主看不懂只能隨意填，讓雙方從一開始就很難對焦。",
      solution:
        "把發案、工程師提案與即時討論接在同一個流程中：從案件資訊開始，再進入提案比較與對話，讓需求釐清成為合作過程的一部分。",
      keyFeatures: [
        { title: "發案與提案管理", description: "需求方發布案件，工程師瀏覽並提交提案。" },
        { title: "即時訊息", description: "雙方在平台內直接討論、釐清需求。" },
        { title: "代幣機制", description: "以代幣查看提案、提交提案與解鎖聯絡方式，含自動退款流程。" },
        { title: "AI 智慧媒合", description: "以 AI 推薦適合的案件與工程師。" },
      ],
      technology: {
        decisions: [
          "以雙邊平台的角度設計，同時照顧需求方與工程師的需求。",
          "以狀態機設計案件與付費流程，模擬真實商業平台的運作。",
          "支援 Email 驗證與 Google 帳號登入。",
        ],
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "FastAPI", "PostgreSQL", "Socket.io", "NextAuth.js", "Google Gemini API"],
      },
      involvement:
        "200OK 為團隊合作作品（Group 18），非 SuperB 公司產品。SuperB 成員 Pierre Chen（陳冠宇）參與全端開發，負責認證授權、專案管理、即時通訊、代幣系統與 AI 媒合整合。",
      results: [
        { kind: "outcome", text: "完成從發案、提案、即時溝通到代幣付費的完整平台流程（2025 年 10–12 月）。" },
        { kind: "status", text: "平台以模擬商業運作的方式實作，未正式對外營運。" },
      ],
      credits: [{ name: "200OK 團隊（Group 18）", role: "平台設計與全端開發" }],
      userFlow: ["需求方發布案件", "工程師找到案件並提案", "需求方比較提案", "雙方透過訊息討論", "解鎖聯絡資訊並推進合作"],
    },
    en: {
      title: "200OK",
      subtitle: "Software outsourcing platform",
      summary: "A platform built around software projects — posting, proposals and live discussion — so requirements get clarified before work starts.",
      typeLabel: "Web platform",
      overview:
        "200OK is a marketplace designed for software outsourcing. It connects clients and engineers through project posting, proposals, real-time messaging and token-based payments, with AI-assisted matching.",
      challenge:
        "Many freelance platforms aren't built for software projects: they don't ask what engineers need to know, or ask in ways clients can't understand — so both sides struggle to get aligned from the start.",
      solution:
        "Connect project posts, engineer proposals and real-time discussion in one flow: start from the project details, then compare proposals and talk, making requirement clarification part of the collaboration.",
      keyFeatures: [
        { title: "Projects and proposals", description: "Clients post projects; engineers browse and submit proposals." },
        { title: "Real-time messaging", description: "Both sides discuss and clarify requirements on the platform." },
        { title: "Token system", description: "Tokens to view and submit proposals and unlock contacts, with automated refunds." },
        { title: "AI matching", description: "AI recommends suitable projects and engineers." },
      ],
      technology: {
        decisions: [
          "Designed as a two-sided platform serving both clients and engineers.",
          "State machines for project and payment flows, simulating a real commercial platform.",
          "Email verification and Google sign-in.",
        ],
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "FastAPI", "PostgreSQL", "Socket.io", "NextAuth.js", "Google Gemini API"],
      },
      involvement:
        "200OK is a team project (Group 18), not a SuperB company product. SuperB member Pierre Chen contributed full-stack development: authentication, project management, real-time messaging, the token system and AI matching.",
      results: [
        { kind: "outcome", text: "Built the complete flow from posting and proposals to messaging and token payments (Oct–Dec 2025)." },
        { kind: "status", text: "Implemented to simulate commercial operation; not operated publicly." },
      ],
      credits: [{ name: "200OK team (Group 18)", role: "Platform design and full-stack development" }],
      userFlow: ["Client posts a project", "Engineer finds it and submits a proposal", "Client compares proposals", "Both sides discuss through messaging", "Contact details are unlocked to move forward"],
    },
  },
};

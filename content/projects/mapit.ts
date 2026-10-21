import type { Project } from "../types";
import { projectImage } from "./placeholder";

export const mapit: Project = {
  slug: "mapit",
  category: ["ai-apps"],
  status: "research",
  year: "2026",
  relationshipType: "team-capstone",
  companyOwnership: "not-company-owned",
  publicationApproval: {
    status: "pending",
    notes: ["取得專題團隊成員（花紫晏、鄭博宇、陳奕蓁）的公開署名同意", "確認指導教授是否同意公開"],
  },
  homeOrder: 2,
  images: {
    cover: projectImage("/projects/mapit/cover.webp", 1600, 900, {
      "zh-TW": "MapIt：把看到的店，變成吃得到的店——收藏美食、整理地圖、決定今天吃什麼",
      en: "MapIt: turn places you see into places you eat — save restaurants, organize a map, decide what to eat",
    }),
    gallery: [],
  },
  externalLinks: [],
  localeContent: {
    "zh-TW": {
      title: "MapIt",
      subtitle: "AI 社交地圖與人機互動探索",
      summary: "把社群上看到的餐廳變成個人地圖，再和朋友一起選店、真的出發。",
      typeLabel: "行動 App｜研究專案",
      overview:
        "MapIt 是國立臺灣大學資訊管理學系的團隊專題，協助使用者把社群貼文或網頁中看到的餐廳存成個人地圖、整理收藏，並和朋友規劃聚餐。團隊同時研究這套流程的人機互動與可行性。",
      challenge:
        "想吃的餐廳散落在社群貼文、收藏連結與聊天紀錄中；等到要約朋友吃飯時，還得重新翻找、比對和討論，常常沒有結論。",
      solution:
        "把連結變成個人地圖上的店家，再串起篩選、好友邀約與共同造訪紀錄。產品以「發現 → 收藏 → 找回 → 共同選擇 → 邀約 → 造訪」作為完整流程，讓每個功能對應從線上資訊走向實際行動的一個環節。",
      keyFeatures: [
        { title: "連結變地圖", description: "貼上或分享餐廳連結，由後端協助解析店家資訊並加入個人地圖。" },
        { title: "好友間的共同選擇", description: "透過地圖、好友動態、邀約與轉蛋選店，把個人收藏帶進朋友間的討論。" },
        { title: "共同造訪紀錄", description: "記錄和朋友一起去過的地方。" },
      ],
      technology: {
        decisions: [
          "以行動裝置為主，地圖提供位置情境，好友互動與轉蛋提供共同選擇的入口。",
          "AI 協助解析連結中的餐廳資訊，降低收藏的操作成本。",
          "以 HCI 角度研究收藏是否會被重新使用、朋友的社交訊號如何影響選店，以及共同意願如何走向實際造訪。",
        ],
        stack: ["Flutter", "FastAPI", "Mapbox", "Supabase", "PostgreSQL", "OpenAI API"],
      },
      involvement:
        "MapIt 為臺大資管系團隊專題，非 SuperB 公司產品。SuperB 成員 Pierre Chen（陳冠宇）提出產品概念並參與實作，Bowen Chen（陳泊華）為專題團隊成員。",
      results: [
        { kind: "status", text: "持續開發與研究中（2026 年 4 月起）。" },
        { kind: "limitation", text: "人機互動與流程可行性研究尚未完成，目前沒有正式研究結論。" },
      ],
      credits: [
        { name: "國立臺灣大學 資訊管理學系 MapIt 團隊", role: "陳冠宇、花紫晏、鄭博宇、陳奕蓁、陳泊華" },
      ],
      userFlow: ["分享或貼上餐廳連結", "檢視解析結果並加入地圖", "用地圖篩選或好友動態找店", "揪朋友或從收藏中轉蛋選店", "記錄一起去過的地方"],
    },
    en: {
      title: "MapIt",
      subtitle: "AI social map and HCI exploration",
      summary: "Turn restaurants you spot on social media into a personal map — then choose one with friends and actually go.",
      typeLabel: "Mobile app | Research project",
      overview:
        "MapIt is a National Taiwan University Information Management team capstone. It helps people save restaurants from social posts or web links onto a personal map, organize them, and plan meals with friends. The team is also studying the HCI and feasibility of this flow.",
      challenge:
        "Restaurants we want to try are scattered across social posts, saved links and chats. When it's time to plan a meal with friends, everyone has to dig through them again, compare and discuss — often without reaching a decision.",
      solution:
        "Turn a link into a place on a personal map, then connect filtering, invitations and shared visit records. The product follows the full path — discover → save → retrieve → choose together → invite → visit — with each feature serving one step from online information to real-world action.",
      keyFeatures: [
        { title: "Links become a map", description: "Paste or share a restaurant link; the backend extracts the place and adds it to your map." },
        { title: "Choosing together", description: "Maps, friends' activity, invitations and random picks bring personal saves into group decisions." },
        { title: "Shared visit records", description: "Keep a record of places you visited together." },
      ],
      technology: {
        decisions: [
          "Mobile-first: the map gives location context, while friend activity and random picks open the way to shared choices.",
          "AI helps extract restaurant details from links, lowering the effort of saving.",
          "From an HCI perspective, study whether saves get reused, how friends' social signals affect choices, and how shared intent turns into visits.",
        ],
        stack: ["Flutter", "FastAPI", "Mapbox", "Supabase", "PostgreSQL", "OpenAI API"],
      },
      involvement:
        "MapIt is an NTU Information Management capstone, not a SuperB company product. SuperB member Pierre Chen proposed the product concept and contributes to implementation; Bowen Chen is also a member of the capstone team.",
      results: [
        { kind: "status", text: "In ongoing development and research (since April 2026)." },
        { kind: "limitation", text: "The HCI and flow-feasibility research is not finished; there are no formal findings yet." },
      ],
      credits: [{ name: "NTU Information Management MapIt team", role: "陳冠宇, 花紫晏, 鄭博宇, 陳奕蓁, 陳泊華" }],
      userFlow: ["Share or paste a restaurant link", "Review extracted places and save one to the map", "Find a place with map filters or a friends feed", "Invite friends or draw from saved places", "Record the visit together"],
    },
  },
};

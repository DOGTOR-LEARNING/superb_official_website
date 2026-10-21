import type { Locale } from "@/i18n/routing";

export type Localized<T> = Record<Locale, T>;

export type ProjectCategory = "education" | "ai-apps" | "social-impact" | "business-systems";

export const projectCategories: ProjectCategory[] = [
  "education",
  "ai-apps",
  "social-impact",
  "business-systems",
];

/** 原型或研究中的作品必須明確標示（spec §5.6） */
export type ProjectStatus = "live" | "completed" | "prototype" | "in-progress" | "research" | "archived";

export const nonCommercialStatuses: ProjectStatus[] = ["prototype", "in-progress", "research"];

/** 決定作品是旗艦產品、團隊參與作品或客戶專案（spec §13.4） */
export type RelationshipType =
  | "flagship-product"
  | "team-member-project"
  | "team-capstone"
  | "team-led-project"
  | "collaborative-project"
  | "selected-work"
  | "client-work";

/**
 * 公司擁有權。不得依開發者個人參與自動判定（spec §13.4、§15.2），
 * 必須經人工確認後填寫；尚未確認者一律為 "unconfirmed"。
 */
export type CompanyOwnership = "company-owned" | "shared" | "not-company-owned" | "unconfirmed";

export interface PublicationApproval {
  /** approved：已確認可公開；pending：可展示但上線前需審核；withheld：不得公開 */
  status: "approved" | "pending" | "withheld";
  /** 待確認事項（僅開發模式顯示） */
  notes?: string[];
}

export interface ProjectImage {
  src: string;
  width: number;
  height: number;
  alt: Localized<string>;
  /** phone：手機截圖（完整顯示不裁切）；wide：桌面或封面 */
  kind?: "phone" | "wide";
  placeholder?: boolean;
}

export interface ProjectLocaleContent {
  title: string;
  subtitle: string;
  /** 卡片上的一句價值說明 */
  summary: string;
  /** 作品類型（例如：行動 App／Web 平台） */
  typeLabel: string;
  overview: string;
  challenge: string;
  solution: string;
  keyFeatures: { title: string; description: string }[];
  technology: { decisions: string[]; stack: string[] };
  involvement: string;
  results: { kind: "outcome" | "limitation" | "status"; text: string }[];
  credits: { name: string; role: string }[];
  /** 使用流程（Product Showcase 中依序呈現） */
  userFlow?: string[];
  /** 從實際案例延伸的應用方向，與已完成的功能分開說明。 */
  relatedApplications?: {
    title: string;
    description: string;
    items: { title: string; description: string }[];
    link: { label: string; href: string };
  };
}

/** Demo 影片（YouTube，點擊後才載入，使用 youtube-nocookie） */
export interface ProjectVideo {
  youtubeId: string;
  /** Shorts／直式影片 */
  vertical?: boolean;
  title: Localized<string>;
}

export interface Project {
  slug: string;
  category: ProjectCategory[];
  status: ProjectStatus;
  /** 年度；未確認時留空，不顯示 */
  year?: string;
  relationshipType: RelationshipType;
  companyOwnership: CompanyOwnership;
  publicationApproval: PublicationApproval;
  /** 首頁精選順序；未設定則不出現在首頁 */
  homeOrder?: number;
  images: { cover: ProjectImage; gallery: ProjectImage[] };
  video?: ProjectVideo;
  externalLinks: { label: Localized<string>; href: string }[];
  localeContent: Localized<ProjectLocaleContent>;
}

export interface Metric {
  value: string;
  label: Localized<string>;
  /** 資料日期（ISO） */
  asOf?: string;
  /** 非單一日期的資料期間，例如「上線首月（2026 年 3 月）」 */
  period?: Localized<string>;
  source?: Localized<string>;
  /** 未經核實的數據不在正式環境顯示（spec §4.2「不要使用沒有依據的數字」） */
  verified: boolean;
}

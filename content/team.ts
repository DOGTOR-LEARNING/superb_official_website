import type { Localized } from "./types";

export interface TeamMember {
  slug: string;
  name: string;
  /** 中文姓名 */
  nameZh?: string;
  role: Localized<string>;
  /** 專業領域：由本人確認後填寫，未填寫時不顯示 */
  expertise?: Localized<string>;
  /** 個人介紹：由本人確認後填寫，未填寫時不顯示 */
  bio?: Localized<string>;
  /** 照片：未提供時以姓名縮寫圖示代替 */
  photo?: { src: string; width: number; height: number };
  /** 可選的個人網站或 LinkedIn，不強制提供 */
  links?: { label: string; href: string }[];
  /** 是否已同意公開上述資訊（未同意者不顯示） */
  consent: boolean;
}

const photo = (file: string) => ({ src: `/team/${file}.webp`, width: 364, height: 364 });

/** 核心成員（資料與照片來源：DOGTOR 官網「關於我們」） */
export const team: TeamMember[] = [
  {
    slug: "pierre-chen",
    name: "Pierre Chen",
    nameZh: "陳冠宇",
    role: { "zh-TW": "執行長 CEO", en: "Chief Executive Officer" },
    photo: photo("pierre"),
    links: [{ label: "pierre-chen.com", href: "https://www.pierre-chen.com/" }],
    consent: true,
  },
  {
    slug: "dino-ting",
    name: "Dino Ting",
    nameZh: "丁崇耘",
    role: { "zh-TW": "產品長 CPO", en: "Chief Product Officer" },
    photo: photo("dino"),
    consent: true,
  },
  {
    slug: "bowen-chen",
    name: "Bowen Chen",
    nameZh: "陳泊華",
    role: { "zh-TW": "技術長 CTO", en: "Chief Technology Officer" },
    photo: photo("bowen"),
    consent: true,
  },
  {
    slug: "ikea-lee",
    name: "Ikea Lee",
    nameZh: "李宜嘉",
    role: { "zh-TW": "行銷長 CMO", en: "Chief Marketing Officer" },
    photo: photo("yichia"),
    consent: true,
  },
];

/** 顧問與合作教授：取得同意後才加入（spec §7.5） */
export const advisors: TeamMember[] = [];

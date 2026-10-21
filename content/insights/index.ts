import type { Locale } from "@/i18n/routing";
import type { Localized } from "../types";

export type InsightCategory = "education" | "ai" | "hci" | "product" | "company";

export const insightCategories: InsightCategory[] = ["education", "ai", "hci", "product", "company"];

export interface Insight {
  slug: string;
  category: InsightCategory;
  /** ISO 日期 */
  date: string;
  author: Localized<string>;
  title: Partial<Localized<string>>;
  summary: Partial<Localized<string>>;
  /** 研究仍在進行中（spec §8.3、§15.2：不得將假說寫成結論） */
  researchInProgress?: boolean;
  /** 草稿：上線前需經內容審核 */
  draft?: boolean;
  /** 封面圖 */
  cover?: { src: string; width: number; height: number; alt: Localized<string> };
}

const teamAuthor = { "zh-TW": "SuperB 團隊", en: "The SuperB Team" };

export const insights: Insight[] = [
  {
    slug: "podcast-chuangye-xinshengdai",
    category: "company",
    date: "2026-08-05",
    author: teamAuthor,
    title: {
      "zh-TW": "創業小聚 Podcast《創業新聲帶》專訪：打造給學生的 GPT",
      en: "Startup podcast interview: building a GPT for students",
    },
    summary: {
      "zh-TW": "三位共同創辦人 Pierre、Bowen、Dino 受邀上節目，聊 AI 如何幫學生找到真正不會的地方、遊戲化與陪伴角色的設計，以及給家長的學習報告。",
      en: "Co-founders Pierre, Bowen and Dino on helping students find what they truly don't understand, game-like design, and learning reports for parents.",
    },
    cover: {
      src: "/insights/podcast-chuangye-xinshengdai.webp",
      width: 500,
      height: 500,
      alt: { "zh-TW": "創業小聚 Podcast《創業新聲帶》節目封面", en: "Startup podcast episode cover" },
    },
  },
  {
    slug: "why-we-started-with-edtech",
    category: "education",
    date: "2026-10-21",
    author: teamAuthor,
    draft: true,
    title: {
      "zh-TW": "為什麼我們選擇從教育科技開始？",
      en: "Why we chose to start with education technology",
    },
    summary: {
      "zh-TW": "教育是一個「努力不一定會被看見」的領域。我們想用軟體，讓學生的努力用在真正需要的地方。",
      en: "Education is a field where effort doesn't always pay off visibly. We wanted software to help students put their effort where it matters.",
    },
  },
  {
    slug: "designing-personalized-learning-dogtor",
    category: "product",
    date: "2026-10-21",
    author: teamAuthor,
    draft: true,
    title: {
      "zh-TW": "從 DOGTOR 看個人化學習產品的設計思考",
      en: "Designing for personalized learning: notes from DOGTOR",
    },
    summary: {
      "zh-TW": "個人化不是「推更多題目」，而是幫學生回答：我下一步該做什麼？",
      en: "Personalization isn't about serving more questions — it's about answering: what should I do next?",
    },
  },
  {
    slug: "ai-beyond-answers",
    category: "ai",
    date: "2026-10-21",
    author: teamAuthor,
    draft: true,
    title: {
      "zh-TW": "AI 不只是回答問題：如何讓技術真正幫助學習？",
      en: "AI is more than answers: making technology genuinely help learning",
    },
    summary: {
      "zh-TW": "當 AI 可以立刻給出答案，學習產品更需要思考：什麼時候該給答案，什麼時候該給提示？",
      en: "When AI can answer instantly, learning products must decide when to give an answer — and when to give a hint.",
    },
  },
  // MapIt 尚未發布，文章暫不公開（2026-10-21）
  // {
  //   slug: "mapit-saving-vs-doing",
  //   category: "hci",
  //   date: "2026-10-21",
  //   author: teamAuthor,
  //   draft: true,
  //   researchInProgress: true,
  //   title: {
  //     "zh-TW": "從 MapIt 探索數位收藏與實際行動之間的距離",
  //     en: "MapIt: exploring the gap between saving and doing",
  //   },
  //   summary: {
  //     "zh-TW": "我們收藏了很多想去的地方，卻很少真的出發。這是一份仍在進行中的研究紀錄。",
  //     en: "We save countless places we want to visit, yet rarely go. A research log, still in progress.",
  //   },
  // },
];

export function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug);
}

/** 依語言取得欄位；缺翻譯時 fallback 到另一語言並回報 */
export function pickLocalized<T>(value: Partial<Localized<T>>, locale: Locale) {
  const fallbackLocale: Locale = locale === "en" ? "zh-TW" : "en";
  if (value[locale] !== undefined) return { value: value[locale] as T, locale, isFallback: false };
  return { value: value[fallbackLocale] as T, locale: fallbackLocale, isFallback: true };
}

export function sortedInsights() {
  return [...insights].sort((a, b) => b.date.localeCompare(a.date));
}

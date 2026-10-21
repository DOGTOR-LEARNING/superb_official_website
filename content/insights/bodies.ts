import type { ComponentType } from "react";
import type { Locale } from "@/i18n/routing";

type MdxModule = { default: ComponentType };

/**
 * 文章內文（MDX）。與 index.ts 的 metadata 分開，讓 Proxy 等輕量環境可以只讀取 slug 清單。
 * 只列出已有翻譯的語言；缺少的語言會明確 fallback 至另一語言。
 */
export const insightBodies: Record<string, Partial<Record<Locale, () => Promise<MdxModule>>>> = {
  "podcast-chuangye-xinshengdai": {
    "zh-TW": () => import("./podcast-chuangye-xinshengdai.zh-TW.mdx"),
    en: () => import("./podcast-chuangye-xinshengdai.en.mdx"),
  },
  "why-we-started-with-edtech": {
    "zh-TW": () => import("./why-we-started-with-edtech.zh-TW.mdx"),
    en: () => import("./why-we-started-with-edtech.en.mdx"),
  },
  "designing-personalized-learning-dogtor": {
    "zh-TW": () => import("./designing-personalized-learning-dogtor.zh-TW.mdx"),
    en: () => import("./designing-personalized-learning-dogtor.en.mdx"),
  },
  "ai-beyond-answers": {
    "zh-TW": () => import("./ai-beyond-answers.zh-TW.mdx"),
    en: () => import("./ai-beyond-answers.en.mdx"),
  },
  // MapIt 尚未發布，文章暫不公開
  // "mapit-saving-vs-doing": {
  //   "zh-TW": () => import("./mapit-saving-vs-doing.zh-TW.mdx"),
  //   en: () => import("./mapit-saving-vs-doing.en.mdx"),
  // },
};

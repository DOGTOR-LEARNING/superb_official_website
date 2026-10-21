import { extendTailwindMerge } from "tailwind-merge";

/** 合併 className，後者覆蓋前者（例如 hidden 覆蓋 inline-flex），並辨識自訂字級 utilities */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["h1", "h2", "h3", "body-lg", "caption", "eyebrow"] }],
    },
  },
});

export function cn(...classes: (string | false | null | undefined)[]) {
  return twMerge(classes.filter(Boolean).join(" "));
}

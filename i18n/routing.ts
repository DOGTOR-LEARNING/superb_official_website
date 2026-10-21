import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["zh-TW", "en"],
  defaultLocale: "zh-TW",
  localePrefix: "always",
  // 根目錄一律導向預設語言（繁體中文），不依瀏覽器語言自動切換
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];

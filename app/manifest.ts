import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "超棒軟體科技 SuperB Software",
    short_name: "SuperB",
    description: "以教育為起點、以人為核心的科技公司，旗艦產品為 AI 學習 App DOGTOR 逗課。",
    start_url: "/zh-TW",
    display: "browser",
    background_color: "#F8FAFC",
    theme_color: "#2868A6",
    lang: "zh-TW",
    icons: [
      { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}

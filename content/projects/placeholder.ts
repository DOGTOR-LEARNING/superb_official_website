import type { Localized, ProjectImage } from "../types";

/** 作品圖片：來源為團隊作品集與 DOGTOR 官網的授權素材，轉為 WebP */
export function projectImage(
  src: string,
  width: number,
  height: number,
  alt: Localized<string>,
  kind: "phone" | "wide" = "wide",
): ProjectImage {
  return { src, width, height, alt, kind };
}

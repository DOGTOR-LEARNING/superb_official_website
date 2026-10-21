import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { insights } from "@/content/insights";
import { routing } from "@/i18n/routing";
import { localizedPath } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site-config";

/** 內容最後更新日期：更新頁面內容時請一併調整 */
const SITE_UPDATED = "2026-10-21";

const staticPaths = ["/", "/work", "/solutions", "/products/dogtor", "/about", "/insights", "/contact", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths: { path: string; updated: string }[] = [
    ...staticPaths.map((path) => ({ path, updated: SITE_UPDATED })),
    ...projects.map((p) => ({ path: `/work/${p.slug}`, updated: SITE_UPDATED })),
    ...insights.map((i) => ({ path: `/insights/${i.slug}`, updated: i.date })),
  ];

  return paths.flatMap(({ path, updated }) =>
    routing.locales.map((locale) => ({
      url: absoluteUrl(localizedPath(locale, path)),
      lastModified: new Date(`${updated}T00:00:00+08:00`),
      changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : path === "/products/dogtor" || path === "/work" ? 0.8 : 0.6,
      alternates: {
        languages: Object.fromEntries(routing.locales.map((l) => [l, absoluteUrl(localizedPath(l, path))])),
      },
    })),
  );
}

import { NextResponse, type NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { projects } from "./content/projects";
import { insights } from "./content/insights";

const intlMiddleware = createMiddleware(routing);

const knownSlugs: Record<string, Set<string>> = {
  work: new Set(projects.map((p) => p.slug)),
  insights: new Set(insights.map((i) => i.slug)),
};

/**
 * 1. next-intl：無語系前綴的路徑導向預設語言（/ → /zh-TW）。
 * 2. 未公開或不存在的作品／文章 slug，在渲染前改寫到 404，確保回傳正確的 404 狀態碼
 *    （Cache Components 串流後才 notFound() 會維持 200）。
 */
export default function proxy(request: NextRequest) {
  const [, locale, section, slug, ...rest] = request.nextUrl.pathname.split("/");
  if ((routing.locales as readonly string[]).includes(locale) && section in knownSlugs && slug) {
    if (!knownSlugs[section].has(slug) || rest.length > 0) {
      const url = request.nextUrl.clone();
      url.pathname = `/${locale}/404`;
      return NextResponse.rewrite(url, { status: 404 });
    }
  }
  return intlMiddleware(request);
}

export const config = {
  // 排除 API、Next 內部路徑、metadata 路由與所有帶副檔名的靜態檔案
  matcher: ["/((?!api|_next|_vercel|sitemap.xml|robots.txt|manifest.webmanifest|llms.txt|llms-full.txt|.*\\..*).*)"],
};

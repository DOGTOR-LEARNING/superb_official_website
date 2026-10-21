import { resolveLocale } from "@/lib/locale";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { JsonLd } from "@/components/ui/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
// Noto Sans TC 子集（scripts/subset-fonts.mjs 於 predev/prebuild 依網站文案自動產生，可變字重 400–700）
const notoTc = localFont({
  src: "../fonts/NotoSansTC-subset.woff2",
  weight: "400 700",
  variable: "--font-noto-tc",
  display: "swap",
  fallback: ["PingFang TC", "Microsoft JhengHei", "Noto Sans CJK TC", "sans-serif"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#F8FAFC",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = await getTranslations({ locale, namespace: "Meta" });
  return {
    metadataBase: new URL(siteConfig.siteUrl.value),
    title: { default: t("defaultTitle"), template: t("titleTemplate") },
    description: t("defaultDescription"),
    applicationName: t("siteName"),
    keywords: t("keywords").split(","),
    authors: [{ name: siteConfig.companyName.zh, url: siteConfig.siteUrl.value }],
    creator: siteConfig.companyName.enLegal,
    publisher: siteConfig.companyName.zh,
    category: "technology",
    formatDetection: { email: false, telephone: false, address: false },
  };
}

const clientNamespaces = ["Common", "Nav", "Contact"] as const;

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const locale = await resolveLocale(params);

  const t = await getTranslations({ locale, namespace: "Common" });
  const messages = await getMessages({ locale });
  // 只把用戶端元件需要的翻譯送到瀏覽器（Minimal client-side JS）
  const clientMessages = Object.fromEntries(clientNamespaces.map((ns) => [ns, messages[ns]]));
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  return (
    <html lang={locale} className={`${inter.variable} ${notoTc.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-[100] rounded-[var(--radius-button)] bg-navy px-4 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          {t("skipToContent")}
        </a>
        <NextIntlClientProvider locale={locale} messages={clientMessages}>
          <MotionProvider>
            <SiteHeader dogtorUrl={siteConfig.dogtorUrl.value} />
            <main id="main" tabIndex={-1} className="flex-1 outline-none">
              {children}
            </main>
            <SiteFooter locale={locale} />
          </MotionProvider>
        </NextIntlClientProvider>
        <JsonLd data={[organizationJsonLd(locale), websiteJsonLd(locale)]} />
        {plausibleDomain ? (
          // 隱私友善、無 Cookie 的分析（選用）
          <Script defer data-domain={plausibleDomain} src="https://plausible.io/js/script.tagged-events.js" strategy="afterInteractive" />
        ) : null}
      </body>
    </html>
  );
}

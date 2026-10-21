import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { team } from "@/content/team";
import { absoluteUrl, siteConfig } from "./site-config";

const ogLocale: Record<Locale, string> = { "zh-TW": "zh_TW", en: "en_US" };

export function localizedPath(locale: Locale, path = "") {
  return `/${locale}${path === "/" ? "" : path}`;
}

/** 每頁獨立 Title、Description、Canonical、hreflang 與 Open Graph（spec §13.6） */
export function buildMetadata({
  locale,
  path,
  title,
  description,
  type = "website",
  absoluteTitle = false,
  noIndex = false,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  type?: "website" | "article";
  absoluteTitle?: boolean;
  noIndex?: boolean;
}): Metadata {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) languages[l] = absoluteUrl(localizedPath(l, path));
  languages["x-default"] = absoluteUrl(localizedPath(routing.defaultLocale, path));

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: absoluteUrl(localizedPath(locale, path)),
      languages,
    },
    openGraph: {
      type,
      title,
      description,
      url: absoluteUrl(localizedPath(locale, path)),
      siteName: locale === "en" ? siteConfig.companyName.en : `SuperB ${siteConfig.companyName.zh}`,
      locale: ogLocale[locale],
      alternateLocale: routing.locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      images: [{ url: absoluteUrl(`/${locale}/opengraph-image`), width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [absoluteUrl(`/${locale}/opengraph-image`)] },
    robots: noIndex ? { index: false, follow: true } : undefined,
  };
}

/* ─── Structured data ─── */

/** 實體描述：讓搜尋引擎與 AI 一致地理解「SuperB 是誰」（GEO） */
export const organizationDescription: Record<Locale, string> = {
  "zh-TW":
    "超棒軟體科技有限公司（SuperB Software Technology Co., Ltd.）是位於臺北的教育科技公司，結合人工智慧、軟體工程與以人為本的設計打造數位產品，旗艦產品為國高中生 AI 學習 App「DOGTOR 逗課」。",
  en: "SuperB Software Technology Co., Ltd. (超棒軟體科技有限公司) is an education technology company in Taipei, Taiwan, building digital products with AI, software engineering and human-centered design. Its flagship product is DOGTOR, an AI learning app for secondary school students.",
};

export function organizationJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.companyName.zh,
    legalName: siteConfig.companyName.zh,
    alternateName: [siteConfig.companyName.enLegal, siteConfig.companyName.en, siteConfig.brandName, "超棒軟體"],
    description: organizationDescription[locale],
    url: absoluteUrl(localizedPath(locale)),
    logo: absoluteUrl("/brand/superb-logo.svg"),
    image: absoluteUrl("/brand/superb-lockup.svg"),
    email: siteConfig.contactEmail.value,
    telephone: "+886-963-779-263",
    taxID: siteConfig.registration.value.taxId,
    vatID: siteConfig.registration.value.taxId,
    address: {
      "@type": "PostalAddress",
      streetAddress: "金山北路 1 號 5 樓之 6",
      addressLocality: "中正區",
      addressRegion: "臺北市",
      addressCountry: "TW",
    },
    areaServed: { "@type": "Country", name: "Taiwan" },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "partnerships",
      email: siteConfig.contactEmail.value,
      availableLanguage: ["zh-TW", "en"],
    },
    knowsAbout: [
      "Education technology",
      "AI-assisted learning",
      "Learning analytics",
      "Human-computer interaction",
      "Mobile app development",
      "教育科技",
      "AI 學習",
      "人機互動",
    ],
    brand: { "@type": "Brand", name: "DOGTOR 逗課", url: siteConfig.dogtorUrl.value },
    founder: team.map((m) => ({ "@id": absoluteUrl(`/#person-${m.slug}`) })),
    member: [
      {
        "@type": "Organization",
        name: "精湛教育 Superb Education",
        description: locale === "en" ? "Tutoring school partner since 2023" : "2023 年起合作的補教機構",
      },
    ],
    sameAs: siteConfig.socialLinks.map((s) => s.href),
  };
}

/** 團隊成員（Person） */
export function teamJsonLd(locale: Locale) {
  return team
    .filter((m) => m.consent)
    .map((m) => ({
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": absoluteUrl(`/#person-${m.slug}`),
      name: m.name,
      alternateName: m.nameZh,
      jobTitle: m.role[locale],
      image: m.photo ? absoluteUrl(m.photo.src) : undefined,
      worksFor: { "@id": absoluteUrl("/#organization") },
      sameAs: m.links?.map((l) => l.href),
    }));
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

/** 列表頁（作品、文章）：CollectionPage + ItemList */
export function collectionJsonLd({
  locale,
  path,
  name,
  description,
  items,
}: {
  locale: Locale;
  path: string;
  name: string;
  description: string;
  items: { name: string; path: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: absoluteUrl(localizedPath(locale, path)),
    inLanguage: locale,
    isPartOf: { "@id": absoluteUrl("/#website") },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        url: absoluteUrl(localizedPath(locale, item.path)),
      })),
    },
  };
}

export function websiteJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: locale === "en" ? siteConfig.companyName.en : siteConfig.companyName.zh,
    url: absoluteUrl(localizedPath(locale)),
    inLanguage: locale,
    publisher: { "@id": absoluteUrl("/#organization") },
  };
}

export function breadcrumbJsonLd(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

import { resolveLocale } from "@/lib/locale";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { ArrowLeft, FlaskConical, Languages } from "lucide-react";
import { getInsight, insights, pickLocalized } from "@/content/insights";
import { insightBodies } from "@/content/insights/bodies";
import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { buildMetadata, localizedPath } from "@/lib/seo";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { formatDate } from "@/lib/format";
import { Container, Section } from "@/components/layout/Container";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { JsonLd } from "@/components/ui/JsonLd";
import { PendingBadge } from "@/components/ui/PendingBadge";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const locale = await resolveLocale(params);
  const insight = getInsight(slug);
  if (!insight) return {};
  const l = locale as Locale;
  return buildMetadata({
    locale: l,
    path: `/insights/${slug}`,
    title: pickLocalized(insight.title, l).value,
    description: pickLocalized(insight.summary, l).value,
    type: "article",
  });
}

export default async function InsightPage({ params }: PageProps<"/[locale]/insights/[slug]">) {
  const { slug } = await params;
  const locale = await resolveLocale(params);
  const insight = getInsight(slug);
  if (!insight) notFound();

  const t = await getTranslations("Insights");
  const title = pickLocalized(insight.title, locale);
  const summary = pickLocalized(insight.summary, locale);
  // 缺少翻譯時明確 fallback 到另一語言，並提示讀者（spec §3.3）
  const body = pickLocalized(insightBodies[slug], locale);
  const { default: Content } = await body.value();
  const contentLang = body.isFallback ? body.locale : undefined;

  const related = insights.filter((i) => i.slug !== slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title.value,
          description: summary.value,
          datePublished: insight.date,
          dateModified: insight.date,
          image: absoluteUrl(insight.cover?.src ?? `/${locale}/opengraph-image`),
          articleSection: t(`categories.${insight.category}`),
          inLanguage: body.locale,
          author: { "@type": "Organization", name: insight.author[locale] },
          publisher: {
            "@type": "Organization",
            "@id": absoluteUrl("/#organization"),
            name: siteConfig.companyName.zh,
            logo: { "@type": "ImageObject", url: absoluteUrl("/brand/superb-logo.svg") },
          },
          mainEntityOfPage: absoluteUrl(localizedPath(locale, `/insights/${slug}`)),
        }}
      />
      <article>
        <header className="bg-gradient-to-b from-white to-page pt-10 pb-10 md:pt-14">
          <Container>
            <div className="mx-auto max-w-[720px]">
              <Breadcrumb locale={locale} items={[{ name: t("breadcrumb"), href: "/insights" }, { name: title.value, href: `/insights/${slug}` }]} />
              <div className="flex flex-wrap items-center gap-2 text-caption">
                <span className="rounded-full bg-soft-blue px-3 py-1 font-medium text-brand-hover">
                  <span className="sr-only">{t("category")}：</span>
                  {t(`categories.${insight.category}`)}
                </span>
                {insight.researchInProgress ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-soft-gold px-3 py-1 font-medium text-[#7a5200]">
                    <FlaskConical aria-hidden className="size-3.5" />
                    {t("inProgress")}
                  </span>
                ) : null}
                <PendingBadge show={insight.draft} notes={["草稿：上線前需經內容審核"]} />
              </div>
              <h1 className="text-h2 mt-5 md:text-[2.75rem]" lang={title.isFallback ? title.locale : undefined}>
                {title.value}
              </h1>
              <p className="text-body-lg mt-5 text-muted" lang={summary.isFallback ? summary.locale : undefined}>
                {summary.value}
              </p>
              <dl className="text-caption mt-6 flex flex-wrap gap-x-6 gap-y-1 text-muted">
                <div className="flex gap-1.5">
                  <dt>{t("published")}</dt>
                  <dd>
                    <time dateTime={insight.date}>{formatDate(insight.date, locale)}</time>
                  </dd>
                </div>
                <div className="flex gap-1.5">
                  <dt>{t("author")}</dt>
                  <dd>{insight.author[locale]}</dd>
                </div>
              </dl>
            </div>
          </Container>
        </header>

        <Container>
          <div className="mx-auto max-w-[720px] pb-16 md:pb-24">
            {body.isFallback ? (
              <p role="note" className="mb-8 flex items-start gap-2.5 rounded-[var(--radius-card-sm)] border border-line bg-soft-blue px-5 py-4 text-[0.9375rem]">
                <Languages aria-hidden className="mt-0.5 size-[1.125rem] shrink-0 text-brand" />
                {t("fallbackNotice")}
              </p>
            ) : null}
            {insight.researchInProgress ? (
              <p role="note" className="mb-8 flex items-start gap-2.5 rounded-[var(--radius-card-sm)] border border-gold/40 bg-soft-gold px-5 py-4 text-[0.9375rem]">
                <FlaskConical aria-hidden className="mt-0.5 size-[1.125rem] shrink-0 text-[#7a5200]" />
                {t("inProgressNotice")}
              </p>
            ) : null}
            {insight.cover ? (
              <Image
                src={insight.cover.src}
                alt={insight.cover.alt[locale]}
                width={insight.cover.width}
                height={insight.cover.height}
                sizes="240px"
                className="mb-8 w-48 rounded-[var(--radius-card)] border border-line"
              />
            ) : null}
            <div lang={contentLang}>
              <Content />
            </div>
            <Link href="/insights" className="mt-12 inline-flex min-h-11 items-center gap-2 font-semibold text-brand hover:underline">
              <ArrowLeft aria-hidden className="size-4" />
              {t("backToList")}
            </Link>
          </div>
        </Container>
      </article>

      {/* 文章底部推薦其他文章；第一版不提供留言 */}
      {related.length ? (
        <Section tone="surface" labelledBy="related-title">
          <h2 id="related-title" className="text-h2">
            {t("related")}
          </h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((i) => (
              <li key={i.slug}>
                <ArticleCard insight={i} locale={locale} />
              </li>
            ))}
          </ul>
        </Section>
      ) : null}
    </>
  );
}

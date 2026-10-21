import { resolveLocale } from "@/lib/locale";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { insightCategories, sortedInsights } from "@/content/insights";
import type { Locale } from "@/i18n/routing";
import { buildMetadata, collectionJsonLd } from "@/lib/seo";
import { pickLocalized } from "@/content/insights";
import { JsonLd } from "@/components/ui/JsonLd";
import { richTags } from "@/components/brand/HighlightHeading";
import { BrandPattern } from "@/components/brand/BrandPattern";
import { Container, Section } from "@/components/layout/Container";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { EmptyState } from "@/components/ui/States";
import { FilterableGrid } from "@/components/ui/FilterableGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";

export async function generateMetadata({ params }: PageProps<"/[locale]/insights">): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = await getTranslations({ locale, namespace: "Meta.insights" });
  return buildMetadata({ locale: locale as Locale, path: "/insights", title: t("title"), description: t("description") });
}

export default async function InsightsPage({ params }: PageProps<"/[locale]/insights">) {
  const locale = await resolveLocale(params);
  const t = await getTranslations("Insights");
  const tn = await getTranslations("Nav");
  const items = sortedInsights();

  // 只顯示有文章的分類，避免出現空分類
  const usedCategories = insightCategories.filter((c) => items.some((i) => i.category === c));
  const options = [{ value: "all", label: t("all") }, ...usedCategories.map((c) => ({ value: c, label: t(`categories.${c}`) }))];
  const counts = Object.fromEntries(
    options.map((o) => {
      const n = o.value === "all" ? items.length : items.filter((i) => i.category === o.value).length;
      return [o.value, t("count", { count: n })];
    }),
  );

  const tm = await getTranslations("Meta.insights");

  return (
    <>
      <JsonLd
        data={collectionJsonLd({
          locale,
          path: "/insights",
          name: tm("title"),
          description: tm("description"),
          items: items.map((i) => ({ name: pickLocalized(i.title, locale).value, path: `/insights/${i.slug}` })),
        })}
      />
      <section aria-labelledby="insights-hero" className="relative overflow-hidden bg-gradient-to-b from-white to-page pt-12 pb-8 md:pt-20 md:pb-10">
        <BrandPattern variant="lines" className="-top-20 -right-24 size-[460px]" />
        <Container className="relative">
          <Breadcrumb locale={locale} items={[{ name: tn("insights"), href: "/insights" }]} visible={false} />
          <SectionHeading as="h1" id="insights-hero" eyebrow={t("hero.eyebrow")} title={t.rich("hero.title", richTags)} supporting={t("hero.supporting")} />
        </Container>
      </section>

      <Section tone="page" className="!pt-8 md:!pt-12">
        <h2 className="sr-only">{tn("insights")}</h2>
        {items.length === 0 ? (
          <EmptyState title={t("emptyAll")} />
        ) : (
          <FilterableGrid
            options={options}
            counts={counts}
            labels={{ group: t("filterLabel"), empty: t("empty"), emptyAction: t("all") }}
            gridClassName="md:grid-cols-2 lg:grid-cols-3"
            items={items.map((i) => ({ id: i.slug, categories: [i.category], node: <ArticleCard insight={i} locale={locale} /> }))}
          />
        )}
      </Section>
    </>
  );
}

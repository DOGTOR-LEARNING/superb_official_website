import { resolveLocale } from "@/lib/locale";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { projects } from "@/content/projects";
import { projectCategories } from "@/content/types";
import type { Locale } from "@/i18n/routing";
import { buildMetadata, collectionJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";
import { richTags } from "@/components/brand/HighlightHeading";
import { BrandPattern } from "@/components/brand/BrandPattern";
import { Container, Section } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FilterableGrid } from "@/components/ui/FilterableGrid";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FeaturedDogtorShowcase } from "@/components/sections/work/FeaturedDogtorShowcase";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { Info } from "lucide-react";

export async function generateMetadata({ params }: PageProps<"/[locale]/work">): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = await getTranslations({ locale, namespace: "Meta.work" });
  return buildMetadata({ locale: locale as Locale, path: "/work", title: t("title"), description: t("description") });
}

export default async function WorkPage({ params }: PageProps<"/[locale]/work">) {
  const locale = await resolveLocale(params);
  const t = await getTranslations("Work");
  const tn = await getTranslations("Nav");

  const options = [{ value: "all", label: t("filter.all") }, ...projectCategories.map((c) => ({ value: c, label: t(`filter.${c}`) }))];
  const counts = Object.fromEntries(
    options.map((o) => [
      o.value,
      t("filter.count", { count: o.value === "all" ? projects.length : projects.filter((p) => p.category.includes(o.value as never)).length }),
    ]),
  );

  const tm = await getTranslations("Meta.work");

  return (
    <>
      <JsonLd
        data={collectionJsonLd({
          locale,
          path: "/work",
          name: tm("title"),
          description: tm("description"),
          items: [{ name: "DOGTOR 逗課", path: "/products/dogtor" }, ...projects.map((p) => ({ name: p.localeContent[locale].title, path: `/work/${p.slug}` }))],
        })}
      />
      <section aria-labelledby="work-hero" className="relative overflow-hidden bg-gradient-to-b from-white to-page pt-12 pb-8 md:pt-20 md:pb-10">
        <BrandPattern className="-top-32 -right-40 size-[520px]" />
        <Container className="relative">
          <Breadcrumb locale={locale} items={[{ name: tn("work"), href: "/work" }]} visible={false} />
          <SectionHeading as="h1" id="work-hero" eyebrow={t("hero.eyebrow")} title={t.rich("hero.title", richTags)} supporting={t("hero.supporting")} />
        </Container>
      </section>

      <FeaturedDogtorShowcase locale={locale} />

      <Section tone="page" labelledBy="selected-title" className="!pt-6 md:!pt-10">
        <SectionHeading id="selected-title" eyebrow={t("selected.eyebrow")} title={t("selected.title")} supporting={t("selected.supporting")} />
        <p className="text-caption mt-5 flex max-w-3xl items-start gap-2 text-muted">
          <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-brand" />
          {t("selected.notice")}
        </p>
        <div className="mt-10">
          <FilterableGrid
            options={options}
            counts={counts}
            labels={{ group: t("filter.label"), empty: t("filter.empty"), emptyAction: t("filter.emptyAction") }}
            gridClassName="md:grid-cols-2"
            items={projects.map((p) => ({ id: p.slug, categories: p.category, node: <ProjectCard project={p} locale={locale} headingLevel="h3" /> }))}
          />
        </div>
      </Section>

      <FinalCta />
    </>
  );
}

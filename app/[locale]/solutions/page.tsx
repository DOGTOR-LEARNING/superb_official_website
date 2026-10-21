import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { resolveLocale } from "@/lib/locale";
import { buildMetadata, collectionJsonLd, faqJsonLd, localizedPath } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site-config";
import { educationSolutions, solutionCategories } from "@/content/education-solutions";
import { Container, Section } from "@/components/layout/Container";
import { SectionEyebrow } from "@/components/brand/SectionEyebrow";
import { BrandPattern } from "@/components/brand/BrandPattern";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { JsonLd } from "@/components/ui/JsonLd";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";
import { FilterableGrid } from "@/components/ui/FilterableGrid";
import { FaqList } from "@/components/ui/FaqList";
import { SolutionCard } from "@/components/solutions/SolutionCard";
import { SolutionOutline } from "@/components/solutions/SolutionOutline";
import { TextLink } from "@/components/ui/TextLink";
import { FinalCta } from "@/components/sections/home/FinalCta";

export async function generateMetadata({ params }: PageProps<"/[locale]/solutions">): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = await getTranslations({ locale, namespace: "Solutions" });
  return buildMetadata({ locale, path: "/solutions", title: t("metaTitle"), description: t("metaDescription") });
}

export default async function SolutionsPage({ params }: PageProps<"/[locale]/solutions">) {
  const locale = await resolveLocale(params);
  const t = await getTranslations("Solutions");
  const tn = await getTranslations("Nav");
  const options = [{ value: "all", label: t("all") }, ...solutionCategories.map((category) => ({ value: category, label: t(`categories.${category}`) }))];
  const counts = Object.fromEntries(options.map(({ value }) => [value, t("count", { count: value === "all" ? educationSolutions.length : educationSolutions.filter((s) => s.category === value).length })]));
  const questions = ["ready", "integrate", "scope", "ai"].map((id) => ({ id, q: t(`faq.${id}.q`), a: t(`faq.${id}.a`) }));

  return (
    <>
      <JsonLd data={collectionJsonLd({ locale, path: "/solutions", name: t("metaTitle"), description: t("metaDescription"), items: educationSolutions.map((s) => ({ name: s.content[locale].title, path: `/solutions#${s.slug}` })) })} />
      <JsonLd data={faqJsonLd(questions)} />
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "Service", name: t("metaTitle"), description: t("metaDescription"),
        url: absoluteUrl(localizedPath(locale, "/solutions")), serviceType: locale === "en" ? "Custom education software development" : "教育與補教軟體客製開發",
        provider: { "@id": absoluteUrl("/#organization") },
        hasOfferCatalog: { "@type": "OfferCatalog", name: t("catalogTitle"), itemListElement: educationSolutions.map((s) => ({ "@type": "Service", name: s.content[locale].title, description: s.content[locale].description, url: absoluteUrl(localizedPath(locale, `/solutions#${s.slug}`)) })) },
      }} />
      <section aria-labelledby="solutions-title" className="relative overflow-hidden border-b border-line bg-gradient-to-br from-white via-page to-soft-blue pt-12 pb-14 md:pt-20 md:pb-20">
        <BrandPattern className="-top-36 -right-36 size-[560px] opacity-50" />
        <Container className="relative">
          <Breadcrumb locale={locale} items={[{ name: tn("solutions"), href: "/solutions" }]} visible={false} />
          <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
            <div>
              <SectionEyebrow>{t("eyebrow")}</SectionEyebrow>
              <h1 id="solutions-title" className="text-h1 mt-5">{t("title")}<br /><span className="text-brand">{t("highlight")}</span></h1>
              <p className="text-body-lg mt-6 max-w-xl text-muted">{t("description")}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="/contact">{t("primaryCta")}</PrimaryButton>
                <SecondaryButton href="#applications">{t("secondaryCta")}</SecondaryButton>
              </div>
            </div>
            <div aria-hidden className="relative mx-auto grid w-full max-w-[460px] grid-cols-2 gap-4 py-4">
              <div className="col-span-2 rounded-[28px] border border-brand/15 bg-white/80 px-6 py-2 shadow-[var(--shadow-card)]"><SolutionOutline slug="ai-parent-updates" className="mx-auto max-w-[270px]" /></div>
              <div className="rounded-[24px] border border-brand/15 bg-white/80 p-3"><SolutionOutline slug="ai-grading" /></div>
              <div className="rounded-[24px] border border-gold/30 bg-soft-gold/70 p-3"><SolutionOutline slug="class-scheduling" /></div>
              <span className="absolute top-[55%] left-1/2 flex size-11 -translate-x-1/2 items-center justify-center rounded-full border border-line bg-white text-brand"><ArrowRight className="size-5 rotate-90" /></span>
            </div>
          </div>
        </Container>
      </section>

      <Section id="applications" labelledBy="applications-title" className="scroll-mt-20">
        <SectionEyebrow>{t("catalogEyebrow")}</SectionEyebrow>
        <h2 id="applications-title" className="text-h2 mt-4 max-w-3xl">{t("catalogTitle")}</h2>
        <p className="mt-5 max-w-2xl text-muted">{t("catalogBody")}</p>
        <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-brand/15 bg-soft-blue px-3 py-1 text-caption font-medium text-brand"><span aria-hidden className="size-1.5 rounded-full bg-brand" />{t("customLabel")}</p>
        <div className="mt-9">
          <FilterableGrid revealLinkedItem options={options} counts={counts} labels={{ group: t("filterLabel"), empty: t("empty"), emptyAction: t("all") }} gridClassName="md:grid-cols-2 lg:grid-cols-3" items={educationSolutions.map((solution) => ({ id: solution.slug, categories: [solution.category], node: <SolutionCard solution={solution} locale={locale} categoryLabel={t(`categories.${solution.category}`)} cta={t("cardCta")} /> }))} />
        </div>
      </Section>

      <Section tone="surface" labelledBy="solution-process">
        <SectionEyebrow>{t("processEyebrow")}</SectionEyebrow>
        <h2 id="solution-process" className="text-h2 mt-4">{t("processTitle")}</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
          {["understand", "design", "build"].map((step, i) => <li key={step} className="border-t border-line pt-6"><span className="text-[2rem] font-light text-brand/60">0{i + 1}</span><h3 className="text-h3 mt-3">{t(`steps.${step}.title`)}</h3><p className="mt-3 text-muted">{t(`steps.${step}.body`)}</p></li>)}
        </ol>
      </Section>

      <Section labelledBy="solutions-faq">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div><SectionEyebrow>{t("faqEyebrow")}</SectionEyebrow><h2 id="solutions-faq" className="text-h2 mt-4">{t("faqTitle")}</h2><TextLink href="/work" className="mt-6">{t("existingCta")}</TextLink></div>
          <FaqList items={questions} />
        </div>
      </Section>
      <FinalCta headingId="solutions-cta" />
    </>
  );
}

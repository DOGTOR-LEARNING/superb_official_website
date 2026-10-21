import { resolveLocale } from "@/lib/locale";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { BrainCircuit, GraduationCap, LayoutTemplate, School, Users } from "lucide-react";
import { advisors, team } from "@/content/team";
import type { Locale } from "@/i18n/routing";
import { buildMetadata, faqJsonLd, localizedPath, organizationDescription, teamJsonLd } from "@/lib/seo";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { faq } from "@/content/faq";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import { richTags } from "@/components/brand/HighlightHeading";
import { SectionEyebrow } from "@/components/brand/SectionEyebrow";
import { BrandPattern } from "@/components/brand/BrandPattern";
import { Container, Section } from "@/components/layout/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { cardBase } from "@/components/ui/Cards";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeamCard } from "@/components/ui/TeamCard";
import { Timeline } from "@/components/ui/Timeline";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { cn } from "@/lib/cn";

export async function generateMetadata({ params }: PageProps<"/[locale]/about">): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = await getTranslations({ locale, namespace: "Meta.about" });
  return buildMetadata({ locale: locale as Locale, path: "/about", title: t("title"), description: t("description") });
}

/** 四項原則的幾何圖示（由 Logo 菱形延伸） */
const principleIcons = {
  purpose: (
    <svg viewBox="0 0 40 40" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="11" y="11" width="18" height="18" rx="4" transform="rotate(45 20 20)" stroke="currentColor" />
      <circle cx="20" cy="20" r="3" fill="#F3B338" stroke="none" />
    </svg>
  ),
  human: (
    <svg viewBox="0 0 40 40" fill="none" strokeWidth="2" strokeLinecap="round">
      <circle cx="15" cy="20" r="9" stroke="currentColor" />
      <circle cx="25" cy="20" r="9" stroke="#F3B338" />
    </svg>
  ),
  engineering: (
    <svg viewBox="0 0 40 40" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="7" width="11" height="11" rx="3" stroke="currentColor" />
      <rect x="22" y="22" width="11" height="11" rx="3" stroke="currentColor" />
      <path d="M18 12.5 H27.5 V22" stroke="#F3B338" />
    </svg>
  ),
  learning: (
    <svg viewBox="0 0 40 40" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 30 L16 22 L22 26 L32 12" stroke="currentColor" />
      <path d="M26 12 H32 V18" stroke="#F3B338" />
    </svg>
  ),
};

export default async function AboutPage({ params }: PageProps<"/[locale]/about">) {
  const locale = await resolveLocale(params);
  const t = await getTranslations("About");
  const ts = await getTranslations("Story");
  const tn = await getTranslations("Nav");

  const storySteps = ["observe", "solve", "dogtor", "explore"] as const;
  const principles = ["purpose", "human", "engineering", "learning"] as const;
  const capabilities = [
    { key: "ai", icon: BrainCircuit },
    { key: "product", icon: LayoutTemplate },
    { key: "hci", icon: Users },
  ] as const;
  const visibleTeam = team.filter((m) => m.consent);
  const faqItems = faq.map((f) => ({ id: f.id, q: f.q[locale], a: f.a[locale] }));
  const visibleAdvisors = advisors.filter((m) => m.consent);

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: t("hero.eyebrow"),
            url: absoluteUrl(localizedPath(locale, "/about")),
            inLanguage: locale,
            about: { "@id": absoluteUrl("/#organization") },
          },
          faqJsonLd(faqItems),
          ...teamJsonLd(locale),
        ]}
      />
      {/* 7.1 Hero */}
      <section aria-labelledby="about-hero" className="relative overflow-hidden bg-gradient-to-b from-white to-page pt-12 pb-16 md:pt-20 md:pb-24">
        <BrandPattern className="-top-32 -right-40 size-[560px]" />
        <Container className="relative">
          <Breadcrumb locale={locale} items={[{ name: tn("about"), href: "/about" }]} visible={false} />
          <SectionHeading as="h1" id="about-hero" eyebrow={t("hero.eyebrow")} title={t.rich("hero.title", richTags)} supporting={t("hero.supporting")} />
        </Container>
      </section>

      {/* 7.2 Our Story：教育現場的觀察 → 透過軟體解決問題 → 建立 DOGTOR → 持續探索 */}
      <Section tone="surface" labelledBy="story-title">
        <div className="grid gap-10 lg:grid-cols-12">
          <SectionHeading id="story-title" className="lg:col-span-5" eyebrow={t("story.eyebrow")} title={t("story.title")} />
          <Reveal className="lg:col-span-7">
            <p className="text-body-lg text-navy/85">{t("story.body")}</p>
          </Reveal>
        </div>
        <Timeline
          className="mt-16"
          steps={storySteps.map((s, i) => ({ index: `0${i + 1}`, label: ts(`${s}.title`), title: ts(`${s}.label`), body: ts(`${s}.body`) }))}
        />
      </Section>

      {/* 7.3 Mission & Vision */}
      <Section tone="page" labelledBy="mission-title">
        <h2 id="mission-title" className="sr-only">
          {t("missionVisionTitle")}
        </h2>
        <RevealGroup className="grid gap-6 md:grid-cols-2">
          <RevealItem className="relative overflow-hidden rounded-[var(--radius-feature)] bg-navy p-8 text-white md:p-12">
            <BrandPattern className="-right-24 -bottom-24 size-[300px] [&_rect]:stroke-white [&_rect]:[stroke-opacity:0.12]" />
            <SectionEyebrow tone="light">{t("mission.eyebrow")}</SectionEyebrow>
            <p className="text-h3 relative mt-5 text-white">{t("mission.body")}</p>
          </RevealItem>
          <RevealItem className="overflow-hidden rounded-[var(--radius-feature)] edge [--edge-color:rgb(243_179_56/0.4)] bg-soft-gold p-8 md:p-12">
            <SectionEyebrow>{t("vision.eyebrow")}</SectionEyebrow>
            <p className="text-h3 relative mt-5">{t("vision.body")}</p>
          </RevealItem>
        </RevealGroup>
      </Section>

      {/* 7.4 Our Principles */}
      <Section tone="surface" labelledBy="principles-title">
        <SectionHeading id="principles-title" eyebrow={t("principles.eyebrow")} title={t("principles.title")} />
        <RevealGroup as="ul" className="mt-14 grid gap-6 lg:mt-16 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <RevealItem as="li" key={p} className={cn(cardBase, "p-7")}>
              <div aria-hidden className="size-10 text-brand">
                {principleIcons[p]}
              </div>
              <h3 className="mt-6 text-[1.1875rem] font-semibold">{t(`principles.items.${p}.title`)}</h3>
              <p className="mt-2 text-muted">{t(`principles.items.${p}.body`)}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* 7.5 Team */}
      <Section tone="page" labelledBy="team-title">
        <SectionHeading id="team-title" eyebrow={t("team.eyebrow")} title={t("team.title")} />
        <RevealGroup as="ul" className="mt-14 grid gap-6 lg:mt-16 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {visibleTeam.map((member) => (
            <RevealItem as="li" key={member.slug}>
              <TeamCard member={member} locale={locale} />
            </RevealItem>
          ))}
        </RevealGroup>

        {/* 顧問與合作夥伴：獨立分類；個別姓名於取得同意後才公開 */}
        <div className="mt-20">
          <h3 className="text-h3">{t("team.advisors")}</h3>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            <li className={cn(cardBase, "p-7 md:p-8")}>
              <GraduationCap aria-hidden className="size-6 text-brand" />
              <p className="mt-4 font-semibold">{t("team.advisorsLabel")}</p>
              <p className="mt-2 text-muted">{t("team.advisorsBody")}</p>
            </li>
            <li className={cn(cardBase, "p-7 md:p-8")}>
              <School aria-hidden className="size-6 text-brand" />
              <p className="mt-4 font-semibold">{t("team.partnersLabel")}</p>
              <p className="mt-2 text-muted">{t("team.partnersBody")}</p>
            </li>
            {visibleAdvisors.map((member) => (
              <li key={member.slug}>
                <TeamCard member={member} locale={locale} />
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 7.6 Capabilities */}
      <Section tone="surface" labelledBy="capabilities-title">
        <SectionHeading id="capabilities-title" eyebrow={t("capabilities.eyebrow")} title={t("capabilities.title")} />
        <RevealGroup as="ul" className="mt-14 grid gap-6 lg:mt-16 lg:gap-8 lg:grid-cols-3">
          {capabilities.map(({ key, icon: Icon }) => (
            <RevealItem as="li" key={key} className={cn(cardBase, "flex flex-col p-7 md:p-8")}>
              <span className="inline-flex size-12 items-center justify-center rounded-[14px] bg-soft-blue text-brand">
                <Icon aria-hidden className="size-6" />
              </span>
              <h3 className="text-h3 mt-6">{t(`capabilities.items.${key}.title`)}</h3>
              <p className="mt-3 font-medium text-navy">{t(`capabilities.items.${key}.body`)}</p>
              <p className="mt-4 border-t border-line pt-4 text-caption text-muted">{t(`capabilities.items.${key}.evidence`)}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* 公司簡介：可被引用的事實清單（GEO／AEO） */}
      <Section tone="page" labelledBy="facts-title">
        <div className="grid gap-10 lg:grid-cols-12">
          <SectionHeading id="facts-title" className="lg:col-span-4" eyebrow={t("facts.eyebrow")} title={t("facts.title")} />
          <Reveal className="lg:col-span-8">
            <p className="text-body-lg text-navy/85">{organizationDescription[locale]}</p>
            <dl className="mt-8 divide-y divide-line border-y border-line">
              {[
                [t("facts.name"), siteConfig.companyName.zh],
                [t("facts.nameEn"), siteConfig.companyName.enLegal],
                [t("facts.taxId"), siteConfig.registration.value.taxId],
                [t("facts.location"), t("facts.locationValue")],
                [t("facts.product"), t("facts.productValue")],
                [t("facts.partner"), t("facts.partnerValue")],
                [t("facts.focus"), t("facts.focusValue")],
                [t("facts.email"), siteConfig.contactEmail.value],
              ].map(([k, v]) => (
                <div key={k} className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
                  <dt className="text-caption font-semibold text-muted sm:pt-0.5">{k}</dt>
                  <dd className="text-[0.9375rem]">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Section>

      {/* 常見問題（FAQPage） */}
      <Section tone="surface" labelledBy="faq-title">
        <div className="grid gap-10 lg:grid-cols-12">
          <SectionHeading id="faq-title" className="lg:col-span-4" eyebrow={t("faq.eyebrow")} title={t("faq.title")} />
          <div className="lg:col-span-8">
            <FaqList items={faqItems} />
          </div>
        </div>
      </Section>

      {/* 未來方向 */}
      <Section tone="soft-blue" labelledBy="future-title">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>{t("future.eyebrow")}</SectionEyebrow>
          <h2 id="future-title" className="text-h2 mt-4">
            {t("future.title")}
          </h2>
          <p className="text-body-lg mt-5 text-muted">{t("future.body")}</p>
        </Reveal>
      </Section>

      <FinalCta />
    </>
  );
}

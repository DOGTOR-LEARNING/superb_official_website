import { resolveLocale } from "@/lib/locale";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { BookOpen, Gamepad2, Route, Sparkles, Target, TrendingDown, BatteryLow } from "lucide-react";
import { dogtor } from "@/content/projects/dogtor";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { richTags } from "@/components/brand/HighlightHeading";
import { SectionEyebrow } from "@/components/brand/SectionEyebrow";
import { BrandPattern } from "@/components/brand/BrandPattern";
import { Container, Section } from "@/components/layout/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { DogtorButton, PrimaryButton, SecondaryButton } from "@/components/ui/Button";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { DogtorLogo } from "@/components/brand/DogtorLogo";
import { FeatureCard } from "@/components/ui/Cards";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RelationshipBadge, StatusBadge } from "@/components/ui/StatusBadge";
import { DogtorMetrics } from "@/components/sections/DogtorMetrics";

export async function generateMetadata({ params }: PageProps<"/[locale]/products/dogtor">): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = await getTranslations({ locale, namespace: "Meta.dogtor" });
  return buildMetadata({ locale: locale as Locale, path: "/products/dogtor", title: t("title"), description: t("description") });
}

/**
 * DOGTOR 公司層級產品案例頁（spec §6）——不是第二個 DOGTOR 行銷網站。
 * 頁面使用 SuperB 設計系統；DOGTOR 黃色只在產品內容區（畫面展示、CTA）較大量出現。
 */
export default async function DogtorPage({ params }: PageProps<"/[locale]/products/dogtor">) {
  const locale = await resolveLocale(params);
  const t = await getTranslations("Dogtor");
  const tw = await getTranslations("Project");
  const tm = await getTranslations("Meta.dogtor");
  const tc = await getTranslations("Common");

  const approach = [
    { key: "knowledge", icon: BookOpen },
    { key: "ai", icon: Sparkles },
    { key: "personal", icon: Route },
    { key: "play", icon: Gamepad2 },
  ] as const;
  const problems = [
    { key: "volume", icon: Target },
    { key: "blind", icon: TrendingDown },
    { key: "motivation", icon: BatteryLow },
  ] as const;
  const steps = ["practice", "diagnose", "ai", "progress"] as const;

  return (
    <>
      {/* SoftwareApplication：只放可核實的欄位 */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "DOGTOR 逗課",
          alternateName: "DOGTOR",
          applicationCategory: "EducationalApplication",
          description: tm("description"),
          url: dogtor.url.value,
          operatingSystem: "iOS, Android",
          sameAs: [dogtor.stores.appStore, dogtor.stores.googlePlay],
          image: absoluteUrl("/projects/dogtor/cover.webp"),
          // App Store 公開評分（2026-10-21）
          aggregateRating: { "@type": "AggregateRating", ratingValue: 4.75, ratingCount: 257, bestRating: 5, worstRating: 1 },
          datePublished: "2026-03-01",
          inLanguage: "zh-TW",
          video: {
            "@type": "VideoObject",
            name: dogtor.video.title[locale],
            description: tm("description"),
            thumbnailUrl: absoluteUrl(`/videos/${dogtor.video.youtubeId}.webp`),
            embedUrl: `https://www.youtube-nocookie.com/embed/${dogtor.video.youtubeId}`,
            contentUrl: `https://www.youtube.com/shorts/${dogtor.video.youtubeId}`,
            uploadDate: "2026-03-25",
          },
          publisher: { "@type": "Organization", name: siteConfig.companyName.zh, "@id": absoluteUrl("/#organization") },
          audience: { "@type": "EducationalAudience", educationalRole: "student" },
        }}
      />

      {/* Hero */}
      <section aria-labelledby="dogtor-hero" className="relative overflow-hidden bg-gradient-to-b from-white to-page pt-10 md:pt-14">
        <BrandPattern className="-top-32 -right-40 size-[520px]" />
        <Container className="relative">
          <Breadcrumb locale={locale} items={[{ name: tw("breadcrumbWork"), href: "/work" }, { name: t("breadcrumb"), href: "/products/dogtor" }]} />
          <div className="grid items-center gap-12 pb-14 md:pb-20 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SectionEyebrow>{t("hero.eyebrow")}</SectionEyebrow>
              <DogtorLogo locale={locale} className="mt-6" />
              <h1 className="text-h1 mt-5">{t("hero.title")}</h1>
              <p className="text-h3 mt-4 font-medium">{t.rich("hero.subtitle", richTags)}</p>
              <p className="text-body-lg mt-5 text-muted">{t("hero.body")}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <RelationshipBadge type="flagship-product" />
                <StatusBadge status="live" />
              </div>
            </div>
            <div className="relative lg:col-span-6">
              <div className="relative overflow-hidden rounded-[var(--radius-feature)] bg-dogtor-soft px-8 pt-10 pb-8 sm:px-12">
                <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgb(255_207_63/0.45),transparent_65%)]" />
                <ImageFrame image={dogtor.island} locale={locale} fit="contain" className="relative bg-transparent" sizes="(min-width: 1200px) 520px, 90vw" priority />
                <div className="absolute right-4 bottom-2 w-[32%] max-w-[170px]">
                  <ImageFrame image={dogtor.character} locale={locale} fit="contain" className="bg-transparent" sizes="170px" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* The Problem */}
      <Section tone="surface" labelledBy="problem-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <SectionHeading id="problem-title" className="lg:col-span-6" eyebrow={t("problem.eyebrow")} title={t("problem.title")} supporting={t("problem.body")} />
          <RevealGroup as="ul" className="grid content-start gap-4 lg:col-span-5 lg:col-start-8">
            {problems.map(({ key, icon: Icon }) => (
              <RevealItem as="li" key={key} className="flex items-center gap-4 rounded-[var(--radius-card-sm)] border border-line bg-page p-5">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-[12px] bg-soft-blue text-brand">
                  <Icon aria-hidden className="size-5" />
                </span>
                <span className="font-semibold">{t(`problem.points.${key}`)}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* Our Approach */}
      <Section tone="page" labelledBy="approach-title">
        <SectionHeading id="approach-title" eyebrow={t("approach.eyebrow")} title={t("approach.title")} supporting={t("approach.body")} />
        <RevealGroup as="ul" className="mt-14 grid gap-6 lg:mt-16 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {approach.map(({ key, icon: Icon }) => (
            <RevealItem as="li" key={key}>
              <FeatureCard icon={<Icon aria-hidden className="size-6" />} title={t(`approach.items.${key}.title`)}>
                {t(`approach.items.${key}.body`)}
              </FeatureCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* Product in Action：產品內容區，可使用 DOGTOR 色彩 */}
      <section aria-labelledby="action-title" className="section-y bg-dogtor-soft">
        <Container>
          <SectionHeading id="action-title" eyebrow={t("inAction.eyebrow")} title={t("inAction.title")} />
          {/* 1–3：真實產品 Demo 畫面；4：家長 LINE 學習報告 */}
          <ol className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:mt-16">
            {[dogtor.demos.test, dogtor.demos.classification, dogtor.demos.conversation].map((image, i) => (
              <Reveal as="li" key={image.src} delay={i * 0.06}>
                <ImageFrame image={image} locale={locale} className="rounded-[var(--radius-card)] edge [--edge-color:rgb(255_207_63/0.45)] shadow-[var(--shadow-card)]" sizes="(min-width: 1200px) 540px, (min-width: 768px) 45vw, 100vw" />
                <p className="mt-4 flex items-start gap-3 font-semibold">
                  <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-navy text-[0.75rem] text-white tabular-nums">{i + 1}</span>
                  {t(`inAction.steps.${steps[i]}`)}
                </p>
              </Reveal>
            ))}
            <Reveal as="li" delay={0.18}>
              <div className="flex aspect-video items-center justify-center gap-4 overflow-hidden rounded-[var(--radius-card)] edge [--edge-color:rgb(255_207_63/0.45)] bg-[#1e374b] px-6 shadow-[var(--shadow-card)]">
                {dogtor.reportCards.slice(0, 3).map((card) => (
                  <div key={card.src} className="w-[28%]">
                    <ImageFrame image={card} locale={locale} fit="contain" className="rounded-[10px] bg-white" sizes="160px" />
                  </div>
                ))}
              </div>
              <p className="mt-4 flex items-start gap-3 font-semibold">
                <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-navy text-[0.75rem] text-white tabular-nums">4</span>
                {t("inAction.steps.progress")}
              </p>
            </Reveal>
          </ol>

          <div className="mt-16 grid items-center gap-10 md:grid-cols-[minmax(0,320px)_1fr] md:gap-14">
            <VideoEmbed youtubeId={dogtor.video.youtubeId} vertical title={dogtor.video.title[locale]} playLabel={tc("playVideo")} />
            <div>
              <h3 className="text-h3">{t("inAction.videoTitle")}</h3>
              <p className="mt-3 text-navy/80">{t("cta.body")}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <SecondaryButton href={dogtor.stores.appStore} external event="dogtor_cta_click" eventProps={{ placement: "dogtor_page_appstore" }}>
                  {t("cta.appStore")}
                </SecondaryButton>
                <SecondaryButton href={dogtor.stores.googlePlay} external event="dogtor_cta_click" eventProps={{ placement: "dogtor_page_googleplay" }}>
                  {t("cta.googlePlay")}
                </SecondaryButton>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Impact */}
      <Section tone="surface" labelledBy="impact-title">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <SectionHeading id="impact-title" className="lg:col-span-6" eyebrow={t("impact.eyebrow")} title={t("impact.title")} supporting={t("impact.body")} />
          <DogtorMetrics locale={locale} className="lg:col-span-5 lg:col-start-8" />
        </div>
      </Section>

      {/* Beyond Features */}
      <Section tone="soft-blue" labelledBy="beyond-title">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>{t("beyond.eyebrow")}</SectionEyebrow>
          <h2 id="beyond-title" className="text-h2 mt-4">
            {t("beyond.title")}
          </h2>
          <p className="text-body-lg mt-5 text-muted">{t("beyond.body")}</p>
          <PrimaryButton href="/insights/ai-beyond-answers" className="mt-8">
            {t("beyond.cta")}
          </PrimaryButton>
        </Reveal>
      </Section>

      {/* CTA：前往 DOGTOR 官網 */}
      <section aria-labelledby="dogtor-cta" className="section-y bg-page">
        <Container>
          <Reveal className="flex flex-col items-start gap-6 rounded-[var(--radius-feature)] border border-dogtor/60 bg-dogtor-soft p-8 md:flex-row md:items-center md:justify-between md:p-12">
            <div className="max-w-2xl">
              <h2 id="dogtor-cta" className="text-h2">
                {t("cta.title")}
              </h2>
              <p className="mt-3 text-navy/80">{t("cta.body")}</p>
            </div>
            <DogtorButton href={dogtor.url.value} external event="dogtor_cta_click" eventProps={{ placement: "dogtor_page" }} className="shrink-0">
              {t("cta.button")}
            </DogtorButton>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

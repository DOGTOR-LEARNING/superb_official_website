import { Check } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { dogtor } from "@/content/projects/dogtor";
import type { Locale } from "@/i18n/routing";
import { richTags } from "@/components/brand/HighlightHeading";
import { SectionEyebrow } from "@/components/brand/SectionEyebrow";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { PrimaryButton } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
import { DogtorVisual } from "@/components/sections/DogtorVisual";
import { DogtorMetrics } from "@/components/sections/DogtorMetrics";

/**
 * Section 02 — Featured Product: DOGTOR（spec §4.2）
 * Hero 之後最具視覺份量的區塊。DOGTOR 黃色與插畫只出現在本區的產品視覺面板內。
 */
export async function FeaturedDogtor({ locale }: { locale: Locale }) {
  const t = await getTranslations("Home.dogtor");
  const features = ["personalized", "tracking", "game", "parents"] as const;

  return (
    <section aria-labelledby="dogtor-title" className="section-y bg-page">
      <Container>
        <Reveal className="edge overflow-hidden rounded-[var(--radius-feature)] bg-surface shadow-[var(--shadow-card)]">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-16">
              <SectionEyebrow>{t("eyebrow")}</SectionEyebrow>
              <h2 id="dogtor-title" className="text-h2 mt-4">
                {t.rich("title", richTags)}
              </h2>
              <p className="mt-8 text-[1.125rem] font-bold text-navy">{t("productName")}</p>
              <p className="mt-2 text-muted">{t("description")}</p>

              <h3 className="sr-only">{t("featuresLabel")}</h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="mt-[3px] inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-soft-blue text-brand">
                      <Check aria-hidden className="size-3.5" strokeWidth={3} />
                    </span>
                    <span className="font-medium">{t(`features.${f}`)}</span>
                  </li>
                ))}
              </ul>

              <DogtorMetrics locale={locale} limit={2} className="mt-8" />

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                <PrimaryButton href={dogtor.url.value} external event="dogtor_cta_click" eventProps={{ placement: "home_feature" }}>
                  {t("primaryCta")}
                </PrimaryButton>
                <TextLink href="/products/dogtor">{t("secondaryCta")}</TextLink>
              </div>
            </div>

            <DogtorVisual locale={locale} label={t("screensLabel")} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

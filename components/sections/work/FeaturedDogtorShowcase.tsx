import { getTranslations } from "next-intl/server";
import { dogtor } from "@/content/projects/dogtor";
import type { Locale } from "@/i18n/routing";
import { DogtorLogo } from "@/components/brand/DogtorLogo";
import { SectionEyebrow } from "@/components/brand/SectionEyebrow";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { DogtorVisual } from "@/components/sections/DogtorVisual";
import { PrimaryButton } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
import { RelationshipBadge, StatusBadge } from "@/components/ui/StatusBadge";

/** 旗艦區塊顯示的三項關鍵數據（註冊使用者、App Store 排行、App Store 評分） */
const HIGHLIGHT_METRICS = [0, 1, 3];

/**
 * 作品頁的旗艦產品展示（spec §5.3）：
 * 白色大卡片，左側為標誌、定位、三項關鍵數據與行動按鈕，右側為 DOGTOR 產品視覺。
 * 完整數據、畫面與使用流程放在 /products/dogtor。
 */
export async function FeaturedDogtorShowcase({ locale }: { locale: Locale }) {
  const t = await getTranslations("Work.featured");
  const th = await getTranslations("Home.dogtor");
  const asOf = locale === "en" ? "As of " : "資料日期 ";
  const metrics = HIGHLIGHT_METRICS.map((i) => dogtor.metrics[i]).filter((m) => m?.verified);

  return (
    <section aria-labelledby="featured-dogtor" className="pb-16 md:pb-24">
      <Container>
        <Reveal className="edge overflow-hidden rounded-[var(--radius-feature)] bg-surface shadow-[var(--shadow-card)]">
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col p-8 sm:p-12 lg:p-14">
              <SectionEyebrow>{t("eyebrow")}</SectionEyebrow>
              <DogtorLogo locale={locale} className="mt-7" />
              <h2 id="featured-dogtor" className="text-h3 mt-6 max-w-md">
                {t("positioning")}
              </h2>
              <p className="mt-4 max-w-md text-muted">{t("problem")}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <RelationshipBadge type="flagship-product" />
                <StatusBadge status="live" />
                <span className="inline-flex items-center rounded-full border border-line px-3 py-1 text-caption font-medium text-muted">{t("type")}</span>
              </div>

              <h3 className="sr-only">{t("metricsLabel")}</h3>
              <dl className="mt-10 grid divide-y divide-line border-y border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {metrics.map((m) => (
                  <div key={m.label.en} className="grid grid-cols-[7.5rem_1fr] items-baseline gap-x-4 py-4 sm:block sm:px-5 sm:py-6 sm:first:pl-0">
                    <dd className="row-span-2 text-[1.75rem] leading-none font-bold tracking-tight tabular-nums sm:text-[2rem]">{m.value}</dd>
                    <dt className="text-[0.875rem] leading-snug font-medium sm:mt-2">{m.label[locale]}</dt>
                    <dd className="text-caption col-start-2 mt-1 text-muted">
                      {m.period ? m.period[locale] : m.asOf ? `${asOf}${m.asOf.replaceAll("-", "/")}` : null}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-auto flex flex-col gap-3 pt-10 sm:flex-row sm:items-center sm:gap-6">
                <PrimaryButton href={dogtor.url.value} external event="dogtor_cta_click" eventProps={{ placement: "work_feature" }}>
                  {th("primaryCta")}
                </PrimaryButton>
                <TextLink href="/products/dogtor">{th("secondaryCta")}</TextLink>
              </div>
            </div>

            <DogtorVisual locale={locale} label={t("screensLabel")} className="lg:min-h-full" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

import { getTranslations } from "next-intl/server";
import { AnimatedLogoGraphic } from "@/components/brand/AnimatedLogoGraphic";
import { BrandPattern } from "@/components/brand/BrandPattern";
import { richTags } from "@/components/brand/HighlightHeading";
import { SectionEyebrow } from "@/components/brand/SectionEyebrow";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";

/**
 * Section 01 — Hero（spec §4.1、§11.2）
 * 進場順序：Eyebrow → H1（上浮 16px）→ Supporting → CTA → 品牌圖形一次性描繪，間隔約 100ms。
 */
export async function Hero() {
  const t = await getTranslations("Home.hero");

  return (
    <section aria-labelledby="hero-title" className="relative -mt-[72px] overflow-hidden bg-gradient-to-b from-white via-page to-soft-blue/70 pt-[72px] lg:-mt-20 lg:pt-20">
      {/* 背景：極淡幾何 + 局部金黃光暈，極緩慢有限次數位移 */}
      <div aria-hidden className="drift-slow pointer-events-none absolute -top-40 right-[-10%] size-[640px] rounded-full bg-[radial-gradient(circle,rgb(243_179_56/0.14),transparent_65%)]" />
      <BrandPattern className="-left-40 bottom-[-180px] size-[520px] opacity-70" />

      <div className="container-site relative grid items-center gap-y-12 py-16 md:grid-cols-[55fr_45fr] md:gap-x-12 md:py-24 lg:min-h-[clamp(650px,calc(100svh-80px),760px)] lg:gap-x-16 lg:py-20">
        <div>
          <div className="hero-fade">
            <SectionEyebrow>{t("eyebrow")}</SectionEyebrow>
          </div>
          <h1 id="hero-title" className="text-h1 hero-rise mt-5 max-md:text-[clamp(1.625rem,8.2vw,2.125rem)]" style={{ animationDelay: "100ms" }}>
            {t.rich("title", richTags)}
          </h1>
          <p className="text-body-lg hero-fade mt-6 max-w-[30rem] text-muted" style={{ animationDelay: "200ms" }}>
            {t("supporting")}
          </p>
          <div className="hero-fade mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "300ms" }}>
            <PrimaryButton href="/work">{t("primaryCta")}</PrimaryButton>
            <SecondaryButton href="/about" arrow={false}>
              {t("secondaryCta")}
            </SecondaryButton>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[440px] md:max-w-[480px] md:justify-self-end">
          <AnimatedLogoGraphic label={t("visualLabel")} />
        </div>
      </div>
    </section>
  );
}

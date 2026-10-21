import { getTranslations } from "next-intl/server";
import { BrandPattern } from "@/components/brand/BrandPattern";
import { richTags } from "@/components/brand/HighlightHeading";
import { Section } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SecondaryButton } from "@/components/ui/Button";

/** Section 06 — About Preview：公司故事與簡短時間線（spec §4.6） */
export async function AboutPreview() {
  const t = await getTranslations("Home.about");
  const ts = await getTranslations("Story");
  const steps = ["observe", "solve", "dogtor", "explore"] as const;

  return (
    <Section tone="surface" labelledBy="about-title">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading id="about-title" eyebrow={t("eyebrow")} title={t.rich("title", richTags)} supporting={t("body")} />
          <SecondaryButton href="/about" className="mt-9">
            {t("cta")}
          </SecondaryButton>
        </div>

        {/* 歷程卡：2023 與精湛教育合作 → 2026 DOGTOR 累積超過一萬位使用者 */}
        <Reveal className="edge overflow-hidden rounded-[var(--radius-feature)] bg-page p-8 sm:p-10">
          <BrandPattern className="-right-28 -bottom-28 size-[340px]" />
          <h3 className="text-eyebrow relative text-muted">{t("storyLabel")}</h3>
          <ol className="relative mt-8 space-y-0">
            {steps.map((s, i) => (
              <li key={s} className="relative grid grid-cols-[5.5rem_1fr] gap-x-5 pb-8 last:pb-0">
                {i < steps.length - 1 ? (
                  <span aria-hidden className="absolute top-3 bottom-0 left-[5.5rem] ml-[3px] w-px translate-x-5 bg-line" />
                ) : null}
                <span className="pt-0.5 text-[1.0625rem] font-bold text-brand tabular-nums">{ts(`${s}.label`)}</span>
                <div className="relative pl-6">
                  <span aria-hidden className="absolute top-[0.55rem] left-0 size-2 rotate-45 rounded-[2px] bg-gold" />
                  <p className="font-semibold leading-snug">{ts(`${s}.title`)}</p>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">{ts(`${s}.body`)}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  );
}

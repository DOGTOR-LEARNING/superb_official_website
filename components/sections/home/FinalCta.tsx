import { getTranslations } from "next-intl/server";
import { BrandPattern } from "@/components/brand/BrandPattern";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { OnDarkButton } from "@/components/ui/Button";

/** Section 07 — Final CTA：柔和品牌藍背景（spec §4.7）。亦用於其他頁面底部 */
export async function FinalCta({ headingId = "final-cta-title" }: { headingId?: string }) {
  const t = await getTranslations("Home.cta");
  return (
    <section aria-labelledby={headingId} className="section-y bg-page">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[var(--radius-feature)] bg-brand px-8 py-16 text-center text-white sm:px-14 md:py-24">
          <BrandPattern variant="lines" className="-top-20 -right-20 size-[360px] opacity-80 [&_path]:stroke-white" />
          <BrandPattern className="-bottom-40 -left-32 size-[420px] [&_rect]:stroke-white [&_rect]:[stroke-opacity:0.12]" />
          <h2 id={headingId} className="text-h2 relative text-white">
            {t("title")}
          </h2>
          <p className="text-body-lg relative mx-auto mt-5 max-w-2xl text-white/90">{t("body")}</p>
          <OnDarkButton href="/contact" className="relative mt-9">
            {t("button")}
          </OnDarkButton>
        </Reveal>
      </Container>
    </section>
  );
}

import { getTranslations } from "next-intl/server";
import { BrandPattern } from "@/components/brand/BrandPattern";
import { SectionEyebrow } from "@/components/brand/SectionEyebrow";
import { Container } from "@/components/layout/Container";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";

/** 404：清楚引導訪客返回（spec §17.4） */
export default async function NotFound() {
  const t = await getTranslations("NotFound");
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <BrandPattern className="-top-24 -right-32 size-[520px]" />
      <Container className="relative">
        <div className="max-w-2xl">
          <SectionEyebrow>{t("eyebrow")}</SectionEyebrow>
          <h1 className="text-h1 mt-5">{t("title")}</h1>
          <p className="text-body-lg mt-5 text-muted">{t("body")}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PrimaryButton href="/">{t("home")}</PrimaryButton>
            <SecondaryButton href="/work">{t("work")}</SecondaryButton>
            <TextLink href="/contact" className="sm:ml-3">
              {t("contact")}
            </TextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

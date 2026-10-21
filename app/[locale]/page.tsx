import { resolveLocale } from "@/lib/locale";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/home/Hero";
import { FeaturedDogtor } from "@/components/sections/home/FeaturedDogtor";
import { Beliefs } from "@/components/sections/home/Beliefs";
import { SelectedWork } from "@/components/sections/home/SelectedWork";
import { HowWeBuild } from "@/components/sections/home/HowWeBuild";
import { AboutPreview } from "@/components/sections/home/AboutPreview";
import { FinalCta } from "@/components/sections/home/FinalCta";

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = await getTranslations({ locale, namespace: "Meta" });
  return buildMetadata({
    locale: locale as Locale,
    path: "/",
    title: t("defaultTitle"),
    description: t("defaultDescription"),
    absoluteTitle: true,
  });
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const locale = await resolveLocale(params);
  return (
    <>
      <Hero />
      <FeaturedDogtor locale={locale} />
      <Beliefs />
      <SelectedWork locale={locale} />
      <HowWeBuild />
      <AboutPreview />
      <FinalCta />
    </>
  );
}

import { resolveLocale } from "@/lib/locale";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Building2, LifeBuoy, Mail, MapPin, Phone } from "lucide-react";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { richTags } from "@/components/brand/HighlightHeading";
import { BrandPattern } from "@/components/brand/BrandPattern";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PendingBadge } from "@/components/ui/PendingBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { cardBase } from "@/components/ui/Cards";
import { cn } from "@/lib/cn";

export async function generateMetadata({ params }: PageProps<"/[locale]/contact">): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = await getTranslations({ locale, namespace: "Meta.contact" });
  return buildMetadata({ locale: locale as Locale, path: "/contact", title: t("title"), description: t("description") });
}

export default async function ContactPage({ params }: PageProps<"/[locale]/contact">) {
  const locale = await resolveLocale(params);
  const t = await getTranslations("Contact");
  const tn = await getTranslations("Nav");

  return (
    <>
      <section aria-labelledby="contact-hero" className="relative overflow-hidden bg-gradient-to-b from-white to-page pt-12 pb-12 md:pt-20 md:pb-16">
        <BrandPattern className="-top-32 -right-40 size-[520px]" />
        <Container className="relative">
          <Breadcrumb locale={locale} items={[{ name: tn("contact"), href: "/contact" }]} visible={false} />
          <SectionHeading as="h1" id="contact-hero" eyebrow={t("hero.eyebrow")} title={t.rich("hero.title", richTags)} supporting={t("hero.supporting")} />
        </Container>
      </section>

      <section className="pb-16 md:pb-24 lg:pb-28">
        <Container className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className={cn(cardBase, "p-6 sm:p-8 md:p-10 lg:col-span-8")}>
            <h2 className="text-h3 mb-6">{t("form.title")}</h2>
            <ContactForm contactEmail={siteConfig.contactEmail.value} />
          </div>

          <aside aria-labelledby="contact-aside" className="space-y-6 lg:col-span-4">
            <div className={cn(cardBase, "p-6 md:p-7")}>
              <h2 id="contact-aside" className="text-[1.1875rem] font-semibold">
                {t("aside.title")}
              </h2>
              <dl className="mt-5 space-y-5">
                <div>
                  <dt className="flex items-center gap-2 text-caption text-muted">
                    <Mail aria-hidden className="size-4 shrink-0 text-brand" />
                    {t("aside.email")}
                  </dt>
                  <dd className="font-semibold break-all">
                    <a href={`mailto:${siteConfig.contactEmail.value}`} className="inline-flex min-h-11 items-center text-brand hover:underline">
                      {siteConfig.contactEmail.value}
                    </a>{" "}
                    <PendingBadge show={siteConfig.contactEmail.placeholder} />
                  </dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 text-caption text-muted">
                    <Building2 aria-hidden className="size-4 shrink-0 text-brand" />
                    {t("aside.company")}
                  </dt>
                  <dd className="mt-1 font-semibold">{siteConfig.companyName.zh}</dd>
                  <dd className="text-caption text-muted">{siteConfig.companyName.enLegal}</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 text-caption text-muted">
                    <MapPin aria-hidden className="size-4 shrink-0 text-brand" />
                    {t("aside.address")}
                  </dt>
                  <dd className="mt-1 text-[0.9375rem]">{locale === "en" ? siteConfig.registration.value.address.en : siteConfig.registration.value.address.zh}</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 text-caption text-muted">
                    <Phone aria-hidden className="size-4 shrink-0 text-brand" />
                    {t("aside.phone")}
                  </dt>
                  <dd>
                    <a href={`tel:${siteConfig.registration.value.phone.href}`} className="inline-flex min-h-11 items-center font-semibold text-brand hover:underline">
                      {locale === "en" ? siteConfig.registration.value.phone.displayEn : siteConfig.registration.value.phone.display}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-caption text-muted">{t("aside.taxId")}</dt>
                  <dd className="mt-1 font-semibold">
                    {siteConfig.registration.value.taxId} <PendingBadge show={siteConfig.registration.placeholder} />
                  </dd>
                </div>
              </dl>
            </div>

            {/* 公司官網不負責 DOGTOR 客服，引導至產品官網（spec §2） */}
            <div className="rounded-[var(--radius-card)] border border-dogtor/60 bg-dogtor-soft p-6 md:p-7">
              <LifeBuoy aria-hidden className="size-6 text-dogtor-ink" />
              <h2 className="mt-4 text-[1.1875rem] font-semibold">{t("aside.dogtorTitle")}</h2>
              <p className="mt-2 text-[0.9375rem] text-navy/80">{t("aside.dogtorBody")}</p>
              <TextLink href={siteConfig.dogtorUrl.value} external event="dogtor_cta_click" eventProps={{ placement: "contact" }} className="mt-3 text-dogtor-ink hover:text-navy">
                {t("aside.dogtorCta")}
              </TextLink>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}

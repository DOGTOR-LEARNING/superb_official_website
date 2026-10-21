import { resolveLocale } from "@/lib/locale";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { privacyPolicy } from "@/content/legal/privacy";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { formatDate } from "@/lib/format";
import { Container } from "@/components/layout/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ReviewNotes } from "@/components/ui/PendingBadge";
import { SectionEyebrow } from "@/components/brand/SectionEyebrow";

export async function generateMetadata({ params }: PageProps<"/[locale]/privacy">): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = await getTranslations({ locale, namespace: "Meta.privacy" });
  return buildMetadata({ locale: locale as Locale, path: "/privacy", title: t("title"), description: t("description") });
}

export default async function PrivacyPage({ params }: PageProps<"/[locale]/privacy">) {
  const locale = await resolveLocale(params);
  const t = await getTranslations("Privacy");
  const tf = await getTranslations("Footer");
  const sections = privacyPolicy.sections[locale];

  return (
    <Container className="py-12 md:py-20">
      <div className="mx-auto max-w-[720px]">
        <Breadcrumb locale={locale} items={[{ name: t("title"), href: "/privacy" }]} />
        <SectionEyebrow>{t("eyebrow")}</SectionEyebrow>
        <h1 className="text-h1 mt-4">{t("title")}</h1>
        <p className="text-caption mt-4 text-muted">
          {t("updated", { date: formatDate(privacyPolicy.updated, locale) })}
        </p>
        <ReviewNotes notes={[t("reviewNotice")]} className="mt-6" />
        <div className="mt-10 space-y-10">
          {sections.map((s) => (
            <section key={s.title} aria-labelledby={s.title}>
              <h2 id={s.title} className="text-h3">
                {s.title}
              </h2>
              {s.body.map((p) => (
                <p key={p} className="mt-4 leading-[1.85] text-navy/90">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
        <p className="mt-12 border-t border-line pt-6 text-muted">
          {locale === "en" ? siteConfig.companyName.enLegal : siteConfig.companyName.zh} · {tf("email")}：
          <a href={`mailto:${siteConfig.contactEmail.value}`} className="font-semibold text-brand hover:underline">
            {siteConfig.contactEmail.value}
          </a>
        </p>
      </div>
    </Container>
  );
}

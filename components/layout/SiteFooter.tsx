import { getTranslations } from "next-intl/server";
import { Mail } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { BrandPattern } from "@/components/brand/BrandPattern";
import { PendingBadge } from "@/components/ui/PendingBadge";
import { SmartLink } from "@/components/ui/SmartLink";
import { siteConfig } from "@/lib/site-config";
import { navItems } from "./nav-items";

export async function SiteFooter({ locale }: { locale: Locale }) {
  const t = await getTranslations("Footer");
  const tn = await getTranslations("Nav");
  const tc = await getTranslations("Common");
  const companyName = locale === "en" ? siteConfig.companyName.enLegal : siteConfig.companyName.zh;

  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface">
      <BrandPattern variant="lines" className="-right-24 -bottom-24 size-[420px]" />
      <div className="container-site relative py-14 md:py-16">
        <div className="grid-site gap-y-10">
          <div className="col-span-4 md:col-span-8 lg:col-span-4">
            <BrandLogo className="h-14" />
            <p className="mt-4 max-w-xs text-muted">{t("tagline")}</p>
          </div>

          <nav aria-label={t("explore")} className="col-span-2 md:col-span-3 lg:col-span-2">
            <h2 className="text-caption font-semibold tracking-wide text-navy">{t("explore")}</h2>
            <ul className="mt-3 space-y-0.5">
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link href={item.href} className="inline-flex min-h-11 items-center text-muted hover:text-brand hover:underline">
                    {tn(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 md:col-span-5 lg:col-span-3">
            <h2 className="text-caption font-semibold tracking-wide text-navy">{t("connect")}</h2>
            <ul className="mt-3 space-y-0.5">
              <li>
                <a href={`mailto:${siteConfig.contactEmail.value}`} className="inline-flex min-h-11 items-center gap-2 break-all text-muted hover:text-brand hover:underline">
                  <Mail aria-hidden className="size-4 shrink-0" />
                  <span>
                    <span className="sr-only">{t("email")}：</span>
                    {siteConfig.contactEmail.value}
                  </span>
                </a>{" "}
                <PendingBadge show={siteConfig.contactEmail.placeholder} />
              </li>
              <li>
                <SmartLink
                  href={siteConfig.dogtorUrl.value}
                  external
                  event="dogtor_cta_click"
                  eventProps={{ placement: "footer" }}
                  className="inline-flex min-h-11 items-center text-muted hover:text-brand hover:underline"
                >
                  {tc("exploreDogtor")} ↗
                </SmartLink>
              </li>
              {siteConfig.socialLinks.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-muted hover:text-brand hover:underline">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-caption mt-3 max-w-xs text-muted">{t("dogtorNote")}</p>
          </div>

          <div className="col-span-4 md:col-span-8 lg:col-span-3">
            <h2 className="text-caption font-semibold tracking-wide text-navy">{t("company")}</h2>
            <dl className="mt-3 space-y-2 text-muted">
              <div>
                <dt className="sr-only">{t("company")}</dt>
                <dd>{siteConfig.companyName.zh}</dd>
                <dd className="text-caption">{siteConfig.companyName.enLegal}</dd>
              </div>
              <div>
                <dt className="sr-only">{t("address")}</dt>
                <dd className="text-caption">{locale === "en" ? siteConfig.registration.value.address.en : siteConfig.registration.value.address.zh}</dd>
              </div>
              <div className="flex gap-2">
                <dt>{t("taxId")}</dt>
                <dd>
                  {siteConfig.registration.value.taxId} <PendingBadge show={siteConfig.registration.placeholder} />
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-caption text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {siteConfig.copyrightYear} {companyName}{locale === "en" ? " " : "　"}{t("rights")}
            <span className="block md:inline md:ml-2">{t("trademark")}</span>
          </p>
          <Link href="/privacy" className="inline-flex min-h-11 items-center font-medium text-navy hover:text-brand hover:underline">
            {t("privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}

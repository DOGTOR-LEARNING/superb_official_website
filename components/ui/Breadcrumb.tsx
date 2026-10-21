import { ChevronRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { breadcrumbJsonLd, localizedPath } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

/** 可見麵包屑 + BreadcrumbList structured data。items 的 href 不含語系前綴 */
export async function Breadcrumb({ locale, items, visible = true }: { locale: Locale; items: { name: string; href: string }[]; visible?: boolean }) {
  const t = await getTranslations("Common");
  const all = [{ name: t("home"), href: "/" }, ...items];
  const jsonLd = <JsonLd data={breadcrumbJsonLd(all.map((i) => ({ name: i.name, href: localizedPath(locale, i.href) })))} />;
  if (!visible) return jsonLd;

  return (
    <>
      {jsonLd}
      <nav aria-label={t("breadcrumbLabel")} className="mb-8">
        <ol className="flex flex-wrap items-center gap-1 text-caption text-muted">
          {all.map((item, i) => {
            const last = i === all.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1">
                {last ? (
                  <span aria-current="page" className="font-medium text-navy">
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link href={item.href} className="inline-flex min-h-11 items-center rounded hover:text-brand hover:underline">
                      {item.name}
                    </Link>
                    <ChevronRight aria-hidden className="size-3.5" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

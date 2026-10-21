"use client";

import { useLocale, useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";

const labels: Record<Locale, { short: string; full: string }> = {
  "zh-TW": { short: "中", full: "繁體中文" },
  en: { short: "EN", full: "English" },
};

/**
 * 語言切換：保留目前瀏覽的相同頁面（spec §3.3）。
 * 所有頁面皆有中英版本；文章缺少翻譯時由文章頁明確 fallback。
 */
function Switcher({ className, onSwitch, size = "sm" }: { className?: string; onSwitch?: () => void; size?: "sm" | "lg" }) {
  const t = useTranslations("Nav");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const search = useSearchParams().toString();
  const href = search ? `${pathname}?${search}` : pathname;

  return (
    <div role="group" aria-label={t("language")} className={cn("flex items-center rounded-full border border-line bg-surface p-1", className)}>
      {/* 顯示順序依 spec：EN / 中 */}
      {[...routing.locales].reverse().map((l) => {
        const current = l === locale;
        return (
          <Link
            key={l}
            href={href}
            locale={l}
            hrefLang={l}
            lang={l}
            aria-current={current ? "true" : undefined}
            onClick={() => {
              if (!current) track("language_switch", { from: locale, to: l });
              onSwitch?.();
            }}
            className={cn(
              "inline-flex items-center justify-center rounded-full font-semibold transition-colors duration-150",
              size === "sm" ? "min-h-9 min-w-11 px-3 text-[0.8125rem]" : "min-h-11 min-w-14 px-4 text-[0.9375rem]",
              current ? "bg-navy text-white" : "text-muted hover:bg-soft-blue hover:text-navy",
            )}
          >
            <span aria-hidden>{labels[l].short}</span>
            <span className="sr-only">{labels[l].full}</span>
          </Link>
        );
      })}
    </div>
  );
}

export function LanguageSwitcher(props: { className?: string; onSwitch?: () => void; size?: "sm" | "lg" }) {
  return (
    <Suspense fallback={<div className={cn("h-11 w-24", props.className)} />}>
      <Switcher {...props} />
    </Suspense>
  );
}

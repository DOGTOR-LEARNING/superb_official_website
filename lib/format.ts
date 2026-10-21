import type { Locale } from "@/i18n/routing";

export function formatDate(iso: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale, { year: "numeric", month: "long", day: "numeric", timeZone: "Asia/Taipei" }).format(
    new Date(`${iso}T00:00:00+08:00`),
  );
}

import { getTranslations } from "next-intl/server";
import { dogtor } from "@/content/projects/dogtor";
import type { Locale } from "@/i18n/routing";
import { MetricCard } from "@/components/ui/Cards";
import { PendingBadge } from "@/components/ui/PendingBadge";
import { isDevelopment } from "@/lib/site-config";
import { formatDate } from "@/lib/format";
import { cn } from "@/lib/cn";

/**
 * DOGTOR 產品數據：只在正式環境顯示經核實的數字，並標示資料日期（spec §4.2）。
 * 未核實者（例如排行榜紀錄）僅在開發模式顯示為待確認。
 */
export async function DogtorMetrics({
  locale,
  className,
  tone = "default",
  limit,
}: {
  locale: Locale;
  className?: string;
  tone?: "default" | "dogtor";
  /** 只顯示前幾項（首頁精簡呈現） */
  limit?: number;
}) {
  const t = await getTranslations("Common");
  const metrics = dogtor.metrics.filter((m) => m.verified || isDevelopment).slice(0, limit);
  if (metrics.length === 0) return null;
  const asOfLabel = locale === "en" ? "As of" : "資料日期：";

  return (
    <ul className={cn("grid grid-cols-[repeat(auto-fill,minmax(13rem,1fr))] gap-3", className)}>
      {metrics.map((m) => (
        <li key={m.label.en}>
          <MetricCard
            tone={tone}
            value={m.value}
            label={m.label[locale]}
            pending={!m.verified ? <PendingBadge notes={["需標示資料日期與來源"]} /> : null}
            caption={
              m.period ? (
                m.period[locale]
              ) : m.asOf ? (
                <>
                  {asOfLabel} <time dateTime={m.asOf}>{formatDate(m.asOf, locale)}</time>
                </>
              ) : m.source ? (
                m.source[locale]
              ) : (
                t("pending")
              )
            }
          />
        </li>
      ))}
    </ul>
  );
}

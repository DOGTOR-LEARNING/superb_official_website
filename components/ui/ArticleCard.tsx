import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { pickLocalized, type Insight } from "@/content/insights";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/cn";
import { formatDate } from "@/lib/format";
import { FlaskConical } from "lucide-react";
import { PendingBadge } from "./PendingBadge";

export async function ArticleCard({ insight, locale }: { insight: Insight; locale: Locale }) {
  const t = await getTranslations("Insights");
  const title = pickLocalized(insight.title, locale);
  const summary = pickLocalized(insight.summary, locale);

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-surface p-7 shadow-[var(--shadow-card)] md:p-8",
        "transition-[transform,box-shadow] duration-[var(--duration-card)] ease-out hover:shadow-[var(--shadow-card-hover)] motion-safe:hover:-translate-y-1",
      )}
    >
      {insight.cover ? (
        <Image
          src={insight.cover.src}
          alt=""
          width={insight.cover.width}
          height={insight.cover.height}
          sizes="96px"
          className="mb-5 size-20 rounded-[var(--radius-card-sm)] border border-line object-cover"
        />
      ) : null}
      <div className="mb-4 flex flex-wrap items-center gap-2 text-caption">
        <span className="rounded-full bg-soft-blue px-3 py-1 font-medium text-brand-hover">{t(`categories.${insight.category}`)}</span>
        {insight.researchInProgress ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-soft-gold px-3 py-1 font-medium text-[#7a5200]">
            <FlaskConical aria-hidden className="size-3.5" />
            {t("inProgress")}
          </span>
        ) : null}
        <PendingBadge show={insight.draft} notes={["草稿：上線前需經內容審核"]} />
      </div>
      <h3 className="text-[1.25rem] font-semibold leading-snug" lang={title.isFallback ? title.locale : undefined}>
        <Link
          href={`/insights/${insight.slug}`}
          className="after:absolute after:inset-0 after:rounded-[var(--radius-card)] focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-3 focus-visible:after:outline-brand"
        >
          {title.value}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-muted" lang={summary.isFallback ? summary.locale : undefined}>
        {summary.value}
      </p>
      <p className="text-caption mt-6 text-muted">
        <time dateTime={insight.date}>{formatDate(insight.date, locale)}</time> · {insight.author[locale]}
      </p>
    </article>
  );
}

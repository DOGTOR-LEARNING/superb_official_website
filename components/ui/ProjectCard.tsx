import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import type { Project } from "@/content/types";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/cn";
import { ImageFrame } from "./ImageFrame";
import { SmartLink } from "./SmartLink";
import { RelationshipBadge, StatusBadge } from "./StatusBadge";
import { PendingBadge } from "./PendingBadge";

/**
 * 作品卡片：大圖為主，名稱、一句價值說明、作品類型、參與關係／開發狀態、View Project。
 * 整張卡片可點擊（以 stretched link 實作），必要資訊不依賴 hover（spec §11.6）。
 */
export async function ProjectCard({ project, locale, headingLevel = "h3" }: { project: Project; locale: Locale; headingLevel?: "h2" | "h3" }) {
  const t = await getTranslations("Common");
  const c = project.localeContent[locale];
  const Heading = headingLevel;

  return (
    <article
      className={cn(
        "group edge flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-surface shadow-[var(--shadow-card)]",
        "transition-[transform,box-shadow] duration-[var(--duration-card)] ease-out hover:shadow-[var(--shadow-card-hover)] motion-safe:hover:-translate-y-1",
        "focus-within:shadow-[var(--shadow-card-hover)]",
      )}
    >
      <div className="overflow-hidden border-b border-line">
        <ImageFrame
          image={project.images.cover}
          locale={locale}
          aspect="16 / 9"
          position="top"
          sizes="(min-width: 1200px) 600px, (min-width: 768px) 50vw, 100vw"
          imgClassName="transition-transform duration-[var(--duration-card)] ease-out motion-safe:group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-1 flex-col p-7 md:p-8">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <RelationshipBadge type={project.relationshipType} />
          <StatusBadge status={project.status} />
          <PendingBadge notes={project.publicationApproval.notes} show={project.publicationApproval.status === "pending"} />
        </div>
        <p className="text-caption font-medium text-muted">{c.typeLabel}</p>
        <Heading className="text-h3 mt-1">
          <SmartLink
            href={`/work/${project.slug}`}
            event="selected_work_click"
            eventProps={{ project: project.slug }}
            className="after:absolute after:inset-0 after:rounded-[var(--radius-card)] focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-3 focus-visible:after:outline-brand focus-visible:after:outline-offset-2"
          >
            {c.title}
            <span className="sr-only"> — {c.subtitle}</span>
          </SmartLink>
        </Heading>
        <p className="mt-2 flex-1 text-muted">{c.summary}</p>
        <span aria-hidden className="mt-6 inline-flex items-center gap-1.5 font-semibold text-brand">
          {t("viewProject")}
          <ArrowUpRight className="size-[1.0625rem] transition-transform duration-[var(--duration-card)] ease-out motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" />
        </span>
      </div>
    </article>
  );
}

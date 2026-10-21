import { CircleDot, FlaskConical, Hammer, Archive, CheckCircle2, Rocket } from "lucide-react";
import { getTranslations } from "next-intl/server";
import type { ProjectStatus, RelationshipType } from "@/content/types";
import { cn } from "@/lib/cn";

const statusIcon: Record<ProjectStatus, typeof CircleDot> = {
  live: Rocket,
  completed: CheckCircle2,
  prototype: Hammer,
  "in-progress": CircleDot,
  research: FlaskConical,
  archived: Archive,
};

/** 狀態以圖示 + 文字表示，不只依賴顏色（spec §14） */
export async function StatusBadge({ status, className }: { status: ProjectStatus; className?: string }) {
  const t = await getTranslations("Status");
  const Icon = statusIcon[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-caption font-medium",
        status === "live" || status === "completed"
          ? "border-success/25 bg-success-soft text-success"
          : status === "archived"
            ? "border-line bg-page text-muted"
            : "border-gold/40 bg-soft-gold text-[#7a5200]",
        className,
      )}
    >
      <Icon aria-hidden className="size-3.5" />
      {t(status)}
    </span>
  );
}

export async function RelationshipBadge({ type, className }: { type: RelationshipType; className?: string }) {
  const t = await getTranslations("Relationship");
  return (
    <span className={cn("inline-flex items-center rounded-full border border-brand/20 bg-soft-blue px-3 py-1 text-caption font-medium text-brand-hover", className)}>
      {t(type)}
    </span>
  );
}

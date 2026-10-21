import { TriangleAlert } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { isDevelopment } from "@/lib/site-config";
import { cn } from "@/lib/cn";

/** 僅開發模式顯示：提醒此處為尚未核准的佔位資料 */
export async function PendingBadge({ show = true, notes, className }: { show?: boolean; notes?: string[]; className?: string }) {
  if (!isDevelopment || !show) return null;
  const t = await getTranslations("Common");
  return (
    <span
      title={[t("pendingHint"), ...(notes ?? [])].join("\n")}
      className={cn("inline-flex items-center gap-1 rounded-md border border-dashed border-[#c2410c]/50 bg-[#fff7ed] px-1.5 py-0.5 align-middle text-[0.6875rem] font-semibold text-[#9a3412]", className)}
    >
      <TriangleAlert aria-hidden className="size-3" />
      {t("pending")}
    </span>
  );
}

/** 僅開發模式顯示的審核清單 */
export async function ReviewNotes({ notes, className }: { notes?: string[]; className?: string }) {
  if (!isDevelopment || !notes?.length) return null;
  const t = await getTranslations("Common");
  return (
    <aside className={cn("rounded-[var(--radius-card-sm)] border border-dashed border-[#c2410c]/50 bg-[#fff7ed] p-4 text-caption text-[#7c2d12]", className)}>
      <p className="flex items-center gap-1.5 font-semibold">
        <TriangleAlert aria-hidden className="size-4" />
        {t("pendingHint")}
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        {notes.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </aside>
  );
}

import { cn } from "@/lib/cn";

/** 卡片基底：主要以背景色與邊框區分，陰影低透明度（spec §10.5） */
export const cardBase = "rounded-[var(--radius-card)] border border-line bg-surface shadow-[var(--shadow-card)]";

export function FeatureCard({ icon, title, children, className }: { icon?: React.ReactNode; title: React.ReactNode; children: React.ReactNode; className?: string }) {
  return (
    <div className={cn(cardBase, "h-full p-7 md:p-8", className)}>
      {icon ? <div className="mb-5 inline-flex size-12 items-center justify-center rounded-[14px] bg-soft-blue text-brand">{icon}</div> : null}
      <h3 className="text-[1.1875rem] font-semibold leading-snug">{title}</h3>
      <div className="mt-2.5 text-muted">{children}</div>
    </div>
  );
}

export function ValueCard({
  index,
  label,
  title,
  body,
  graphic,
}: {
  index: string;
  label: string;
  title: string;
  body: string;
  graphic: React.ReactNode;
}) {
  return (
    <article className={cn(cardBase, "flex h-full flex-col p-8 md:p-9")}>
      <div className="mb-8 flex items-start justify-between gap-4">
        <span className="text-[0.9375rem] font-semibold tabular-nums text-brand">{index}</span>
        <div aria-hidden className="size-16 text-brand">
          {graphic}
        </div>
      </div>
      <p className="text-eyebrow text-muted">{label}</p>
      <h3 className="text-h3 mt-3">{title}</h3>
      <p className="mt-3 text-muted">{body}</p>
    </article>
  );
}

export function MetricCard({
  value,
  label,
  caption,
  pending,
  tone = "default",
}: {
  value: string;
  label: string;
  caption?: React.ReactNode;
  pending?: React.ReactNode;
  tone?: "default" | "dogtor";
}) {
  return (
    <div className={cn("rounded-[var(--radius-card-sm)] border p-5", tone === "dogtor" ? "border-dogtor/60 bg-white" : "border-line bg-surface")}>
      <p className="text-[2rem] font-bold leading-none tracking-tight text-navy tabular-nums">
        {value} {pending}
      </p>
      <p className="mt-2 font-medium text-navy">{label}</p>
      {caption ? <p className="text-caption mt-1.5 text-muted">{caption}</p> : null}
    </div>
  );
}

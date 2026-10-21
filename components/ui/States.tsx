import { CheckCircle2, Inbox, Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";

export function EmptyState({ title, action, className }: { title: string; action?: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex flex-col items-center rounded-[var(--radius-card)] border border-dashed border-line bg-surface px-6 py-14 text-center", className)}>
      <span className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-soft-blue text-brand">
        <Inbox aria-hidden className="size-6" />
      </span>
      <p className="max-w-md text-muted">{title}</p>
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}

/** Loading decoration：品牌菱形 + 旋轉圖示（reduced motion 時停止旋轉） */
export function LoadingState({ label, className }: { label: string; className?: string }) {
  return (
    <div role="status" aria-live="polite" className={cn("flex flex-col items-center justify-center gap-4 py-24 text-muted", className)}>
      <span className="relative inline-flex size-12 items-center justify-center">
        <span aria-hidden className="absolute inset-1.5 rotate-45 rounded-[8px] border-2 border-brand/25" />
        <Loader2 aria-hidden className="size-5 text-brand motion-safe:animate-spin" />
      </span>
      <span>{label}</span>
    </div>
  );
}

export function SuccessState({
  title,
  body,
  action,
  className,
  headingRef,
}: {
  title: string;
  body: string;
  action?: React.ReactNode;
  className?: string;
  headingRef?: React.Ref<HTMLHeadingElement>;
}) {
  return (
    <div role="status" aria-live="polite" className={cn("flex flex-col items-start rounded-[var(--radius-card)] border border-success/25 bg-success-soft p-8 md:p-10", className)}>
      <span className="mb-5 inline-flex size-12 items-center justify-center rounded-full bg-white text-success">
        <CheckCircle2 aria-hidden className="size-6" />
      </span>
      <h2 ref={headingRef} tabIndex={-1} className="text-h3 outline-none">
        {title}
      </h2>
      <p className="mt-3 text-navy/80">{body}</p>
      {action ? <div className="mt-7">{action}</div> : null}
    </div>
  );
}

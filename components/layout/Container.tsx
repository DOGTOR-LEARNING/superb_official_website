import { cn } from "@/lib/cn";

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("container-site", className)}>{children}</div>;
}

type SectionTone = "page" | "surface" | "soft-blue" | "soft-gold" | "navy";

const toneClasses: Record<SectionTone, string> = {
  page: "bg-page",
  surface: "bg-surface",
  "soft-blue": "bg-soft-blue",
  "soft-gold": "bg-soft-gold",
  navy: "bg-navy text-white",
};

/** Section：統一的垂直間距（Desktop 112 / Tablet 80 / Mobile 56px） */
export function Section({
  tone = "page",
  className,
  containerClassName,
  children,
  id,
  labelledBy,
}: {
  tone?: SectionTone;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  id?: string;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("section-y relative", toneClasses[tone], className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

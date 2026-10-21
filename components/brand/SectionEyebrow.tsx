import { cn } from "@/lib/cn";

export function SectionEyebrow({ children, className, tone = "brand" }: { children: React.ReactNode; className?: string; tone?: "brand" | "light" }) {
  return (
    <p
      className={cn(
        "text-eyebrow inline-flex items-center gap-2.5",
        tone === "brand" ? "text-brand" : "text-white/85",
        className,
      )}
    >
      <span aria-hidden className="size-2 rotate-45 rounded-[2px] bg-gold" />
      {children}
    </p>
  );
}

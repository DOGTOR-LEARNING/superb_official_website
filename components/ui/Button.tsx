import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import type { AnalyticsEvent } from "@/lib/analytics";
import { SmartLink } from "./SmartLink";

type Variant = "primary" | "secondary" | "onDark" | "dogtor";

const base =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-button)] px-6 text-[0.9375rem] font-semibold leading-tight " +
  "transition-[background-color,border-color,color,box-shadow,transform] duration-[var(--duration-button)] ease-out " +
  "active:scale-[0.98] focus-visible:outline-offset-[3px] disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  // Default：品牌藍底白字；Hover：背景變深（spec §11.5）
  primary: "bg-brand text-white shadow-[0_1px_2px_rgb(22_50_71/0.12)] hover:bg-brand-hover active:bg-brand-hover",
  // 白底搭配邊框；Hover 使用淡藍背景
  secondary: "border border-line bg-surface text-navy hover:border-brand/30 hover:bg-soft-blue active:bg-soft-blue",
  onDark: "bg-white text-navy hover:bg-soft-gold focus-visible:outline-white",
  dogtor: "bg-dogtor text-navy hover:bg-[#ffc21a] active:bg-[#ffc21a]",
};

export function buttonClasses(variant: Variant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}

/** 箭頭 hover 時右移 2–3px；外部連結使用 ↗ */
export function ButtonArrow({ external }: { external?: boolean }) {
  const Icon = external ? ArrowUpRight : ArrowRight;
  return (
    <Icon
      aria-hidden
      className={cn(
        "size-[1.125rem] shrink-0 transition-transform duration-[var(--duration-button)] ease-out",
        external ? "motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" : "motion-safe:group-hover:translate-x-[3px]",
      )}
    />
  );
}

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
  event?: AnalyticsEvent;
  eventProps?: Record<string, string>;
  arrow?: boolean;
};

function LinkButton({ variant, href, children, external, className, event, eventProps, arrow = true }: LinkButtonProps & { variant: Variant }) {
  return (
    <SmartLink href={href} external={external} event={event} eventProps={eventProps} className={buttonClasses(variant, className)}>
      <span>{children}</span>
      {arrow ? <ButtonArrow external={external} /> : null}
    </SmartLink>
  );
}

export function PrimaryButton(props: LinkButtonProps) {
  return <LinkButton variant="primary" {...props} />;
}

export function SecondaryButton(props: LinkButtonProps) {
  return <LinkButton variant="secondary" {...props} />;
}

export function OnDarkButton(props: LinkButtonProps) {
  return <LinkButton variant="onDark" {...props} />;
}

export function DogtorButton(props: LinkButtonProps) {
  return <LinkButton variant="dogtor" {...props} />;
}

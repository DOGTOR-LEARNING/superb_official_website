import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import type { AnalyticsEvent } from "@/lib/analytics";
import { SmartLink } from "./SmartLink";

export function TextLink({
  href,
  children,
  external,
  className,
  event,
  eventProps,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
  event?: AnalyticsEvent;
  eventProps?: Record<string, string>;
}) {
  const Icon = external ? ArrowUpRight : ArrowRight;
  return (
    <SmartLink
      href={href}
      external={external}
      event={event}
      eventProps={eventProps}
      className={cn(
        "group inline-flex min-h-11 items-center gap-1.5 font-semibold text-brand underline-offset-4 transition-colors duration-150 hover:text-brand-hover hover:underline",
        className,
      )}
    >
      {children}
      <Icon aria-hidden className="size-[1.0625rem] transition-transform duration-150 ease-out motion-safe:group-hover:translate-x-0.5" />
    </SmartLink>
  );
}

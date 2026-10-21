"use client";

import { Link } from "@/i18n/navigation";
import { track, type AnalyticsEvent } from "@/lib/analytics";
import { useTranslations } from "next-intl";

type Props = {
  href: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  event?: AnalyticsEvent;
  eventProps?: Record<string, string>;
  "aria-label"?: string;
  onClick?: () => void;
};

/** 內部連結使用 locale-aware Link；外部連結另開新分頁並提示螢幕閱讀器 */
export function SmartLink({ href, external, className, children, event, eventProps, onClick, ...rest }: Props) {
  const t = useTranslations("Common");
  const handleClick = () => {
    if (event) track(event, eventProps);
    onClick?.();
  };

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} onClick={handleClick} aria-label={rest["aria-label"]}>
        {children}
        <span className="sr-only"> {t("opensInNewTab")}</span>
      </a>
    );
  }
  return (
    <Link href={href} className={className} onClick={handleClick} aria-label={rest["aria-label"]}>
      {children}
    </Link>
  );
}

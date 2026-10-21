"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import { isActive, navItems } from "./nav-items";

export function DesktopNav() {
  const t = useTranslations("Nav");
  const pathname = usePathname();

  return (
    <nav aria-label={t("primary")} className="hidden nav:block">
      <ul className="flex items-center gap-1">
        {navItems.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <li key={item.key}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative inline-flex min-h-11 items-center rounded-[10px] px-3.5 text-[0.9375rem] font-medium transition-colors duration-150",
                  active ? "text-navy" : "text-muted hover:bg-soft-blue/70 hover:text-navy",
                )}
              >
                {t(item.key)}
                {/* 目前頁面：底線 + 字色，不只依賴顏色 */}
                <span
                  aria-hidden
                  className={cn("absolute inset-x-3.5 bottom-1 h-0.5 rounded bg-gold transition-opacity", active ? "opacity-100" : "opacity-0")}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { isActive, navItems } from "./nav-items";

/**
 * 手機版全寬下拉選單（spec §11.4、§12.4）：
 * 五個主要導覽、語言切換、DOGTOR CTA；選擇後自動關閉；支援 Esc、焦點控制與螢幕閱讀器。
 */
export function MobileMenu({
  id,
  open,
  onClose,
  toggleRef,
  dogtorUrl,
}: {
  id: string;
  open: boolean;
  onClose: () => void;
  toggleRef: React.RefObject<HTMLButtonElement | null>;
  dogtorUrl: string;
}) {
  const t = useTranslations("Nav");
  const tc = useTranslations("Common");
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);

  // 路由改變時關閉
  const lastPath = useRef(pathname);
  useEffect(() => {
    if (lastPath.current !== pathname) {
      lastPath.current = pathname;
      onClose();
    }
  }, [pathname, onClose]);

  useEffect(() => {
    if (!open) return;
    const toggle = toggleRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // 開啟時焦點移到第一個項目
    const first = panelRef.current?.querySelector<HTMLElement>("a, button");
    first?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        toggle?.focus();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      // 焦點限制在選單按鈕與選單內
      const focusables = [
        toggle,
        ...panelRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      ].filter(Boolean) as HTMLElement[];
      const firstEl = focusables[0];
      const lastEl = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose, toggleRef]);

  return (
    <AnimatePresence>
      {open ? (
        <>
          <m.div
            key="backdrop"
            aria-hidden
            className="fixed inset-0 top-[72px] z-40 bg-navy/20 nav:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.26, ease: "easeOut" }}
            onClick={onClose}
          />
          <m.div
            key="panel"
            id={id}
            ref={panelRef}
            className="fixed inset-x-0 top-[72px] z-50 max-h-[calc(100dvh-72px)] overflow-y-auto border-b border-line bg-surface shadow-[var(--shadow-card-hover)] nav:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.26, ease: "easeOut" }}
          >
            <nav aria-label={t("primary")} className="container-site py-4">
              <ul className="divide-y divide-line">
                {navItems.map((item, i) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <m.li
                      key={item.key}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.22, delay: 0.04 * i }}
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "flex min-h-14 items-center justify-between text-[1.125rem] font-semibold",
                          active ? "text-brand" : "text-navy",
                        )}
                      >
                        {t(item.key)}
                        {active ? <span aria-hidden className="size-2 rotate-45 rounded-[2px] bg-gold" /> : null}
                      </Link>
                    </m.li>
                  );
                })}
              </ul>
              <div className="mt-4 flex flex-col gap-4 border-t border-line pt-5 pb-3">
                <div className="flex items-center justify-between">
                  <span className="text-caption font-medium text-muted">{t("language")}</span>
                  <LanguageSwitcher size="lg" onSwitch={onClose} />
                </div>
                <a
                  href={dogtorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    track("dogtor_cta_click", { placement: "mobile_menu" });
                    onClose();
                  }}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-button)] bg-brand px-5 font-semibold text-white hover:bg-brand-hover"
                >
                  {tc("exploreDogtor")}
                  <ArrowUpRight aria-hidden className="size-[1.125rem]" />
                  <span className="sr-only">{tc("opensInNewTab")}</span>
                </a>
              </div>
            </nav>
          </m.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}

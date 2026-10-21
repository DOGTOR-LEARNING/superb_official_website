"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { SmartLink } from "@/components/ui/SmartLink";
import { buttonClasses, ButtonArrow } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { DesktopNav } from "./DesktopNav";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";

/**
 * Header（spec §11.4）：頂部接近透明；捲動後轉為白色半透明 + backdrop blur + 下邊框。
 * 高度固定 72 / 80px，Logo、導覽與 CTA 位置保持穩定。
 */
export function SiteHeader({ dogtorUrl }: { dogtorUrl: string }) {
  const t = useTranslations("Nav");
  const tc = useTranslations("Common");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 切換到桌面寬度時關閉手機選單
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 64rem)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-200 ease-out",
        open
          ? "border-line bg-surface"
          : scrolled
            ? "border-line/80 bg-white/80 backdrop-blur-md backdrop-saturate-150"
            : "border-transparent bg-transparent",
      )}
    >
      <div className="container-site flex h-[72px] items-center justify-between gap-6 lg:h-20">
        <Link href="/" aria-label={t("logoLabel")} className="-m-1 rounded-lg p-1">
          <BrandLogo className="h-10 lg:h-11" />
        </Link>

        <DesktopNav />

        <div className="flex items-center gap-3">
          <LanguageSwitcher className="hidden nav:flex" />
          <SmartLink
            href={dogtorUrl}
            external
            event="dogtor_cta_click"
            eventProps={{ placement: "header" }}
            className={buttonClasses("primary", "hidden min-h-11 px-4 lg:inline-flex")}
          >
            <span>{tc("exploreDogtor")}</span>
            <ButtonArrow external />
          </SmartLink>

          <button
            ref={toggleRef}
            type="button"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? t("closeMenu") : t("openMenu")}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-[var(--radius-button)] border border-line bg-surface text-navy transition-colors hover:bg-soft-blue nav:hidden"
          >
            {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
          </button>
        </div>
      </div>

      <MobileMenu id={menuId} open={open} onClose={close} toggleRef={toggleRef} dogtorUrl={dogtorUrl} />
    </header>
  );
}

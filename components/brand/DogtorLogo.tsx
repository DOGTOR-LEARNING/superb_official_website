import Image from "next/image";
import { dogtor } from "@/content/projects/dogtor";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/cn";

/** DOGTOR 產品標誌：中文「逗課」標誌 + 英文「DOGTOR」標誌（官方素材） */
export function DogtorLogo({ locale, className }: { locale: Locale; className?: string }) {
  const { zh, en, alt } = dogtor.logo;
  return (
    <span role="img" aria-label={alt[locale]} className={cn("flex w-fit items-center gap-3", className)}>
      <Image src={zh.src} alt="" width={zh.width} height={zh.height} unoptimized className="h-7 w-auto sm:h-8" />
      <Image src={en.src} alt="" width={en.width} height={en.height} unoptimized className="h-7 w-auto sm:h-8" />
    </span>
  );
}

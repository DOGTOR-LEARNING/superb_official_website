import Image from "next/image";
import type { ProjectImage } from "@/content/types";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/cn";

/**
 * 圖片框：依原始比例顯示，避免不合理裁切（spec §12.3、§17.3）。
 * SVG 佔位圖不經最佳化；正式點陣圖由 Next Image 轉 AVIF/WebP 並 lazy load。
 */
export function ImageFrame({
  image,
  locale,
  className,
  imgClassName,
  sizes = "(min-width: 1200px) 600px, 100vw",
  priority = false,
  fit = "cover",
  aspect,
  position,
}: {
  image: ProjectImage;
  /** 覆寫顯示比例，例如 "16 / 9"（卡片統一比例時使用） */
  aspect?: string;
  /** object-position，例如 "top" */
  position?: string;
  locale: Locale;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
}) {
  return (
    <div className={cn("relative overflow-hidden bg-soft-blue", className)} style={{ aspectRatio: aspect ?? `${image.width} / ${image.height}` }}>
      <Image
        src={image.src}
        alt={image.alt[locale]}
        fill
        sizes={sizes}
        priority={priority}
        unoptimized={image.src.endsWith(".svg")}
        className={cn(fit === "cover" ? "object-cover" : "object-contain", imgClassName)}
        style={position ? { objectPosition: position } : undefined}
      />
    </div>
  );
}

/** 精緻的 Device Mockup：手機截圖完整顯示，不裁切 */
export function PhoneFrame({
  image,
  locale,
  className,
  priority,
  sizes = "(min-width: 1200px) 240px, 40vw",
}: {
  image: ProjectImage;
  locale: Locale;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={cn("rounded-[2.2rem] border border-line bg-navy p-[6px] shadow-[var(--shadow-card-hover)]", className)}>
      <div className="relative overflow-hidden rounded-[1.85rem] bg-white" style={{ aspectRatio: `${image.width} / ${image.height}` }}>
        <Image
          src={image.src}
          alt={image.alt[locale]}
          fill
          sizes={sizes}
          priority={priority}
          unoptimized={image.src.endsWith(".svg")}
          className="object-contain"
        />
      </div>
    </div>
  );
}

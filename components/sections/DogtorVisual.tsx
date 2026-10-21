import { dogtor } from "@/content/projects/dogtor";
import type { Locale } from "@/i18n/routing";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { cn } from "@/lib/cn";

/**
 * DOGTOR 產品視覺：官方學習島嶼、真實 App 畫面、家長學習報告與角色。
 * DOGTOR 子品牌色只在這個面板內使用（spec §6.3）。
 */
export function DogtorVisual({ locale, className, label }: { locale: Locale; className?: string; label: string }) {
  return (
    <div className={cn("relative flex min-h-[440px] items-center justify-center overflow-hidden bg-dogtor-soft px-6 py-12 sm:min-h-[520px] sm:px-10", className)}>
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgb(255_207_63/0.42),transparent_65%)]" />
      <div className="absolute bottom-4 left-1/2 w-[94%] max-w-[480px] -translate-x-1/2 opacity-90">
        <ImageFrame image={dogtor.island} locale={locale} fit="contain" className="bg-transparent" sizes="480px" />
      </div>
      <h3 className="sr-only">{label}</h3>
      <div className="relative z-10 flex items-end gap-4 sm:gap-6">
        <div className="w-[140px] -rotate-3 sm:w-[180px]">
          <ImageFrame
            image={dogtor.reportCards[0]}
            locale={locale}
            fit="contain"
            className="rounded-[var(--radius-card-sm)] bg-white shadow-[var(--shadow-card-hover)]"
            sizes="180px"
          />
        </div>
        <div className="w-[128px] sm:w-[164px]">
          <ImageFrame image={dogtor.appScreen} locale={locale} fit="contain" className="bg-transparent drop-shadow-xl" sizes="164px" />
        </div>
      </div>
      <div className="absolute right-3 bottom-3 z-20 w-[104px] sm:right-6 sm:w-[136px]">
        <ImageFrame image={dogtor.character} locale={locale} fit="contain" className="bg-transparent" sizes="136px" />
      </div>
    </div>
  );
}

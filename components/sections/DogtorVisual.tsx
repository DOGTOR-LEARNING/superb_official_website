import Image from "next/image";
import { dogtor } from "@/content/projects/dogtor";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/cn";

/** DOGTOR 官網海景、學習之門與真實 App 畫面。 */
export function DogtorVisual({ locale, className, label }: { locale: Locale; className?: string; label: string }) {
  return (
    <div className={cn("relative isolate min-h-[480px] overflow-hidden bg-[#06344b] sm:min-h-[600px]", className)}>
      <Image src="/projects/dogtor/sky.webp" alt="" fill sizes="(min-width: 1200px) 600px, 100vw" className="object-cover" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-[#06344b]/5 via-transparent to-[#032b40]/95" />
      <p className="absolute top-8 left-8 z-10 text-[0.6875rem] font-semibold tracking-[0.22em] text-white sm:top-10 sm:left-10">DOGTOR · A WORLD OF LEARNING</p>
      <h3 className="sr-only">{label}</h3>
      <div className="absolute top-[17%] left-[11%] w-[45%] -rotate-[7deg] drop-shadow-2xl sm:top-[15%] sm:left-[12%] sm:w-[43%]">
        <Image src={dogtor.appScreen.src} alt={dogtor.appScreen.alt[locale]} width={555} height={978} sizes="(min-width: 1200px) 250px, 43vw" className="h-auto w-full" />
      </div>
      <div className="absolute top-[35%] -right-[3%] w-[57%] rotate-[5deg] overflow-hidden rounded-[28px] border border-white/20 bg-[#153d50] shadow-2xl sm:right-[1%] sm:w-[53%]">
        <Image src="/projects/dogtor/learning-gateway.webp" alt={locale === "en" ? "DOGTOR's illustrated learning gateway, with an open book above the entrance" : "DOGTOR 官網的學習之門插畫，門上方是一本打開的書"} width={900} height={777} sizes="(min-width: 1200px) 310px, 55vw" className="h-auto w-full" />
        <div className="border-t border-white/10 px-4 py-4 text-[0.8125rem] font-medium text-white sm:px-5">
          {locale === "en" ? "Every concept opens a new door." : "每懂一個觀念，就打開一扇新的門。"}
        </div>
      </div>
      <div className="absolute inset-x-8 bottom-8 flex items-end justify-between gap-4 border-t border-white/25 pt-5 sm:inset-x-10 sm:bottom-10">
        <p className="max-w-[14rem] text-[1.125rem] leading-relaxed font-semibold text-white sm:text-[1.375rem]">
          {locale === "en" ? "Find your way. Enjoy the journey." : <>找到自己的節奏，<br />讓學習成為一場探索。</>}
        </p>
        <span aria-hidden className="pb-1 text-[0.6875rem] tracking-[0.1em] text-white/80">iOS / ANDROID</span>
      </div>
    </div>
  );
}

import { ArrowUpRight, Check } from "lucide-react";
import type { EducationSolution } from "@/content/education-solutions";
import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { SolutionOutline } from "./SolutionOutline";

export function SolutionCard({ solution, locale, categoryLabel, cta }: { solution: EducationSolution; locale: Locale; categoryLabel: string; cta: string }) {
  const content = solution.content[locale];
  return (
    <article id={solution.slug} className="group relative flex h-full scroll-mt-28 flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white transition-[border-color,box-shadow] duration-200 hover:border-brand/40 hover:shadow-[var(--shadow-card)] focus-within:ring-2 focus-within:ring-brand">
      <div className="border-b border-line/70 bg-gradient-to-br from-page to-soft-blue/60 px-5 pt-4">
        <SolutionOutline slug={solution.slug} className="mx-auto max-w-[320px] transition-transform duration-300 motion-safe:group-hover:-translate-y-1" />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-caption font-semibold tracking-wide text-brand">{categoryLabel}</p>
        <h3 className="mt-3 text-[1.1875rem] leading-snug font-bold">{content.title}</h3>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{content.description}</p>
        <ul className="mt-5 mb-6 space-y-2 text-[0.8125rem] text-navy/85">
          {content.features.map((feature) => <li key={feature} className="flex items-start gap-2"><Check aria-hidden className="mt-1 size-3.5 shrink-0 text-brand" />{feature}</li>)}
        </ul>
        <Link href={`/contact?solution=${solution.slug}`} className="mt-auto flex min-h-11 items-center justify-between gap-3 border-t border-line pt-5 text-[0.875rem] font-semibold text-brand before:absolute before:inset-0 before:content-['']" aria-label={`${cta}：${content.title}`}>
          <span className="pt-1">{cta}</span><ArrowUpRight aria-hidden className="size-5" />
        </Link>
      </div>
    </article>
  );
}

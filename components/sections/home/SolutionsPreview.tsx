import { getTranslations } from "next-intl/server";
import { richTags } from "@/components/brand/HighlightHeading";
import { Section } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SecondaryButton } from "@/components/ui/Button";
import { SolutionOutline } from "@/components/solutions/SolutionOutline";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { educationSolutions } from "@/content/education-solutions";

export async function SolutionsPreview({ locale }: { locale: Locale }) {
  const t = await getTranslations("Solutions");
  const items = [educationSolutions[0], educationSolutions[1], educationSolutions[4]];
  return (
    <Section tone="surface" labelledBy="solutions-preview">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading id="solutions-preview" eyebrow={t("eyebrow")} title={t.rich("previewTitle", richTags)} supporting={t("previewBody")} />
        <SecondaryButton href="/solutions" className="shrink-0">{t("previewCta")}</SecondaryButton>
      </div>
      <ul className="mt-10 grid gap-5 md:grid-cols-3">
        {items.map((s) => <li key={s.slug}><Link href={`/solutions#${s.slug}`} className="block rounded-[var(--radius-card)] border border-line bg-page px-6 pb-6 transition-colors hover:border-brand/40 hover:bg-soft-blue"><SolutionOutline slug={s.slug} className="mx-auto max-w-[280px]" /><h3 className="text-center text-[1rem] font-semibold">{s.content[locale].title}<span aria-hidden className="ml-2 text-brand">↗</span></h3></Link></li>)}
      </ul>
    </Section>
  );
}

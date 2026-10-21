import { getTranslations } from "next-intl/server";
import { getHomeProjects } from "@/content/projects";
import type { Locale } from "@/i18n/routing";
import { richTags } from "@/components/brand/HighlightHeading";
import { Section } from "@/components/layout/Container";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SecondaryButton } from "@/components/ui/Button";

/** Section 04 — Selected Work：Desktop 2 × 2 作品網格（spec §4.4） */
export async function SelectedWork({ locale }: { locale: Locale }) {
  const t = await getTranslations("Home.work");
  const items = getHomeProjects().slice(0, 4);

  return (
    <Section tone="page" labelledBy="work-title">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading id="work-title" eyebrow={t("eyebrow")} title={t.rich("title", richTags)} supporting={t("supporting")} />
        <SecondaryButton href="/work" className="shrink-0 self-start md:self-auto">
          {t("cta")}
        </SecondaryButton>
      </div>
      <RevealGroup as="ul" className="mt-14 grid gap-6 lg:mt-16 lg:gap-8 md:grid-cols-2">
        {items.map((project) => (
          <RevealItem as="li" key={project.slug}>
            <ProjectCard project={project} locale={locale} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}

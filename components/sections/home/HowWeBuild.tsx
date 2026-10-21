import { getTranslations } from "next-intl/server";
import { richTags } from "@/components/brand/HighlightHeading";
import { Section } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/ui/Timeline";

/** Section 05 — How We Build：柔和流程線串起四個步驟（spec §4.5） */
export async function HowWeBuild() {
  const t = await getTranslations("Home.build");
  const keys = ["discover", "design", "build", "learn"] as const;

  return (
    <Section tone="soft-blue" labelledBy="build-title">
      <SectionHeading id="build-title" eyebrow={t("eyebrow")} title={t.rich("title", richTags)} align="center" />
      <Timeline
        className="mx-auto mt-14 max-w-5xl"
        steps={keys.map((k, i) => ({ index: `0${i + 1}`, label: t(`steps.${k}.label`), body: t(`steps.${k}.body`) }))}
      />
    </Section>
  );
}

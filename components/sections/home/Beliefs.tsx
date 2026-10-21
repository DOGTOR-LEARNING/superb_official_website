import { getTranslations } from "next-intl/server";
import { richTags } from "@/components/brand/HighlightHeading";
import { Section } from "@/components/layout/Container";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ValueCard } from "@/components/ui/Cards";

/** 極簡線條幾何圖形，不使用 emoji 或吉祥物（spec §4.3） */
const graphics = {
  accessible: (
    <svg viewBox="0 0 64 64" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="18" y="18" width="28" height="28" rx="7" transform="rotate(45 32 32)" stroke="currentColor" />
      <path d="M12 52 L52 12" stroke="#F3B338" />
      <circle cx="32" cy="32" r="4" fill="currentColor" stroke="none" />
    </svg>
  ),
  people: (
    <svg viewBox="0 0 64 64" fill="none" strokeWidth="2.5" strokeLinecap="round">
      <circle cx="24" cy="32" r="14" stroke="currentColor" />
      <circle cx="40" cy="32" r="14" stroke="#F3B338" />
    </svg>
  ),
  impact: (
    <svg viewBox="0 0 64 64" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 50 H24 V38 H38 V26 H52" stroke="currentColor" />
      <path d="M44 14 L54 14 L54 24" stroke="#F3B338" />
      <path d="M54 14 L40 28" stroke="#F3B338" />
    </svg>
  ),
};

export async function Beliefs() {
  const t = await getTranslations("Home.beliefs");
  const keys = ["accessible", "people", "impact"] as const;

  return (
    <Section tone="surface" labelledBy="beliefs-title">
      <SectionHeading id="beliefs-title" eyebrow={t("eyebrow")} title={t.rich("title", richTags)} />
      <RevealGroup as="ul" className="mt-14 grid gap-6 lg:mt-16 lg:gap-8 md:grid-cols-3">
        {keys.map((k, i) => (
          <RevealItem as="li" key={k}>
            <ValueCard
              index={`0${i + 1}`}
              label={t(`items.${k}.label`)}
              title={t(`items.${k}.title`)}
              body={t(`items.${k}.body`)}
              graphic={graphics[k]}
            />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}

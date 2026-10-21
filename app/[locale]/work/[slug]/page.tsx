import { resolveLocale } from "@/lib/locale";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Info } from "lucide-react";
import { getNextProject, getProject, projects } from "@/content/projects";
import { nonCommercialStatuses } from "@/content/types";
import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { buildMetadata, localizedPath } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site-config";
import { JsonLd } from "@/components/ui/JsonLd";
import { cn } from "@/lib/cn";
import { SectionEyebrow } from "@/components/brand/SectionEyebrow";
import { BrandPattern } from "@/components/brand/BrandPattern";
import { Container } from "@/components/layout/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ImageFrame, PhoneFrame } from "@/components/ui/ImageFrame";
import { RelationshipBadge, StatusBadge } from "@/components/ui/StatusBadge";
import { ReviewNotes } from "@/components/ui/PendingBadge";
import { TextLink } from "@/components/ui/TextLink";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { FinalCta } from "@/components/sections/home/FinalCta";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const locale = await resolveLocale(params);
  const project = getProject(slug);
  if (!project) return {};
  const c = project.localeContent[locale as Locale];
  return buildMetadata({
    locale: locale as Locale,
    path: `/work/${slug}`,
    title: `${c.title}｜${c.subtitle}`,
    description: `${c.summary} ${c.overview}`.slice(0, 160),
  });
}

/** 案例頁的每個區塊：左側標籤、右側內容 */
function CaseBlock({ id, label, title, children, className }: { id: string; label: string; title: string; children: React.ReactNode; className?: string }) {
  return (
    <Reveal as="section" className={cn("grid gap-6 border-t border-line py-12 md:py-16 lg:grid-cols-12 lg:gap-8", className)}>
      <div className="lg:col-span-4">
        <SectionEyebrow>{label}</SectionEyebrow>
        <h2 id={id} className="text-h3 mt-3">
          {title}
        </h2>
      </div>
      <div className="lg:col-span-8">{children}</div>
    </Reveal>
  );
}

export default async function ProjectPage({ params }: PageProps<"/[locale]/work/[slug]">) {
  const { slug } = await params;
  const locale = await resolveLocale(params);
  const project = getProject(slug);
  if (!project) notFound();

  const t = await getTranslations("Project");
  const ts = await getTranslations("Status");
  const tc = await getTranslations("Common");
  const c = project.localeContent[locale];
  const next = getNextProject(slug);
  const nextContent = next.localeContent[locale];
  const isNonCommercial = nonCommercialStatuses.includes(project.status);
  const phones = project.images.gallery.filter((g) => g.kind === "phone");
  const wides = project.images.gallery.filter((g) => g.kind !== "phone");

  return (
    <article>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: c.title,
          alternativeHeadline: c.subtitle,
          description: c.overview,
          url: absoluteUrl(localizedPath(locale, `/work/${slug}`)),
          image: absoluteUrl(project.images.cover.src),
          dateCreated: project.year,
          inLanguage: locale,
          genre: c.typeLabel,
          keywords: c.technology.stack.join(", "),
          creditText: c.credits.map((cr) => `${cr.name}（${cr.role}）`).join("、"),
          video: project.video
            ? {
                "@type": "VideoObject",
                name: project.video.title[locale],
                thumbnailUrl: absoluteUrl(`/videos/${project.video.youtubeId}.webp`),
                embedUrl: `https://www.youtube-nocookie.com/embed/${project.video.youtubeId}`,
                contentUrl: `https://www.youtube.com/watch?v=${project.video.youtubeId}`,
                uploadDate: project.year,
                description: c.summary,
              }
            : undefined,
        }}
      />
      {/* 1. Project Hero */}
      <header className="relative overflow-hidden bg-gradient-to-b from-white to-page pt-10 md:pt-14">
        <BrandPattern className="-top-32 -right-40 size-[520px]" />
        <Container className="relative">
          <Breadcrumb locale={locale} items={[{ name: t("breadcrumbWork"), href: "/work" }, { name: c.title, href: `/work/${slug}` }]} />
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-2">
                <RelationshipBadge type={project.relationshipType} />
                <StatusBadge status={project.status} />
              </div>
              <h1 className="text-h1 mt-5">{c.title}</h1>
              <p className="text-h3 mt-3 font-medium text-brand">{c.subtitle}</p>
              <p className="text-body-lg mt-5 max-w-2xl text-muted">{c.overview}</p>
            </div>
            <dl className="grid grid-cols-2 gap-4 rounded-[var(--radius-card)] border border-line bg-surface p-6 lg:col-span-5">
              {project.year ? (
                <div>
                  <dt className="text-caption text-muted">{t("year")}</dt>
                  <dd className="mt-1 font-semibold">{project.year}</dd>
                </div>
              ) : null}
              <div>
                <dt className="text-caption text-muted">{t("type")}</dt>
                <dd className="mt-1 font-semibold">{c.typeLabel}</dd>
              </div>
              <div>
                <dt className="text-caption text-muted">{t("status")}</dt>
                <dd className="mt-1 font-semibold">{ts(project.status)}</dd>
              </div>
            </dl>
          </div>

          {isNonCommercial ? (
            <p role="note" className="mt-8 flex items-start gap-2.5 rounded-[var(--radius-card-sm)] border border-gold/40 bg-soft-gold px-5 py-4 text-[0.9375rem] text-navy">
              <Info aria-hidden className="mt-0.5 size-[1.125rem] shrink-0 text-[#7a5200]" />
              {t("prototypeNotice", { status: ts(project.status) })}
            </p>
          ) : null}
          <ReviewNotes notes={project.publicationApproval.notes} className="mt-6" />

          <div className="edge mt-10 overflow-hidden rounded-[var(--radius-feature)]">
            <ImageFrame image={project.images.cover} locale={locale} priority sizes="(min-width: 1280px) 1104px, 100vw" />
          </div>
        </Container>
      </header>

      <Container className="mt-8">
        {/* 2. The Challenge */}
        <CaseBlock id="challenge" label={t("challenge")} title={t("challengeTitle")}>
          <p className="text-body-lg text-navy/85">{c.challenge}</p>
        </CaseBlock>

        {/* 3. Our Approach */}
        <CaseBlock id="approach" label={t("approach")} title={t("approachTitle")}>
          <p className="text-body-lg text-navy/85">{c.solution}</p>
        </CaseBlock>

        {/* 4. Key Features */}
        {c.keyFeatures.length ? (
          <CaseBlock id="features" label={t("features")} title={t("featuresTitle")}>
            <RevealGroup as="ul" className="grid gap-4 sm:grid-cols-2">
              {c.keyFeatures.slice(0, 4).map((f, i) => (
                <RevealItem as="li" key={f.title} className="rounded-[var(--radius-card-sm)] border border-line bg-surface p-6">
                  <span className="text-caption font-semibold tabular-nums text-brand">0{i + 1}</span>
                  <h3 className="mt-2 text-[1.125rem] font-semibold">{f.title}</h3>
                  <p className="mt-2 text-muted">{f.description}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </CaseBlock>
        ) : null}

        {/* 5. Product Showcase：Demo 影片、介面截圖、使用流程 */}
        {project.images.gallery.length || project.video || c.userFlow?.length ? (
          <CaseBlock id="showcase" label={t("showcase")} title={t("showcaseTitle")}>
            <div className="space-y-10">
              {project.video ? (
                <div>
                  <h3 className="text-caption mb-3 font-semibold text-muted">{t("videoTitle")}</h3>
                  <VideoEmbed
                    youtubeId={project.video.youtubeId}
                    vertical={project.video.vertical}
                    title={project.video.title[locale]}
                    playLabel={tc("playVideo")}
                    className={project.video.vertical ? "mx-0" : undefined}
                  />
                </div>
              ) : null}

              {phones.length ? (
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {phones.map((img) => (
                    <li key={img.src}>
                      <PhoneFrame image={img} locale={locale} sizes="(min-width: 1200px) 240px, 45vw" />
                    </li>
                  ))}
                </ul>
              ) : null}
              {wides.length ? (
                <ul className="grid gap-4 sm:grid-cols-2">
                  {wides.map((img) => (
                    <li key={img.src}>
                      <ImageFrame image={img} locale={locale} className="edge rounded-[var(--radius-card-sm)]" sizes="(min-width: 1200px) 380px, (min-width: 480px) 45vw, 100vw" />
                    </li>
                  ))}
                </ul>
              ) : null}

              {c.userFlow?.length ? (
                <div>
                  <h3 className="text-caption mb-4 font-semibold text-muted">{t("userFlowTitle")}</h3>
                  <ol className="grid gap-3 sm:grid-cols-2">
                    {c.userFlow.map((step, i) => (
                      <li key={step} className="flex items-center gap-3 rounded-[var(--radius-card-sm)] border border-line bg-surface px-4 py-3">
                        <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-[8px] bg-soft-blue text-caption font-semibold text-brand tabular-nums">
                          {i + 1}
                        </span>
                        <span className="text-[0.9375rem]">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ) : null}
            </div>
          </CaseBlock>
        ) : null}

        {c.relatedApplications ? (
          <CaseBlock id="related-applications" label="BEYOND THIS CASE" title={c.relatedApplications.title}>
            <p className="text-body-lg text-navy/85">{c.relatedApplications.description}</p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {c.relatedApplications.items.map((item) => (
                <li key={item.title} className="rounded-[var(--radius-card-sm)] border border-line bg-soft-blue/60 p-6">
                  <h3 className="text-[1.125rem] font-semibold">{item.title}</h3>
                  <p className="mt-2 text-muted">{item.description}</p>
                </li>
              ))}
            </ul>
            <TextLink href={c.relatedApplications.link.href} className="mt-6">{c.relatedApplications.link.label}</TextLink>
          </CaseBlock>
        ) : null}

        {/* 6. Technology & Design */}
        <CaseBlock id="technology" label={t("technology")} title={t("technologyTitle")}>
          <ul className="space-y-3">
            {c.technology.decisions.map((d) => (
              <li key={d} className="flex gap-3">
                <span aria-hidden className="mt-[0.7rem] size-2 shrink-0 rotate-45 rounded-[2px] bg-gold" />
                <span className="text-navy/85">{d}</span>
              </li>
            ))}
          </ul>
          {c.technology.stack.length ? (
            <div className="mt-6">
              <h3 className="text-caption font-semibold text-muted">{t("stackLabel")}</h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {c.technology.stack.map((s) => (
                  <li key={s} className="rounded-full border border-line bg-surface px-3 py-1 text-caption font-medium">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </CaseBlock>

        {/* 7. Our Involvement */}
        <CaseBlock id="involvement" label={t("involvement")} title={t("involvementTitle")}>
          <p className="text-navy/85">{c.involvement}</p>
        </CaseBlock>

        {/* 8. Outcomes */}
        <CaseBlock id="outcomes" label={t("outcomes")} title={t("outcomesTitle")}>
          <ul className="space-y-3">
            {c.results.map((r) => (
              <li key={r.text} className="rounded-[var(--radius-card-sm)] border border-line bg-surface p-5">
                <span className={cn("text-caption font-semibold", r.kind === "limitation" ? "text-[#7a5200]" : "text-brand")}>
                  {t(`outcomeKind.${r.kind}`)}
                </span>
                <p className="mt-1 text-navy/85">{r.text}</p>
              </li>
            ))}
          </ul>
        </CaseBlock>

        {/* 9. Credits & Attribution */}
        <CaseBlock id="credits" label={t("credits")} title={t("creditsTitle")}>
          <dl className="divide-y divide-line rounded-[var(--radius-card-sm)] border border-line bg-surface">
            {c.credits.map((cr) => (
              <div key={cr.name} className="flex flex-col gap-1 p-5 sm:flex-row sm:justify-between">
                <dt className="font-semibold">{cr.name}</dt>
                <dd className="text-muted">{cr.role}</dd>
              </div>
            ))}
          </dl>
          {project.externalLinks.length ? (
            <div className="mt-6">
              <h3 className="text-caption font-semibold text-muted">{t("externalLinks")}</h3>
              <ul className="mt-1">
                {project.externalLinks.map((l) => (
                  <li key={l.href}>
                    <TextLink href={l.href} external>
                      {l.label[locale]}
                    </TextLink>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </CaseBlock>
      </Container>

      {/* 10. Next Project */}
      {next.slug !== project.slug ? (
        <Container className="pb-4">
          <nav aria-label={t("nextLabel")} className="border-t border-line pt-12 md:pt-16">
            <Link
              href={`/work/${next.slug}`}
              className="group flex flex-col gap-6 rounded-[var(--radius-card)] border border-line bg-surface p-6 shadow-[var(--shadow-card)] transition-[transform,box-shadow] duration-[var(--duration-card)] ease-out hover:shadow-[var(--shadow-card-hover)] motion-safe:hover:-translate-y-1 sm:flex-row sm:items-center md:p-8"
            >
              <div className="w-full overflow-hidden rounded-[var(--radius-card-sm)] sm:w-56">
                <ImageFrame image={next.images.cover} locale={locale} sizes="224px" />
              </div>
              <div className="flex-1">
                <p className="text-eyebrow text-brand">{t("next")}</p>
                <p className="text-h3 mt-2">{nextContent.title}</p>
                <p className="mt-1 text-muted">{nextContent.summary}</p>
              </div>
              <ArrowRight aria-hidden className="size-6 text-brand transition-transform duration-[var(--duration-card)] motion-safe:group-hover:translate-x-1" />
            </Link>
          </nav>
        </Container>
      ) : null}

      <FinalCta />
    </article>
  );
}

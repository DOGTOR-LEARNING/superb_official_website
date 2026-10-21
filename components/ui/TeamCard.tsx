import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { getTranslations } from "next-intl/server";
import type { TeamMember } from "@/content/team";
import type { Locale } from "@/i18n/routing";
import { cardBase } from "./Cards";
import { cn } from "@/lib/cn";
import { PendingBadge } from "./PendingBadge";

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/** 成員卡：照片、姓名、公司角色、專業領域、個人介紹、可選連結。未提供的欄位不顯示 */
export async function TeamCard({ member, locale }: { member: TeamMember; locale: Locale }) {
  const t = await getTranslations("About.team");
  return (
    <article className={cn(cardBase, "flex h-full flex-col p-6")}>
      <div className="relative mb-5 aspect-square w-full overflow-hidden rounded-[var(--radius-card-sm)] bg-soft-blue">
        {member.photo ? (
          <Image src={member.photo.src} alt={t("photoAlt", { name: member.nameZh ? `${member.name} ${member.nameZh}` : member.name })} fill sizes="(min-width: 1200px) 280px, (min-width: 768px) 45vw, 100vw" className="object-cover object-top" />
        ) : (
          // 照片待提供：以姓名縮寫與品牌菱形代替，不使用通用素材
          <div aria-hidden className="flex size-full items-center justify-center">
            <span className="absolute size-[46%] rotate-45 rounded-[22%] border-2 border-brand/15" />
            <span className="text-[2.25rem] font-bold tracking-wide text-brand">{initials(member.name)}</span>
          </div>
        )}
      </div>
      <h3 className="text-[1.1875rem] font-semibold leading-snug">
        {member.name}
        {member.nameZh ? <span className="ml-2 font-medium text-muted">{member.nameZh}</span> : null}{" "}
        <PendingBadge show={!member.bio} notes={["專業領域與個人介紹待提供"]} />
      </h3>
      <p className="mt-0.5 font-medium text-brand">{member.role[locale]}</p>
      {member.expertise ? <p className="text-caption mt-2 text-muted">{member.expertise[locale]}</p> : null}
      {member.bio ? <p className="mt-3 text-muted">{member.bio[locale]}</p> : null}
      {member.links?.length ? (
        <ul aria-label={t("links", { name: member.name })} className="mt-4 flex flex-wrap gap-3">
          {member.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1 text-caption font-semibold text-brand hover:underline">
                {link.label}
                <ExternalLink aria-hidden className="size-3.5" />
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

import { cn } from "@/lib/cn";
import { EN_CAPS_BOX, LOGO_COLORS, MARK_BOX, TEXT_BLOCK_H, ZH_BOX, logoPaths } from "./logo-paths";

/**
 * SuperB 正式 Logo（由 public/brand/superb_logo.png 向量化）。
 * 標誌與文字皆維持原始比例與造型，只做組合排列（spec §11.7、§15.3）。
 * 規範：標誌與文字區塊等高；中文名稱下方一律搭配英文名稱。
 */

type Tone = "color" | "white";

function MarkPaths({ tone }: { tone: Tone }) {
  return (
    <>
      <path fillRule="evenodd" fill={LOGO_COLORS.gold} d={logoPaths.gold} />
      <path fillRule="evenodd" fill={tone === "white" ? "#FFFFFF" : LOGO_COLORS.blue} d={logoPaths.blueMark} />
    </>
  );
}

function ZhPaths({ tone }: { tone: Tone }) {
  return (
    <>
      <path fillRule="evenodd" fill={tone === "white" ? "#FFFFFF" : LOGO_COLORS.ink} d={logoPaths.blackZh} />
      <path fillRule="evenodd" fill={tone === "white" ? "#FFFFFF" : LOGO_COLORS.blue} d={logoPaths.blueZh} />
    </>
  );
}

/** 只有標誌（樹與菱形） */
export function BrandMark({ className, title, tone = "color" }: { className?: string; title?: string; tone?: Tone }) {
  return (
    <svg
      viewBox={`${MARK_BOX.x - 4} ${MARK_BOX.y - 4} ${MARK_BOX.w + 8} ${MARK_BOX.h + 8}`}
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <MarkPaths tone={tone} />
    </svg>
  );
}

/** 文字區塊：上方中文名稱、下方全大寫英文名稱（與中文等寬，底部對齊標誌底座） */
const TEXT_TOP = ZH_BOX.y;
const TEXT_W = EN_CAPS_BOX.w;
/** 標誌縮放到與文字區塊等高 */
const S = TEXT_BLOCK_H / MARK_BOX.h;
const MARK_W = MARK_BOX.w * S;
/** 標誌與文字間距：約為標誌寬度的 38% */
const TEXT_X = MARK_W * 1.38;

/**
 * 橫式組合：標誌與「中文名稱 + 英文名稱」文字區塊等高並排。
 * 英文名稱永遠跟在中文名稱下方，不單獨使用中文。
 */
export function BrandLogo({
  className,
  tone = "color",
  title = "超棒軟體 SuperB Software Technology",
}: {
  className?: string;
  tone?: Tone;
  title?: string;
}) {
  const ink = tone === "white" ? "#FFFFFF" : LOGO_COLORS.ink;
  return (
    <svg viewBox={`-2 -2 ${TEXT_X + TEXT_W + 4} ${TEXT_BLOCK_H + 4}`} className={cn("h-11 w-auto", className)} role="img" aria-label={title}>
      <g transform={`scale(${S}) translate(${-MARK_BOX.x} ${-MARK_BOX.y})`}>
        <MarkPaths tone={tone} />
      </g>
      <g transform={`translate(${TEXT_X - EN_CAPS_BOX.x} ${-TEXT_TOP})`}>
        <ZhPaths tone={tone} />
        <path fill={ink} d={logoPaths.enCaps} />
      </g>
    </svg>
  );
}

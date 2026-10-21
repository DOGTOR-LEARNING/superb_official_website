"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Demo 影片：預設只顯示自架的縮圖，點擊播放後才載入 YouTube（youtube-nocookie）。
 * 不自動播放有聲影片（spec §11.10），也不在使用者互動前向第三方發送請求。
 */
export function VideoEmbed({
  youtubeId,
  title,
  vertical = false,
  playLabel,
  className,
}: {
  youtubeId: string;
  title: string;
  vertical?: boolean;
  playLabel: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={cn(
        "edge overflow-hidden rounded-[var(--radius-card)] bg-navy",
        vertical ? "mx-auto aspect-[9/16] w-full max-w-[320px]" : "aspect-video w-full",
        className,
      )}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&playsinline=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`${playLabel}：${title}`}
          className="group absolute inset-0 flex size-full items-center justify-center focus-visible:outline-offset-[-4px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/videos/${youtubeId}.webp`} alt="" loading="lazy" className="absolute inset-0 size-full object-cover opacity-90" />
          <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
          <span className="relative inline-flex size-16 items-center justify-center rounded-full bg-white/95 text-brand shadow-[var(--shadow-card-hover)] transition-transform duration-[var(--duration-card)] ease-out motion-safe:group-hover:scale-105">
            <Play aria-hidden className="ml-1 size-7 fill-current" />
          </span>
        </button>
      )}
    </div>
  );
}

import { cn } from "@/lib/cn";

/**
 * Hero 品牌視覺：由 SuperB Logo 延伸的抽象構圖（spec §4.1、§11.7）——
 * 圓角菱形、向上生長的樹幹、黃色枝葉 V 形線條，搭配柔和圓角模組與連結線。
 * 線條沿菱形輪廓描繪、枝葉依序出現，最終形成穩定構圖；只播放一次。
 * 以 CSS 實作，不需 JS；reduced motion 時直接顯示完成狀態。這是延伸圖形，不是正式 Logo 本身。
 */
export function AnimatedLogoGraphic({ className, label }: { className?: string; label: string }) {
  const delay = (ms: number) => ({ animationDelay: `${ms}ms` });
  const BLUE = "#2868A6";
  const GOLD = "#F3B338";

  return (
    <svg viewBox="0 0 560 540" className={cn("h-auto w-full", className)} role="img" aria-label={label}>
      <defs>
        <radialGradient id="hero-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={GOLD} stopOpacity="0.28" />
          <stop offset="1" stopColor={GOLD} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hero-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#EAF4FB" />
        </linearGradient>
        <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#163247" floodOpacity="0.07" />
        </filter>
      </defs>

      {/* 局部金黃光暈 */}
      <circle cx="300" cy="200" r="190" fill="url(#hero-glow)" className="pop-in" style={delay(250)} />

      {/* 外圈淡菱形 */}
      <rect x="90" y="50" width="380" height="380" rx="70" transform="rotate(45 280 240)" fill="none" stroke={BLUE} strokeOpacity="0.14" strokeWidth="2" pathLength={1} className="draw" style={delay(300)} />

      {/* 主菱形 */}
      <rect x="150" y="110" width="260" height="260" rx="44" transform="rotate(45 280 240)" fill="url(#hero-fill)" className="pop-in" style={delay(300)} />
      <rect x="150" y="110" width="260" height="260" rx="44" transform="rotate(45 280 240)" fill="none" stroke={BLUE} strokeWidth="9" pathLength={1} className="draw" style={delay(380)} />

      {/* 枝葉：黃色 V 形依序出現 */}
      <g fill="none" stroke={GOLD} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
        <path d="M200 236 L280 316 L360 236" pathLength={1} className="draw" style={delay(900)} />
        <path d="M222 196 L280 254 L338 196" pathLength={1} className="draw" style={delay(780)} />
        <path d="M248 160 L280 192 L312 160" pathLength={1} className="draw" style={delay(660)} />
      </g>

      {/* 樹幹與底座 */}
      <g fill="none" stroke={BLUE} strokeWidth="10" strokeLinecap="round">
        <path d="M280 130 L280 470" pathLength={1} className="draw" style={delay(560)} />
        <path d="M236 472 L324 472" pathLength={1} className="draw" style={delay(1100)} />
      </g>

      {/* 連結線：從菱形延伸到兩側模組，象徵合作與連結 */}
      <g fill="none" stroke={BLUE} strokeOpacity="0.35" strokeWidth="2" strokeDasharray="4 6" className="pop-in" style={delay(1250)}>
        <path d="M120 240 L120 190" />
        <path d="M440 300 L440 352" />
      </g>

      {/* 柔和圓角模組 */}
      <g filter="url(#soft-shadow)">
        <g className="pop-in" style={delay(1300)}>
          <rect x="34" y="104" width="160" height="88" rx="20" fill="#FFFFFF" stroke="#DEE8F0" />
          <rect x="54" y="126" width="28" height="28" rx="8" fill="#EAF4FB" />
          <rect x="92" y="130" width="80" height="8" rx="4" fill="#DEE8F0" />
          <rect x="92" y="146" width="52" height="8" rx="4" fill="#EAF4FB" />
          <rect x="54" y="168" width="118" height="6" rx="3" fill="#EAF4FB" />
          <rect x="54" y="168" width="76" height="6" rx="3" fill={BLUE} />
        </g>
        <g className="pop-in" style={delay(1420)}>
          <rect x="372" y="352" width="150" height="92" rx="20" fill="#FFFFFF" stroke="#DEE8F0" />
          <circle cx="406" cy="386" r="14" fill="#FFF4D8" />
          <path d="M399 386 l5 5 l9 -10" stroke="#B9800F" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="430" y="378" width="70" height="8" rx="4" fill="#DEE8F0" />
          <rect x="430" y="392" width="44" height="8" rx="4" fill="#EAF4FB" />
          <rect x="392" y="418" width="110" height="8" rx="4" fill="#EAF4FB" />
        </g>
      </g>
    </svg>
  );
}

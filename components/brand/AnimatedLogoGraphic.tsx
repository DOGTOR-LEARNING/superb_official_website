import { cn } from "@/lib/cn";
import { LOGO_COLORS, MARK_BOX, logoPaths } from "./logo-paths";

// 原始向量中：上方黃線分成兩側，中間黃線連續，下方黃線分成兩側。
const goldContours = logoPaths.gold.split(/(?=M )/).filter(Boolean);
const backBranches = [goldContours[0], goldContours[1], goldContours[3], goldContours[4]].join(" ");
const frontBranch = goldContours[2];
const markTransform = `translate(280 52) scale(0.56) translate(${-(MARK_BOX.x + MARK_BOX.w / 2)} ${-MARK_BOX.y})`;

/**
 * 使用正式 Logo 向量輪廓，以遮罩沿菱形、樹幹與枝葉描繪，保留原圖粗細及分布。
 * 上下黃線在藍色後方，中間黃線在最上層；只播放一次。
 * 周邊模組與連結線為裝飾；reduced motion 時直接顯示完成狀態。
 */
export function AnimatedLogoGraphic({ className, label }: { className?: string; label: string }) {
  const delay = (ms: number) => ({ animationDelay: `${ms}ms` });
  const BLUE = LOGO_COLORS.blue;
  const GOLD = LOGO_COLORS.gold;

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
        {/* 描繪線僅控制顯示範圍；實際輪廓與粗細完全使用正式向量。 */}
        <mask id="hero-blue-reveal" maskUnits="userSpaceOnUse" x="400" y="200" width="650" height="820">
          <g fill="none" stroke="white" strokeWidth="64" strokeLinecap="round" strokeLinejoin="round">
            <path d="M731.5 246 L1013.5 528 L731.5 810 L449.5 528 Z" pathLength={1} className="draw" style={delay(380)} />
            <path d="M731.5 360 V973" pathLength={1} className="draw" style={delay(560)} />
            <path d="M634 972 H829" pathLength={1} className="draw" style={delay(1100)} />
          </g>
        </mask>
        <mask id="hero-back-branches-reveal" maskUnits="userSpaceOnUse" x="520" y="370" width="420" height="370">
          <g fill="none" stroke="white" strokeWidth="64" strokeLinecap="round" strokeLinejoin="round">
            <path d="M678 414 L731.5 468 L786 414" pathLength={1} className="draw" style={delay(660)} />
            <path d="M560 531 L731.5 702 L903 531" pathLength={1} className="draw" style={delay(900)} />
          </g>
        </mask>
        <mask id="hero-front-branch-reveal" maskUnits="userSpaceOnUse" x="580" y="430" width="300" height="190">
          <path d="M619 472 L731.5 582 L844 472" fill="none" stroke="white" strokeWidth="64" strokeLinecap="round" strokeLinejoin="round" pathLength={1} className="draw" style={delay(780)} />
        </mask>
      </defs>

      {/* 局部金黃光暈 */}
      <circle cx="300" cy="200" r="190" fill="url(#hero-glow)" className="pop-in" style={delay(250)} />

      {/* 外圈淡菱形 */}
      <rect x="90" y="50" width="380" height="380" rx="70" transform="rotate(45 280 240)" fill="none" stroke={BLUE} strokeOpacity="0.14" strokeWidth="2" pathLength={1} className="draw" style={delay(300)} />

      <g transform={markTransform}>
        <path d="M731.5 246 L1013.5 528 L731.5 810 L449.5 528 Z" fill="url(#hero-fill)" className="pop-in" style={delay(300)} />
        {/* 上下黃線先繪製，藍色菱形與樹幹覆蓋交會處。 */}
        <path d={backBranches} fill={GOLD} mask="url(#hero-back-branches-reveal)" />
        <path d={logoPaths.blueMark} fill={BLUE} fillRule="evenodd" mask="url(#hero-blue-reveal)" />
        {/* 中間黃線最後繪製，保留原圖跨過藍色樹幹的 V 形。 */}
        <path d={frontBranch} fill={GOLD} mask="url(#hero-front-branch-reveal)" />
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

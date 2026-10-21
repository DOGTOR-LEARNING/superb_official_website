import { cn } from "@/lib/cn";

/** 極淡藍色幾何背景：圓角菱形與斜向連結線（spec §10.7） */
export function BrandPattern({ className, variant = "diamonds" }: { className?: string; variant?: "diamonds" | "lines" }) {
  return (
    <svg aria-hidden className={cn("pointer-events-none absolute", className)} viewBox="0 0 400 400" fill="none">
      {variant === "diamonds" ? (
        <g stroke="#2868A6" strokeOpacity="0.09" strokeWidth="1.5">
          <rect x="120" y="120" width="160" height="160" rx="28" transform="rotate(45 200 200)" />
          <rect x="80" y="80" width="240" height="240" rx="40" transform="rotate(45 200 200)" />
          <rect x="40" y="40" width="320" height="320" rx="54" transform="rotate(45 200 200)" />
        </g>
      ) : (
        <g strokeWidth="1.5" strokeLinecap="round">
          <path d="M0 300 L300 0" stroke="#2868A6" strokeOpacity="0.1" />
          <path d="M60 340 L360 40" stroke="#F3B338" strokeOpacity="0.22" />
          <path d="M120 380 L400 100" stroke="#2868A6" strokeOpacity="0.1" />
        </g>
      )}
    </svg>
  );
}

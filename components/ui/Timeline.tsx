"use client";

import { useState } from "react";
import * as m from "motion/react-m";
import { cn } from "@/lib/cn";

const EASE = [0.22, 1, 0.36, 1] as const;

export type TimelineStep = { index: string; label: string; title?: string; body: string };

/**
 * 流程時間軸：Desktop 橫向、Mobile 直向。
 * 節點進入 viewport 時點亮、連接線逐步延伸，最近點亮的節點有輕微強調（spec §4.5、§11.8）。
 * 只使用 IntersectionObserver（whileInView），不隨捲動做逐幀運算。
 */
export function Timeline({ steps, className }: { steps: TimelineStep[]; className?: string }) {
  const [lit, setLit] = useState(-1);
  const progress = Math.max(0, lit) / Math.max(1, steps.length - 1);

  return (
    <ol className={cn("relative grid gap-10 md:grid-cols-4 md:gap-6", className)}>
      {/* 連接線：mobile 直向 */}
      <div aria-hidden className="absolute top-2 bottom-2 left-[19px] w-0.5 rounded bg-line md:hidden">
        <m.div
          className="h-full w-full origin-top rounded bg-gradient-to-b from-brand to-gold"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: progress }}
          transition={{ duration: 0.5, ease: EASE }}
        />
      </div>
      {/* 連接線：desktop 橫向 */}
      <div aria-hidden className="absolute top-[19px] right-[12.5%] left-[12.5%] hidden h-0.5 rounded bg-line md:block">
        <m.div
          className="h-full w-full origin-left rounded bg-gradient-to-r from-brand to-gold"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress }}
          transition={{ duration: 0.5, ease: EASE }}
        />
      </div>

      {steps.map((step, i) => {
        const isLit = i <= lit;
        const isCurrent = i === lit;
        return (
          <m.li
            key={step.index}
            className="relative grid grid-cols-[40px_1fr] gap-x-5 md:grid-cols-1 md:justify-items-center md:text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -15% 0px" }}
            transition={{ duration: 0.45, ease: EASE, delay: i * 0.08 }}
            onViewportEnter={() => setLit((prev) => Math.max(prev, i))}
          >
            <span
              aria-hidden
              className={cn(
                "relative z-10 flex size-10 items-center justify-center rounded-[12px] border-2 text-[0.8125rem] font-bold tabular-nums transition-[background-color,border-color,color,box-shadow] duration-300 ease-out",
                isLit ? "border-brand bg-brand text-white" : "border-line bg-surface text-muted",
                isCurrent && "shadow-[0_0_0_6px_rgb(40_104_166/0.14)]",
              )}
            >
              {step.index}
            </span>
            <div className="md:mt-6">
              <h3 className="text-[1.1875rem] font-semibold leading-snug">
                <span className="sr-only">{step.index} </span>
                {step.label}
              </h3>
              {step.title ? <p className="mt-1 font-medium text-brand">{step.title}</p> : null}
              <p className="mt-2 text-muted md:mx-auto md:max-w-[16rem]">{step.body}</p>
            </div>
          </m.li>
        );
      })}
    </ol>
  );
}

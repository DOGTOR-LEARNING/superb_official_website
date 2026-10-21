"use client";

import { useEffect, useId, useState } from "react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { CategoryFilter, type FilterOption } from "./CategoryFilter";
import { cn } from "@/lib/cn";

export type FilterableItem = { id: string; categories: string[]; node: React.ReactNode };

/** 選擇分類時在原頁更新卡片，不重新載入（spec §5.5） */
export function FilterableGrid({
  items,
  options,
  labels,
  counts,
  gridClassName,
  revealLinkedItem = false,
}: {
  items: FilterableItem[];
  /** 第一個選項需為 "all" */
  options: FilterOption[];
  labels: { group: string; empty: string; emptyAction: string };
  /** 各分類預先翻譯好的數量文字（含複數規則） */
  counts: Record<string, string>;
  gridClassName?: string;
  /** 方案頁的卡片深層連結應能顯示被篩選隱藏的項目。 */
  revealLinkedItem?: boolean;
}) {
  const [active, setActive] = useState("all");
  const [linkedId, setLinkedId] = useState("");
  const gridId = useId();
  const visible = active === "all" ? items : items.filter((item) => item.categories.includes(active));

  useEffect(() => {
    if (!revealLinkedItem) return;
    const reveal = () => {
      const id = window.location.hash.slice(1);
      if (!items.some((item) => item.id === id)) return;
      setActive("all");
      setLinkedId(id);
    };
    reveal();
    window.addEventListener("hashchange", reveal);
    return () => window.removeEventListener("hashchange", reveal);
  }, [items, revealLinkedItem]);

  useEffect(() => {
    if (!linkedId) return;
    document.getElementById(linkedId)?.scrollIntoView({ block: "start" });
    setLinkedId("");
  }, [linkedId]);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <CategoryFilter options={options} value={active} onChange={setActive} label={labels.group} controls={gridId} />
        <p aria-live="polite" className="text-caption text-muted">
          {counts[active]}
        </p>
      </div>

      <div id={gridId} className="mt-8">
        {visible.length === 0 ? (
          <div className="flex flex-col items-center rounded-[var(--radius-card)] border border-dashed border-line bg-surface px-6 py-14 text-center">
            <p className="text-muted">{labels.empty}</p>
            <button
              type="button"
              onClick={() => setActive("all")}
              className="mt-4 min-h-11 rounded-[var(--radius-button)] px-4 font-semibold text-brand hover:bg-soft-blue"
            >
              {labels.emptyAction}
            </button>
          </div>
        ) : (
          <ul className={cn("grid gap-6", gridClassName)}>
            <AnimatePresence initial={false} mode="popLayout">
              {visible.map((item) => (
                <m.li
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                >
                  {item.node}
                </m.li>
              ))}
            </AnimatePresence>
          </ul>
        )}
      </div>
    </div>
  );
}

"use client";

import { cn } from "@/lib/cn";

export type FilterOption = { value: string; label: string };

/** 分類篩選：按鈕群組，以 aria-pressed 表示選取狀態；選取樣式同時改變底色與勾選邊框，不只依賴顏色 */
export function CategoryFilter({
  options,
  value,
  onChange,
  label,
  controls,
}: {
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
  label: string;
  controls: string;
}) {
  return (
    <div role="group" aria-label={label} className="-mx-1 flex flex-wrap gap-2">
      {options.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={active}
            aria-controls={controls}
            onClick={() => onChange(option.value)}
            className={cn(
              "min-h-11 rounded-full border px-4 text-[0.9375rem] font-medium transition-[background-color,border-color,color] duration-150 ease-out",
              active
                ? "border-navy bg-navy text-white"
                : "border-line bg-surface text-navy hover:border-brand/40 hover:bg-soft-blue",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

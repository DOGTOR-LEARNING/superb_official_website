import { ChevronDown } from "lucide-react";

/** 常見問題：原生 details／summary，可用鍵盤操作，內容對搜尋引擎可見 */
export function FaqList({ items }: { items: { id: string; q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line rounded-[var(--radius-card)] border border-line bg-surface">
      {items.map((item, i) => (
        <details key={item.id} id={`faq-${item.id}`} className="group px-6 md:px-8" open={i === 0}>
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 font-semibold [&::-webkit-details-marker]:hidden">
            <h3 className="text-[1.0625rem] leading-snug">{item.q}</h3>
            <ChevronDown aria-hidden className="size-5 shrink-0 text-brand transition-transform duration-200 group-open:rotate-180" />
          </summary>
          <p className="pb-6 leading-relaxed text-navy/80">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

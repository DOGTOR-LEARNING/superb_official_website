import { cn } from "@/lib/cn";

/** next-intl rich text tags：<hl> 以品牌藍強調一小段文字，<br></br> 換行（spec §10.3） */
export const richTags = {
  hl: (chunks: React.ReactNode) => <span className="text-brand">{chunks}</span>,
  br: () => <br />,
};

/** 深色背景使用的強調樣式 */
export const richTagsOnDark = {
  hl: (chunks: React.ReactNode) => <span className="text-gold">{chunks}</span>,
  br: () => <br />,
};

export function HighlightHeading({
  as: Tag = "h2",
  className,
  children,
  id,
}: {
  as?: "h1" | "h2" | "h3";
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <Tag id={id} className={cn(Tag === "h1" ? "text-h1" : Tag === "h2" ? "text-h2" : "text-h3", className)}>
      {children}
    </Tag>
  );
}

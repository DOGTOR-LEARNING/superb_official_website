import { cn } from "@/lib/cn";
import { SectionEyebrow } from "@/components/brand/SectionEyebrow";
import { HighlightHeading } from "@/components/brand/HighlightHeading";

export function SectionHeading({
  eyebrow,
  title,
  supporting,
  as = "h2",
  align = "left",
  className,
  id,
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  supporting?: React.ReactNode;
  as?: "h1" | "h2";
  align?: "left" | "center";
  className?: string;
  id?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <SectionEyebrow className="mb-4">{eyebrow}</SectionEyebrow> : null}
      <HighlightHeading as={as} id={id}>
        {title}
      </HighlightHeading>
      {supporting ? <p className="text-body-lg mt-5 max-w-xl text-muted">{supporting}</p> : null}
    </div>
  );
}

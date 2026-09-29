import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
  /** Extra classes for the h2, e.g. a max-width to force the design's line break. */
  titleClassName?: string;
}

/** Section h2 + intro paragraph used across the landing page. */
export function SectionHeading({
  id,
  title,
  description,
  align = "center",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", className)}>
      <h2
        id={id}
        className={cn(
          "text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl lg:text-[44px] lg:leading-[1.2]",
          align === "center" && "mx-auto",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-226.5 text-base leading-[1.8] text-muted-foreground md:mt-6",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

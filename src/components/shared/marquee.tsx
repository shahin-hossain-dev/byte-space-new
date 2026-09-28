import { Fragment } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  /** Seconds for one full loop. */
  duration?: number;
  /** Times the children repeat inside each copy — raise it if one copy is narrower than the viewport. */
  repeat?: number;
  className?: string;
  /** Spacing between items (also applied after the last item so the loop seam is even). */
  itemClassName?: string;
}

/**
 * Infinite horizontal scroller with faded edges. Purely visual: it's hidden from assistive
 * tech, so render an accessible (e.g. `sr-only`) version of the content alongside it.
 * Pauses on hover and stops for users who prefer reduced motion.
 */
export function Marquee({
  children,
  duration = 40,
  repeat = 2,
  className,
  itemClassName = "gap-16 pr-16",
}: MarqueeProps) {
  const copy = (
    <div className={cn("flex shrink-0 items-center", itemClassName)}>
      {Array.from({ length: repeat }, (_, i) => (
        <Fragment key={i}>{children}</Fragment>
      ))}
    </div>
  );

  return (
    <div aria-hidden="true" className={cn("group overflow-hidden mask-fade-x", className)}>
      <div
        className="flex w-max animate-marquee group-hover:paused motion-reduce:animate-none"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {copy}
        {copy}
      </div>
    </div>
  );
}

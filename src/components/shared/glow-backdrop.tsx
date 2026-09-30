import { cn } from "@/lib/utils";

/** Default glows, laid out for the Growth + Create & Manage pair. */
const DEFAULT_GLOWS = [
  "-top-40 left-[10%] size-150 bg-highlight/35",
  "-top-40 -right-40 size-125 bg-primary/5",
  "top-[40%] -left-60 size-150 bg-primary/10",
  "-bottom-20 -left-60 size-125 bg-highlight/35",
  "-right-40 -bottom-40 size-150 bg-primary/15",
];

interface GlowBackdropProps extends React.ComponentProps<"div"> {
  /** Position, size and token colour of each blurred glow. */
  glows?: readonly string[];
}

/**
 * Soft lime and blue glows shared by consecutive sections, so the gradient runs
 * across section boundaries without a seam. Also clips content that bleeds off-screen.
 */
export function GlowBackdrop({
  glows = DEFAULT_GLOWS,
  className,
  children,
  ...props
}: GlowBackdropProps) {
  return (
    <div className={cn("relative isolate overflow-x-clip", className)} {...props}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {glows.map((glow) => (
          <div key={glow} className={cn("absolute rounded-full blur-[120px]", glow)} />
        ))}
      </div>
      {children}
    </div>
  );
}

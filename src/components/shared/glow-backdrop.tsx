import { cn } from "@/lib/utils";

/**
 * Soft lime and blue glows shared by consecutive sections, so the gradient runs
 * across section boundaries without a seam. Also clips content that bleeds off-screen.
 */
export function GlowBackdrop({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("relative isolate overflow-x-clip", className)} {...props}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-[10%] size-150 rounded-full bg-highlight/35 blur-[120px]" />
        <div className="absolute -top-40 -right-40 size-125 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-[40%] -left-60 size-150 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -bottom-20 -left-60 size-125 rounded-full bg-highlight/35 blur-[120px]" />
        <div className="absolute -right-40 -bottom-40 size-150 rounded-full bg-primary/15 blur-[120px]" />
      </div>
      {children}
    </div>
  );
}

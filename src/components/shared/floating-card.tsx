import { cn } from "@/lib/utils";

/** White stat card that floats over hero / section imagery. */
export function FloatingCard({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-xl bg-card p-3 text-card-foreground shadow-xl shadow-foreground/10 md:rounded-2xl md:p-4",
        className,
      )}
      {...props}
    />
  );
}

import { cn } from "@/lib/utils";

/** Page gutter + 1200px content width used by every section. */
export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-316 px-4 sm:px-6 md:px-8", className)}
      {...props}
    />
  );
}

import Link from "next/link";
import type { LearningPath } from "@/types";
import { cn } from "@/lib/utils";

interface LearningPathCardProps {
  path: LearningPath;
  className?: string;
}

export function LearningPathCard({ path, className }: LearningPathCardProps) {
  const Icon = path.icon;

  return (
    <Link
      href={path.href}
      className={cn(
        "group flex aspect-square flex-col items-center justify-center gap-1.5 rounded-[1rem] border border-border bg-card px-2 py-4 text-center text-card-foreground transition-[box-shadow,border-color] outline-none hover:border-highlight hover:shadow-xl hover:shadow-foreground/5 focus-visible:ring-3 focus-visible:ring-ring/50 lg:gap-2",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="flex size-11 items-center justify-center rounded-full bg-highlight text-highlight-foreground transition-transform group-hover:scale-110 md:size-12 lg:size-15"
      >
        <Icon className="size-5 lg:size-7" />
      </span>
      <span className="text-xs sm:text-sm lg:text-lg xl:text-xl">{path.label}</span>
    </Link>
  );
}

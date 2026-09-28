import { HERO } from "@/constants";
import { FloatingCard } from "@/components/shared/floating-card";
import { cn } from "@/lib/utils";

export function CategoryCard({ className }: { className?: string }) {
  const { title, courses, students } = HERO.categoryCard;

  return (
    <FloatingCard className={cn("w-fit px-4", className)}>
      <p className="text-base lg:text-lg">{title}</p>
      <p className="mt-0.5 flex items-center gap-2 text-xs text-muted-foreground">
        <span>{courses}</span>
        <span aria-hidden="true" className="size-1 rounded-full bg-muted-foreground" />
        <span>{students}</span>
      </p>
    </FloatingCard>
  );
}

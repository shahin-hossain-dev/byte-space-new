import { StarIcon } from "lucide-react";
import { HAPPY_STUDENTS } from "@/constants";
import { cn } from "@/lib/utils";
import { AvatarGroup } from "./avatar-group";
import { FloatingCard } from "./floating-card";

interface HappyStudentsCardProps {
  /** `highlight` = lime card with a blue star and dark count bubble (auth pages). */
  variant?: "default" | "highlight";
  className?: string;
}

export function HappyStudentsCard({ variant = "default", className }: HappyStudentsCardProps) {
  const { label, rating, reviews, extra, avatars } = HAPPY_STUDENTS;
  const highlight = variant === "highlight";

  return (
    <FloatingCard
      className={cn("w-fit", highlight && "bg-highlight text-highlight-foreground", className)}
    >
      <p className="text-sm md:text-lg">{label}</p>
      <p className="flex items-center gap-1 text-xs md:text-sm">
        {rating}
        <span className={highlight ? "text-highlight-foreground/60" : "text-muted-foreground"}>
          ({reviews})
        </span>
        <StarIcon
          aria-hidden="true"
          className={cn(
            "size-3.5 md:size-4",
            highlight ? "fill-primary text-primary" : "fill-highlight text-highlight",
          )}
        />
        <span className="sr-only">
          Rated {rating} out of 5 from {reviews} reviews
        </span>
      </p>
      <AvatarGroup
        avatars={avatars}
        extra={extra}
        itemClassName="size-7 md:size-9"
        extraClassName={highlight ? "bg-foreground text-background" : undefined}
        className="mt-2 md:mt-3"
      />
    </FloatingCard>
  );
}

import { StarIcon } from "lucide-react";
import { HAPPY_STUDENTS } from "@/constants";
import { cn } from "@/lib/utils";
import { AvatarGroup } from "./avatar-group";
import { FloatingCard } from "./floating-card";

export function HappyStudentsCard({ className }: { className?: string }) {
  const { label, rating, reviews, extra, avatars } = HAPPY_STUDENTS;

  return (
    <FloatingCard className={cn("w-fit", className)}>
      <p className="text-sm md:text-lg">{label}</p>
      <p className="flex items-center gap-1 text-xs md:text-sm">
        {rating}
        <span className="text-muted-foreground">({reviews})</span>
        <StarIcon aria-hidden="true" className="size-3.5 fill-highlight text-highlight md:size-4" />
        <span className="sr-only">
          Rated {rating} out of 5 from {reviews} reviews
        </span>
      </p>
      <AvatarGroup
        avatars={avatars}
        extra={extra}
        itemClassName="size-7 md:size-9"
        className="mt-2 md:mt-3"
      />
    </FloatingCard>
  );
}

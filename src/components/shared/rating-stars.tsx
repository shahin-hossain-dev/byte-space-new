import { StarIcon } from "lucide-react";
import { COURSE_DETAILS_COPY } from "@/constants";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  rating: number;
  className?: string;
}

/** Five stars filled to the nearest whole rating, with a screen-reader label. */
export function RatingStars({ rating, className }: RatingStarsProps) {
  const filled = Math.round(rating);

  return (
    <span className={cn("inline-flex items-center gap-0.5", className)}>
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon
          key={i}
          aria-hidden="true"
          className={cn(
            "size-4",
            i < filled ? "fill-primary text-primary" : "fill-muted text-border",
          )}
        />
      ))}
      <span className="sr-only">{COURSE_DETAILS_COPY.ratingLabel(rating)}</span>
    </span>
  );
}

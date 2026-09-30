import { COURSES, IMAGES } from "@/constants";
import { CourseCard } from "@/components/sections/courses/course-card";
import { DecorativeShape } from "@/components/shared/decorative-shape";
import { HappyStudentsCard } from "@/components/shared/happy-students-card";
import { cn } from "@/lib/utils";

/**
 * Stacked course cards, 3D shapes and a Happy Students card from the auth designs.
 * Laid out at the design's fixed 496×558 size; scale it with `className` if needed.
 */
export function AuthCollage({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("relative h-139.5 w-124", className)}>
      <CourseCard course={COURSES[1]} className="absolute top-22.5 left-0 w-93.25" />
      <CourseCard course={COURSES[2]} className="absolute top-0 left-27.75 w-93.25" />
      <DecorativeShape
        src={IMAGES.shapes.torus}
        width={344}
        height={343}
        tone="lime"
        sizes="152px"
        className="top-2.5 left-6.25 z-10 w-38"
      />
      <DecorativeShape
        src={IMAGES.shapes.springSm1}
        width={176}
        height={176}
        sizes="176px"
        className="top-81.25 left-87.75 z-10 w-44"
      />
      <HappyStudentsCard variant="highlight" className="absolute top-108.75 left-56.5" />
      <DecorativeShape
        src={IMAGES.shapes.pyramid2}
        width={189}
        height={189}
        tone="lime"
        sizes="194px"
        className="top-99 -left-7 w-48.5"
      />
    </div>
  );
}

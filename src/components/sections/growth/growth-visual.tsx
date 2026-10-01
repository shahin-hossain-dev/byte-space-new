import Image from "next/image";
import { GROWTH_FEATURED_COURSE, GROWTH_IMAGE, IMAGES } from "@/constants";
import { CourseCard } from "@/components/sections/courses/course-card";
import { DecorativeShape } from "@/components/shared/decorative-shape";
import { ProgressCard } from "@/components/shared/progress-card";
import { cn } from "@/lib/utils";

/**
 * Student photo with a course card tucked behind it and a progress card in front.
 * Offsets are percentages of the 703×688 photo, measured from the design.
 */
export function GrowthVisual({ className }: { className?: string }) {
  return (
    <div className={cn("relative isolate aspect-703/688", className)}>
      <CourseCard
        course={GROWTH_FEATURED_COURSE}
        className="absolute top-[-1.5%] left-[3.4%] hidden w-[53%] sm:flex"
      />
      <Image
        src={GROWTH_IMAGE.src}
        alt={GROWTH_IMAGE.alt}
        fill
        sizes="(min-width: 1280px) 703px, (min-width: 1024px) 60vw, 100vw"
        className="z-10 object-contain"
      />
      <ProgressCard className="absolute top-[29.8%] left-[52.5%] z-20" />
      <DecorativeShape
        src={IMAGES.shapes.springSm2}
        width={216}
        height={216}
        tone="lime"
        sizes="200px"
        className="top-[8.3%] left-[61.7%] z-30 w-[28.5%]"
      />
    </div>
  );
}

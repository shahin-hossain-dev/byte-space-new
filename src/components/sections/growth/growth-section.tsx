import { GROWTH_SECTION, GROWTH_STATS } from "@/constants";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { GrowthStats } from "./growth-stats";
import { GrowthVisual } from "./growth-visual";

export function GrowthSection() {
  return (
    <section
      aria-labelledby="growth-title"
      className="pt-14 pb-10 md:pt-20 md:pb-14 lg:pt-30 lg:pb-0"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:grid-cols-[1fr_586px] xl:gap-0">
        {/* Bottom padding offsets the photo's drop shadow so the copy lines up with the visible photo. */}
        <div className="lg:pb-35">
          <SectionHeading
            id="growth-title"
            title={GROWTH_SECTION.title}
            description={GROWTH_SECTION.description}
            align="left"
            titleClassName="max-w-[13em]"
            descriptionClassName="max-w-119 text-secondary-foreground lg:mt-10 lg:text-lg lg:leading-[1.6]"
          />
          <GrowthStats stats={GROWTH_STATS} className="mt-8 lg:mt-11" />
        </div>

        {/* The photo runs ~20% past the column, off the container's right edge. */}
        <GrowthVisual className="mx-auto w-full max-w-150 lg:mx-0 lg:w-[120%] lg:max-w-none" />
      </Container>
    </section>
  );
}

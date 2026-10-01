import { SECTION_IDS, TESTIMONIALS, TESTIMONIALS_COPY, TESTIMONIALS_SECTION } from "@/constants";
import { Container } from "@/components/layout/container";
import { GlowBackdrop } from "@/components/shared/glow-backdrop";
import { TestimonialCard } from "./testimonial-card";

const GLOWS = [
  "top-0 left-[38%] size-125 bg-highlight/40",
  "top-[25%] -right-60 size-150 bg-highlight/35",
  "-bottom-40 -left-40 size-150 bg-primary/20",
];

export function TestimonialsSection() {
  return (
    <GlowBackdrop glows={GLOWS}>
      <section
        id={SECTION_IDS.testimonials}
        aria-labelledby="testimonials-title"
        className="scroll-mt-4 py-14 md:py-20 lg:pt-23.5 lg:pb-14"
      >
        <Container>
          <div className="grid gap-4 md:gap-6 lg:grid-cols-2 lg:items-center lg:gap-9">
            <h2
              id="testimonials-title"
              className="max-w-[11em] text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl lg:text-[44px] lg:leading-[1.2]"
            >
              {TESTIMONIALS_SECTION.title}
            </h2>
            {/* The design sits the copy slightly above the title's centre line. */}
            <p className="max-w-142 text-base leading-[1.8] text-secondary-foreground lg:-translate-y-5 lg:text-lg lg:leading-[1.6]">
              {TESTIMONIALS_SECTION.description}
            </p>
          </div>

          {/*
            Phones: a swipe slider — one card at a time with the next peeking in, bled to the
            screen edge and snapping back to the page gutter. From md up: a plain grid.
            Focusable so keyboard users can scroll it with the arrow keys.
          */}
          <ul
            aria-label={TESTIMONIALS_COPY.listLabel}
            tabIndex={0}
            className="scrollbar-none -mx-4 mt-10 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-6 outline-none focus-visible:ring-3 focus-visible:ring-ring/50 sm:-mx-6 sm:scroll-px-6 sm:px-6 md:mx-0 md:mt-14 md:grid md:grid-cols-2 md:items-start md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:mt-13 lg:grid-cols-3 lg:gap-10"
          >
            {TESTIMONIALS.map((testimonial) => (
              <li key={testimonial.id} className="w-[85%] shrink-0 snap-start sm:w-[70%] md:w-auto">
                <TestimonialCard testimonial={testimonial} className="h-full md:h-auto" />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </GlowBackdrop>
  );
}

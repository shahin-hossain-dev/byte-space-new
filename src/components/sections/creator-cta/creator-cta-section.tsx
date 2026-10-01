import Link from "next/link";
import { CREATOR_CTA } from "@/constants";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { CreatorCtaShapes } from "./creator-cta-shapes";

export function CreatorCtaSection() {
  return (
    <section
      aria-labelledby="creator-cta-title"
      className="relative isolate overflow-hidden bg-primary bg-grid text-primary-foreground"
    >
      <CreatorCtaShapes />

      <Container className="relative flex flex-col items-center py-28 text-center md:py-36 lg:py-21">
        <SectionHeading
          id="creator-cta-title"
          title={CREATOR_CTA.title}
          description={CREATOR_CTA.description}
          // Plain wrapping (not balanced) gives the design's "…as a / Creator…" break.
          titleClassName="max-w-[13em] text-wrap"
          descriptionClassName="max-w-229 text-primary-foreground/90 lg:mt-10"
        />
        <Button asChild variant="highlight" size="pill" className="mt-8 md:h-11 md:text-lg lg:mt-10">
          <Link href={CREATOR_CTA.button.href}>{CREATOR_CTA.button.label}</Link>
        </Button>
      </Container>
    </section>
  );
}

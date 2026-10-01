import { PARTNERS, PARTNERS_SECTION } from "@/constants";
import { Marquee } from "@/components/shared/marquee";
import { PartnerLogo } from "./partner-logo";

export function PartnersSection() {
  return (
    <section aria-labelledby="partners-title" className="bg-secondary py-10 md:py-16 lg:py-20">
      <h2 id="partners-title" className="sr-only">
        {PARTNERS_SECTION.title}
      </h2>
      {/* The marquee is decorative; this is what screen readers get. */}
      <ul className="sr-only">
        {PARTNERS.map((partner) => (
          <li key={partner.id}>{partner.name}</li>
        ))}
      </ul>
      <Marquee
        duration={45}
        className="text-muted-foreground/85 [--fade-size:8%] md:[--fade-size:12%]"
        itemClassName="gap-12 pr-12 md:gap-16 md:pr-16 lg:gap-18 lg:pr-18"
      >
        {PARTNERS.map((partner) => (
          <PartnerLogo key={partner.id} partner={partner} />
        ))}
      </Marquee>
    </section>
  );
}

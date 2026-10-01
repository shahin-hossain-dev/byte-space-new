import { CircleCheckIcon } from "lucide-react";
import { CREATE_MANAGE_SECTION, SECTION_IDS } from "@/constants";
import { Container } from "@/components/layout/container";
import { CreateManageVisual } from "./create-manage-visual";

export function CreateManageSection() {
  const { title, brand, description, features } = CREATE_MANAGE_SECTION;

  return (
    <section
      id={SECTION_IDS.creators}
      aria-labelledby="create-manage-title"
      className="scroll-mt-4 pt-4 pb-14 md:pb-20 lg:pt-0 lg:pb-0"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:grid-cols-[588px_1fr]">
        {/* Top-aligned: centring would count the photo's tall drop shadow and sit the copy too low. */}
        <div className="lg:self-start lg:pt-2.5">
          <h2
            id="create-manage-title"
            className="max-w-[10em] text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl lg:text-[44px] lg:leading-[1.2]"
          >
            {title}
          </h2>
          <p className="mt-4 max-w-140 text-base leading-[1.8] text-secondary-foreground md:mt-6 lg:mt-10 lg:text-lg lg:leading-[1.6]">
            <strong className="font-bold text-foreground">{brand}</strong> {description}
          </p>
          <ul className="mt-8 flex flex-col gap-3 lg:mt-10">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2.5 text-base md:text-lg">
                <CircleCheckIcon
                  aria-hidden="true"
                  className="size-5.5 shrink-0 fill-primary text-primary-foreground"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Photo comes first on desktop; it pulls up into the Growth section's photo shadow. */}
        <CreateManageVisual className="mx-auto w-full max-w-120 lg:-order-1 lg:mx-0 lg:-mt-12 lg:max-w-none xl:-mt-18 xl:ml-2.25 xl:w-144.75" />
      </Container>
    </section>
  );
}

import Image from "next/image";
import { HERO } from "@/constants";
import { Container } from "@/components/layout/container";
import { HappyStudentsCard } from "@/components/shared/happy-students-card";
import { ProgressCard } from "@/components/shared/progress-card";
import { SearchForm } from "@/components/shared/search-form";
import { CategoryCard } from "./category-card";
import { HeroShapes } from "./hero-shapes";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-primary bg-grid text-primary-foreground"
    >
      <HeroShapes />

      <Container className="relative flex flex-col items-center pt-10 text-center md:pt-14 lg:pt-16">
        <h1
          id="hero-title"
          className="max-w-225 text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl lg:text-[72px] lg:leading-[1.2]"
        >
          {HERO.title}
        </h1>
        <p className="mt-4 max-w-205 text-base text-primary-foreground/90 md:mt-6 md:text-lg">
          {HERO.description}
        </p>
        <SearchForm id="hero-search" className="mt-8 max-w-145 md:mt-12" />

        <div className="relative mt-10 w-full max-w-180.5 md:mt-6 lg:mt-0">
          {/* -z-10: sits under the decorative shapes, like the design. */}
          <div
            aria-hidden="true"
            className="absolute top-[14%] left-1/2 -z-10 aspect-square w-[159%] -translate-x-1/2 rounded-full bg-highlight"
          />
          <Image
            src={HERO.image.src}
            alt={HERO.image.alt}
            width={722}
            height={515}
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 768px) 722px, 100vw"
            className="relative h-auto w-full"
          />
          <CategoryCard className="absolute top-[25%] left-[6%] hidden text-left md:block" />
          <ProgressCard className="absolute top-[20%] -right-2 text-left md:top-[28%] md:right-[1%]" />
          <HappyStudentsCard className="absolute bottom-[4%] -left-2 text-left md:top-[64%] md:bottom-auto md:left-[-4%]" />
        </div>
      </Container>
    </section>
  );
}

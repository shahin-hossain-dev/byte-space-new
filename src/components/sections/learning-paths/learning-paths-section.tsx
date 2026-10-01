import { LEARNING_PATHS, LEARNING_PATHS_SECTION, SECTION_IDS } from "@/constants";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { LearningPathCard } from "./learning-path-card";

export function LearningPathsSection() {
  return (
    <section
      id={SECTION_IDS.categories}
      aria-labelledby="learning-paths-title"
      className="scroll-mt-4 pb-14 md:pb-18 lg:pb-22"
    >
      <Container>
        <SectionHeading
          id="learning-paths-title"
          title={LEARNING_PATHS_SECTION.title}
          description={LEARNING_PATHS_SECTION.description}
        />
        <ul className="mt-8 grid grid-cols-3 gap-3 sm:gap-4 md:mt-12 md:grid-cols-6 lg:mt-18 lg:gap-6 xl:gap-10">
          {LEARNING_PATHS.map((path) => (
            <li key={path.id}>
              <LearningPathCard path={path} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

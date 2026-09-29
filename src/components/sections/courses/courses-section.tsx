import { COURSE_TAGS, COURSES, COURSES_SECTION, SECTION_IDS } from "@/constants";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { CourseCard } from "./course-card";
import { CourseFilter } from "./course-filter";

export function CoursesSection() {
  return (
    <section
      id={SECTION_IDS.courses}
      aria-labelledby="courses-title"
      className="scroll-mt-4 py-14 md:py-18 lg:pt-18 lg:pb-22"
    >
      <Container>
        <SectionHeading
          id="courses-title"
          title={COURSES_SECTION.title}
          description={COURSES_SECTION.description}
          titleClassName="max-w-[12em]"
        />
        <CourseFilter
          tags={COURSE_TAGS}
          items={COURSES.map(({ id, tags }) => ({ id, tags }))}
          cards={COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        />
      </Container>
    </section>
  );
}

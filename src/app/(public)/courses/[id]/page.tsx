import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COURSE_DETAILS_COPY, COURSES, courseHref } from "@/constants";
import { CourseHeader } from "@/components/course-details/course-header";
import {
  CourseAboutPanel,
  CourseLessonsPanel,
  CourseReviewsPanel,
} from "@/components/course-details/course-panels";
import { CoursePreview } from "@/components/course-details/course-preview";
import { CourseSidebar } from "@/components/course-details/course-sidebar";
import { CourseTabs } from "@/components/course-details/course-tabs";
import { Container } from "@/components/layout/container";
import { JsonLd } from "@/components/shared/json-ld";
import { courseJsonLd, getCourse } from "@/lib/courses";
import { excerpt } from "@/lib/format";

type CourseProps = PageProps<"/courses/[id]">;

// Every course is known at build time; any other id is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return COURSES.map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }: CourseProps): Promise<Metadata> {
  const entry = getCourse((await params).id);
  if (!entry) return {};

  const { course, detail } = entry;
  const title = detail.headline ?? course.title;
  const description = excerpt(`${detail.subtitle}. ${detail.description[0]}`);

  return {
    title,
    description,
    alternates: { canonical: courseHref(course.id) },
    openGraph: {
      type: "website",
      title,
      description,
      url: courseHref(course.id),
      images: [{ url: course.image.src, alt: course.image.alt }],
    },
    twitter: { card: "summary_large_image", title, description, images: [course.image.src] },
  };
}

export default async function CoursePage({ params }: CourseProps) {
  const entry = getCourse((await params).id);
  if (!entry) notFound();

  const { course, detail } = entry;
  const panelProps = { course, detail };

  return (
    // Clips the full-bleed blue band's 100vw overshoot (scrollbar width).
    <div className="overflow-x-clip">
      <JsonLd data={courseJsonLd(course, detail)} />
      <Container className="relative isolate grid grid-cols-1 pb-16 md:pb-20 lg:grid-cols-[minmax(0,1fr)_22.5rem] lg:grid-rows-[auto_auto_1fr] lg:gap-x-10 xl:grid-cols-[minmax(0,1fr)_25.75rem] xl:gap-x-16">
        {/*
          Blue band behind the header and trailer, bleeding to the viewport edges and a
          little below the trailer. The enrol card spans past it into the white area;
          row 3 is `1fr` so a tall card grows that row, never the band.
        */}
        <div
          aria-hidden="true"
          className="col-span-full row-start-1 row-end-3 mx-[calc(50%-50vw)] -mb-10 bg-primary bg-grid -z-10 lg:-mb-15.5"
        />

        <CourseHeader
          course={course}
          detail={detail}
          className="col-span-full row-start-1 pt-10 pb-10 text-primary-foreground md:pt-12 lg:pt-12.5 lg:pb-15"
        />
        <CoursePreview
          title={course.title}
          image={course.image}
          className="col-start-1 row-start-2"
        />
        <CourseSidebar
          course={course}
          detail={detail}
          className="col-start-1 row-start-3 mt-18 self-start lg:col-start-2 lg:row-span-2 lg:row-start-2 lg:mt-0"
        />
        <CourseTabs
          label={COURSE_DETAILS_COPY.tabsLabel}
          className="col-start-1 row-start-4 mt-12 lg:row-start-3 lg:mt-23"
          tabs={[
            {
              value: "about",
              label: COURSE_DETAILS_COPY.tabs.about,
              content: <CourseAboutPanel {...panelProps} />,
            },
            {
              value: "lessons",
              label: COURSE_DETAILS_COPY.tabs.lessons,
              content: <CourseLessonsPanel {...panelProps} />,
            },
            {
              value: "reviews",
              label: COURSE_DETAILS_COPY.tabs.reviews,
              content: <CourseReviewsPanel {...panelProps} />,
            },
          ]}
        />
      </Container>
    </div>
  );
}

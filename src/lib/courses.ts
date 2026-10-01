import { COURSE_CREATOR, COURSE_DETAILS, COURSES, courseHref, SITE } from "@/constants";
import type { Course, CourseDetail } from "@/types";

/** A course plus its details-page content, or undefined if either is missing. */
export function getCourse(id: string): { course: Course; detail: CourseDetail } | undefined {
  const course = COURSES.find((c) => c.id === id);
  const detail = COURSE_DETAILS[id];
  return course && detail ? { course, detail } : undefined;
}

/** schema.org Course structured data for search results. */
export function courseJsonLd(course: Course, detail: CourseDetail) {
  const url = new URL(courseHref(course.id), SITE.url).toString();

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: detail.headline ?? course.title,
    description: detail.subtitle,
    url,
    image: new URL(course.image.src, SITE.url).toString(),
    educationalLevel: course.level,
    provider: { "@type": "Organization", name: SITE.name, sameAs: SITE.url },
    creator: { "@type": "Organization", name: COURSE_CREATOR.name },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: course.rating,
      bestRating: 5,
      reviewCount: detail.reviewCount,
    },
    offers: {
      "@type": "Offer",
      category: "Paid",
      price: course.price,
      priceCurrency: "USD",
      url,
    },
    hasCourseInstance: { "@type": "CourseInstance", courseMode: "Online" },
  };
}

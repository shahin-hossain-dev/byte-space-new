import type { MetadataRoute } from "next";

import { COURSE_DETAILS, COURSES, courseHref, INFO_PAGES, ROUTES, SITE } from "@/constants";

const url = (path: string) => new URL(path, SITE.url).toString();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: url(ROUTES.home), changeFrequency: "weekly", priority: 1 },
    { url: url(ROUTES.search), changeFrequency: "weekly", priority: 0.8 },
    ...COURSES.filter((course) => COURSE_DETAILS[course.id]).map((course) => ({
      url: url(courseHref(course.id)),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: url(ROUTES.login), changeFrequency: "yearly", priority: 0.3 },
    { url: url(ROUTES.signup), changeFrequency: "yearly", priority: 0.3 },
    ...INFO_PAGES.map(({ slug }) => ({
      url: url(`/${slug}`),
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
  ];
}

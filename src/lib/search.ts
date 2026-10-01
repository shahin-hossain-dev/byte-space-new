import { ROUTES } from "@/constants";
import type { Course } from "@/types";

/** Builds a `/search` URL, omitting empty values and page 1. */
export function searchHref({ q = "", tag = "", page = 1 }: { q?: string; tag?: string; page?: number }) {
  const params = new URLSearchParams();
  if (q) params.set("q", q);
  if (tag) params.set("tag", tag);
  if (page > 1) params.set("page", String(page));
  const qs = params.toString();
  return qs ? `${ROUTES.search}?${qs}` : ROUTES.search;
}

/** Parses a 1-based page number, clamped to the available pages. */
export function parsePage(value: string, totalPages: number): number {
  const page = Number.parseInt(value, 10);
  if (!Number.isFinite(page) || page < 1) return 1;
  return Math.min(page, Math.max(totalPages, 1));
}

/** Reads a single string from a search param that may be missing or repeated. */
export function firstParam(value: string | string[] | undefined): string {
  return (Array.isArray(value) ? value[0] : value)?.trim() ?? "";
}

const normalize = (value: string) => value.toLowerCase().normalize("NFKD");

/**
 * Case-insensitive match: every word of the query must appear somewhere in the
 * course's title, creator, level or tags, so "figma beginner" narrows rather than widens.
 */
export function searchCourses(courses: readonly Course[], query: string, tag = ""): Course[] {
  const terms = normalize(query).split(/\s+/).filter(Boolean);

  return courses.filter((course) => {
    if (tag && !course.tags.includes(tag)) return false;
    const haystack = normalize(
      [course.title, course.author.label, course.level, ...course.tags].join(" "),
    );
    return terms.every((term) => haystack.includes(term));
  });
}

/** Tags that at least one course uses, in the given display order. */
export function usedTags(courses: readonly Course[], order: readonly string[]): string[] {
  const used = new Set(courses.flatMap((course) => course.tags));
  return order.filter((tag) => used.has(tag));
}

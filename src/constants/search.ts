/** Results per page — two rows of the 3-column grid. */
export const SEARCH_PAGE_SIZE = 6;

export const PAGINATION_COPY = {
  label: "Pagination",
  previous: "Previous page",
  next: "Next page",
  page: (n: number) => `Page ${n}`,
} as const;

export const SEARCH_COPY = {
  title: "Search Courses",
  resultsTitle: (query: string) => `Results for “${query}”`,
  description: "Find the right course by title, topic, level, or creator.",
  allTag: "All",
  filterLabel: "Filter results by topic",
  summary: (count: number) => `${count} ${count === 1 ? "course" : "courses"} found`,
  empty: {
    title: "No courses match your search",
    description: "Try a different keyword or topic, or browse every course.",
    action: "Clear search",
  },
  meta: {
    title: "Search Courses",
    description: "Search ByteSpace courses by title, topic, level, or creator.",
  },
} as const;

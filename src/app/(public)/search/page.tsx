import type { Metadata } from "next";
import Link from "next/link";
import { SearchXIcon } from "lucide-react";
import { COURSE_TAGS, COURSES, ROUTES, SEARCH_COPY, SEARCH_PAGE_SIZE } from "@/constants";
import { Container } from "@/components/layout/container";
import { SearchTags } from "@/components/search/search-tags";
import { CourseCard } from "@/components/sections/courses/course-card";
import { Pagination } from "@/components/shared/pagination";
import { SearchForm } from "@/components/shared/search-form";
import { Button } from "@/components/ui/button";
import { firstParam, parsePage, searchCourses, searchHref, usedTags } from "@/lib/search";

type SearchProps = PageProps<"/search">;

export async function generateMetadata({ searchParams }: SearchProps): Promise<Metadata> {
  const query = firstParam((await searchParams).q);

  return {
    title: query ? SEARCH_COPY.resultsTitle(query) : SEARCH_COPY.meta.title,
    description: SEARCH_COPY.meta.description,
    alternates: { canonical: ROUTES.search },
    // Result pages are endless query variations — keep them out of the index.
    robots: { index: false, follow: true },
  };
}

export default async function SearchPage({ searchParams }: SearchProps) {
  const params = await searchParams;
  const query = firstParam(params.q);
  const tags = usedTags(COURSES, COURSE_TAGS);
  // Ignore unknown tags from hand-edited URLs rather than showing zero results.
  const tagParam = firstParam(params.tag);
  const tag = tags.includes(tagParam) ? tagParam : "";
  const results = searchCourses(COURSES, query, tag);
  const totalPages = Math.ceil(results.length / SEARCH_PAGE_SIZE);
  const page = parsePage(firstParam(params.page), totalPages);
  const pageResults = results.slice((page - 1) * SEARCH_PAGE_SIZE, page * SEARCH_PAGE_SIZE);

  return (
    <>
      <section
        aria-labelledby="search-title"
        className="bg-primary bg-grid text-primary-foreground"
      >
        <Container className="flex flex-col items-center py-12 text-center md:py-16 lg:py-20">
          <h1
            id="search-title"
            className="max-w-225 text-3xl leading-tight font-semibold tracking-tight text-balance break-words md:text-5xl lg:text-[56px] lg:leading-[1.2]"
          >
            {query ? SEARCH_COPY.resultsTitle(query) : SEARCH_COPY.title}
          </h1>
          <p className="mt-3 max-w-205 text-base text-primary-foreground/90 md:mt-4 md:text-lg">
            {SEARCH_COPY.description}
          </p>
          {/* Keyed on the query so the input resets when navigating between searches. */}
          <SearchForm
            key={query}
            id="search-page-input"
            defaultValue={query}
            className="mt-8 max-w-145 md:mt-10"
          />
        </Container>
      </section>

      <section aria-labelledby="search-results-title" className="py-12 md:py-16 lg:py-20">
        <Container>
          <h2 id="search-results-title" className="sr-only">
            {SEARCH_COPY.summary(results.length)}
          </h2>
          <SearchTags tags={tags} query={query} active={tag} />
          <p aria-live="polite" className="mt-6 text-base text-muted-foreground md:mt-8">
            {SEARCH_COPY.summary(results.length)}
          </p>

          {results.length > 0 ? (
            <>
              <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:mt-8 lg:grid-cols-3 lg:gap-10.25">
                {pageResults.map((course) => (
                  <li key={course.id} className="min-w-0">
                    <CourseCard course={course} />
                  </li>
                ))}
              </ul>
              <Pagination
                page={page}
                totalPages={totalPages}
                hrefFor={(n) => searchHref({ q: query, tag, page: n })}
                showSinglePage
                className="mt-12 md:mt-16"
              />
            </>
          ) : (
            <div className="mt-6 flex flex-col items-center rounded-2xl border border-dashed border-border px-6 py-16 text-center lg:mt-8">
              <span className="flex size-14 items-center justify-center rounded-full bg-highlight text-highlight-foreground">
                <SearchXIcon aria-hidden="true" className="size-6" />
              </span>
              <p className="mt-5 font-heading text-xl font-semibold">{SEARCH_COPY.empty.title}</p>
              <p className="mt-2 max-w-md text-muted-foreground">{SEARCH_COPY.empty.description}</p>
              <Button asChild variant="highlight" size="pill" className="mt-6">
                <Link href={ROUTES.search}>{SEARCH_COPY.empty.action}</Link>
              </Button>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}

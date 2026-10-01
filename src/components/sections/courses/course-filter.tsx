"use client";

import { useId, useState } from "react";
import { COURSE_TAG_LIMITS, COURSES_COPY, FEATURED_TAG } from "@/constants";
import { cn } from "@/lib/utils";

interface CourseFilterProps {
  tags: readonly string[];
  /** Id + tags of each card, in the same order as `cards`. */
  items: readonly { id: string; tags: readonly string[] }[];
  /** Server-rendered course cards — this component only decides which are visible. */
  cards: React.ReactNode[];
}

export function CourseFilter({ tags, items, cards }: CourseFilterProps) {
  const [active, setActive] = useState<string>(FEATURED_TAG);
  const [expanded, setExpanded] = useState(false);
  const tagListId = useId();

  const visible = items.flatMap((item, i) =>
    active === FEATURED_TAG || item.tags.includes(active) ? [{ id: item.id, card: cards[i] }] : [],
  );

  // Collapsed: show the first few tags on mobile and the design's 18 from md up.
  const tagVisibility = (index: number) => {
    if (expanded) return "";
    if (index >= COURSE_TAG_LIMITS.desktop) return "hidden";
    if (index >= COURSE_TAG_LIMITS.mobile) return "hidden md:inline-flex";
    return "";
  };

  return (
    <>
      <div
        role="group"
        aria-label={COURSES_COPY.filterLabel}
        className="mx-auto mt-8 flex max-w-272 flex-wrap items-center justify-center gap-x-4 gap-y-3 md:mt-10 md:gap-y-5.5"
      >
        <ul id={tagListId} className="contents">
          {tags.map((tag, i) => (
            <li key={tag} className={cn("inline-flex", tagVisibility(i))}>
              <button
                type="button"
                aria-pressed={active === tag}
                onClick={() => setActive(tag)}
                className={cn(
                  "h-9 rounded-full px-4 text-sm transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50 md:h-10.5 md:text-base",
                  active === tag
                    ? "bg-highlight text-highlight-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground",
                )}
              >
                {tag}
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={tagListId}
          onClick={() => setExpanded((v) => !v)}
          className="h-9 rounded-full px-2 text-sm text-primary outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/50 md:h-10.5 md:text-base"
        >
          {expanded ? COURSES_COPY.less : COURSES_COPY.more}
        </button>
      </div>

      <p role="status" className="sr-only">
        {`${visible.length} ${visible.length === 1 ? "course" : "courses"} in ${active}`}
      </p>

      {visible.length > 0 ? (
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-10.25">
          {visible.map(({ id, card }) => (
            <li key={id} className="min-w-0">
              {card}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-12 rounded-2xl border border-dashed border-border py-16 text-center text-muted-foreground lg:mt-20">
          {COURSES_COPY.empty}
        </p>
      )}
    </>
  );
}

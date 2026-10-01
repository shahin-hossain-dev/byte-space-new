import Link from "next/link";
import { SEARCH_COPY } from "@/constants";
import { searchHref } from "@/lib/search";
import { cn } from "@/lib/utils";

interface SearchTagsProps {
  tags: readonly string[];
  query: string;
  /** Currently applied tag; empty = "All". */
  active: string;
}

/** Topic filter pills. Plain links, so filtering works without JavaScript and is shareable. */
export function SearchTags({ tags, query, active }: SearchTagsProps) {
  const items = [{ label: SEARCH_COPY.allTag, value: "" }, ...tags.map((t) => ({ label: t, value: t }))];

  return (
    <nav aria-label={SEARCH_COPY.filterLabel}>
      <ul className="flex flex-wrap gap-x-3 gap-y-3 md:gap-x-4">
        {items.map(({ label, value }) => {
          const current = value === active;
          return (
            <li key={label}>
              {/* Changing the topic starts again from page 1. */}
              <Link
                href={searchHref({ q: query, tag: value })}
                aria-current={current ? "page" : undefined}
                scroll={false}
                className={cn(
                  "inline-flex h-9 items-center rounded-full px-4 text-sm transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50 md:h-10.5 md:text-base",
                  current
                    ? "bg-highlight text-highlight-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground",
                )}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

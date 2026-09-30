import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { PAGINATION_COPY } from "@/constants";
import { cn } from "@/lib/utils";

interface PaginationProps {
  /** 1-based current page. */
  page: number;
  totalPages: number;
  /** URL for a given page — keeps the caller's other query params. */
  hrefFor: (page: number) => string;
  /** Render even when everything fits on one page (arrows disabled). */
  showSinglePage?: boolean;
  className?: string;
}

/** Pages to show: all when few, otherwise first, last and a window around the current one. */
function pageItems(page: number, total: number): (number | "gap")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const start = Math.max(2, Math.min(page - 1, total - 4));
  const end = Math.min(total - 1, Math.max(page + 1, 5));
  return [
    1,
    ...(start > 2 ? ["gap" as const] : []),
    ...Array.from({ length: end - start + 1 }, (_, i) => start + i),
    ...(end < total - 1 ? ["gap" as const] : []),
    total,
  ];
}

const arrowClass =
  "flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors outline-none md:size-11";

/** Round prev/next arrows with page numbers between; the current page is dimmed. Link-based. */
export function Pagination({
  page,
  totalPages,
  hrefFor,
  showSinglePage = false,
  className,
}: PaginationProps) {
  if (totalPages < 1 || (totalPages === 1 && !showSinglePage)) return null;

  const arrow = (target: number, label: string, icon: React.ReactNode) =>
    target < 1 || target > totalPages ? (
      <span aria-hidden="true" className={cn(arrowClass, "opacity-40")}>
        {icon}
      </span>
    ) : (
      <Link
        href={hrefFor(target)}
        aria-label={label}
        className={cn(arrowClass, "hover:bg-accent focus-visible:ring-3 focus-visible:ring-ring/50")}
      >
        {icon}
      </Link>
    );

  return (
    <nav aria-label={PAGINATION_COPY.label} className={cn("flex justify-center", className)}>
      <ul className="flex items-center gap-3 md:gap-5">
        <li>{arrow(page - 1, PAGINATION_COPY.previous, <ChevronLeftIcon aria-hidden="true" className="size-5" />)}</li>
        {pageItems(page, totalPages).map((item, i) =>
          item === "gap" ? (
            <li key={`gap-${i}`} aria-hidden="true" className="text-muted-foreground">
              …
            </li>
          ) : (
            <li key={item}>
              <Link
                href={hrefFor(item)}
                aria-label={PAGINATION_COPY.page(item)}
                aria-current={item === page ? "page" : undefined}
                className={cn(
                  "flex h-8 min-w-6 items-center justify-center rounded-md px-1 text-base font-bold outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                  item === page ? "text-muted-foreground/60" : "text-foreground hover:text-primary",
                )}
              >
                {item}
              </Link>
            </li>
          ),
        )}
        <li>{arrow(page + 1, PAGINATION_COPY.next, <ChevronRightIcon aria-hidden="true" className="size-5" />)}</li>
      </ul>
    </nav>
  );
}

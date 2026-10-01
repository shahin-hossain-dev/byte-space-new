import Form from "next/form";
import { SearchIcon } from "lucide-react";
import { HERO, ROUTES } from "@/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface SearchFormProps {
  /** Unique per page — ties the hidden label to the input. */
  id: string;
  /** Pre-fills the input, e.g. with the current query on the results page. */
  defaultValue?: string;
  className?: string;
}

/** Pill search box + button that navigates to the search page (`/search?q=…`). */
export function SearchForm({ id, defaultValue, className }: SearchFormProps) {
  const { placeholder, label, button } = HERO.search;

  return (
    <Form
      action={ROUTES.search}
      role="search"
      className={cn("flex w-full items-center gap-2 sm:gap-4", className)}
    >
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <div className="relative flex-1">
        <SearchIcon
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted-foreground"
        />
        <Input
          id={id}
          name="q"
          type="search"
          defaultValue={defaultValue}
          placeholder={placeholder}
          className="h-11 rounded-full border-0 bg-background pl-12 text-base text-foreground placeholder:text-muted-foreground focus-visible:ring-highlight md:h-13 md:text-base"
        />
      </div>
      <Button type="submit" variant="highlight" size="pill">
        {button}
      </Button>
    </Form>
  );
}

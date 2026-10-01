import Form from "next/form";
import { SearchIcon } from "lucide-react";
import { HERO, ROUTES } from "@/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function HeroSearch({ className }: { className?: string }) {
  const { placeholder, label, button } = HERO.search;

  return (
    <Form
      action={ROUTES.home}
      role="search"
      className={cn("flex w-full items-center gap-2 sm:gap-4", className)}
    >
      <label htmlFor="hero-search" className="sr-only">
        {label}
      </label>
      <div className="relative flex-1">
        <SearchIcon
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted-foreground"
        />
        <Input
          id="hero-search"
          name="q"
          type="search"
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

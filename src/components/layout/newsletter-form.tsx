"use client";

import { useActionState } from "react";
import { subscribeToNewsletter, type NewsletterState } from "@/actions/newsletter";
import { NEWSLETTER } from "@/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const initialState: NewsletterState = { status: "idle", message: "" };

export function NewsletterForm({ className }: { className?: string }) {
  const [state, formAction, pending] = useActionState(subscribeToNewsletter, initialState);
  const invalid = state.status === "error";

  return (
    <form action={formAction} noValidate className={className}>
      <div className="flex items-center gap-3 sm:gap-6">
        <label htmlFor="newsletter-email" className="sr-only">
          {NEWSLETTER.label}
        </label>
        <Input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder={NEWSLETTER.placeholder}
          aria-invalid={invalid || undefined}
          aria-describedby="newsletter-status"
          className="h-12 flex-1 rounded-full px-6 text-base placeholder:text-secondary-foreground sm:max-w-94 md:h-13 md:text-base"
        />
        <Button type="submit" variant="highlight" size="pill" disabled={pending}>
          {pending ? NEWSLETTER.pendingButton : NEWSLETTER.button}
        </Button>
      </div>
      <p
        id="newsletter-status"
        role="status"
        className={cn(
          "mt-2 min-h-5 text-sm",
          invalid ? "text-destructive" : "text-primary",
        )}
      >
        {state.message}
      </p>
    </form>
  );
}

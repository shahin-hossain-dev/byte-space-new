"use client";

import { useState } from "react";
import { AUTH_MESSAGES, SOCIAL_PROVIDERS } from "@/constants";

type ProviderId = (typeof SOCIAL_PROVIDERS)[number]["id"];

// Brand marks aren't in lucide; single-colour paths so they follow `currentColor`.
const ICONS: Record<ProviderId, React.ReactNode> = {
  facebook: (
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07Z" />
  ),
  google: (
    <path d="M12.24 10.29v3.57h5.9c-.25 1.52-1.8 4.46-5.9 4.46-3.55 0-6.45-2.94-6.45-6.57s2.9-6.57 6.45-6.57c2.02 0 3.37.86 4.15 1.6l2.83-2.72C17.4 2.37 15.06 1.3 12.24 1.3 6.46 1.3 1.8 5.96 1.8 11.75s4.66 10.45 10.44 10.45c6.03 0 10.03-4.24 10.03-10.2 0-.69-.07-1.21-.17-1.71H12.24Z" />
  ),
};

/** "or" divider plus Facebook / Google buttons. No provider is wired up yet, so they say so. */
export function SocialSignIn() {
  const [message, setMessage] = useState("");

  return (
    <div className="relative mt-12 lg:mt-18.5">
      <div className="flex items-center gap-4 text-muted-foreground">
        <span aria-hidden="true" className="h-px flex-1 bg-border" />
        or
        <span aria-hidden="true" className="h-px flex-1 bg-border" />
      </div>
      <ul className="mt-8 flex justify-center gap-4 lg:mt-11">
        {SOCIAL_PROVIDERS.map((provider) => (
          <li key={provider.id}>
            <button
              type="button"
              aria-label={provider.label}
              onClick={() => setMessage(AUTH_MESSAGES.socialUnavailable(provider.name))}
              className="flex size-16 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors outline-none hover:bg-accent focus-visible:ring-3 focus-visible:ring-ring/50 md:size-18"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-8 fill-current md:size-9">
                {ICONS[provider.id]}
              </svg>
            </button>
          </li>
        ))}
      </ul>
      {/* Absolutely placed so the (usually empty) status line doesn't add height to the card. */}
      <p role="status" className="absolute inset-x-0 top-full mt-3 text-center text-sm text-muted-foreground">
        {message}
      </p>
    </div>
  );
}

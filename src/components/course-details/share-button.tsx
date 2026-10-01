"use client";

import { useEffect, useState } from "react";
import { Share2Icon } from "lucide-react";
import { COURSE_DETAILS_COPY } from "@/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Status = "idle" | "copied" | "failed";

interface ShareButtonProps {
  title: string;
  className?: string;
}

/** Opens the native share sheet where supported, otherwise copies the page URL. */
export function ShareButton({ title, className }: ShareButtonProps) {
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (status === "idle") return;
    const timer = setTimeout(() => setStatus("idle"), 2000);
    return () => clearTimeout(timer);
  }, [status]);

  async function share() {
    const url = window.location.href;
    if (navigator.share) {
      // Rejects when the user dismisses the sheet — nothing to report.
      await navigator.share({ title, url }).catch(() => {});
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  }

  const label = {
    idle: COURSE_DETAILS_COPY.share,
    copied: COURSE_DETAILS_COPY.shareCopied,
    failed: COURSE_DETAILS_COPY.shareFailed,
  }[status];

  return (
    <>
      <Button
        type="button"
        variant="highlight"
        onClick={share}
        className={cn("h-10 gap-2 rounded-full px-5 text-base md:h-11", className)}
      >
        <Share2Icon aria-hidden="true" className="size-5" />
        {label}
      </Button>
      <span role="status" className="sr-only">
        {status === "idle" ? "" : label}
      </span>
    </>
  );
}

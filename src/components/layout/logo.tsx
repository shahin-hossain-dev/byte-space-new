import Image from "next/image";
import Link from "next/link";
import { IMAGES, ROUTES, SITE } from "@/constants";
import { cn } from "@/lib/utils";

interface LogoProps {
  /** `light` = white wordmark for blue backgrounds, `dark` = for white backgrounds. */
  tone?: "light" | "dark";
  /** Show only the "b" mark — the wordmark image cropped to its first ~30px. */
  markOnly?: boolean;
  className?: string;
}

export function Logo({ tone = "light", markOnly = false, className }: LogoProps) {
  return (
    <Link
      href={ROUTES.home}
      className={cn(
        "inline-flex shrink-0 rounded-md",
        markOnly && "w-6.5 overflow-hidden md:w-7.5",
        className,
      )}
    >
      <Image
        src={IMAGES.logo[tone]}
        alt={SITE.name}
        width={171}
        height={37}
        className={cn(
          "w-auto max-w-none",
          markOnly ? "h-7 md:h-8" : "h-7 md:h-8 lg:h-9.25",
        )}
      />
    </Link>
  );
}

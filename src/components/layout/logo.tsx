import Image from "next/image";
import Link from "next/link";
import { IMAGES, ROUTES, SITE } from "@/constants";
import { cn } from "@/lib/utils";

interface LogoProps {
  /** `light` = white wordmark for blue backgrounds, `dark` = for white backgrounds. */
  tone?: "light" | "dark";
  className?: string;
}

export function Logo({ tone = "light", className }: LogoProps) {
  return (
    <Link href={ROUTES.home} className={cn("inline-flex shrink-0 rounded-md", className)}>
      <Image
        src={IMAGES.logo[tone]}
        alt={SITE.name}
        width={171}
        height={37}
        className="h-7 w-auto md:h-8 lg:h-9.25"
      />
    </Link>
  );
}

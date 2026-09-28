"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavLink } from "@/types";
import { cn } from "@/lib/utils";

interface NavLinksProps {
  links: NavLink[];
  className?: string;
  linkClassName?: string;
  activeClassName?: string;
  /** Wraps each link, e.g. with <SheetClose> so the mobile menu closes on navigate. */
  renderItem?: (link: React.ReactElement, item: NavLink) => React.ReactNode;
}

export function NavLinks({
  links,
  className,
  linkClassName,
  activeClassName = "font-bold",
  renderItem,
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className={className}>
      {links.map((item) => {
        const active = item.href === pathname;
        const link = (
          <Link
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(linkClassName, active && activeClassName)}
          >
            {item.label}
          </Link>
        );
        return <li key={item.label}>{renderItem ? renderItem(link, item) : link}</li>;
      })}
    </ul>
  );
}

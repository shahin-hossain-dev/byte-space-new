import Link from "next/link";
import { ShoppingBagIcon } from "lucide-react";
import { AUTH_NAV, MAIN_NAV } from "@/constants";
import { Button } from "@/components/ui/button";
import { Container } from "./container";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";
import { NavLinks } from "./nav-links";

const linkClass =
  "rounded-md text-base text-primary-foreground/90 transition-colors hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-highlight";

export function Header() {
  return (
    <header className="bg-primary bg-grid text-primary-foreground">
      <Container className="flex h-(--grid-size) items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Main" className="hidden md:block">
          <NavLinks
            links={MAIN_NAV}
            className="flex items-center gap-6 lg:gap-8"
            linkClassName={linkClass}
            activeClassName="text-primary-foreground"
          />
        </nav>

        <div className="flex items-center gap-1 md:gap-6">
          <div className="hidden items-center gap-6 md:flex">
            <Link href={AUTH_NAV.signIn.href} className={linkClass}>
              {AUTH_NAV.signIn.label}
            </Link>
            <Link href={AUTH_NAV.signUp.href} className={linkClass}>
              {AUTH_NAV.signUp.label}
            </Link>
          </div>
          <Button
            variant="ghost"
            size="icon-lg"
            aria-label="Shopping cart"
            className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <ShoppingBagIcon className="size-6" />
          </Button>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}

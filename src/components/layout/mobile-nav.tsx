"use client";

import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { AUTH_NAV, MAIN_NAV } from "@/constants";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "./logo";
import { NavLinks } from "./nav-links";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon-lg"
          aria-label="Open menu"
          className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground md:hidden"
        >
          <MenuIcon className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-4/5 max-w-xs">
        <SheetHeader>
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <Logo tone="dark" />
        </SheetHeader>
        <nav aria-label="Mobile" className="px-4">
          <NavLinks
            links={MAIN_NAV}
            className="flex flex-col"
            linkClassName="block rounded-md px-2 py-3 text-base text-foreground hover:bg-muted"
            renderItem={(link) => <SheetClose asChild>{link}</SheetClose>}
          />
        </nav>
        <SheetFooter>
          <SheetClose asChild>
            <Button asChild variant="outline" size="pill">
              <Link href={AUTH_NAV.signIn.href}>{AUTH_NAV.signIn.label}</Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button asChild variant="highlight" size="pill">
              <Link href={AUTH_NAV.signUp.href}>{AUTH_NAV.signUp.label}</Link>
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

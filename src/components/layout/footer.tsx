import Link from "next/link";
import { FOOTER_NAV, LEGAL_NAV, NEWSLETTER, SITE } from "@/constants";
import { Container } from "./container";
import { Logo } from "./logo";
import { NewsletterForm } from "./newsletter-form";

const linkClass =
  "rounded-sm text-secondary-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container className="pt-12 md:pt-16 lg:pt-18">
        <div className="grid gap-10 md:gap-12 lg:grid-cols-[504px_1fr] lg:gap-x-29">
          <div>
            <Logo tone="dark" />
            <p className="mt-5 text-sm text-secondary-foreground">{NEWSLETTER.description}</p>
            <NewsletterForm className="mt-8 lg:mt-12" />
            <p className="mt-3 max-w-118 text-xs leading-relaxed text-secondary-foreground">
              {NEWSLETTER.disclaimer}
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:pt-14">
            {FOOTER_NAV.map((group) => (
              <div key={group.title}>
                <h2 className="sr-only">{group.title}</h2>
                <ul className="flex flex-col gap-4 text-sm lg:text-[15px]">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={linkClass}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border/50 pt-7 pb-10 text-xs md:mt-20 md:flex-row md:items-center md:justify-between lg:mt-28 lg:pb-12">
          <p className="text-secondary-foreground">{SITE.copyright}</p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {LEGAL_NAV.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}

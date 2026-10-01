import type { Metadata } from "next";
import Link from "next/link";
import { NOT_FOUND_COPY, ROUTES } from "@/constants";
import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: NOT_FOUND_COPY.meta.title,
  description: NOT_FOUND_COPY.meta.description,
  robots: { index: false, follow: true },
};

// Renders outside the route-group layouts, so it brings its own header and footer.
export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <section
          aria-labelledby="not-found-title"
          className="flex-1 overflow-hidden bg-primary bg-grid text-primary-foreground"
        >
          <Container className="flex flex-col items-center pt-8 pb-20 text-center md:pt-10 md:pb-24 lg:pt-9 lg:pb-31">
            {/*
              Decorative: lime at the top fading into the blue band. The negative bottom
              margin (in its own em) pulls the heading up over the digits, as in the design.
            */}
            <p
              aria-hidden="true"
              className="mb-[-0.23em] bg-linear-to-b from-highlight from-25% to-highlight/0 to-105% bg-clip-text text-[clamp(10rem,33vw,29.5rem)] leading-none font-bold tracking-tight text-transparent select-none"
            >
              {NOT_FOUND_COPY.code}
            </p>
            <h1
              id="not-found-title"
              className="relative max-w-[13em] text-4xl leading-[1.15] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[74px] lg:text-wrap"
            >
              {NOT_FOUND_COPY.title}
            </h1>
            <p className="mt-6 max-w-xl text-base text-primary-foreground/90 md:mt-10 md:text-lg">
              {NOT_FOUND_COPY.description}
            </p>
            <Button asChild variant="highlight" size="pill" className="mt-8 text-lg md:h-11.5">
              <Link href={ROUTES.home}>{NOT_FOUND_COPY.action}</Link>
            </Button>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

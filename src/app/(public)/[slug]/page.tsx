import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { INFO_PAGES, INFO_PAGE_COPY, ROUTES } from "@/constants";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

// Only the pages listed in INFO_PAGES exist; any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return INFO_PAGES.map(({ slug }) => ({ slug }));
}

const getPage = (slug: string) => INFO_PAGES.find((page) => page.slug === slug);

export async function generateMetadata(props: PageProps<"/[slug]">): Promise<Metadata> {
  const page = getPage((await props.params).slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${page.slug}` },
    // Placeholder content — keep out of search results until it's written.
    robots: { index: false, follow: true },
  };
}

export default async function InfoPage(props: PageProps<"/[slug]">) {
  const page = getPage((await props.params).slug);
  if (!page) notFound();

  return (
    <section className="flex flex-1 items-center py-20 md:py-28">
      <Container className="max-w-2xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">{page.title}</h1>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">{page.description}</p>
        <p className="mt-2 text-base text-muted-foreground">{INFO_PAGE_COPY.comingSoon}</p>
        <Button asChild variant="highlight" size="pill" className="mt-8">
          <Link href={ROUTES.home}>{INFO_PAGE_COPY.backHome}</Link>
        </Button>
      </Container>
    </section>
  );
}

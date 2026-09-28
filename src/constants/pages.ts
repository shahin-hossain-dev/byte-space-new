import { ROUTES } from "./routes";

export interface InfoPage {
  slug: string;
  title: string;
  description: string;
}

const slug = (href: string) => href.replace(/^\//, "");

/** Company & legal pages linked from the footer. Placeholders until their content is written. */
export const INFO_PAGES: InfoPage[] = [
  { slug: slug(ROUTES.about), title: "About", description: "Learn more about ByteSpace and our mission." },
  { slug: slug(ROUTES.contact), title: "Contact", description: "Get in touch with the ByteSpace team." },
  { slug: slug(ROUTES.help), title: "Help", description: "Answers and support for ByteSpace learners and creators." },
  { slug: slug(ROUTES.affiliate), title: "Affiliate Program", description: "Partner with ByteSpace and earn by sharing courses." },
  { slug: slug(ROUTES.privacy), title: "Privacy Policy", description: "How ByteSpace collects, uses, and protects your data." },
  { slug: slug(ROUTES.terms), title: "Terms of Service", description: "The terms that govern your use of ByteSpace." },
  { slug: slug(ROUTES.cookies), title: "Cookies Settings", description: "How ByteSpace uses cookies and how to manage them." },
];

export const INFO_PAGE_COPY = {
  comingSoon: "This page is coming soon.",
  backHome: "Back to home",
} as const;

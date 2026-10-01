import type { FooterLinkGroup, NavLink } from "@/types";
import { ROUTES, SECTION_IDS, sectionHref } from "./routes";

export const MAIN_NAV: NavLink[] = [
  { label: "Home", href: ROUTES.home },
  { label: "Courses", href: sectionHref(SECTION_IDS.courses) },
  { label: "Creators", href: sectionHref(SECTION_IDS.creators) },
];

export const AUTH_NAV = {
  signIn: { label: "Sign In", href: ROUTES.login },
  signUp: { label: "Join Us", href: ROUTES.signup },
} satisfies Record<string, NavLink>;

const categories = sectionHref(SECTION_IDS.categories);

export const FOOTER_NAV: FooterLinkGroup[] = [
  {
    title: "Explore",
    links: [
      { label: "Featured Courses", href: sectionHref(SECTION_IDS.courses) },
      { label: "Featured Categories", href: categories },
      { label: "Business", href: categories },
      { label: "IT", href: categories },
      { label: "Design", href: categories },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "Development", href: categories },
      { label: "Marketing", href: categories },
      { label: "Photography", href: categories },
      { label: "Finance", href: categories },
      { label: "Sport", href: categories },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Become a Creator", href: ROUTES.signup },
      { label: "Affiliate Program", href: ROUTES.affiliate },
      { label: "Contact", href: ROUTES.contact },
      { label: "Help", href: ROUTES.help },
      { label: "About", href: ROUTES.about },
    ],
  },
];

export const LEGAL_NAV: NavLink[] = [
  { label: "Privacy Policy", href: ROUTES.privacy },
  { label: "Terms of Service", href: ROUTES.terms },
  { label: "Cookies Settings", href: ROUTES.cookies },
];

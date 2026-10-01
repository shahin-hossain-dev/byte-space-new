export const ROUTES = {
  home: "/",
  login: "/login",
  signup: "/signup",
  dashboard: "/dashboard",
  about: "/about",
  contact: "/contact",
  help: "/help",
  affiliate: "/affiliate",
  privacy: "/privacy",
  terms: "/terms",
  cookies: "/cookies",
} as const;

/** In-page anchors on the landing page (match the `id` on each section). */
export const SECTION_IDS = {
  courses: "courses",
  categories: "categories",
  creators: "creators",
  testimonials: "testimonials",
} as const;

export const sectionHref = (id: (typeof SECTION_IDS)[keyof typeof SECTION_IDS]) =>
  `${ROUTES.home}#${id}`;

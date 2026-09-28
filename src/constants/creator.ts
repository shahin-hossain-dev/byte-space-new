import { IMAGES } from "./images";
import { ROUTES } from "./routes";

export const CREATE_MANAGE_SECTION = {
  title: "Create & Manage Courses Easily.",
  brand: "ByteSpace",
  description:
    "supports individuals or entities in the creation, publication, and administration of educational courses.",
  features: [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
  ],
  image: {
    src: IMAGES.hero.womanTablet,
    alt: "Course creator with a headset holding a tablet",
  },
  revenueCard: {
    label: "Total Revenue",
    period: "July 1-28",
    amount: "$120.29",
    progress: 70,
  },
  yearToDateCard: {
    label: "Year to Date",
    period: "2023",
    amount: "$1,200.38",
    change: "+12$",
  },
} as const;

export const CREATOR_CTA = {
  title: "Unlock Your Potential as a Creator with ByteSpace",
  description:
    "Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.",
  button: { label: "Join as Creator", href: ROUTES.signup },
} as const;

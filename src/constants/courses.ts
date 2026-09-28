import type { Course, ImageAsset, SectionCopy } from "@/types";
import { IMAGES } from "./images";
import { SECTION_IDS, sectionHref } from "./routes";

export const COURSES_SECTION: SectionCopy = {
  title: "Discover Your Passion, Build Your Skills",
  description:
    "At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.",
};

export const COURSE_TAGS = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
] as const;

export const DEFAULT_COURSE_TAG = COURSE_TAGS[0];
export const MORE_TAGS_LABEL = "+ More";

const enrolledAvatars: ImageAsset[] = IMAGES.avatars.sm.map((src, i) => ({
  src,
  alt: `Enrolled student ${i + 1}`,
}));

const author = { label: "purepearl studio", href: sectionHref(SECTION_IDS.courses) };

/** Fields every course card in the design shares. */
const shared = {
  author,
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  rating: 4.5,
  level: "Beginner",
  price: 25,
  priceUnit: "lifetime",
  enrolledAvatars,
  enrolledExtra: 26,
} satisfies Omit<Course, "id" | "title" | "image">;

export const COURSES: Course[] = [
  {
    ...shared,
    id: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    image: { src: IMAGES.courses.figma, alt: "Designers sketching wireframes beside a laptop" },
  },
  {
    ...shared,
    id: "build-digital-asset",
    title: "Build Digital Asset",
    image: { src: IMAGES.courses.digitalAsset, alt: "Grid of printed app icons" },
  },
  {
    ...shared,
    id: "the-power-of-big-data",
    title: "The Power of Big Data",
    image: { src: IMAGES.courses.bigData, alt: "Analytics dashboard with charts on a monitor" },
  },
  {
    ...shared,
    id: "balancing-productivity-and-wellbeing",
    title: "Balancing Productivity and Wellbeing",
    image: { src: IMAGES.courses.productivity, alt: "Desk with a monitor reading “Do More”" },
  },
  {
    ...shared,
    id: "mastering-money-management",
    title: "Mastering Money Management",
    image: { src: IMAGES.courses.money, alt: "Stock price line chart on a screen" },
  },
  {
    ...shared,
    id: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    image: { src: IMAGES.courses.startup, alt: "Team planning with sticky notes on a whiteboard" },
  },
];

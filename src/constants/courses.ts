import type { Course, ImageAsset, SectionCopy } from "@/types";
import { IMAGES } from "./images";
import { SECTION_IDS, sectionHref } from "./routes";

export const COURSES_SECTION: SectionCopy = {
  title: "Discover Your Passion, Build Your Skills",
  description:
    "At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.",
};

/** "Featured" shows every course; the rest filter by `Course.tags`. */
export const FEATURED_TAG = "Featured";

export const COURSE_TAGS = [
  FEATURED_TAG,
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
  // Revealed by "+ More".
  "Writing",
  "Finance",
  "Languages",
  "Health & Fitness",
] as const;

export const COURSE_TAG_LIMITS = {
  /** Tags visible before "+ More" on small screens. */
  mobile: 8,
  /** Tags visible before "+ More" from md up (the design shows 18). */
  desktop: 18,
} as const;

export const COURSES_COPY = {
  filterLabel: "Filter courses by category",
  more: "+ More",
  less: "− Less",
  empty: "No courses in this category yet — check back soon.",
  lessons: "Lessons",
  comments: "Comments",
  by: "by",
  ratingLabel: (rating: number) => `Rated ${rating} out of 5`,
  enrolledLabel: (extra: number) => `and ${extra} more students enrolled`,
} as const;

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
} satisfies Omit<Course, "id" | "title" | "image" | "tags">;

export const COURSES: Course[] = [
  {
    ...shared,
    id: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    image: { src: IMAGES.courses.figma, alt: "Designers sketching wireframes beside a laptop" },
    tags: ["UI/UX Design", "Graphic Design"],
  },
  {
    ...shared,
    id: "build-digital-asset",
    title: "Build Digital Asset",
    image: { src: IMAGES.courses.digitalAsset, alt: "Grid of printed app icons" },
    tags: ["Graphic Design", "Digital Illustration"],
  },
  {
    ...shared,
    id: "the-power-of-big-data",
    title: "The Power of Big Data",
    image: { src: IMAGES.courses.bigData, alt: "Analytics dashboard with charts on a monitor" },
    tags: ["Data Science", "Web Development"],
  },
  {
    ...shared,
    id: "balancing-productivity-and-wellbeing",
    title: "Balancing Productivity and Wellbeing",
    image: { src: IMAGES.courses.productivity, alt: "Desk with a monitor reading “Do More”" },
    tags: ["Productivity", "Health & Fitness"],
  },
  {
    ...shared,
    id: "mastering-money-management",
    title: "Mastering Money Management",
    image: { src: IMAGES.courses.money, alt: "Stock price line chart on a screen" },
    tags: ["Finance", "Freelance & Entrepreneurship"],
  },
  {
    ...shared,
    id: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    image: { src: IMAGES.courses.startup, alt: "Team planning with sticky notes on a whiteboard" },
    tags: ["Freelance & Entrepreneurship", "Marketing"],
  },
];

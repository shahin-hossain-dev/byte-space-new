import { IMAGES } from "./images";

export const HERO = {
  title: "Get Access to Hundreds Courses Available",
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
  search: {
    placeholder: "Course, topic, creator",
    label: "Search courses",
    button: "Search",
  },
  image: {
    src: IMAGES.hero.manLaptop,
    alt: "Smiling student wearing headphones and holding a laptop",
  },
  categoryCard: {
    title: "UI/UX Design",
    courses: "200 Courses",
    students: "1000+ Students",
  },
} as const;

/** Shared floating cards — used in the hero and the growth / creator sections. */
export const LEARNING_PROGRESS = {
  label: "Learning Progress",
  value: 55,
} as const;

export const HAPPY_STUDENTS = {
  label: "Happy Students",
  rating: 4.5,
  reviews: 240,
  extra: "2K+",
  avatars: IMAGES.avatars.md.map((src, i) => ({
    src,
    alt: `Happy student ${i + 1}`,
  })),
} as const;

import type { SectionCopy, Stat } from "@/types";
import { COURSES } from "./courses";
import { IMAGES } from "./images";

export const GROWTH_SECTION: SectionCopy = {
  title: "Your Path to Professional Growth Starts Here!",
  description:
    "Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.",
};

export const GROWTH_STATS: Stat[] = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export const GROWTH_FEATURED_COURSE = COURSES[0];

export const GROWTH_IMAGE = {
  src: IMAGES.hero.manLaptopShadow,
  alt: "Student with headphones learning on a laptop",
} as const;

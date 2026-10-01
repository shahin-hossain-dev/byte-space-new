import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

export interface ImageAsset {
  src: string;
  alt: string;
}

export interface SectionCopy {
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export interface Course {
  id: string;
  title: string;
  author: NavLink;
  image: ImageAsset;
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  level: CourseLevel;
  price: number;
  priceUnit: string;
  enrolledAvatars: ImageAsset[];
  enrolledExtra: number;
  /** Category tags the course appears under (besides "Featured"). */
  tags: string[];
}

export interface LearningPath {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: ImageAsset;
}

export type PartnerMark = "waves" | "sunburst" | "bolt" | "clover" | "rings";

export interface Partner {
  id: string;
  name: string;
  mark: PartnerMark;
}

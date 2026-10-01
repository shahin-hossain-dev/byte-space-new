import { AwardIcon, HeadsetIcon, NewspaperIcon, VideoIcon } from "lucide-react";
import type { Course, CourseCreator, CourseDetail, CourseInclude, CourseReview, ImageAsset } from "@/types";
import { COURSES } from "./courses";
import { IMAGES } from "./images";
import { SECTION_IDS, sectionHref } from "./routes";

export const COURSE_DETAILS_COPY = {
  by: "by",
  share: "Share",
  shareCopied: "Link copied",
  shareFailed: "Couldn’t copy the link",
  reviews: (count: number) => `${count} reviews`,
  students: (count: number) => `${count} Students`,
  ratingLabel: (rating: number) => `Rated ${rating} out of 5`,
  previewLabel: (title: string) => `Preview of ${title}`,
  lessonsSummary: (lessons: number, duration: string) => `${lessons} Lessons (${duration})`,
  moreVideos: (count: number) => `${count} more videos`,
  moreLessons: (count: number) => `+ ${count} more lessons`,
  cta: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
  enroll: "Enroll Now",
  includesTitle: "This course include",
  seeProfile: "See Full Profile",
  tabsLabel: "Course information",
  tabs: { about: "About", lessons: "Lessons", reviews: "Reviews" },
  descriptionTitle: "Description",
  sneakPeekTitle: "Sneak Peak",
  keyPointsTitle: "Key Points",
  lessonsTitle: "Course Curriculum",
  reviewsTitle: "Student Reviews",
  reviewsSummary: (rating: number, count: number) => `${rating} average from ${count} reviews`,
} as const;

export const COURSE_INCLUDES: CourseInclude[] = [
  { label: "Learning Resources", icon: NewspaperIcon },
  { label: "Quality Lesson Videos", icon: VideoIcon },
  { label: "Certificate of Completion", icon: AwardIcon },
  { label: "Private Consultation", icon: HeadsetIcon },
];

/** Every course in the design is by purepearl studio. */
export const COURSE_CREATOR: CourseCreator = {
  name: "PurePearl Studio",
  role: "Professional Creator",
  bio: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
  avatar: { src: IMAGES.avatars.md[1], alt: "PurePearl Studio" },
  href: sectionHref(SECTION_IDS.creators),
};

export const COURSE_REVIEWS: CourseReview[] = [
  {
    id: "sarah-m",
    name: "Sarah M.",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Clear, well-paced lessons with practical exercises after every module. I finished with real work I could add to my portfolio.",
    avatar: { src: IMAGES.avatars.md[0], alt: "Sarah M." },
  },
  {
    id: "james-l",
    name: "James L.",
    rating: 5,
    date: "1 month ago",
    comment:
      "The instructor explains the why behind every technique, not just the how. The private consultation alone was worth the price.",
    avatar: { src: IMAGES.avatars.md[2], alt: "James L." },
  },
  {
    id: "alex-b",
    name: "Alex B.",
    rating: 4,
    date: "2 months ago",
    comment:
      "Great structure and resources. A few of the advanced lessons move quickly, but rewatching them made everything click.",
    avatar: { src: IMAGES.avatars.md[3], alt: "Alex B." },
  },
];

/** Four images from the other courses, as a preview of the course material. */
const sneakPeek = (id: Course["id"]): ImageAsset[] =>
  COURSES.filter((course) => course.id !== id)
    .slice(0, 4)
    .map((course) => course.image);

export const COURSE_DETAILS: Record<Course["id"], CourseDetail> = {
  "learn-figma-from-basic": {
    subtitle: "Design Interfaces with Confidence, from First Frame to Prototype",
    description: [
      "Start from a blank canvas and learn Figma the way working designers use it. This course walks you through frames, layers, and the toolbar before moving on to the features that make Figma fast: auto layout, components, and variants.",
      "Each module ends with a hands-on exercise, so by the final lesson you will have designed, organised, and prototyped a complete mobile app screen flow ready to share with your team or clients.",
    ],
    reviewCount: 214,
    students: 248,
    curriculum: [
      { title: "Getting Around the Figma Interface", duration: "9 mins" },
      { title: "Frames, Shapes and Layers", duration: "14 mins" },
      { title: "Working with Auto Layout", duration: "18 mins" },
      { title: "Components and Variants", duration: "16 mins" },
      { title: "Prototyping Interactions", duration: "12 mins" },
      { title: "Handing Off to Developers", duration: "10 mins" },
    ],
    keyPoints: [
      "Figma Interface Essentials",
      "Layout with Frames and Auto Layout",
      "Reusable Components and Variants",
      "Interactive Prototypes",
      "Collaboration and Developer Handoff",
    ],
    sneakPeek: sneakPeek("learn-figma-from-basic"),
  },
  "build-digital-asset": {
    headline: "Build Digital Asset: A Comprehensive Guide",
    subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
    description: [
      "Embark on an enlightening exploration into the world of digital creation with our comprehensive course, “Build Digital Assets: A Comprehensive Guide.” This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.",
      "In the initial modules, you’ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
      "As you progress through the course, you’ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
    ],
    reviewCount: 172,
    students: 199,
    curriculum: [
      { title: "Introduction to Digital Assets", duration: "12 mins" },
      { title: "Design Principles for Impacts", duration: "21 mins" },
      { title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
      { title: "Color Theory and Typography", duration: "18 mins" },
      { title: "Layout Strategies that Convert", duration: "14 mins" },
      { title: "Preparing Assets for Every Platform", duration: "11 mins" },
    ],
    keyPoints: [
      "Foundational Concepts",
      "Design Principles Mastery",
      "Advanced Techniques in Digital Creation",
      "Project Showcase and Critique",
      "Optimizing for Various Platforms",
      "Digital Asset Management Best Practices",
      "Monetization Strategies",
      "Capstone Project: Building Your Portfolio",
    ],
    sneakPeek: sneakPeek("build-digital-asset"),
  },
  "the-power-of-big-data": {
    subtitle: "Turn Raw Data into Decisions that Move Your Business Forward",
    description: [
      "Data is only valuable when you can ask it the right questions. This course introduces the ideas behind big data — volume, velocity, and variety — and shows how modern teams collect, store, and process information at scale.",
      "You will practise cleaning messy datasets, exploring them with queries and visualisations, and presenting findings in dashboards that non-technical stakeholders can act on.",
    ],
    reviewCount: 138,
    students: 176,
    curriculum: [
      { title: "What Makes Data “Big”", duration: "11 mins" },
      { title: "Collecting and Storing Data at Scale", duration: "17 mins" },
      { title: "Cleaning and Preparing Datasets", duration: "19 mins" },
      { title: "Exploratory Analysis", duration: "15 mins" },
      { title: "Building Dashboards that Inform", duration: "13 mins" },
      { title: "Data Ethics and Privacy", duration: "9 mins" },
    ],
    keyPoints: [
      "Big Data Fundamentals",
      "Data Pipelines and Storage",
      "Cleaning and Transforming Data",
      "Exploratory Analysis Techniques",
      "Dashboard Storytelling",
      "Responsible Data Practices",
    ],
    sneakPeek: sneakPeek("the-power-of-big-data"),
  },
  "balancing-productivity-and-wellbeing": {
    subtitle: "Get More Done Without Burning Out",
    description: [
      "Productivity is not about squeezing more hours out of the day. This course shows you how to plan your week around your energy, protect time for deep work, and build routines that last.",
      "Alongside practical planning systems, you will learn evidence-based habits for rest, focus, and stress management, so that doing more never comes at the cost of feeling well.",
    ],
    reviewCount: 191,
    students: 263,
    curriculum: [
      { title: "Redefining Productivity", duration: "8 mins" },
      { title: "Planning Your Week Around Energy", duration: "14 mins" },
      { title: "Protecting Time for Deep Work", duration: "12 mins" },
      { title: "Habits that Stick", duration: "15 mins" },
      { title: "Managing Stress and Recovery", duration: "13 mins" },
      { title: "Designing Your Personal System", duration: "16 mins" },
    ],
    keyPoints: [
      "Energy-Based Planning",
      "Deep Work Strategies",
      "Sustainable Habit Building",
      "Stress Management Techniques",
      "Your Personal Productivity System",
    ],
    sneakPeek: sneakPeek("balancing-productivity-and-wellbeing"),
  },
  "mastering-money-management": {
    subtitle: "Build Financial Confidence One Smart Decision at a Time",
    description: [
      "Take control of your finances with a clear, judgement-free approach to budgeting, saving, and investing. You will start by mapping where your money goes today and set up a budget that fits the way you actually live.",
      "Later modules cover emergency funds, paying down debt, and the basics of investing, giving you a long-term plan you can adjust as your goals change.",
    ],
    reviewCount: 156,
    students: 211,
    curriculum: [
      { title: "Understanding Your Cash Flow", duration: "10 mins" },
      { title: "Building a Budget that Works", duration: "16 mins" },
      { title: "Saving and Emergency Funds", duration: "12 mins" },
      { title: "Tackling Debt Strategically", duration: "14 mins" },
      { title: "Investing Basics", duration: "19 mins" },
      { title: "Planning for Long-Term Goals", duration: "13 mins" },
    ],
    keyPoints: [
      "Cash Flow Awareness",
      "Practical Budgeting",
      "Emergency Savings",
      "Debt Reduction Strategies",
      "Investing Fundamentals",
      "Long-Term Financial Planning",
    ],
    sneakPeek: sneakPeek("mastering-money-management"),
  },
  "from-idea-to-startup-success": {
    subtitle: "Validate, Launch, and Grow Your First Startup",
    description: [
      "Every successful startup begins as an untested idea. This course gives you a repeatable process for validating that idea with real customers before you spend months building the wrong thing.",
      "From defining a minimum viable product to finding your first users and pitching investors, you will leave with a launch plan and the confidence to put it into action.",
    ],
    reviewCount: 167,
    students: 228,
    curriculum: [
      { title: "Finding Problems Worth Solving", duration: "12 mins" },
      { title: "Validating Your Idea with Customers", duration: "17 mins" },
      { title: "Defining Your Minimum Viable Product", duration: "14 mins" },
      { title: "Business Models and Pricing", duration: "15 mins" },
      { title: "Getting Your First 100 Users", duration: "16 mins" },
      { title: "Pitching to Investors", duration: "18 mins" },
    ],
    keyPoints: [
      "Problem Discovery",
      "Customer Validation",
      "MVP Scoping",
      "Business Models and Pricing",
      "Early Growth Tactics",
      "Investor Pitching",
    ],
    sneakPeek: sneakPeek("from-idea-to-startup-success"),
  },
};

/** Lessons previewed in the sidebar card. */
export const COURSE_PREVIEW_LESSONS = 3;

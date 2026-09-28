import type { SectionCopy, Testimonial } from "@/types";
import { IMAGES } from "./images";

export const TESTIMONIALS_SECTION: SectionCopy = {
  title: "Discover What Our Community Is Saying",
  description:
    "At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.",
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "sarah-m",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    avatar: { src: IMAGES.avatars.lg[0], alt: "Sarah M." },
  },
  {
    id: "james-l",
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    avatar: { src: IMAGES.avatars.lg[1], alt: "James L." },
  },
  {
    id: "alex-b",
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    avatar: { src: IMAGES.avatars.lg[2], alt: "Alex B." },
  },
];

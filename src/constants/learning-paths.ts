import {
  Building2,
  CodeXml,
  Laptop,
  Megaphone,
  PencilRuler,
  SquareUser,
} from "lucide-react";
import type { LearningPath, SectionCopy } from "@/types";
import { SECTION_IDS, sectionHref } from "./routes";

export const LEARNING_PATHS_SECTION: SectionCopy = {
  title: "Explore Diverse Learning Paths at Bytespace",
  description:
    "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.",
};

const href = sectionHref(SECTION_IDS.courses);

export const LEARNING_PATHS: LearningPath[] = [
  { id: "design", label: "Design", href, icon: PencilRuler },
  { id: "development", label: "Development", href, icon: CodeXml },
  { id: "it-software", label: "IT & Software", href, icon: Laptop },
  { id: "business", label: "Business", href, icon: Building2 },
  { id: "marketing", label: "Marketing", href, icon: Megaphone },
  { id: "photography", label: "Photography", href, icon: SquareUser },
];

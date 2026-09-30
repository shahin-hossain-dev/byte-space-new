import { CoursesSection } from "@/components/sections/courses/courses-section";
import { GrowthSection } from "@/components/sections/growth/growth-section";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { LearningPathsSection } from "@/components/sections/learning-paths/learning-paths-section";
import { PartnersSection } from "@/components/sections/partners/partners-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <CoursesSection />
      <LearningPathsSection />
      <GrowthSection />
    </>
  );
}

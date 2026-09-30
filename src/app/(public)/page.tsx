import { CoursesSection } from "@/components/sections/courses/courses-section";
import { CreateManageSection } from "@/components/sections/create-manage/create-manage-section";
import { CreatorCtaSection } from "@/components/sections/creator-cta/creator-cta-section";
import { GrowthSection } from "@/components/sections/growth/growth-section";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { LearningPathsSection } from "@/components/sections/learning-paths/learning-paths-section";
import { PartnersSection } from "@/components/sections/partners/partners-section";
import { GlowBackdrop } from "@/components/shared/glow-backdrop";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <CoursesSection />
      <LearningPathsSection />
      {/* One continuous gradient behind both sections, as in the design. */}
      <GlowBackdrop>
        <GrowthSection />
        <CreateManageSection />
      </GlowBackdrop>
      <CreatorCtaSection />
    </>
  );
}

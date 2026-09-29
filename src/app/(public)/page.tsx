import { CoursesSection } from "@/components/sections/courses/courses-section";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { PartnersSection } from "@/components/sections/partners/partners-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <CoursesSection />
    </>
  );
}

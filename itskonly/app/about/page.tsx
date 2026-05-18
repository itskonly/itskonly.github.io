import { AboutSection }  from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <div className="pt-16">
        <AboutSection />
        <SkillsSection />
      </div>
    </>
  );
}

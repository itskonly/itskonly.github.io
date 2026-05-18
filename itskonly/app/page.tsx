import { HeroSection }   from "@/components/sections/HeroSection";
import { AboutSection }  from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { allWriteups }   from "contentlayer/generated";
import { allDailyLogs }  from "contentlayer/generated";
import { RecentWriteups } from "@/components/sections/RecentWriteups";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  const recent = allWriteups
    .filter((w) => w.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <>
      <HeroSection />
      <div className="section-divider h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <AboutSection />
      <div className="section-divider h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <SkillsSection />
      <div className="section-divider h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <RecentWriteups writeups={recent} />
      <div className="section-divider h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <ContactSection />
    </>
  );
}

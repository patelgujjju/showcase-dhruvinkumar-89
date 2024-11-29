import React from "react";
import { useInView } from "react-intersection-observer";
import { HeroSection } from "@/components/HeroSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true });
  const [expRef, expInView] = useInView({ triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white overflow-hidden">
      <div ref={heroRef}>
        <HeroSection inView={heroInView} />
      </div>
      <div ref={aboutRef}>
        <EducationSection inView={aboutInView} />
      </div>
      <div ref={expRef}>
        <ExperienceSection inView={expInView} />
      </div>
      <div ref={projectsRef}>
        <ProjectsSection inView={projectsInView} />
      </div>
      <div ref={skillsRef}>
        <SkillsSection inView={skillsInView} />
      </div>
      <ContactSection />
    </div>
  );
};

export default Index;
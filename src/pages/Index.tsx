import React from "react";
import { useInView } from "react-intersection-observer";
import { HeroSection } from "@/components/HeroSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [expRef, expInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white">
      <div className="relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="relative">
          <div ref={heroRef} className={`transform transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <HeroSection inView={heroInView} />
          </div>
          
          <div ref={aboutRef} className={`transform transition-all duration-1000 ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <EducationSection inView={aboutInView} />
          </div>
          
          <div ref={expRef} className={`transform transition-all duration-1000 ${expInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <ExperienceSection inView={expInView} />
          </div>
          
          <div ref={projectsRef} className={`transform transition-all duration-1000 ${projectsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <ProjectsSection inView={projectsInView} />
          </div>
          
          <div ref={skillsRef} className={`transform transition-all duration-1000 ${skillsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <SkillsSection inView={skillsInView} />
          </div>
          
          <div className="transform transition-all duration-1000">
            <ContactSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
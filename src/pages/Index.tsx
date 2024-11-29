import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { HeroSection } from "@/components/HeroSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import ParticleBackground from "@/components/ParticleBackground";
import { Home, GraduationCap, Briefcase, Code, Wrench, Mail } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const sections = [
    { id: "home", Icon: Home, ref: useInView({ threshold: 0.2, triggerOnce: false }) },
    { id: "education", Icon: GraduationCap, ref: useInView({ threshold: 0.2, triggerOnce: false }) },
    { id: "experience", Icon: Briefcase, ref: useInView({ threshold: 0.2, triggerOnce: false }) },
    { id: "projects", Icon: Code, ref: useInView({ threshold: 0.2, triggerOnce: false }) },
    { id: "skills", Icon: Wrench, ref: useInView({ threshold: 0.2, triggerOnce: false }) },
    { id: "contact", Icon: Mail, ref: useInView({ threshold: 0.2, triggerOnce: false }) }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    sections.forEach(({ id, ref: [_, inView] }) => {
      if (inView) setActiveSection(id);
    });
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = window.innerHeight * 0.1;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white overflow-x-hidden">
      <ParticleBackground />
      <ScrollProgressBar />
      
      <div className="relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="relative">
          {sections.map(({ id, ref: [sectionRef, inView] }) => (
            <div
              key={id}
              ref={sectionRef}
              id={id}
              className="transform transition-all duration-1000"
              style={{
                '--x': `${mousePosition.x}px`,
                '--y': `${mousePosition.y}px`,
              } as React.CSSProperties}
            >
              {id === "home" && <HeroSection inView={inView} />}
              {id === "education" && <EducationSection inView={inView} />}
              {id === "experience" && <ExperienceSection inView={inView} />}
              {id === "projects" && <ProjectsSection inView={inView} />}
              {id === "skills" && <SkillsSection inView={inView} />}
              {id === "contact" && <ContactSection />}
            </div>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
          <div className="flex gap-3 backdrop-blur-xl bg-white/10 rounded-full border border-white/20 p-2
                         before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r 
                         before:from-purple-500/20 before:to-pink-500/20 before:opacity-0 
                         before:transition-opacity hover:before:opacity-100">
            {sections.map(({ id, Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                          ${activeSection === id ? 'bg-white/20 text-white' : 'text-white/60'}
                          hover:bg-white/30`}
              >
                <Icon className="w-5 h-5" />
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="fixed right-4 top-1/2 -translate-y-1/2 space-y-4 hidden md:block">
          {sections.map(({ id, Icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`relative block p-2 rounded-full transition-all duration-300
                        before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r 
                        before:from-purple-500/20 before:to-pink-500/20 before:opacity-0 
                        before:transition-opacity hover:before:opacity-100
                        ${activeSection === id 
                          ? 'bg-white/20 text-white scale-110' 
                          : 'bg-white/10 text-white/60 hover:scale-110 hover:bg-white/15'}`}
            >
              <Icon className="relative z-10 w-5 h-5" />
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Index;
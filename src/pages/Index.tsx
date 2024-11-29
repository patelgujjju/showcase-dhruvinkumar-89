import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { HeroSection } from "@/components/HeroSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { Home, GraduationCap, Briefcase, Code, Wrench, Mail } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isRadialMenuOpen, setIsRadialMenuOpen] = useState(false);

  const sections = [
    { id: "home", Icon: Home, ref: useInView({ threshold: 0.5 }) },
    { id: "education", Icon: GraduationCap, ref: useInView({ threshold: 0.5 }) },
    { id: "experience", Icon: Briefcase, ref: useInView({ threshold: 0.5 }) },
    { id: "projects", Icon: Code, ref: useInView({ threshold: 0.5 }) },
    { id: "skills", Icon: Wrench, ref: useInView({ threshold: 0.5 }) },
    { id: "contact", Icon: Mail, ref: useInView({ threshold: 0.5 }) }
  ];

  useEffect(() => {
    sections.forEach(({ id, ref: [_, inView] }) => {
      if (inView) setActiveSection(id);
    });
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = window.innerHeight * 0.1; // 10vh offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsRadialMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white overflow-x-hidden">
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
          <button
            onClick={() => setIsRadialMenuOpen(!isRadialMenuOpen)}
            className="w-12 h-12 bg-white/10 rounded-full backdrop-blur-xl border border-white/20 
                     flex items-center justify-center relative z-20"
          >
            <Home className="w-6 h-6" />
          </button>

          {/* Radial Menu */}
          <div 
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-300 w-[300px] h-[300px]
                       ${isRadialMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
          >
            <div className="relative w-full h-full">
              {sections.slice(1).map(({ id, Icon }, index) => {
                const angle = (index * (360 / (sections.length - 1))) * (Math.PI / 180);
                const radius = 100;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`absolute w-10 h-10 rounded-full backdrop-blur-xl border border-white/20
                              flex items-center justify-center transition-all duration-300
                              ${activeSection === id ? 'bg-white/20 text-white' : 'bg-white/10 text-white/60'}
                              hover:scale-110 hover:bg-white/30`}
                    style={{
                      transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
                      left: '50%',
                      bottom: '50%',
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="fixed right-4 top-1/2 -translate-y-1/2 space-y-4 hidden md:block">
          {sections.map(({ id, Icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`block p-2 rounded-full transition-all duration-300
                        ${activeSection === id 
                          ? 'bg-white/20 text-white scale-110' 
                          : 'bg-white/10 text-white/60 hover:scale-110 hover:bg-white/15'}`}
            >
              <Icon className="w-5 h-5" />
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Index;
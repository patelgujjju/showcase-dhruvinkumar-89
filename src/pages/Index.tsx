import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { HeroSection } from "@/components/HeroSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { Home, GraduationCap, Briefcase, Code, Wrench, Mail } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: "50%", y: "50%" });

  const sections = [
    { id: "home", Icon: Home, ref: useInView({ threshold: 0.1 }) },
    { id: "education", Icon: GraduationCap, ref: useInView({ threshold: 0.1 }) },
    { id: "experience", Icon: Briefcase, ref: useInView({ threshold: 0.1 }) },
    { id: "projects", Icon: Code, ref: useInView({ threshold: 0.1 }) },
    { id: "skills", Icon: Wrench, ref: useInView({ threshold: 0.1 }) },
    { id: "contact", Icon: Mail, ref: useInView({ threshold: 0.1 }) }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x: `${x}%`, y: `${y}%` });
      
      document.documentElement.style.setProperty('--x', `${x}%`);
      document.documentElement.style.setProperty('--y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate random floating dots
  const floatingDots = Array.from({ length: 20 }).map((_, i) => (
    <div
      key={i}
      className="floating-dots"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 10}s`,
        opacity: 0
      }}
    />
  ));

  // Parallax text elements
  const parallaxTexts = ['CREATIVE', 'INNOVATIVE', 'DYNAMIC'].map((text, i) => (
    <div
      key={text}
      className="parallax-text"
      style={{
        right: `${i * 30}%`,
        top: '50%',
        transform: 'translateY(-50%)',
      }}
    >
      {text}
    </div>
  ));

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white">
      <div className="relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        {floatingDots}
        {parallaxTexts}
        
        <div className="relative">
          {sections.map(({ id, ref: [sectionRef, inView] }, index) => (
            <div
              key={id}
              ref={sectionRef}
              id={id}
              className={`transform transition-all duration-1000 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
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

        {/* Mobile Navigation Menu */}
        <nav className="mobile-menu">
          <div className="flex gap-4">
            {sections.map(({ id, Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`p-2 rounded-full transition-colors ${
                  activeSection === id
                    ? 'bg-white/20 text-white'
                    : 'text-white/60 hover:text-white'
                }`}
                onClick={() => setActiveSection(id)}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Index;
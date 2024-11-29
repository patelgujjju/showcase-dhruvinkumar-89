import React from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export const SkillsSection = ({ inView }: { inView: boolean }) => {
  const skillCategories = [
    {
      category: "Languages & Tools",
      skills: ["C", "C++", "Python", "HTML", "CSS", "JavaScript", "SQL", "GitHub", "Tableau"]
    },
    {
      category: "Frameworks & Libraries",
      skills: ["Pandas", "NumPy", "Matplotlib", "Node.js", "Express.js"]
    },
    {
      category: "Technologies",
      skills: ["Linux", "Git", "MySQL", "Google Earth Engine"]
    },
    {
      category: "Soft Skills",
      skills: ["Problem Solving", "Leadership", "Team Work", "Financial Planning"]
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="container max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent 
                       bg-gradient-to-r from-emerald-300 to-blue-300">
          Skills & Expertise
        </h2>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 
                        ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          {skillCategories.map((category, idx) => (
            <div key={idx} className="group backdrop-blur-xl bg-white/5 rounded-3xl p-6 border border-white/10
                                    transform transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-300/30 to-blue-300/30 rounded-3xl blur opacity-0 
                            group-hover:opacity-100 transition duration-1000"></div>
              <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text 
                           bg-gradient-to-r from-emerald-300 to-blue-300">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <HoverCard key={skillIdx}>
                    <HoverCardTrigger>
                      <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10
                                    transform transition-all duration-300 hover:scale-[1.05] hover:bg-white/10
                                    cursor-pointer">
                        {skill}
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="bg-gray-900/95 border border-white/10">
                      <p className="text-sm">Proficient in {skill}</p>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
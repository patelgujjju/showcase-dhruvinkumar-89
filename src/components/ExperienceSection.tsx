import React from 'react';
import { Briefcase } from "lucide-react";

export const ExperienceSection = ({ inView }: { inView: boolean }) => (
  <section className="py-20 px-4 relative">
    <div className="container max-w-4xl">
      <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent 
                     bg-gradient-to-r from-purple-300 to-pink-300">
        Experience
      </h2>
      <div className={`space-y-8 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
        {[
          {
            title: "Data Science Intern",
            company: "Prodigy Infotech",
            period: "July 2024 - Aug 2024",
            description: "Data Analysis and Visualization using Python and Tableau, resulting in actionable insights and improved decision-making processes."
          },
          {
            title: "SQL Developer Intern",
            company: "Main Flow Services",
            period: "July 2024 - Sept 2024",
            description: "Designed, created, and managed databases, focusing on efficient queries and data extraction for business insights."
          }
        ].map((exp, idx) => (
          <div key={idx} className="group relative backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10
                                  transform transition-all duration-500 hover:scale-[1.02]">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-300/30 to-emerald-300/30 rounded-3xl blur opacity-0 
                          group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative flex items-start gap-6">
              <Briefcase className="w-8 h-8 text-blue-300/90 group-hover:rotate-12 transition-transform" />
              <div>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text 
                             bg-gradient-to-r from-blue-300 to-emerald-300">
                  {exp.title}
                </h3>
                <p className="text-xl text-gray-300/90 mb-2">{exp.company}</p>
                <p className="text-gray-400 mb-4">{exp.period}</p>
                <p className="text-gray-300/90">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
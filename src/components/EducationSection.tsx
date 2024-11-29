import React from 'react';
import { GraduationCap } from "lucide-react";

export const EducationSection = ({ inView }: { inView: boolean }) => (
  <section className="py-20 px-4 relative">
    <div className="container max-w-4xl">
      <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent 
                     bg-gradient-to-r from-blue-300 to-emerald-300">
        Education
      </h2>
      <div className={`relative group backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10
                      transform transition-all duration-500 hover:scale-[1.02]
                      ${inView ? 'animate-slide-in' : 'opacity-0 translate-x-[-100px]'}`}>
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-300/30 to-pink-300/30 rounded-3xl blur opacity-0 
                      group-hover:opacity-100 transition duration-1000"></div>
        <div className="relative">
          <div className="flex items-start gap-6 mb-8">
            <GraduationCap className="w-8 h-8 text-purple-300/90 animate-bounce" />
            <div className="space-y-8">
              <div className="transform hover:scale-[1.01] transition-transform p-4 rounded-xl hover:bg-white/5">
                <p className="text-xl font-medium">MIT World Peace University</p>
                <p className="text-gray-400">B.Tech Computer Science (AI and Data Science)</p>
                <p className="text-emerald-300/90 font-semibold">CGPA: 8.59/10</p>
              </div>
              <div className="transform hover:scale-[1.01] transition-transform p-4 rounded-xl hover:bg-white/5">
                <p className="text-xl font-medium">Sahjanand School of Achiever</p>
                <p className="text-gray-400">HSC: 72%</p>
              </div>
              <div className="transform hover:scale-[1.01] transition-transform p-4 rounded-xl hover:bg-white/5">
                <p className="text-xl font-medium">Caravan High School</p>
                <p className="text-gray-400">SSC: 92.8%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
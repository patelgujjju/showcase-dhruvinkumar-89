import React from 'react';
import { Code } from "lucide-react";

export const ProjectsSection = ({ inView }: { inView: boolean }) => (
  <section className="py-20 px-4 relative">
    <div className="container max-w-4xl">
      <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent 
                     bg-gradient-to-r from-pink-300 to-purple-300">
        Projects
      </h2>
      <div className={`space-y-8 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="group relative backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10
                      transform transition-all duration-500 hover:scale-[1.02]">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-300/30 to-purple-300/30 rounded-3xl blur opacity-0 
                        group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <Code className="w-6 h-6 text-pink-300/90" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                Vehicle Rental System
              </span>
            </h3>
            <div className="space-y-6 ml-9">
              <div>
                <h4 className="text-xl text-gray-300/90 mb-2">Full-Stack Version</h4>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Built using Node.js, Express, HTML, CSS, MySQL, and JavaScript</li>
                  <li>Implemented secure user authentication and role-based access control</li>
                  <li>Enabled customer booking and driver management features</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl text-gray-300/90 mb-2">Console Version (C++)</h4>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Secure user authentication system</li>
                  <li>Automated invoice generation with GST calculation</li>
                  <li>OTP-based payment confirmation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="group relative backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10
                      transform transition-all duration-500 hover:scale-[1.02]">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-300/30 to-blue-300/30 rounded-3xl blur opacity-0 
                        group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <Code className="w-6 h-6 text-purple-300/90" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                Data Analytics Dashboard
              </span>
            </h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-9">
              <li>Interactive dashboard built with Tableau</li>
              <li>Visualization of customer purchase patterns</li>
              <li>Analysis of key metrics and seasonal trends</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);
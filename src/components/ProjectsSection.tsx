import React from 'react';
import { Code, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const ProjectsSection = ({ inView }: { inView: boolean }) => (
  <section className="py-20 px-4 relative">
    <div className="container max-w-4xl">
      <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent 
                     bg-gradient-to-r from-pink-300 to-purple-300">
        Projects
      </h2>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
        <Card className="group relative backdrop-blur-xl bg-white/5 border-white/10
                      transform transition-all duration-500 hover:scale-[1.02]
                      hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold flex items-center gap-3">
              <Code className="w-6 h-6 text-pink-300/90" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                Vehicle Rental System
              </span>
            </CardTitle>
            <CardDescription className="text-gray-400">
              A comprehensive rental management solution
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
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
          </CardContent>
          <CardFooter className="justify-end space-x-4">
            <Button variant="outline" size="icon" className="bg-transparent border-white/10">
              <Github className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="bg-transparent border-white/10">
              <ExternalLink className="w-4 h-4" />
            </Button>
          </CardFooter>
        </Card>

        <Card className="group relative backdrop-blur-xl bg-white/5 border-white/10
                      transform transition-all duration-500 hover:scale-[1.02]
                      hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold flex items-center gap-3">
              <Code className="w-6 h-6 text-purple-300/90" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                Data Analytics Dashboard
              </span>
            </CardTitle>
            <CardDescription className="text-gray-400">
              Interactive visualization platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Interactive dashboard built with Tableau</li>
              <li>Visualization of customer purchase patterns</li>
              <li>Analysis of key metrics and seasonal trends</li>
            </ul>
          </CardContent>
          <CardFooter className="justify-end space-x-4">
            <Button variant="outline" size="icon" className="bg-transparent border-white/10">
              <Github className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="bg-transparent border-white/10">
              <ExternalLink className="w-4 h-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  </section>
);
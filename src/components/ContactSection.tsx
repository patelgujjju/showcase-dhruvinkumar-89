import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export const ContactSection = () => (
  <section className="py-20 px-4 relative">
    <div className="container max-w-4xl text-center">
      <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text 
                     bg-gradient-to-r from-blue-300 to-emerald-300">
        Let's Connect
      </h2>
      <div className="flex justify-center gap-8 mb-12">
        {[
          { icon: Linkedin, href: "https://linkedin.com/in/pateldhruvinkumar", label: "LinkedIn" },
          { icon: Github, href: "https://github.com/dhruvinhet", label: "GitHub" },
          { icon: Mail, href: "mailto:dhruvin5134@gmail.com", label: "Email" },
          { icon: Phone, href: "tel:+919537428629", label: "Call" }
        ].map(({ icon: Icon, href, label }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" 
             className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-300/30 to-emerald-300/30 rounded-full blur 
                          opacity-0 group-hover:opacity-100 transition duration-1000"></div>
            <Button variant="outline" size="icon"
                    className="relative bg-gray-900/50 border-white/10 backdrop-blur-xl
                             transform transition-all duration-300 hover:scale-110">
              <Icon className="w-5 h-5 group-hover:text-white transition-colors" />
            </Button>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 
                           opacity-0 group-hover:opacity-100 transition-opacity
                           text-sm text-gray-400 whitespace-nowrap">
              {label}
            </span>
          </a>
        ))}
      </div>
      <p className="text-xl text-gray-300/90 animate-pulse">
        Ready to create something amazing together! ✨
      </p>
    </div>
  </section>
);
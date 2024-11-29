import React, { useState, useEffect } from 'react';
import { Mail, Download, Sparkles, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { TypeAnimation } from 'react-type-animation';
import { Tilt } from 'react-tilt';

const defaultTiltOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

export const HeroSection = ({ inView }: { inView: boolean }) => {
  const [isSpinning, setIsSpinning] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute top-4 right-4 font-mono text-lg text-transparent bg-clip-text 
                    bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse shadow-neon">
        {currentTime.toLocaleTimeString()}
      </div>
      
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-cover bg-center opacity-5" />
      
      <div className={`text-center space-y-8 p-6 md:p-12 backdrop-blur-lg bg-white/5 rounded-3xl border border-white/10 
                    transform transition-all duration-1000 hover:scale-[1.02] w-full max-w-4xl
                    ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="flex flex-col items-center gap-6">
          <Dialog>
            <DialogTrigger asChild>
              <div className="cursor-pointer">
                <Tilt options={defaultTiltOptions}>
                  <div 
                    className={`relative transform transition-all duration-300
                              ${isSpinning ? 'animate-[spin_3s_linear_infinite]' : ''}`}
                    onMouseEnter={() => setIsSpinning(false)}
                    onMouseLeave={() => setIsSpinning(true)}
                  >
                    <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-white/10 ring-4 ring-purple-300/20
                                   hover:scale-105 shadow-xl">
                      <AvatarImage
                        src="/lovable-uploads/b6bf3a56-d273-45b7-9f5c-4368b32978f0.png"
                        alt="Dhruvinkumar Patel"
                        className="object-cover"
                      />
                      <AvatarFallback>DP</AvatarFallback>
                    </Avatar>
                  </div>
                </Tilt>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 border-none bg-transparent">
              <img
                src="/lovable-uploads/b6bf3a56-d273-45b7-9f5c-4368b32978f0.png"
                alt="Dhruvinkumar Patel"
                className="w-full h-full object-contain rounded-lg"
              />
            </DialogContent>
          </Dialog>
          
          <div className="relative">
            <Sparkles className="absolute -top-8 -left-8 w-6 h-6 text-yellow-300/70 animate-pulse" />
            <Star className="absolute -top-4 -right-8 w-6 h-6 text-purple-300/70 animate-bounce" />
            <Heart className="absolute -bottom-4 -right-8 w-6 h-6 text-pink-300/70 animate-pulse" />
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold bg-clip-text text-transparent 
                       bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300
                       animate-text-gradient break-words px-4 md:px-8">
              Dhruvinkumar Patel
            </h1>
          </div>
        </div>
        
        <h2 className="text-xl sm:text-2xl md:text-4xl font-light">
          <TypeAnimation
            sequence={[
              'AI & Data Science Specialist',
              2000,
              'Full-Stack Developer',
              2000,
              'Problem Solver',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-emerald-300"
          />
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <Button className="group bg-gradient-to-r from-purple-400/80 to-pink-400/80 hover:from-pink-400/80 hover:to-purple-400/80
                         transform transition-all duration-300 hover:scale-105 w-full sm:w-auto">
            <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            Contact Me
          </Button>
          <Button variant="outline" 
                  className="group border-2 border-white/10 hover:border-white/20 backdrop-blur-lg
                           transform transition-all duration-300 hover:scale-105 w-full sm:w-auto">
            <Download className="w-5 h-5 mr-2 group-hover:-rotate-12 transition-transform" />
            Resume
          </Button>
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('message');
    
    // Format the message for WhatsApp
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/919537428629?text=${whatsappMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "You'll be redirected to send your message via WhatsApp.",
    });
    
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="container max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text 
                     bg-gradient-to-r from-blue-300 to-emerald-300">
          Let's Connect
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input 
                  name="user_name"
                  placeholder="Your Name" 
                  required 
                  className="bg-white/5 border-white/10 focus:border-white/20"
                />
              </div>
              <div>
                <Input 
                  name="user_email"
                  type="email" 
                  placeholder="Your Email" 
                  required 
                  className="bg-white/5 border-white/10 focus:border-white/20"
                />
              </div>
              <div>
                <Textarea 
                  name="message"
                  placeholder="Your Message" 
                  required 
                  className="bg-white/5 border-white/10 focus:border-white/20 min-h-[150px]"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-400/80 to-emerald-400/80 
                         hover:from-emerald-400/80 hover:to-blue-400/80
                         transform transition-all duration-300 hover:scale-105"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="flex justify-center gap-8">
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
            <div className="text-center space-y-4">
              <p className="text-xl text-gray-300/90">
                Ready to create something amazing together! ✨
              </p>
              <p className="text-gray-400">
                Feel free to reach out through the form or any of the social links above.
                I'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
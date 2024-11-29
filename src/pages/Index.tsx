import { Mail, Phone, Github, Linkedin, GraduationCap, Briefcase, Code, Download, Sparkles, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Index = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true });
  const [expRef, expInView] = useInView({ triggerOnce: true });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white overflow-hidden">
      {/* Hero Section with Parallax and Particles */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-cover bg-center opacity-10 animate-float" />
        <div className={`text-center space-y-8 p-12 backdrop-blur-lg bg-white/5 rounded-3xl border border-white/10 
                        transform transition-all duration-1000 hover:scale-105
                        ${heroInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="relative">
            <Sparkles className="absolute -top-8 -left-8 w-6 h-6 text-yellow-400 animate-pulse" />
            <Star className="absolute -top-4 -right-8 w-6 h-6 text-purple-400 animate-bounce" />
            <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent 
                         bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
                         animate-text-gradient">
              Dhruvinkumar Patel
            </h1>
          </div>
          <h2 className="text-2xl md:text-4xl font-light text-transparent bg-clip-text 
                       bg-gradient-to-r from-blue-400 to-emerald-400">
            Aspiring AI & Data Science Specialist
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto animate-float">
            Transforming data into insights, one line of code at a time ✨
          </p>
          <div className="flex gap-6 justify-center">
            <Button className="group bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500
                             transform transition-all duration-300 hover:scale-110 hover:rotate-2">
              <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Contact Me
            </Button>
            <Button variant="outline" 
                    className="group border-2 border-white/20 hover:border-white/40 backdrop-blur-lg
                             transform transition-all duration-300 hover:scale-110 hover:-rotate-2">
              <Download className="w-5 h-5 mr-2 group-hover:-rotate-12 transition-transform" />
              Resume
            </Button>
          </div>
        </div>
      </section>

      {/* About Section with Glass Effect */}
      <section ref={aboutRef} className="py-20 px-4 relative">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent 
                         bg-gradient-to-r from-blue-400 to-emerald-400">
            About Me
          </h2>
          <div className={`relative group backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10
                          transform transition-all duration-500 hover:scale-105
                          ${aboutInView ? 'animate-slide-in' : 'opacity-0 translate-x-[-100px]'}`}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl blur opacity-30 
                          group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative">
              <div className="flex items-start gap-6 mb-8">
                <GraduationCap className="w-8 h-8 text-purple-400 animate-bounce" />
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text 
                               bg-gradient-to-r from-purple-400 to-pink-400">Education</h3>
                  <div className="space-y-4">
                    <div className="transform hover:scale-105 transition-transform">
                      <p className="text-xl font-medium">MIT World Peace University</p>
                      <p className="text-gray-400">B.Tech Computer Science (AI and Data Science)</p>
                      <p className="text-emerald-400 font-semibold">CGPA: 8.59/10</p>
                    </div>
                    <div className="transform hover:scale-105 transition-transform">
                      <p className="text-xl font-medium">Sahjanand School of Achiever</p>
                      <p className="text-gray-400">HSC: 72%</p>
                    </div>
                    <div className="transform hover:scale-105 transition-transform">
                      <p className="text-xl font-medium">Caravan High School</p>
                      <p className="text-gray-400">SSC: 92.8%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with Animated Progress */}
      <section ref={skillsRef} className="py-20 px-4 relative overflow-hidden">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent 
                         bg-gradient-to-r from-purple-400 to-pink-400">
            Skills & Expertise
          </h2>
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 
                          ${skillsInView ? 'animate-fade-in' : 'opacity-0'}`}>
            {[
              { category: "Languages & Tools", skills: ["C", "C++", "Python", "HTML", "CSS", "JavaScript", "SQL", "GitHub", "Tableau"] },
              { category: "Frameworks & Libraries", skills: ["Pandas", "NumPy", "Matplotlib", "Node.js", "Express.js"] },
              { category: "Technologies", skills: ["Linux", "Git", "MySQL", "Google Earth Engine"] },
              { category: "Soft Skills", skills: ["Problem Solving", "Leadership", "Team Work", "Financial Planning"] }
            ].map((category, idx) => (
              <div key={idx} className="group backdrop-blur-xl bg-white/5 rounded-3xl p-6 border border-white/10
                                      transform transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text 
                             bg-gradient-to-r from-blue-400 to-emerald-400">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIdx) => (
                    <HoverCard key={skillIdx}>
                      <HoverCardTrigger>
                        <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10
                                      transform transition-all duration-300 hover:scale-110 hover:bg-white/10
                                      cursor-pointer">
                          {skill}
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="bg-gray-900/95 border border-white/10">
                        <p className="text-sm">Expert in {skill}</p>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section with Timeline */}
      <section ref={expRef} className="py-20 px-4 relative">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent 
                         bg-gradient-to-r from-blue-400 to-emerald-400">
            Experience
          </h2>
          <div className={`space-y-8 ${expInView ? 'animate-fade-in' : 'opacity-0'}`}>
            {[
              {
                title: "Data Science Intern",
                company: "Prodigy Infotech",
                period: "July 2024 - Aug 2024",
                description: "Data Analysis and Visualization using Python and Tableau, resulting in actionable insights."
              },
              {
                title: "SQL Developer Intern",
                company: "Main Flow Services",
                period: "July 2024 - Sept 2024",
                description: "Designed and managed databases, focusing on efficient queries and data extraction."
              }
            ].map((exp, idx) => (
              <div key={idx} className="group relative backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10
                                      transform transition-all duration-500 hover:scale-105">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-3xl blur opacity-30 
                              group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative flex items-start gap-6">
                  <Briefcase className="w-8 h-8 text-blue-400 group-hover:rotate-12 transition-transform" />
                  <div>
                    <h3 className="text-2xl font-semibold text-transparent bg-clip-text 
                                 bg-gradient-to-r from-blue-400 to-emerald-400">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-gray-300 mb-2">{exp.company}</p>
                    <p className="text-gray-400 mb-4">{exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Floating Icons */}
      <section className="py-20 px-4 relative">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text 
                         bg-gradient-to-r from-purple-400 to-pink-400">
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
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur 
                              opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                <Button variant="outline" size="icon"
                        className="relative bg-gray-900/50 border-white/10 backdrop-blur-xl
                                 transform transition-all duration-300 hover:scale-125 hover:rotate-12">
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
          <p className="text-xl text-gray-400 animate-pulse">
            Ready to create something amazing together! ✨
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
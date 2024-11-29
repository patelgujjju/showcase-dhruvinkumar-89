import { Mail, Phone, Github, Linkedin, GraduationCap, Briefcase, Code, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";

const Index = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true });
  const [expRef, expInView] = useInView({ triggerOnce: true });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-cover bg-center opacity-10" 
             style={{ transform: 'translateY(var(--scroll-offset, 0px))' }} />
        <div className={`text-center space-y-6 p-8 backdrop-blur-sm rounded-xl border border-white/10 
                        ${heroInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-primary 
                         bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Dhruvinkumar Patel
          </h1>
          <h2 className="text-2xl md:text-3xl text-secondary-foreground animate-pulse">
            Aspiring AI & Data Science Specialist
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions with data-driven insights
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="group hover:scale-105 transition-all duration-300">
              <Mail className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              Contact Me
            </Button>
            <Button variant="outline" 
                    className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Phone className="w-4 h-4 mr-2 group-hover:-rotate-12 transition-transform" />
              Call Me
            </Button>
          </div>
        </div>
      </section>

      {/* About Section with Glass Effect */}
      <section ref={aboutRef} className="py-20 px-4 relative">
        <div className="container max-w-4xl">
          <h2 className="section-title relative">
            <span className="absolute -left-4 top-0 w-2 h-full bg-primary rounded-full transform origin-left" />
            About Me
          </h2>
          <div className={`card backdrop-blur-md bg-white/80 border border-white/20 shadow-xl 
                          ${aboutInView ? 'animate-slide-in' : 'opacity-0 translate-x-[-100px]'}`}>
            <div className="flex items-start gap-4 mb-6">
              <GraduationCap className="w-6 h-6 text-primary animate-bounce" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground">
                  B.Tech in Computer Science (AI & Data Science)
                  <br />
                  MIT World Peace University
                  <br />
                  <span className="text-primary font-semibold">CGPA: 8.59/10</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with Animated Progress */}
      <section ref={skillsRef} className="py-20 px-4">
        <div className="container max-w-4xl">
          <h2 className="section-title">Skills</h2>
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 
                          ${skillsInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="card hover:scale-105 transition-transform duration-300
                          bg-gradient-to-br from-white to-accent/30 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                Technical Skills
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Python", level: 90 },
                  { name: "JavaScript", level: 85 },
                  { name: "SQL", level: 80 },
                  { name: "C++", level: 75 },
                  { name: "Node.js", level: 70 }
                ].map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-accent rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                        style={{ 
                          width: skillsInView ? `${skill.level}%` : '0%',
                          transition: 'width 1s ease-out'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section with Timeline */}
      <section ref={expRef} className="py-20 px-4 bg-accent/30 backdrop-blur-sm">
        <div className="container max-w-4xl">
          <h2 className="section-title">Experience</h2>
          <div className={`space-y-6 ${expInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="card group hover:shadow-2xl transition-all duration-300
                          transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <Briefcase className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform" />
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    Data Science Intern
                  </h3>
                  <p className="text-muted-foreground">Prodigy Infotech</p>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground">
                    <li className="hover:text-primary transition-colors">Conducted data analysis and visualization</li>
                    <li className="hover:text-primary transition-colors">Developed predictive models</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Floating Icons */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl text-center">
          <h2 className="section-title">Get In Touch</h2>
          <div className="flex justify-center gap-4 mb-8">
            {[
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Mail, href: "mailto:example@email.com", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <a 
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <Button 
                  variant="outline" 
                  size="icon"
                  className="hover:scale-110 transition-transform duration-300"
                >
                  <Icon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </Button>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 
                               opacity-0 group-hover:opacity-100 transition-opacity
                               text-sm text-muted-foreground">
                  {label}
                </span>
              </a>
            ))}
          </div>
          <p className="text-muted-foreground animate-pulse">
            Looking forward to connecting with you!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
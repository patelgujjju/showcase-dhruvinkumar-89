import { Mail, Phone, Github, Linkedin, GraduationCap, Briefcase, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/5 to-background px-4">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Dhruvinkumar Patel
          </h1>
          <h2 className="text-xl md:text-2xl text-secondary-foreground mb-6">
            Aspiring AI & Data Science Specialist
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Innovative solutions with data-driven insights
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="gap-2">
              <Mail className="w-4 h-4" />
              Contact Me
            </Button>
            <Button variant="outline" className="gap-2">
              <Phone className="w-4 h-4" />
              Call Me
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-accent">
        <div className="container max-w-4xl">
          <h2 className="section-title">About Me</h2>
          <div className="card">
            <div className="flex items-start gap-4 mb-6">
              <GraduationCap className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground">
                  B.Tech in Computer Science (AI & Data Science)
                  <br />
                  MIT World Peace University
                  <br />
                  CGPA: 8.59/10
                </p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Passionate about solving complex problems through AI and data analysis. 
              I combine technical expertise with creative thinking to deliver innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl">
          <h2 className="section-title">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                Technical Skills
              </h3>
              <div className="space-y-2">
                {["Python", "JavaScript", "SQL", "C++", "Node.js"].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="h-2 bg-primary rounded-full w-full">
                      <div className="h-full bg-secondary rounded-full" style={{ width: "85%" }} />
                    </div>
                    <span className="text-sm font-medium w-20">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Pandas", "NumPy", "Matplotlib", "Express.js", "MySQL", "Git"].map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-accent rounded-full text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-accent">
        <div className="container max-w-4xl">
          <h2 className="section-title">Experience</h2>
          <div className="space-y-6">
            <div className="card">
              <div className="flex items-start gap-4">
                <Briefcase className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">Data Science Intern</h3>
                  <p className="text-muted-foreground">Prodigy Infotech</p>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground">
                    <li>Conducted data analysis and visualization</li>
                    <li>Developed predictive models</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-start gap-4">
                <Briefcase className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">SQL Developer Intern</h3>
                  <p className="text-muted-foreground">Main Flow Services</p>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground">
                    <li>Managed and optimized databases</li>
                    <li>Developed efficient SQL queries</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl text-center">
          <h2 className="section-title">Get In Touch</h2>
          <div className="flex justify-center gap-4 mb-8">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Linkedin className="w-5 h-5" />
              </Button>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Github className="w-5 h-5" />
              </Button>
            </a>
            <a href="mailto:example@email.com">
              <Button variant="outline" size="icon">
                <Mail className="w-5 h-5" />
              </Button>
            </a>
          </div>
          <p className="text-muted-foreground">
            Looking forward to connecting with you!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
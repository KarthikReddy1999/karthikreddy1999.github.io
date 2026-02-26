import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 pb-12 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-mono text-xs uppercase tracking-wider">Available for new opportunities</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1]">
            Building <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400 text-glow">
              Production-Grade
            </span><br />
            Systems.
          </h1>

          <div className="h-8 md:h-10 text-xl md:text-2xl text-muted-foreground font-mono">
            <span className="text-primary">{'>'} </span>
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'SDE',
                2000,
                'Backend Engineer',
                2000,
                'AI Automations Specialist',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            I'm Karthik Reddy, a developer with 3 years of experience engineering scalable web applications, migrating legacy systems, and integrating AI solutions that drive real business impact.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a 
              href="#projects" 
              className="px-6 py-3.5 rounded-lg bg-primary text-background font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              View Work <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3.5 rounded-lg bg-[#111111] border border-[#333] hover:border-primary/50 text-foreground transition-all flex items-center gap-2 glow-hover"
            >
              <Mail className="w-4 h-4" /> Contact Me
            </a>
          </div>

          <div className="flex items-center gap-6 pt-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Terminal Window Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:block relative"
        >
          <div className="w-full rounded-xl overflow-hidden glass-panel shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-[#1A1A1A] px-4 py-3 flex items-center gap-2 border-b border-[#333]">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-secondary/80" />
              <div className="w-3 h-3 rounded-full bg-primary/80" />
              <div className="mx-auto text-xs text-muted-foreground font-mono">karthik@portfolio:~</div>
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm leading-relaxed text-muted-foreground min-h-[300px]">
              <div className="flex gap-4 mb-2">
                <span className="text-primary">karthik@portfolio:~$</span>
                <span className="text-foreground">cat profile.json</span>
              </div>
              <pre className="text-[#A0A0A0] overflow-x-auto pb-4">
{`{
  "name": "Karthik Reddy",
  "role": "Full Stack Developer",
  "location": "Currently Hyderabad, India",
  "skills": [
    "TypeScript", 
    "React", 
    "Node.js", 
    "Python",
    "PostgreSQL",
    "AWS"
  ],
  "currentFocus": "Building AI-powered SaaS",
  "coffeePreference": "Dark Roast"
}`}
              </pre>
              <div className="flex gap-4 mt-2">
                <span className="text-primary">karthik@portfolio:~$</span>
                <span className="animate-pulse w-2 h-4 bg-primary inline-block" />
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-primary/20 rounded-full" />
          <div className="absolute -top-6 -right-6 w-32 h-32 border border-primary/10 rounded-full" />
        </motion.div>

      </div>
    </section>
  );
}

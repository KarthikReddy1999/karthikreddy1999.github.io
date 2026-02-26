import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Cpu, Cloud } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="w-5 h-5 text-primary" />,
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"]
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5 text-primary" />,
    skills: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"]
  },
  {
    title: "Database",
    icon: <Database className="w-5 h-5 text-primary" />,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Drizzle ORM", "Prisma"]
  },
  {
    title: "AI & Cloud",
    icon: <Cloud className="w-5 h-5 text-primary" />,
    skills: ["OpenAI API", "AWS EC2/S3", "Docker", "CI/CD", "Vercel"]
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold flex items-center gap-4"
          >
            <span className="text-primary font-mono text-xl font-normal">01.</span>
            About Me
            <div className="h-[1px] bg-[#222222] flex-1 max-w-[300px] ml-4" />
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              Hello! I'm Karthik, a software engineer who thrives at the intersection of robust backend architecture and sleek, intuitive user interfaces. My journey in tech started with automating mundane tasks, which quickly evolved into building comprehensive, full-stack applications.
            </p>
            <p>
              Over the last 3 years, I've had the privilege of working at an industry-leading logistics company, a fast-paced software agency, and pursuing ambitious independent projects. My main focus these days is building <span className="text-primary font-medium">accessible, inclusive products</span> and digital experiences while integrating cutting-edge AI capabilities.
            </p>
            <p>
              When I'm not at my computer, I'm usually exploring new coffee shops, reading sci-fi, or tweaking my terminal dotfiles for the hundredth time.
            </p>
            
            <div className="mt-8 p-6 glass-panel rounded-xl border-l-4 border-l-primary relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Cpu className="absolute top-6 right-6 w-24 h-24 text-primary/5 -rotate-12" />
              <h3 className="text-xl font-display font-bold text-foreground mb-2">Core Philosophy</h3>
              <p className="text-base text-muted-foreground font-mono text-sm">
                Write code that humans can read and machines can execute efficiently. Never stop optimizing.
              </p>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-xl glow-hover flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#1A1A1A] flex items-center justify-center border border-[#333]">
                    {cat.icon}
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{cat.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2 mt-auto">
                  {cat.skills.map((skill, sIdx) => (
                    <li 
                      key={sIdx}
                      className="px-3 py-1.5 bg-[#1A1A1A] text-muted-foreground border border-[#333] rounded-md text-xs font-mono"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Full Stack Engineer & Automation",
    company: "Hub Group Inc, Chicago, United States",
    period: "2024 - 2025",
    description: "Led the migration of legacy LTL billing systems to modern microservices architecture. Improved data processing efficiency by 40% and established CI/CD pipelines reducing deployment times.",
    tech: ["Python", "SQL", "Docker", "AWS"]
  },
  {
    id: 2,
    role: "Software Developer",
    company: "KET Systems, Cumming, United States",
    period: "(May – December)2023",
    description: "Architected and deployed scalable web applications for enterprise clients. Integrated third-party APIs and built responsive, accessible user interfaces.",
    tech: ["React", "Node.js", "TypeScript", "PostgreSQL"]
  },
  {
    id: 3,
    role: "Software Analyst",
    company: "Illinois Institute of Technology, Chicago, United States",
    period: "(Jan - May)2023",
    description: "Collaborated on machine learning models for predictive analytics. Processed large datasets and visualized findings for academic publications.",
    tech: ["Python", "Pandas", "Scikit-Learn", "Data Viz"]
  },
  {
    id: 4,
    role: "Software Developer Intern",
    company: "Casa Central, Chicago, United States",
    period: "(Jan - March)2023",
    description: "Built internal reporting and web tools at Casa Central by integrating MySQL-backed dashboards and Microsoft 365/SharePoint workflows, optimizing SQL queries, and supporting zero-loss data migration that led to production adoption.",
    tech: ["Javascript", "SQL", "MySql", "SharePoint", "Microsoft365", "Data Migration"]
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold inline-flex items-center gap-4"
          >
            <span className="text-primary font-mono text-xl font-normal">03.</span>
            Where I've Worked
          </motion.h2>
        </div>

        <div ref={containerRef} className="relative">
          {/* Timeline Background Line */}
          <div className="absolute left-[20px] md:left-[50%] top-0 bottom-0 w-[2px] bg-[#222222] -translate-x-1/2" />
          
          {/* Animated Timeline Line */}
          <motion.div 
            className="absolute left-[20px] md:left-[50%] top-0 w-[2px] bg-primary shadow-[0_0_10px_rgba(0,255,148,0.5)] -translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex items-center md:justify-between w-full pl-16 md:pl-0 ${
                    isEven ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[20px] md:left-[50%] w-10 h-10 rounded-full bg-[#111111] border-2 border-primary -translate-x-1/2 flex items-center justify-center z-10">
                    <Briefcase className="w-4 h-4 text-primary" />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[45%] ${isEven ? "md:text-left" : "md:text-right"}`}>
                    <div className="glass-panel p-6 md:p-8 rounded-2xl hover:border-primary/30 transition-colors group">
                      <div className="flex flex-col md:hidden mb-2">
                        <span className="text-primary font-mono text-sm">{exp.period}</span>
                      </div>
                      
                      <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      
                      <div className={`flex items-center gap-3 mt-1 mb-4 text-muted-foreground ${isEven ? "" : "md:justify-end"}`}>
                        <span className="font-semibold text-foreground/80">{exp.company}</span>
                        <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-[#333]" />
                        <span className="hidden md:inline-block text-primary/80 font-mono text-sm">{exp.period}</span>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {exp.description}
                      </p>

                      <ul className={`flex flex-wrap gap-2 mt-6 ${isEven ? "" : "md:justify-end"}`}>
                        {exp.tech.map((t, i) => (
                          <li key={i} className="px-2.5 py-1 bg-primary/5 text-primary border border-primary/10 rounded text-xs font-mono">
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

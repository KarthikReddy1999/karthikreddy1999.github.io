import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "RecipeX",
    description: "An AI-powered recipe platform that generates custom culinary creations based on available ingredients and dietary restrictions. Features comprehensive user accounts and saved collections.",
    tech: ["React", "Node.js", "OpenAI API", "PostgreSQL"],
    category: "AI",
    github: "https://github.com/KarthikReddy1999/Recipex",
    githubSecondary: "",
    live: "https://recipex-ai.vercel.app/"
  },
  {
    id: 2,
    title: "Fake Image Detection Platform",
    description: "A full-stack project with separate frontend and backend repositories for detecting manipulated images through an API-driven workflow. It uses AI-powered analysis to identify likely fake or synthetic image content.",
    tech: ["Frontend", "Backend API", "Image Processing", "ML"],
    category: "Full Stack",
    github: "https://github.com/KarthikReddy1999/Fake_Image_frontend",
    githubSecondary: "https://github.com/KarthikReddy1999/Fake_Image_backend",
    live: ""
  },
  {
    id: 4,
    title: "String Art Maker",
    description: "A string art generation tool that converts visual input into structured patterns for creative and computational art workflows.",
    tech: ["JavaScript", "Pattern Generation", "Visualization"],
    category: "Creative Coding",
    github: "https://github.com/KarthikReddy1999/String-Art-Maker",
    githubSecondary: "",
    live: ""
  },
  {
    id: 3,
    title: "Heart Attack Prediction Model",
    description: "Machine learning model trained on medical datasets to predict cardiovascular risk factors with 89% accuracy. Includes a dashboard for data visualization.",
    tech: ["Python", "Scikit-Learn", "Pandas", "Flask"],
    category: "AI",
    github: "#",
    githubSecondary: "",
    live: "#"
  }
];

const categories = ["All", ...Array.from(new Set(projectsData.map((proj) => proj.category)))];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projectsData.filter(
    proj => filter === "All" || proj.category === filter
  );

  return (
    <section id="projects" className="py-24 relative bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold flex items-center gap-4"
          >
            <span className="text-primary font-mono text-xl font-normal">02.</span>
            Featured Work
            <div className="hidden md:block h-[1px] bg-[#222222] flex-1 min-w-[100px] ml-4" />
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full font-mono text-sm whitespace-nowrap transition-all ${
                  filter === cat 
                    ? "bg-primary text-background font-bold" 
                    : "bg-[#111111] text-muted-foreground border border-[#333] hover:border-primary/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-panel p-8 rounded-2xl flex flex-col group glow-hover"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:-translate-y-1 transition-transform">
                    <FolderGit2 className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-4">
                    {project.github && (
                      <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noreferrer">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.githubSecondary && (
                      <a href={project.githubSecondary} className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noreferrer" title="Backend Repo">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noreferrer">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-[#222222]">
                  {project.tech.map((tech, idx) => (
                    <li key={idx} className="text-xs font-mono text-primary/80">
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

import Cursor from "@/components/Cursor";
import NoiseBackground from "@/components/NoiseBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative bg-[#0A0A0A] text-[#F5F5F5] overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      <NoiseBackground />
      <Cursor />
      <Navbar />
      
      <Hero />
      <Stats />
      <About />
      <Projects />
      <Experience />
      <Contact />
      
    </main>
  );
}

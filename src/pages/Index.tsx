
import Hero from "@/components/Hero";
import About from "@/components/About";
import ResearchInterests from "@/components/ResearchInterests";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <ResearchInterests />
      <Experience />
      <Skills />
      <Projects />
      <Research />
      <Certifications />
      <Contact />
    </div>
  );
};

export default Index;


import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Linkedin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-6xl font-bold shadow-2xl">
                SD
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am Simon Das, an AI enthusiast and software engineer. With a background in Computer Science from Ahsanullah University of Science and Technology, I specialize in interactive conversational AI, retrieval-augmented generation, and multi-agent architectures.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My passion lies in developing user-centered AI solutions that bridge the gap between cutting-edge technology and real-world applications.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Download CV
                </Button>
              </div>
              
              <div className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Connect with me</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/in/simondas/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com/simon-das" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

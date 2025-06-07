
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground text-lg">
                I'm always interested in discussing AI research, collaboration opportunities, 
                or potential graduate school prospects. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-foreground">simon.das@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-foreground">+880 123 456 7890</span>
                </div>
              </div>
            </div>
            
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-foreground mb-4">Connect on Social</h4>
                <div className="space-y-3">
                  <a 
                    href="https://www.linkedin.com/in/simondas/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                    <span className="text-foreground">LinkedIn Profile</span>
                  </a>
                  <a 
                    href="https://github.com/simon-das" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <Github className="w-5 h-5 text-primary" />
                    <span className="text-foreground">GitHub Profile</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

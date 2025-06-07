
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI RAG Application",
      description: "Multi-agent AI application using GPT-3.5/4o-mini for knowledge retrieval from PDFs and external APIs with seamless agent interaction.",
      technologies: ["Python", "LangChain", "GPT-4", "FastAPI", "ChromaDB"],
      type: "AI/ML"
    },
    {
      title: "AI-powered Medical Research Paper Management",
      description: "Advanced system for summarization and study chart generation from medical research papers using natural language processing.",
      technologies: ["Python", "NLP", "Django", "PostgreSQL"],
      type: "Healthcare AI"
    },
    {
      title: "Dental Practice Management System",
      description: "Comprehensive platform with real-time communication, secure payments, and appointment booking for dental practices.",
      technologies: ["React.js", "Django", "WebSocket", "AWS"],
      type: "Web Application"
    },
    {
      title: "Team Management Software",
      description: "Efficient resource and project management system for optimizing team productivity and workflow automation.",
      technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
      type: "Enterprise"
    },
    {
      title: "Stock Market Data Prediction",
      description: "Undergraduate thesis project using XGBoost for stock market prediction, outperforming SVM and Backpropagation models.",
      technologies: ["Python", "XGBoost", "Machine Learning", "Data Analysis"],
      type: "Research"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge variant="secondary" className="mb-2">
                      {project.type}
                    </Badge>
                    <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm">
                      <Github className="w-4 h-4" />
                      Code
                    </button>
                    <button className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "AI RAG Application",
      description: "Multi-agent AI application using GPT-3.5/4o-mini for knowledge retrieval from PDFs and external APIs with seamless agent interaction.",
      technologies: ["Python", "GPT-4", "LangChain", "RAG", "Multi-Agent"],
      highlight: true
    },
    {
      title: "AI-powered Medical Research Paper Management",
      description: "Intelligent system for research paper summarization and study chart generation to streamline medical research workflows.",
      technologies: ["Python", "NLP", "AI", "Research Tools"]
    },
    {
      title: "Dental Practice Management System",
      description: "Comprehensive system with real-time communication, secure payments, and appointment booking for dental practices.",
      technologies: ["React.js", "Django", "WebSocket", "Payment Integration"]
    },
    {
      title: "Team Management Software",
      description: "Efficient resource and project management platform designed for teams to optimize workflows and collaboration.",
      technologies: ["JavaScript", "React.js", "Project Management"]
    },
    {
      title: "Stock Market Data Prediction",
      description: "Undergraduate thesis project utilizing XGBoost for market prediction, outperforming traditional machine learning models.",
      technologies: ["Python", "XGBoost", "Machine Learning", "Data Analysis"],
      highlight: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`shadow-lg border-0 hover:shadow-xl transition-all duration-300 h-full ${
                  project.highlight ? 'ring-2 ring-blue-200 bg-gradient-to-br from-blue-50 to-white' : 'bg-white'
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                    {project.highlight && (
                      <Badge className="bg-blue-100 text-blue-800">Featured</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
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

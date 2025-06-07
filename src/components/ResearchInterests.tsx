
import { Card, CardContent } from "@/components/ui/card";
import { Brain, MessageSquare, Database, Users, BarChart, Lightbulb } from "lucide-react";

const ResearchInterests = () => {
  const interests = [
    {
      icon: MessageSquare,
      title: "Interactive Conversational AI",
      description: "Developing intelligent chatbots and conversational interfaces"
    },
    {
      icon: Database,
      title: "Retrieval Augmented Generation",
      description: "Enhancing AI responses with external knowledge sources"
    },
    {
      icon: Brain,
      title: "Information Retrieval",
      description: "Advanced techniques for finding and organizing information"
    },
    {
      icon: Users,
      title: "Multi-Agent Architectures",
      description: "Coordinating multiple AI agents for complex tasks"
    },
    {
      icon: BarChart,
      title: "Machine Learning",
      description: "Statistical learning and predictive modeling"
    },
    {
      icon: Lightbulb,
      title: "User-Centered AI",
      description: "Designing AI systems with human needs in mind"
    }
  ];

  return (
    <section id="research" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            Research Interests
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            My research focuses on cutting-edge AI technologies and their practical applications
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0">
                <CardContent className="p-6 text-center">
                  <interest.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">{interest.title}</h3>
                  <p className="text-muted-foreground">{interest.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchInterests;

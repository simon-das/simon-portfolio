
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Big Data & Hadoop",
      provider: "Industry Certification",
      description: "Comprehensive training in big data processing and Hadoop ecosystem",
      year: "2023"
    },
    {
      title: "Intermediate Machine Learning",
      provider: "Kaggle",
      description: "Advanced machine learning techniques and model optimization",
      year: "2022"
    },
    {
      title: "Cloud Workshop",
      provider: "AWS/Azure",
      description: "Cloud computing fundamentals and deployment strategies",
      year: "2022"
    },
    {
      title: "Software Development Processes",
      provider: "Professional Development",
      description: "Agile methodologies and software engineering best practices",
      year: "2021"
    },
    {
      title: "MongoDB with Python",
      provider: "MongoDB University",
      description: "NoSQL database design and Python integration",
      year: "2021"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-full flex-shrink-0">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-1">{cert.title}</h3>
                      <p className="text-primary font-semibold text-sm">{cert.provider}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {cert.year}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">{cert.description}</p>
                  
                  <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm">
                    <ExternalLink className="w-4 h-4" />
                    View Certificate
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

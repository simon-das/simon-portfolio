
import { Card, CardContent } from "@/components/ui/card";

const ResearchInterests = () => {
  const interests = [
    "Interactive Conversational AI",
    "Retrieval Augmented Generation",
    "Information Retrieval",
    "Multi-Agent Architectures",
    "Machine Learning",
    "Data-driven Systems",
    "ML-driven Optimization Tools",
    "Computational Intelligence",
    "Generative AI",
    "User-Centered AI",
    "Applications of Large Language Models"
  ];

  return (
    <section id="research" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Research Interests
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                  </div>
                  <h3 className="font-semibold text-gray-900">{interest}</h3>
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

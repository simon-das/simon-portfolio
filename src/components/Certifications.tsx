
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Certifications = () => {
  const certifications = [
    {
      title: "Big Data & Hadoop",
      provider: "Technology Provider",
      year: "2023",
      category: "Data Science"
    },
    {
      title: "Intermediate Machine Learning",
      provider: "Learning Platform",
      year: "2023",
      category: "Machine Learning"
    },
    {
      title: "Cloud Workshop",
      provider: "Cloud Provider",
      year: "2022",
      category: "Cloud Computing"
    },
    {
      title: "Software Development Processes",
      provider: "Professional Institute",
      year: "2022",
      category: "Software Engineering"
    },
    {
      title: "MongoDB with Python",
      provider: "Database Institute",
      year: "2021",
      category: "Database"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Data Science": "bg-blue-100 text-blue-800",
      "Machine Learning": "bg-green-100 text-green-800",
      "Cloud Computing": "bg-purple-100 text-purple-800",
      "Software Engineering": "bg-orange-100 text-orange-800",
      "Database": "bg-gray-100 text-gray-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Certifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={getCategoryColor(cert.category)}>
                      {cert.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{cert.year}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {cert.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {cert.provider}
                  </p>
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

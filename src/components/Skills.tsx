
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "SQL"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Django REST framework", "React.js", "LangChain", "FastAPI"],
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "ChromaDB", "Microsoft SQL Server"],
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (Lambda, SQS, S3, API Gateway)", "WebSocket", "Redis", "SQLAlchemy", "Alembic"],
      color: "bg-orange-100 text-orange-800"
    },
    {
      title: "Version Control",
      skills: ["Git"],
      color: "bg-gray-100 text-gray-800"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${category.color}`}
                      >
                        {skill}
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

export default Skills;

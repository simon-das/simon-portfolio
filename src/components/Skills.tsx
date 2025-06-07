
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "SQL", level: 80 }
      ]
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "Django REST framework", level: 85 },
        { name: "React.js", level: 80 },
        { name: "LangChain", level: 75 },
        { name: "FastAPI", level: 80 }
      ]
    },
    {
      category: "Databases & Storage",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "ChromaDB", level: 70 },
        { name: "Microsoft SQL Server", level: 75 },
        { name: "Redis", level: 70 }
      ]
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS (Lambda, SQS, S3)", level: 80 },
        { name: "WebSocket", level: 75 },
        { name: "SQLAlchemy", level: 85 },
        { name: "Git", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-6">{category.category}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-foreground font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
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

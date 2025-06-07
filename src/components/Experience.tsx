
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Enosis Solutions",
      duration: "Nov 2023 – Present",
      achievements: [
        "Designed and developed multi-agent AI-powered RAG applications using GPT-3.5-Turbo and GPT-4o-mini",
        "Implemented features like seamless agent interaction, user-specific data access, chat history, and customized output formatting",
        "Enhanced system performance and user experience through advanced AI integration"
      ],
      badge: "Current"
    },
    {
      title: "Software Engineer",
      company: "Enosis Solutions",
      duration: "Aug 2021 – Oct 2023",
      achievements: [
        "Developed scalable web applications using modern frameworks",
        "Collaborated with cross-functional teams to deliver high-quality solutions",
        "Contributed to architecture decisions and code review processes"
      ]
    },
    {
      title: "Junior Software Engineer",
      company: "Anexa Technologies Ltd.",
      duration: "Mar 2021 – Jul 2021",
      achievements: [
        "Started career in software development",
        "Learned industry best practices and development methodologies",
        "Contributed to various client projects"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-xl text-blue-600 font-semibold">{exp.company}</p>
                      <p className="text-gray-600">{exp.duration}</p>
                    </div>
                    {exp.badge && (
                      <Badge className="bg-green-100 text-green-800 mt-2 md:mt-0">
                        {exp.badge}
                      </Badge>
                    )}
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

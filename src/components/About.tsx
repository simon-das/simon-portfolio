import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";
const About = () => {
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            About Me
          </h2>
          
          <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 to-white">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                I am Simon Das, an AI enthusiast and software engineer. With a background in Computer Science from 
                Ahsanullah University of Science and Technology, I specialize in interactive conversational AI, 
                retrieval-augmented generation, and multi-agent architectures. My passion lies in developing 
                user-centered AI solutions that bridge the gap between cutting-edge technology and real-world applications.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>📧 sd.simon.das@gmail.com</p>
                    <p>📱 +880 1626 100 890</p>
                    <p>📍 Dhaka, Bangladesh</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect with Me</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
                      <Linkedin className="w-5 h-5" />
                      <span>LinkedIn</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors">
                      <Github className="w-5 h-5" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default About;
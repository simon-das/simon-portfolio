
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, TrendingUp, Users } from "lucide-react";

const Research = () => {
  return (
    <section id="research-experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Research Experience
          </h2>
          
          <Card className="shadow-lg border-0">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Stock Market Data Prediction
                  </h3>
                  <Badge className="mb-4">Undergraduate Thesis</Badge>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Dataset</span>
                  </div>
                  <p className="text-muted-foreground ml-7">
                    Dhaka Stock Exchange data from 2015, comprehensive market analysis including price movements and trading volumes.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Supervisor</span>
                  </div>
                  <p className="text-muted-foreground ml-7">
                    Dr. S.M. Abdullah Al-Mamun
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">Models & Methodology</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">XGBoost</Badge>
                  <Badge variant="outline">SVM</Badge>
                  <Badge variant="outline">Backpropagation</Badge>
                  <Badge variant="outline">Machine Learning</Badge>
                </div>
                
                <h4 className="text-xl font-semibold text-foreground">Key Findings</h4>
                <p className="text-muted-foreground">
                  XGBoost demonstrated superior performance compared to traditional SVM and Backpropagation models, 
                  achieving higher accuracy in predicting stock market trends and providing more reliable forecasting capabilities.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Research;

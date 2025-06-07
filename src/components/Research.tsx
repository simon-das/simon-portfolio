
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Research = () => {
  return (
    <section id="research-experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Research Experience
          </h2>
          
          <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 to-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl text-gray-900">
                  Stock Market Data Prediction Thesis
                </CardTitle>
                <Badge className="bg-blue-100 text-blue-800">Undergraduate Research</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Research Details</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Dataset:</strong> Dhaka Stock Exchange (2015)</li>
                    <li><strong>Models Evaluated:</strong> XGBoost, SVM, Backpropagation</li>
                    <li><strong>Supervisor:</strong> Dr. S.M. Abdullah Al-Mamun</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Finding</h3>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 font-medium">
                      XGBoost outperformed other machine learning models in predicting stock market trends
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Research Impact</h3>
                <p className="text-gray-700">
                  This research contributed to understanding the effectiveness of ensemble learning methods 
                  in financial data prediction, specifically demonstrating XGBoost's superior performance 
                  in capturing complex patterns in stock market data compared to traditional approaches.
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

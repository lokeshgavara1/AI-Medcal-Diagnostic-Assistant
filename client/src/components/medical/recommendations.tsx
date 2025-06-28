import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

interface RecommendationsProps {
  recommendations: {
    immediate: string[];
    followup: string[];
    documentation: string[];
  };
}

export default function Recommendations({ recommendations }: RecommendationsProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
          <Lightbulb className="text-blue-600 mr-2 h-5 w-5" />
          Recommendations
        </h2>
        
        <div className="space-y-4">
          <div className="border-l-4 border-red-500 pl-4">
            <h4 className="font-medium text-slate-900">Immediate Actions</h4>
            <ul className="text-sm text-slate-700 mt-1 space-y-1">
              {recommendations.immediate.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
          
          <div className="border-l-4 border-orange-500 pl-4">
            <h4 className="font-medium text-slate-900">Follow-up</h4>
            <ul className="text-sm text-slate-700 mt-1 space-y-1">
              {recommendations.followup.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-medium text-slate-900">Documentation</h4>
            <ul className="text-sm text-slate-700 mt-1 space-y-1">
              {recommendations.documentation.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

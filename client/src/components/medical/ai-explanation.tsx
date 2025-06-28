import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot } from "lucide-react";

interface AIExplanationProps {
  explanation: {
    methodology: string;
    pipeline: string;
    clinicalContext: string;
    limitations: string;
  };
}

export default function AIExplanation({ explanation }: AIExplanationProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
          <Bot className="text-blue-600 mr-2 h-5 w-5" />
          AI Reasoning & Explanation
        </h2>
        
        <div className="prose max-w-none">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <h4 className="font-semibold text-slate-900 mb-2">Analysis Methodology</h4>
            <p className="text-sm text-slate-700">
              {explanation.methodology}
            </p>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Image Processing Pipeline</h4>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="default" className="bg-blue-600">Preprocessing</Badge>
                <Badge variant="default" className="bg-blue-600">Segmentation</Badge>
                <Badge variant="default" className="bg-blue-600">Feature Extraction</Badge>
                <Badge variant="default" className="bg-blue-600">Classification</Badge>
              </div>
              <p className="text-sm text-slate-700">
                {explanation.pipeline}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Clinical Context Integration</h4>
              <p className="text-sm text-slate-700">
                {explanation.clinicalContext}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Uncertainty & Limitations</h4>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-sm text-slate-700">
                  {explanation.limitations}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

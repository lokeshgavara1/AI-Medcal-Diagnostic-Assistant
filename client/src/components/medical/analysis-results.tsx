import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, AlertTriangle, Info, CheckCircle, Clock } from "lucide-react";
import type { AnalysisData } from "@/pages/medical-analysis";

interface AnalysisResultsProps {
  data: AnalysisData;
}

export default function AnalysisResults({ data }: AnalysisResultsProps) {
  const { analysis } = data;

  const getIconForFindingType = (type: string) => {
    switch (type) {
      case 'critical':
        return <AlertTriangle className="text-red-500 mt-1 h-4 w-4" />;
      case 'warning':
        return <Info className="text-orange-500 mt-1 h-4 w-4" />;
      default:
        return <CheckCircle className="text-green-500 mt-1 h-4 w-4" />;
    }
  };

  const getBgColorForFindingType = (type: string) => {
    switch (type) {
      case 'critical':
        return 'bg-red-50 border-red-200';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200';
      default:
        return 'bg-green-50 border-green-200';
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
          <TrendingUp className="text-blue-600 mr-2 h-5 w-5" />
          AI Analysis Results
        </h2>
        
        {/* Confidence Scores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-slate-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-700">Overall Confidence</span>
              <span className="text-lg font-bold text-green-600">{analysis.overallConfidence}%</span>
            </div>
            <Progress value={analysis.overallConfidence} className="h-2" />
          </div>
          
          <div className="bg-slate-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-700">Image Quality</span>
              <span className="text-lg font-bold text-green-600">{analysis.imageQuality}</span>
            </div>
            <Progress value={analysis.imageQuality === 'Excellent' ? 95 : analysis.imageQuality === 'Good' ? 80 : 60} className="h-2" />
          </div>
          
          <div className="bg-slate-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-700">Processing Time</span>
              <span className="text-lg font-bold text-blue-600">{analysis.processingTime}s</span>
            </div>
            <div className="flex items-center text-sm text-slate-600">
              <Clock className="mr-1 h-3 w-3" />
              Real-time analysis
            </div>
          </div>
        </div>

        {/* Findings */}
        <div className="space-y-4">
          <h3 className="font-semibold text-slate-900">Key Findings</h3>
          
          <div className="space-y-3">
            {analysis.findings.map((finding, index) => (
              <div key={index} className={`flex items-start space-x-3 p-3 border rounded-lg ${getBgColorForFindingType(finding.type)}`}>
                {getIconForFindingType(finding.type)}
                <div className="flex-1">
                  <p className="font-medium text-slate-900">{finding.title}</p>
                  <p className="text-sm text-slate-600 mt-1">{finding.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

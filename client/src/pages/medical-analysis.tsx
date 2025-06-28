import { useState } from "react";
import Header from "@/components/medical/header";
import ImageUpload from "@/components/medical/image-upload";
import ClinicalHistoryForm from "@/components/medical/clinical-history-form";
import ImageViewer from "@/components/medical/image-viewer";
import AnalysisResults from "@/components/medical/analysis-results";
import AIExplanation from "@/components/medical/ai-explanation";
import Recommendations from "@/components/medical/recommendations";
import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";

export interface AnalysisData {
  id: number;
  analysis: {
    findings: Array<{
      type: 'critical' | 'warning' | 'normal';
      title: string;
      description: string;
      confidence: number;
    }>;
    overallConfidence: number;
    imageQuality: string;
    processingTime: number;
  };
  explanation: {
    methodology: string;
    pipeline: string;
    clinicalContext: string;
    limitations: string;
  };
  recommendations: {
    immediate: string[];
    followup: string[];
    documentation: string[];
  };
  imageUrl: string;
}

export default function MedicalAnalysis() {
  const [analysisData, setAnalysisData] = useState<AnalysisData | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleAnalysisComplete = (data: AnalysisData) => {
    setAnalysisData(data);
    setUploadedImage(data.imageUrl);
  };

  const handleImageUpload = (imageUrl: string) => {
    setUploadedImage(imageUrl);
    // Reset analysis when new image is uploaded
    setAnalysisData(null);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Input Section */}
          <div className="lg:col-span-1 space-y-6">
            <ImageUpload onImageUpload={handleImageUpload} />
            <ClinicalHistoryForm 
              onAnalysisComplete={handleAnalysisComplete}
              uploadedImage={uploadedImage}
            />
          </div>

          {/* Right Column: Results Section */}
          <div className="lg:col-span-2 space-y-6">
            <ImageViewer 
              imageUrl={uploadedImage} 
              analysisData={analysisData}
            />
            
            {analysisData && (
              <>
                <AnalysisResults data={analysisData} />
                <AIExplanation explanation={analysisData.explanation} />
                <Recommendations recommendations={analysisData.recommendations} />
              </>
            )}
          </div>
        </div>

        {/* Footer Disclaimer */}
        <Card className="mt-12 bg-slate-100">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-4">
              <Shield className="text-blue-600 text-xl mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 mb-2">Important Medical Disclaimer</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  This AI diagnostic assistant is designed for educational and research purposes only. It is not intended to provide medical advice, diagnosis, or treatment recommendations. The results should not be used as a substitute for professional medical judgment, consultation, diagnosis, or treatment. Always seek the advice of qualified healthcare providers with any questions regarding medical conditions. The accuracy of AI-generated analysis may vary and should always be validated by licensed medical professionals.
                </p>
                <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-600">
                  <span>Version: 1.0.0-demo</span>
                  <span>Model: OpenAI GPT-4o</span>
                  <span>Last Updated: 2024</span>
                  <span>For Educational Use Only</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Developer Credit Footer */}
        <div className="mt-8 pt-8 border-t border-slate-200">
          <div className="text-center text-sm text-slate-600">
            <p>
              Developed by{" "}
              <a 
                href="https://www.linkedin.com/in/lokeshgavara5/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                Lokesh Gavara
              </a>
            </p>
            <p className="mt-1">Medical AI Diagnostic Assistant • Educational Demo Platform</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { ArrowLeft, Upload, FileText, Brain, Stethoscope } from "lucide-react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Documentation() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Analysis</span>
              </button>
            </Link>
            <div className="h-6 border-l border-gray-300"></div>
            <h1 className="text-2xl font-bold text-gray-900">Documentation</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          
          {/* Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="h-5 w-5" />
                <span>Overview</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                This medical AI diagnostic assistant uses advanced computer vision to analyze medical images 
                and provide detailed insights. The system combines image analysis with clinical history to 
                generate comprehensive reports including findings, explanations, and recommendations.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">AI-Powered Analysis</Badge>
                <Badge variant="secondary">Clinical History Integration</Badge>
                <Badge variant="secondary">Detailed Explanations</Badge>
                <Badge variant="secondary">Medical Recommendations</Badge>
              </div>
            </CardContent>
          </Card>

          {/* How to Use */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Stethoscope className="h-5 w-5" />
                <span>How to Use</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                
                {/* Step 1 */}
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-2 flex items-center space-x-2">
                      <Upload className="h-4 w-4" />
                      <span>Upload Medical Image</span>
                    </h3>
                    <p className="text-gray-700 mb-2">
                      Drag and drop or click to select a medical image. Supported formats include:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>JPEG (.jpg, .jpeg)</li>
                      <li>PNG (.png)</li>
                      <li>WebP (.webp)</li>
                    </ul>
                    <p className="text-sm text-gray-500 mt-2">
                      Maximum file size: 10MB
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-2 flex items-center space-x-2">
                      <FileText className="h-4 w-4" />
                      <span>Provide Clinical History (Optional)</span>
                    </h3>
                    <p className="text-gray-700 mb-2">
                      Add relevant patient information to improve analysis accuracy:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li><strong>Patient Age:</strong> Age in years (0-150)</li>
                      <li><strong>Gender:</strong> Male, Female, or Other</li>
                      <li><strong>Chief Complaint:</strong> Primary symptoms or concerns</li>
                      <li><strong>Medical History:</strong> Relevant past medical history</li>
                    </ul>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-2 flex items-center space-x-2">
                      <Brain className="h-4 w-4" />
                      <span>Review Analysis Results</span>
                    </h3>
                    <p className="text-gray-700 mb-2">
                      The AI will generate a comprehensive report including:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li><strong>Findings:</strong> Detailed observations with confidence levels</li>
                      <li><strong>Methodology:</strong> Explanation of the AI analysis process</li>
                      <li><strong>Recommendations:</strong> Suggested next steps and follow-up actions</li>
                    </ul>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>

          {/* Technical Details */}
          <Card>
            <CardHeader>
              <CardTitle>Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">AI Model</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• GPT-4 Vision (GPT-4o)</li>
                    <li>• Multimodal image analysis</li>
                    <li>• Clinical context integration</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Image Processing</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Base64 encoding</li>
                    <li>• Quality assessment</li>
                    <li>• Feature extraction</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Analysis Types</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Critical findings</li>
                    <li>• Warning indicators</li>
                    <li>• Normal observations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Output Format</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Structured JSON response</li>
                    <li>• Confidence scoring</li>
                    <li>• Processing time metrics</li>
                  </ul>
                </div>

              </div>
            </CardContent>
          </Card>

          {/* Best Practices */}
          <Card>
            <CardHeader>
              <CardTitle>Best Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Image Quality</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Use high-resolution images when possible</li>
                    <li>Ensure proper contrast and brightness</li>
                    <li>Avoid heavily compressed or pixelated images</li>
                    <li>Include relevant anatomical landmarks</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Clinical History</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Provide accurate patient demographics</li>
                    <li>Include relevant symptoms and duration</li>
                    <li>Mention significant past medical history</li>
                    <li>Note any current medications or treatments</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Interpreting Results</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Review confidence levels for each finding</li>
                    <li>Consider the overall image quality assessment</li>
                    <li>Read the AI methodology explanation</li>
                    <li>Follow recommended next steps</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
        
        {/* Developer Credit Footer */}
        <div className="mt-12 pt-8 border-t border-slate-200">
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
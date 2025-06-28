import { ArrowLeft, Brain, Shield, Zap, Users, Award, Heart } from "lucide-react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
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
            <h1 className="text-2xl font-bold text-gray-900">About</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          
          {/* Mission */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-red-500" />
                <span>Our Mission</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg leading-relaxed">
                We are dedicated to advancing medical diagnostics through artificial intelligence, 
                making high-quality image analysis accessible to healthcare professionals worldwide. 
                Our platform combines cutting-edge AI technology with clinical expertise to provide 
                accurate, reliable, and comprehensive medical image analysis.
              </p>
            </CardContent>
          </Card>

          {/* Platform Features */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                <span>Platform Features</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Brain className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-gray-900">AI-Powered Analysis</h3>
                      <p className="text-sm text-gray-600">
                        Advanced machine learning models trained on medical imaging data
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-gray-900">Secure Processing</h3>
                      <p className="text-sm text-gray-600">
                        HIPAA-compliant image processing with data encryption
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-purple-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-gray-900">Clinical Integration</h3>
                      <p className="text-sm text-gray-600">
                        Seamless integration with existing healthcare workflows
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Award className="h-5 w-5 text-orange-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-gray-900">Quality Assurance</h3>
                      <p className="text-sm text-gray-600">
                        Continuous model validation and performance monitoring
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>

          {/* Technology Stack */}
          <Card>
            <CardHeader>
              <CardTitle>Technology Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Artificial Intelligence</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">GPT-4 Vision</Badge>
                    <Badge variant="outline">Computer Vision</Badge>
                    <Badge variant="outline">Natural Language Processing</Badge>
                    <Badge variant="outline">Machine Learning</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">React 18</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Tailwind CSS</Badge>
                    <Badge variant="outline">Vite</Badge>
                    <Badge variant="outline">React Query</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">Express.js</Badge>
                    <Badge variant="outline">PostgreSQL</Badge>
                    <Badge variant="outline">Drizzle ORM</Badge>
                    <Badge variant="outline">OpenAI API</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Infrastructure</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Cloud Deployment</Badge>
                    <Badge variant="outline">Auto-scaling</Badge>
                    <Badge variant="outline">Load Balancing</Badge>
                    <Badge variant="outline">SSL/TLS Encryption</Badge>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>

          {/* Supported Image Types */}
          <Card>
            <CardHeader>
              <CardTitle>Supported Medical Imaging</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-blue-900 mb-2">Chest Imaging</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Chest X-rays</li>
                    <li>• CT scans</li>
                    <li>• MRI images</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-medium text-green-900 mb-2">Musculoskeletal</h3>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Bone X-rays</li>
                    <li>• Joint imaging</li>
                    <li>• Spine studies</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-medium text-purple-900 mb-2">Neurological</h3>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Brain CT/MRI</li>
                    <li>• Spine imaging</li>
                    <li>• Functional studies</li>
                  </ul>
                </div>

                <div className="p-4 bg-orange-50 rounded-lg">
                  <h3 className="font-medium text-orange-900 mb-2">Abdominal</h3>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• Abdominal CT</li>
                    <li>• Ultrasound</li>
                    <li>• GI studies</li>
                  </ul>
                </div>

                <div className="p-4 bg-red-50 rounded-lg">
                  <h3 className="font-medium text-red-900 mb-2">Cardiac</h3>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Echocardiograms</li>
                    <li>• Cardiac CT</li>
                    <li>• Angiography</li>
                  </ul>
                </div>

                <div className="p-4 bg-teal-50 rounded-lg">
                  <h3 className="font-medium text-teal-900 mb-2">Other Modalities</h3>
                  <ul className="text-sm text-teal-700 space-y-1">
                    <li>• Mammography</li>
                    <li>• Dermatology</li>
                    <li>• Pathology slides</li>
                  </ul>
                </div>

              </div>
            </CardContent>
          </Card>

          {/* Developer Information */}
          <Card>
            <CardHeader>
              <CardTitle>Developer & Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Developed By</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p className="font-medium text-blue-600">Lokesh Gavara</p>
                    <p>Email: lokeshgavara1@gmail.com</p>
                    <p>Phone: +91 8143760855</p>
                    <p>Location: Visakhapatnam, India</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Connect & Support</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <a 
                        href="https://www.linkedin.com/in/lokeshgavara5/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        LinkedIn Profile
                      </a>
                    </p>
                    <p>Response Time: 24-48 hours</p>
                    <p>Available for project discussions</p>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>

          {/* Version Information */}
          <Card>
            <CardHeader>
              <CardTitle>System Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                
                <div>
                  <span className="font-medium text-gray-900">Version:</span>
                  <span className="ml-2 text-gray-600">2.1.0</span>
                </div>

                <div>
                  <span className="font-medium text-gray-900">Last Updated:</span>
                  <span className="ml-2 text-gray-600">June 28, 2025</span>
                </div>

                <div>
                  <span className="font-medium text-gray-900">API Version:</span>
                  <span className="ml-2 text-gray-600">v1.0</span>
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
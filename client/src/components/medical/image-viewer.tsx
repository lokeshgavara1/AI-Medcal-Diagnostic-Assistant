import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, ZoomIn, ZoomOut, Maximize } from "lucide-react";
import type { AnalysisData } from "@/pages/medical-analysis";

interface ImageViewerProps {
  imageUrl: string | null;
  analysisData: AnalysisData | null;
}

export default function ImageViewer({ imageUrl, analysisData }: ImageViewerProps) {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));
  const handleResetZoom = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
          <Eye className="text-blue-600 mr-2 h-5 w-5" />
          Image Analysis View
        </h2>
        
        <div className="relative bg-slate-900 rounded-lg overflow-hidden h-80 lg:h-96">
          {imageUrl ? (
            <>
              <img 
                src={imageUrl} 
                alt="Medical image for analysis" 
                className="w-full h-full object-contain transition-transform duration-200"
                style={{
                  transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`
                }}
              />
              
              {/* Analysis Status Overlay */}
              <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-2 rounded-md text-sm">
                <span>
                  {analysisData ? 'Analysis Complete' : 'Ready for Analysis'}
                </span>
              </div>
              
              {/* Zoom Controls */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-black bg-opacity-70 text-white hover:bg-opacity-90"
                  onClick={handleZoomIn}
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-black bg-opacity-70 text-white hover:bg-opacity-90"
                  onClick={handleZoomOut}
                >
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-black bg-opacity-70 text-white hover:bg-opacity-90"
                  onClick={handleResetZoom}
                >
                  <Maximize className="h-4 w-4" />
                </Button>
              </div>

              {/* AI Analysis Markers */}
              {analysisData && (
                <>
                  {analysisData.analysis.findings.map((finding, index) => (
                    <div
                      key={index}
                      className={`absolute w-4 h-4 border-2 rounded-full animate-pulse ${
                        finding.type === 'critical' ? 'border-red-500' :
                        finding.type === 'warning' ? 'border-orange-500' :
                        'border-green-500'
                      }`}
                      style={{
                        top: `${30 + index * 20}%`,
                        left: `${40 + index * 15}%`
                      }}
                      title={finding.title}
                    />
                  ))}
                </>
              )}
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-slate-400">
              <div className="text-center">
                <Eye className="h-12 w-12 mx-auto mb-4" />
                <p>Upload a medical image to begin analysis</p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

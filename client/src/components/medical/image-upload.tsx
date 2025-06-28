import { useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { FileImage, Upload, CheckCircle } from "lucide-react";

interface ImageUploadProps {
  onImageUpload: (imageUrl: string) => void;
}

export default function ImageUpload({ onImageUpload }: ImageUploadProps) {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const { toast } = useToast();

  const handleFiles = useCallback((files: FileList) => {
    const file = files[0];
    
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload a valid image file (JPEG, PNG)",
        variant: "destructive"
      });
      return;
    }

    // Validate file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 10MB",
        variant: "destructive"
      });
      return;
    }

    setUploadedFile(file);
    
    // Convert to data URL for preview
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        onImageUpload(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);

    toast({
      title: "Image uploaded successfully",
      description: "Ready for analysis"
    });
  }, [onImageUpload, toast]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  }, [handleFiles]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
          <Upload className="text-blue-600 mr-2 h-5 w-5" />
          Medical Image Upload
        </h2>
        
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${
            dragActive 
              ? 'border-blue-600 bg-blue-50' 
              : 'border-slate-300 hover:border-blue-600'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => document.getElementById('file-input')?.click()}
        >
          <FileImage className="h-12 w-12 text-slate-400 mb-4 mx-auto" />
          <p className="text-slate-600 mb-2">Drop medical images here or click to browse</p>
          <p className="text-xs text-slate-500">Supports: JPEG, PNG (up to 10MB)</p>
          <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
            Select Files
          </Button>
          <input
            id="file-input"
            type="file"
            accept="image/*"
            onChange={handleFileInput}
            className="hidden"
          />
        </div>

        {uploadedFile && (
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-md">
              <div className="flex items-center space-x-3">
                <FileImage className="text-blue-600 h-4 w-4" />
                <span className="text-sm text-slate-700">{uploadedFile.name}</span>
              </div>
              <span className="text-xs text-green-600 flex items-center">
                <CheckCircle className="h-3 w-3 mr-1" />
                Uploaded
              </span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

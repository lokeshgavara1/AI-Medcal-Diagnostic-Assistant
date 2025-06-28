import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { ClipboardList, Brain } from "lucide-react";
import type { AnalysisData } from "@/pages/medical-analysis";

interface ClinicalHistoryFormProps {
  onAnalysisComplete: (data: AnalysisData) => void;
  uploadedImage: string | null;
}

interface ClinicalHistory {
  patientAge?: number;
  patientGender?: string;
  chiefComplaint?: string;
  medicalHistory?: string;
}

export default function ClinicalHistoryForm({ onAnalysisComplete, uploadedImage }: ClinicalHistoryFormProps) {
  const [formData, setFormData] = useState<ClinicalHistory>({});
  const { toast } = useToast();

  const analysisMutation = useMutation({
    mutationFn: async (data: { image: string; clinicalHistory: ClinicalHistory }) => {
      // Convert data URL to blob
      const response = await fetch(data.image);
      const blob = await response.blob();
      
      const formData = new FormData();
      formData.append('image', blob, 'medical-image.jpg');
      formData.append('clinicalHistory', JSON.stringify(data.clinicalHistory));

      const result = await fetch('/api/medical/analyze', {
        method: 'POST',
        body: formData,
        credentials: 'include'
      });

      if (!result.ok) {
        const error = await result.json();
        throw new Error(error.error || 'Analysis failed');
      }

      return result.json();
    },
    onSuccess: (data) => {
      onAnalysisComplete(data);
      toast({
        title: "Analysis Complete",
        description: "Medical image analysis has been completed successfully"
      });
    },
    onError: (error) => {
      toast({
        title: "Analysis Failed",
        description: error instanceof Error ? error.message : "Failed to analyze medical image",
        variant: "destructive"
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!uploadedImage) {
      toast({
        title: "No image uploaded",
        description: "Please upload a medical image first",
        variant: "destructive"
      });
      return;
    }

    analysisMutation.mutate({
      image: uploadedImage,
      clinicalHistory: formData
    });
  };

  const updateFormData = (field: keyof ClinicalHistory, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
          <ClipboardList className="text-blue-600 mr-2 h-5 w-5" />
          Clinical History
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="age" className="text-sm font-medium text-slate-700">Patient Age</Label>
            <Input
              id="age"
              type="number"
              placeholder="Age in years"
              value={formData.patientAge || ''}
              onChange={(e) => updateFormData('patientAge', parseInt(e.target.value) || undefined)}
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="gender" className="text-sm font-medium text-slate-700">Gender</Label>
            <Select onValueChange={(value) => updateFormData('patientGender', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="complaint" className="text-sm font-medium text-slate-700">Chief Complaint</Label>
            <Textarea
              id="complaint"
              placeholder="Primary symptoms and concerns..."
              value={formData.chiefComplaint || ''}
              onChange={(e) => updateFormData('chiefComplaint', e.target.value)}
              className="mt-1 h-20"
            />
          </div>
          
          <div>
            <Label htmlFor="history" className="text-sm font-medium text-slate-700">Medical History</Label>
            <Textarea
              id="history"
              placeholder="Previous conditions, medications, allergies..."
              value={formData.medicalHistory || ''}
              onChange={(e) => updateFormData('medicalHistory', e.target.value)}
              className="mt-1 h-24"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700"
            disabled={analysisMutation.isPending || !uploadedImage}
          >
            <Brain className="mr-2 h-4 w-4" />
            {analysisMutation.isPending ? 'Analyzing...' : 'Run AI Analysis'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

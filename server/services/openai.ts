import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_ENV_VAR || "default_key"
});

export interface MedicalAnalysisResult {
  findings: Array<{
    type: 'critical' | 'warning' | 'normal';
    title: string;
    description: string;
    confidence: number;
  }>;
  overallConfidence: number;
  imageQuality: string;
  processingTime: number;
}

export interface MedicalExplanation {
  methodology: string;
  pipeline: string;
  clinicalContext: string;
  limitations: string;
}

export interface MedicalRecommendations {
  immediate: string[];
  followup: string[];
  documentation: string[];
}

export async function analyzeMedicalImage(
  base64Image: string,
  clinicalHistory?: {
    patientAge?: number;
    patientGender?: string;
    chiefComplaint?: string;
    medicalHistory?: string;
  }
): Promise<MedicalAnalysisResult> {
  const startTime = Date.now();

  const clinicalContext = clinicalHistory ? `
Clinical Context:
- Patient Age: ${clinicalHistory.patientAge || 'Not specified'}
- Gender: ${clinicalHistory.patientGender || 'Not specified'}
- Chief Complaint: ${clinicalHistory.chiefComplaint || 'Not specified'}
- Medical History: ${clinicalHistory.medicalHistory || 'Not specified'}
` : '';

  const prompt = `You are an expert radiologist AI assistant for educational purposes. Analyze this medical image and provide findings in JSON format.

${clinicalContext}

Analyze the image and respond with JSON containing:
{
  "findings": [
    {
      "type": "critical|warning|normal",
      "title": "Brief finding title",
      "description": "Detailed description with confidence percentage",
      "confidence": 0-100
    }
  ],
  "overallConfidence": 0-100,
  "imageQuality": "Excellent|Good|Fair|Poor"
}

Focus on educational demonstration. Include 2-4 findings with varying severity levels.`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: prompt
            },
            {
              type: "image_url",
              image_url: {
                url: `data:image/jpeg;base64,${base64Image}`
              }
            }
          ],
        },
      ],
      response_format: { type: "json_object" },
      max_tokens: 1000,
    });

    const result = JSON.parse(response.choices[0].message.content || '{}');
    const processingTime = Date.now() - startTime;

    return {
      findings: result.findings || [],
      overallConfidence: result.overallConfidence || 85,
      imageQuality: result.imageQuality || 'Good',
      processingTime: Math.round(processingTime / 1000 * 10) / 10
    };
  } catch (error) {
    console.error('OpenAI analysis error:', error);
    throw error; // Re-throw the original error so we can handle specific cases
  }
}

export async function generateMedicalExplanation(
  analysisResult: MedicalAnalysisResult,
  clinicalHistory?: any
): Promise<MedicalExplanation> {
  const prompt = `As a medical AI expert, provide an educational explanation of the analysis methodology for this medical image analysis.

Analysis Results: ${JSON.stringify(analysisResult)}
Clinical History: ${JSON.stringify(clinicalHistory || {})}

Respond with JSON containing:
{
  "methodology": "Explanation of AI analysis approach and models used",
  "pipeline": "Description of image processing steps and feature extraction",
  "clinicalContext": "How clinical history influenced the analysis",
  "limitations": "Important limitations and uncertainties of the AI analysis"
}

Make this educational and appropriate for medical students and professionals.`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" },
      max_tokens: 800,
    });

    return JSON.parse(response.choices[0].message.content || '{}');
  } catch (error) {
    console.error('OpenAI explanation error:', error);
    throw error;
  }
}

export async function generateMedicalRecommendations(
  analysisResult: MedicalAnalysisResult,
  clinicalHistory?: any
): Promise<MedicalRecommendations> {
  const prompt = `Based on this medical image analysis, provide educational recommendations for follow-up care and documentation.

Analysis Results: ${JSON.stringify(analysisResult)}
Clinical History: ${JSON.stringify(clinicalHistory || {})}

Respond with JSON containing:
{
  "immediate": ["Array of immediate actions to consider"],
  "followup": ["Array of follow-up recommendations"],
  "documentation": ["Array of documentation suggestions"]
}

Provide 2-4 items in each category. Make recommendations educational and appropriate for medical training.`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" },
      max_tokens: 600,
    });

    return JSON.parse(response.choices[0].message.content || '{}');
  } catch (error) {
    console.error('OpenAI recommendations error:', error);
    throw error;
  }
}

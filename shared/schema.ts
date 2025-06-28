import { pgTable, text, serial, integer, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const medicalAnalyses = pgTable("medical_analyses", {
  id: serial("id").primaryKey(),
  imageFilename: text("image_filename").notNull(),
  imageBase64: text("image_base64").notNull(),
  patientAge: integer("patient_age"),
  patientGender: text("patient_gender"),
  chiefComplaint: text("chief_complaint"),
  medicalHistory: text("medical_history"),
  analysisResults: jsonb("analysis_results"),
  aiExplanation: text("ai_explanation"),
  recommendations: jsonb("recommendations"),
  confidence: integer("confidence"),
  processingTime: integer("processing_time"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertMedicalAnalysisSchema = createInsertSchema(medicalAnalyses).omit({
  id: true,
  createdAt: true,
});

export const clinicalHistorySchema = z.object({
  patientAge: z.number().min(0).max(150).optional(),
  patientGender: z.enum(["male", "female", "other"]).optional(),
  chiefComplaint: z.string().max(1000).optional(),
  medicalHistory: z.string().max(2000).optional(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertMedicalAnalysis = z.infer<typeof insertMedicalAnalysisSchema>;
export type MedicalAnalysis = typeof medicalAnalyses.$inferSelect;
export type ClinicalHistory = z.infer<typeof clinicalHistorySchema>;

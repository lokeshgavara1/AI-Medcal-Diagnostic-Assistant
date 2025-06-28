import { users, medicalAnalyses, type User, type InsertUser, type MedicalAnalysis, type InsertMedicalAnalysis } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createMedicalAnalysis(analysis: InsertMedicalAnalysis): Promise<MedicalAnalysis>;
  getMedicalAnalysis(id: number): Promise<MedicalAnalysis | undefined>;
  getAllMedicalAnalyses(): Promise<MedicalAnalysis[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private medicalAnalyses: Map<number, MedicalAnalysis>;
  private currentUserId: number;
  private currentAnalysisId: number;

  constructor() {
    this.users = new Map();
    this.medicalAnalyses = new Map();
    this.currentUserId = 1;
    this.currentAnalysisId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createMedicalAnalysis(insertAnalysis: InsertMedicalAnalysis): Promise<MedicalAnalysis> {
    const id = this.currentAnalysisId++;
    const analysis: MedicalAnalysis = { 
      id,
      imageFilename: insertAnalysis.imageFilename,
      imageBase64: insertAnalysis.imageBase64,
      patientAge: insertAnalysis.patientAge ?? null,
      patientGender: insertAnalysis.patientGender ?? null,
      chiefComplaint: insertAnalysis.chiefComplaint ?? null,
      medicalHistory: insertAnalysis.medicalHistory ?? null,
      analysisResults: insertAnalysis.analysisResults,
      aiExplanation: insertAnalysis.aiExplanation,
      recommendations: insertAnalysis.recommendations,
      confidence: insertAnalysis.confidence,
      processingTime: insertAnalysis.processingTime ?? null,
      createdAt: new Date()
    };
    this.medicalAnalyses.set(id, analysis);
    return analysis;
  }

  async getMedicalAnalysis(id: number): Promise<MedicalAnalysis | undefined> {
    return this.medicalAnalyses.get(id);
  }

  async getAllMedicalAnalyses(): Promise<MedicalAnalysis[]> {
    return Array.from(this.medicalAnalyses.values());
  }
}

export const storage = new MemStorage();

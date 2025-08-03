export type SuspiciousActivity = {
  id: string;
  userId: string;
  riskScore: number;
  riskLevel: string;
  riskFactors: string[];
  detectedAt: string;
};

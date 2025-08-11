export interface SuspiciousActivityAlert {
  count: number;
  sessionId: string;
  userEmail: string;
  ipAddress: string;
  loginTime: string;
  DetectedAt: string;
  riskLevel: string;
  riskFactors: string[];
  browser: string;
  deviceType: string;
  os: string;
  country: string;
  Is_Suspicious: boolean;
}

export interface SuspiciousActivityApiResponse {
  totalSuspicious: number;
  suspiciousActivities: SuspiciousActivityAlert[];
}

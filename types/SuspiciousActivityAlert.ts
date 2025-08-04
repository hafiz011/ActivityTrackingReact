export interface SuspiciousActivityAlert {
  count: number;
  sessionId: string;
  userName: string;
  userEmail: string | null;
  ipAddress: string;
  loginTime: string;
  riskScore: number;
  riskLevel: string;
  detectedAt: string;
  riskFactors: string[];
  browser: string;
  deiceType: string; // Typo from backend: "deiceType" should probably be "deviceType"
  os: string;
  language: string;
  screenResolution: string | null;
  country: string;
  city: string | null;
  region: string | null;
  postal: string | null;
  latitudeLongitude: string | null;
  timeZone: string | null;
  isp: string | null;
  is_vpn: boolean;
}

export interface SuspiciousActivityApiResponse {
  totalSuspicious: number;
  suspiciousActivities: SuspiciousActivityAlert[];
}

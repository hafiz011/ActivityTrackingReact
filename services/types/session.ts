// types/session.ts
export type SuspiciousActivity = {
  _id: string;
  reason: string;
  timestamp: string;
};

export type ActiveUsersResponse = {
  count: number;
  trend: number;
};

export type SessionMetricsResponse = {
  avgDuration: string;
  avgDurationTrend: number;
  bounceRate: number;
  bounceRateTrend: number;
  avgActions: number;
  avgActionsTrend: number;
};

// Suspicious activity alert summary
// This type represents the summary of suspicious activity alerts, including total count and last detected time.
export type SuspiciousActivityAlert = {
  Total: number;
  LastDetected: string;
};

// Suspicious activity alert Detected
export type SuspiciousActivityDetails = {
  id: string;
  Value: string;
  Email: string;
  Name: string;
  SuspiciousFlags: string[]; // Fixed: Array[] is invalid; use string[] or a proper type
  IPAddress: string;
  DetectedAt: string;
  LastActive: string;
  timestamp: string;
  Location: {
    Country: string;
    City: string;
    Region: string;
    PostalCode: string;
    LatitudeLongitude: [number, number]; // Changed from number to coordinate tuple
    ISP: string;
    Timezone: string;
    IsVPN: boolean;
  };
  Device: {
    Browser: string;
    DeviceType: string;
    OperatingSystem: string;
    Language: string;
    ScreenResolution: string;
  };
};

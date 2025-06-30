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

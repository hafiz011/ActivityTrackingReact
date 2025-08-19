export interface DailySession { 
  date: string;
  sessions: number;
  suspicious: number;
}

export interface DeviceDistribution {
  name: string;
  total: number;
  avgDuration: number;
  avgActions: number;
}

export interface SessionMetrics {
  avgDuration: number;
  avgDurationTrend: number;
  bounceRate: number;
  bounceRateTrend: number;
  avgActions: number;
  avgActionsTrend: number;
}

// export interface DeviceMetrics {
//   name: string;
//   total: number;
//   avgDuration: number;
//   avgActions: number;
// }

export interface SessionsAnalyticsResponse {
  dailySessions: DailySession[];
  deviceDistribution: DeviceDistribution[];
  // deviceMetrics: DeviceMetrics[];
  sessionMetrics: SessionMetrics;
}

export interface DailySession {
  date: string;
  sessions: number;
  suspicious: number;
}

export interface DeviceDistribution {
  name: string;
  value: number;
}

export interface SessionMetrics {
  bounceRate: number;
}

export interface SessionsAnalyticsResponse {
  dailySessions: DailySession[];
  deviceDistribution: DeviceDistribution[];
  sessionMetrics: SessionMetrics;
}

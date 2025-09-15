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
  bots: number;
  users: number;
  botPercentage: number;
  userPercentage: number;
}

export interface sessionTimeDistribution {
  category: string;
  count: number;
  percentage: number;
}

export interface countryDistribution {
  country: string;
  sessions: number;
  percentage: number;
}

export interface trafficSource {
  source: string;
  sessions: number;
  percentage: number;
}



export interface SessionsAnalyticsResponse {
  dailySessions: DailySession[];
  deviceDistribution: DeviceDistribution[];
  sessionMetrics: SessionMetrics;
  sessionTimeDistribution: sessionTimeDistribution[];
  countryDistribution: countryDistribution[];
  trafficSource: trafficSource[];
}

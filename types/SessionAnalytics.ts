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

export interface SessionDistribution {
  category: 'Short' | 'Medium' | 'Long';
  count: number;
  percentage: number;
}

export interface CountryDistribution {
  country: string;
  sessions: number;
  percentage: number;
}

export interface TrafficSource {
  source: string;
  sessions: number;
  percentage: number;
}



export interface SessionsAnalyticsResponse {
  dailySessions: DailySession[];
  deviceDistribution: DeviceDistribution[];
  sessionMetrics: SessionMetrics;
  sessionDistribution: SessionDistribution[];
  countryDistribution: CountryDistribution[];
  trafficSources: TrafficSource[];
}

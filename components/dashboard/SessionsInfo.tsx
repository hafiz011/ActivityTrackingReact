"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Loader2,
  Zap,
  AlertTriangle,
  Clock,
  TrendingUp,
  Activity,
} from "lucide-react";

type SessionsInfoProps = {
  loading: {
    activeUsersCount: boolean;
    suspiciousActivities: boolean;
    sessionMetrics: boolean;
  };
  activeUsersCount: {
    count: number;
    trend: number;
  } | null;
  suspiciousCount: number;
  sessionMetrics: {
    avgDuration: string;
    avgDurationTrend: number;
    bounceRate: number;
    bounceRateTrend: number;
    avgActions: number;
    avgActionsTrend: number;
  } | null;
};

const SessionsInfo: React.FC<SessionsInfoProps> = ({
  loading,
  activeUsersCount,
  suspiciousCount,
  sessionMetrics,
}) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
      {/* Active Users */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Users</CardTitle>
          <Zap className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          {loading.activeUsersCount ? (
            <div className="flex items-center justify-center h-12">
              <Loader2 className="h-4 w-4 animate-spin" />
            </div>
          ) : (
            <>
              <div className="text-2xl font-bold text-green-600">
                {activeUsersCount?.count ?? 0}
              </div>
              <p className="text-xs text-muted-foreground">
                <span
                  className={
                    activeUsersCount?.trend >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {activeUsersCount?.trend >= 0 ? "+" : ""}
                  {activeUsersCount?.trend ?? 0}%
                </span>{" "}
                from last period
              </p>
            </>
          )}
        </CardContent>
      </Card>

      {/* Suspicious Activities */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Suspicious Today</CardTitle>
          <AlertTriangle className="h-4 w-4 text-red-600" />
        </CardHeader>
        <CardContent>
          {loading.suspiciousActivities ? (
            <div className="flex items-center justify-center h-12">
              <Loader2 className="h-4 w-4 animate-spin" />
            </div>
          ) : (
            <>
              <div className="text-2xl font-bold text-red-600">
                {suspiciousCount}
              </div>
              <p className="text-xs text-muted-foreground">
                <span className="text-red-600">+15%</span> from yesterday
              </p>
            </>
          )}
        </CardContent>
      </Card>

      {/* Avg Session */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Avg Session</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          {loading.sessionMetrics ? (
            <div className="flex items-center justify-center h-12">
              <Loader2 className="h-4 w-4 animate-spin" />
            </div>
          ) : (
            <>
              <div className="text-2xl font-bold">
                {sessionMetrics?.avgDuration ?? "--"}
              </div>
              <p className="text-xs text-muted-foreground">
                <span
                  className={
                    sessionMetrics?.avgDurationTrend >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {sessionMetrics?.avgDurationTrend >= 0 ? "+" : ""}
                  {sessionMetrics?.avgDurationTrend ?? 0}%
                </span>{" "}
                from last week
              </p>
            </>
          )}
        </CardContent>
      </Card>

      {/* Bounce Rate */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          {loading.sessionMetrics ? (
            <div className="flex items-center justify-center h-12">
              <Loader2 className="h-4 w-4 animate-spin" />
            </div>
          ) : (
            <>
              <div className="text-2xl font-bold">
                {sessionMetrics?.bounceRate ?? "--"}%
              </div>
              <p className="text-xs text-muted-foreground">
                <span
                  className={
                    sessionMetrics?.bounceRateTrend < 0
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {sessionMetrics?.bounceRateTrend >= 0 ? "+" : ""}
                  {sessionMetrics?.bounceRateTrend ?? 0}%
                </span>{" "}
                {sessionMetrics?.bounceRateTrend < 0
                  ? "improvement"
                  : "increase"}
              </p>
            </>
          )}
        </CardContent>
      </Card>

      {/* Actions per Session */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Actions/Session</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          {loading.sessionMetrics ? (
            <div className="flex items-center justify-center h-12">
              <Loader2 className="h-4 w-4 animate-spin" />
            </div>
          ) : (
            <>
              <div className="text-2xl font-bold">
                {sessionMetrics?.avgActions ?? "--"}
              </div>
              <p className="text-xs text-muted-foreground">
                <span
                  className={
                    sessionMetrics?.avgActionsTrend >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {sessionMetrics?.avgActionsTrend >= 0 ? "+" : ""}
                  {sessionMetrics?.avgActionsTrend ?? 0}%
                </span>{" "}
                from last week
              </p>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SessionsInfo;

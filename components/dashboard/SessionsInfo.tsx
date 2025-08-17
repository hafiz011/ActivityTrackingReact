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
import { SessionMetrics } from "@/types/SessionAnalytics";

type SessionsInfoProps = {
  loading: {
    activeUsersCount: boolean;
    suspiciousActivities: boolean;
    sessionMetrics: boolean;
  };
  activeUsersCount: number;
  totalSuspicious: number;
  sessionMetrics: SessionMetrics | null;
};

// helper component to display trend text
const TrendText = ({
  value,
  positiveIsGood = true,
  compareText = "from last period",
}: {
  value?: number | null;
  positiveIsGood?: boolean;
  compareText?: string;
}) => {
  if (value == null) return null;

  const isPositive = value >= 0;
  const colorClass =
    (isPositive && positiveIsGood) || (!isPositive && !positiveIsGood)
      ? "text-green-600"
      : "text-red-600";

  return (
    <p className="text-xs text-muted-foreground">
      <span className={colorClass}>
        {isPositive ? "+" : ""}
        {value}%
      </span>{" "}
      {compareText}
    </p>
  );
};


const SessionsInfo: React.FC<SessionsInfoProps> = ({
  loading,
  activeUsersCount,
  totalSuspicious,
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
                {activeUsersCount}
              </div>
              {/* <p className="text-xs text-muted-foreground">
                <span
                  className={
                    activeUsersCount >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {activeUsersCount?.trend >= 0 ? "+" : ""}
                  {activeUsersCount?.trend ?? 0}%
                </span>{" "}
                from last period
              </p> */}
            </>
          )}
        </CardContent>
      </Card>

      {/* Suspicious Activities */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Suspicious Session</CardTitle>
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
                {totalSuspicious}
              </div>
              <p className="text-xs text-muted-foreground text-red-600">
                Compared to last period
              </p>
            </>
          )}
        </CardContent>
      </Card>

      {/* Avg Session Duration */}
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
                {sessionMetrics?.avgDuration
                  ? `${Math.floor(sessionMetrics.avgDuration / 60)}m ${Math.floor(
                      sessionMetrics.avgDuration % 60
                    )}s`
                  : "--"}
              </div>
              <TrendText value={sessionMetrics?.avgDurationTrend} />
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
                {sessionMetrics?.bounceRate !== undefined
                  ? `${sessionMetrics.bounceRate.toFixed(2)}%`
                  : "--"}
              </div>
              <TrendText
                value={sessionMetrics?.bounceRateTrend}
                positiveIsGood={false}
              />
            </>
          )}
        </CardContent>
      </Card>

      {/* Avg Actions per Session */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Actions / Session</CardTitle>
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
                {sessionMetrics?.avgActions !== undefined
                  ? sessionMetrics.avgActions.toFixed(2)
                  : "--"}
              </div>
              <TrendText value={sessionMetrics?.avgActionsTrend} />
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SessionsInfo;

"use client";

import React, { useEffect, useState } from "react";
import { useFilter } from "@/context/FilterContext";
import {
  fetchActiveUsersCount,
  fetchSuspiciousActivities,
  fetchSessionMetrics,
} from "@/services/sessionService";
import {
  ActiveUsersResponse,
  SessionMetricsResponse,
  SuspiciousActivity,
} from "@/services/types/session";
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



const SessionsInfo = () => {

  const [loading, setLoading] = useState({
    activeUsersCount: true,
    suspiciousActivities: true,
    sessionMetrics: true,
  });

  const {
  startDate,
  endDate,
  country,
  device,
  suspiciousOnly,
  setCountry,
  setStartDate,
  setEndDate,
  setDevice,
  setSuspiciousOnly,
} = useFilter();
  const filters = { startDate, endDate, country, device, suspiciousOnly };


  const [activeUsersCount, setActiveUsersCount] = useState<ActiveUsersResponse>({
    count: 0,
    trend: 0,
  });

  const [suspiciousActivities, setSuspiciousActivities] = useState<SuspiciousActivity[]>([]);

  const [sessionMetrics, setSessionMetrics] = useState<SessionMetricsResponse>({
    avgDuration: "0m",
    avgDurationTrend: 0,
    bounceRate: 0,
    bounceRateTrend: 0,
    avgActions: 0,
    avgActionsTrend: 0,
  });

  useEffect(() => {
  setLoading({
    activeUsersCount: true,
    suspiciousActivities: true,
    sessionMetrics: true,
  });

  fetchActiveUsersCount(filters).then((res) => {
    setActiveUsersCount(res);
    setLoading((l) => ({ ...l, activeUsersCount: false }));
  });

  fetchSuspiciousActivities(filters).then((res) => {
    setSuspiciousActivities(res);
    setLoading((l) => ({ ...l, suspiciousActivities: false }));
  });

  fetchSessionMetrics(filters).then((res) => {
    setSessionMetrics(res);
    setLoading((l) => ({ ...l, sessionMetrics: false }));
  });
}, [startDate, endDate, country, device, suspiciousOnly]);

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
                {activeUsersCount.count.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                <span
                  className={
                    activeUsersCount.trend >= 0 ? "text-green-600" : "text-red-600"
                  }
                >
                  {activeUsersCount.trend >= 0 ? "+" : ""}
                  {activeUsersCount.trend}%
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
                {suspiciousActivities.length}
              </div>
              <p className="text-xs text-muted-foreground">
                <span className="text-red-600">+15%</span> from yesterday
              </p>
            </>
          )}
        </CardContent>
      </Card>

      {/* Average Session */}
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
              <div className="text-2xl font-bold">{sessionMetrics.avgDuration}</div>
              <p className="text-xs text-muted-foreground">
                <span
                  className={
                    sessionMetrics.avgDurationTrend >= 0 ? "text-green-600" : "text-red-600"
                  }
                >
                  {sessionMetrics.avgDurationTrend >= 0 ? "+" : ""}
                  {sessionMetrics.avgDurationTrend}%
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
              <div className="text-2xl font-bold">{sessionMetrics.bounceRate}%</div>
              <p className="text-xs text-muted-foreground">
                <span
                  className={
                    sessionMetrics.bounceRateTrend < 0 ? "text-green-600" : "text-red-600"
                  }
                >
                  {sessionMetrics.bounceRateTrend >= 0 ? "+" : ""}
                  {sessionMetrics.bounceRateTrend}%
                </span>{" "}
                {sessionMetrics.bounceRateTrend < 0 ? "improvement" : "increase"}
              </p>
            </>
          )}
        </CardContent>
      </Card>

      {/* Actions Per Session */}
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
              <div className="text-2xl font-bold">{sessionMetrics.avgActions}</div>
              <p className="text-xs text-muted-foreground">
                <span
                  className={
                    sessionMetrics.avgActionsTrend >= 0 ? "text-green-600" : "text-red-600"
                  }
                >
                  {sessionMetrics.avgActionsTrend >= 0 ? "+" : ""}
                  {sessionMetrics.avgActionsTrend}%
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

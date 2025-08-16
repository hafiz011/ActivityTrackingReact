"use client";

import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SidebarInset } from "@/components/ui/sidebar";
import Header from "@/components/dashboard/Header";
import { FiltersCard } from "@/components/dashboard/FiltersCard";
import SessionsInfo from "@/components/dashboard/SessionsInfo";
import {
  useActionSessions,
  useActiveUsers,
  useAvgSessions,
  useBounceRate,
  useSuspiciousAlerts,
} from "@/hooks/useDashboardAPI";
import { useFilter } from "@/context/FilterContext";

import SuspiciousActivityAlert from "@/components/dashboard/SuspiciousActivityAlert";
import { SuspiciousActivityAlert as SuspiciousActivityResponse } from "@/types/SuspiciousActivityAlert";
import { Session } from "@/types/ActiveSessionResponse";
import { DailySession, DeviceDistribution, SessionMetrics } from "@/types/SessionAnalytics";




import { ActiveSessionsTab } from "@/components/dashboard/ActiveSessionsTab";
import { SessionAnalyticsTab } from "@/components/dashboard/SessionAnalyticsTab";
import { SuspiciousActivityTab } from "@/components/dashboard/SuspiciousActivityTab";
import { ActivityBreakdownTab } from "@/components/dashboard/ActivityBreakdownTab";
import { LoginTrendsTab } from "@/components/dashboard/LoginTrendsTab";
import { TopUsersTab } from "@/components/dashboard/TopUsersTab";


// Define types for loading state and session metrics
type LoadingState = {
  activeUsers: boolean;
  suspiciousActivities: boolean;
  sessionMetrics: boolean;
  deviceDistributions: boolean;
  dailySessions: boolean;
  // bounceRate: boolean;
  // actionSessions: boolean;
  // sessions: boolean;
};

const Dashboard: React.FC = () => {
  const { startDate, endDate, country, device } = useFilter();

  const { fetchActiveUsers } = useActiveUsers();
  const { fetchSuspiciousActivities } = useSuspiciousAlerts();
  const { fetchSessionMetrics } = useAvgSessions();
  // const { fetchBounceRate } = useBounceRate();
  // const { fetchActionSessions } = useActionSessions();

  const [loading, setLoading] = useState<LoadingState>({
    activeUsers: true,
    suspiciousActivities: true,
    sessionMetrics: true,
    deviceDistributions: true,
    dailySessions: true,
    // bounceRate: true,
    // actionSessions: true,
    // sessions: true,
  });

  const [activeUsers, setSessions] = useState<Session[]>([]);
  const [suspiciousActivities, setSuspiciousActivities] = useState<SuspiciousActivityResponse[]>([]);

  const [sessionMetrics, setSessionMetrics] = useState<SessionMetrics | null>(null);
  const [deviceDistributions, setDeviceDistributions] = useState<DeviceDistribution[]>([]);
  const [dailySessions, setDailySessions] = useState<DailySession[]>([]);


  // Fetch data when component mounts or filters change
  useEffect(() => {
  const fetchData = async () => {
    try {
      const activeRes = await fetchActiveUsers();
      setSessions(activeRes.sessions);
      setLoading(prev => ({ ...prev, activeUsers: false }));

      const suspicious = await fetchSuspiciousActivities();
      setSuspiciousActivities(suspicious.suspiciousActivities);
      setLoading(prev => ({ ...prev, suspiciousActivities: false }));

      const metrics = await fetchSessionMetrics();
      setSessionMetrics(metrics.sessionMetrics);
      setDeviceDistributions(metrics.deviceDistribution);
      setDailySessions(metrics.dailySessions);
      setLoading(prev => ({
        ...prev,
        sessionMetrics: false,
        deviceDistributions: false,
        dailySessions: false,
      }));


      // await fetchBounceRate();
      // setLoading(prev => ({ ...prev, bounceRate: false }));

      // await fetchActionSessions();
      // setLoading(prev => ({ ...prev, actionSessions: false }));

    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      setLoading({
        activeUsers: false,
        suspiciousActivities: false,
        sessionMetrics: false,
        deviceDistributions: false,
        dailySessions: false,

        // bounceRate: false,
        // actionSessions: false,
        // sessions: false,
      });
    }
  };

  fetchData();
  }, [startDate, endDate, country, device]); // filter dependencies

  const handleRefresh = async () => {
      // set loading for both sessions and suspicious activities
    setLoading((prev) => ({
      ...prev,
      activeUsers: true,
      suspiciousActivities: true,
      sessionMetrics: true,
      deviceDistributions: true,
      dailySessions: true,
    }));
    try {
      // fetch active sessions
      const refreshedSessions = await fetchActiveUsers();
      setSessions(refreshedSessions.sessions);

      // fetch suspicious activities
      const refreshedSuspicious = await fetchSuspiciousActivities();
      setSuspiciousActivities(refreshedSuspicious.suspiciousActivities);

      // Session Matrics
      const refreshedMatrics = await fetchSessionMetrics();
      setSessionMetrics(refreshedMatrics.sessionMetrics);
      setDeviceDistributions(refreshedMatrics.deviceDistribution);
      setDailySessions(refreshedMatrics.dailySessions);


    } catch (e) {
    console.error("Error refreshing dashboard data:", e);
    } finally {
       // reset loading states
    setLoading((prev) => ({
      ...prev,
      activeUsers: false,
      suspiciousActivities: false,
      sessionMetrics: false,
      deviceDistributions: false,
      dailySessions: false,
    }));
    }
  };
  
  return (
    <SidebarInset className="p-2">
      <div className="flex items-center gap-2">
        <Header
          alertTotal={suspiciousActivities.length}
          loading={loading}
          handleRefresh={handleRefresh}
        />
      </div>

      {/* Filters */}
      <Card className="flex flex-1 flex-col gap-4 p-5 pt-3">
        <FiltersCard />
        {/* Session Info Cards */}
        <SessionsInfo
          activeUsersCount={activeUsers.length}
          totalSuspicious={suspiciousActivities.length}
          sessionMetrics={sessionMetrics}

          loading={{
            activeUsersCount: loading.activeUsers,
            suspiciousActivities: loading.suspiciousActivities,
            sessionMetrics: loading.sessionMetrics,
          }}
        />

        {/* Suspicious Activity Alert */} 
        <SuspiciousActivityAlert count={suspiciousActivities.length} />

        

          {/* Main Dashboard Tabs */}

          <Tabs defaultValue="sessions" className="space-y-4">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="sessions">Active Sessions</TabsTrigger>
              <TabsTrigger value="analytics">Session Analytics</TabsTrigger>
              <TabsTrigger value="suspicious">Suspicious Activity</TabsTrigger>
              <TabsTrigger value="breakdown">Activity Breakdown</TabsTrigger>
              <TabsTrigger value="trends">Login Trends</TabsTrigger>
              <TabsTrigger value="users">Top Users</TabsTrigger>
            </TabsList>
             
             {/* Active Sessions Tab */}
            <TabsContent value="sessions" className="space-y-4">
              <ActiveSessionsTab activeSessions={activeUsers} loading={{ activeSessions: loading.activeUsers }} />
            </TabsContent>

            {/* Session Analytics Tab */}
            {/* <TabsContent value="analytics" className="space-y-4">
              <SessionAnalyticsTab
                SessionMetrics={sessionMetrics}
                dailySessionsData={dailySessions}
                deviceDistribution={deviceDistributions}
                loading={{
                sessionMetrics: loading.sessionMetrics,
                dailySessionsData: loading.dailySessions,
                deviceDistribution: loading.deviceDistributions,
              }}

              />
            </TabsContent> */}

            {/* Suspicious Activity Tab */}
            <TabsContent value="suspicious" className="space-y-4">
              <SuspiciousActivityTab
                SuspiciousActivities={suspiciousActivities} loading={{SuspiciousActivities: loading.suspiciousActivities}}
              />
            </TabsContent>

                {/* // dailySessionsData={dailySessionsData}
                // markAsReviewed={markAsReviewed} */}

            {/* Activity Breakdown Tab *
            <TabsContent value="breakdown" className="space-y-4">
              <ActivityBreakdownTab
                loading={loading}
                mockActivityBreakdown={mockActivityBreakdown}
              />
            </TabsContent>

            {/* Login Trends Tab *
            <TabsContent value="trends" className="space-y-4">
              <LoginTrendsTab
                loading={loading}
                loginTrendData={loginTrendData}
                timeRange={timeRange}
              />
            </TabsContent>

             {/* Top Users Tab *
            <TabsContent value="users" className="space-y-4">
              <TopUsersTab loading={loading} topActiveUsers={topActiveUsers} /> 
            </TabsContent>

            */}



        </Tabs>

      </Card>
    </SidebarInset>
  );
};
export default Dashboard;
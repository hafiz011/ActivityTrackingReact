"use client";

import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/dashboard/Header";
import { FiltersCard } from "@/components/dashboard/FiltersCard";
import { SidebarInset } from "@/components/ui/sidebar";
import SessionsInfo from "@/components/dashboard/SessionsInfo";
import SuspiciousActivityAlert from "@/components/dashboard/SuspiciousActivityAlert";
import {
  useActionSessions,
  useActiveUsers,
  useAvgSessions,
  useBounceRate,
  useSuspiciousAlerts,
} from "@/hooks/useDashboardAPI";
import { SuspiciousActivity } from "@/types/SuspiciousActivity";



import { ActiveSessionsTab } from "@/components/dashboard/ActiveSessionsTab";
import { SessionAnalyticsTab } from "@/components/dashboard/SessionAnalyticsTab";
import { SuspiciousActivityTab } from "@/components/dashboard/SuspiciousActivityTab";
import { ActivityBreakdownTab } from "@/components/dashboard/ActivityBreakdownTab";
import { LoginTrendsTab } from "@/components/dashboard/LoginTrendsTab";
import { TopUsersTab } from "@/components/dashboard/TopUsersTab";


type ActiveUserStats = {
  count: number;
  trend: number;
};

type SessionMetrics = {
  avgDuration: string;
  avgDurationTrend: number;
  bounceRate: number;
  bounceRateTrend: number;
  avgActions: number;
  avgActionsTrend: number;
};

type LoadingState = {
  activeUsersCount: boolean;
  suspiciousActivities: boolean;
  sessionMetrics: boolean;
  bounceRate: boolean;
  actionSessions: boolean;
};



const Dashboard: React.FC = () => {  
  // Hooks for fetching data
  const { fetchActiveUsersCount } = useActiveUsers();
  const { fetchSuspiciousActivities } = useSuspiciousAlerts();
  const { fetchSessionMetrics } = useAvgSessions();
  const { fetchBounceRate } = useBounceRate();
  const { fetchActionSessions } = useActionSessions();

  const [loading, setLoading] = useState<LoadingState>({
    activeUsersCount: true,
    suspiciousActivities: true,
    sessionMetrics: true,
    bounceRate: true,
    actionSessions: true,
  });

  // State for storing fetched data
  const [activeUsersCount, setActiveUsersCount] = useState<ActiveUserStats | null>(null);
  const [suspiciousActivities, setSuspiciousActivities] = useState<SuspiciousActivity[]>([]);
  const [sessionMetrics, setSessionMetrics] = useState<SessionMetrics | null>(null);

 useEffect(() => {
    const fetchData = async () => {
      try {
        const actives = await fetchActiveUsersCount();
        setActiveUsersCount(actives);
        setLoading(prev => ({ ...prev, activeUsersCount: false }));

        const suspicious = await fetchSuspiciousActivities();
        setSuspiciousActivities(suspicious);
        setLoading(prev => ({ ...prev, suspiciousActivities: false }));

        const sessions = await fetchSessionMetrics();
        setSessionMetrics(sessions);
        setLoading(prev => ({ ...prev, sessionMetrics: false }));

        await fetchBounceRate();
        setLoading(prev => ({ ...prev, bounceRate: false }));

        await fetchActionSessions();
        setLoading(prev => ({ ...prev, actionSessions: false }));
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, [
    fetchActiveUsersCount,
    fetchSuspiciousActivities,
    fetchSessionMetrics,
    fetchBounceRate,
    fetchActionSessions,
  ]);

  // Function to handle refreshing suspicious activities
  const handleRefresh = async () => {
    setLoading(prev => ({ ...prev, suspiciousActivities: true }));
    try {
      const refreshed = await fetchSuspiciousActivities();
      setSuspiciousActivities(refreshed);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(prev => ({ ...prev, suspiciousActivities: false }));
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
          activeUsersCount={activeUsersCount}
          suspiciousCount={suspiciousActivities.length}
          sessionMetrics={sessionMetrics}
          loading={{
            activeUsersCount: loading.activeUsersCount,
            suspiciousActivities: loading.suspiciousActivities,
            sessionMetrics: loading.sessionMetrics,
          }}
        />

        {/* Suspicious Activity Alert */}
            {/* <SuspiciousActivityAlert alert={alert} /> */}
        <SuspiciousActivityAlert alert={suspiciousActivities} />

          {/* Main Dashboard Tabs *
          <Tabs defaultValue="sessions" className="space-y-4">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="sessions">Active Sessions</TabsTrigger>
              <TabsTrigger value="analytics">Session Analytics</TabsTrigger>
              <TabsTrigger value="suspicious">Suspicious Activity</TabsTrigger>
              <TabsTrigger value="breakdown">Activity Breakdown</TabsTrigger>
              <TabsTrigger value="trends">Login Trends</TabsTrigger>
              <TabsTrigger value="users">Top Users</TabsTrigger>
            </TabsList>
             
             {/* Active Sessions Tab *
            <TabsContent value="sessions" className="space-y-4">
              <ActiveSessionsTab activeSessions={yourSessionsArray} loading={{ activeSessions: isLoading }} />
              <ActiveSessionsTab activeSessions={activeSessions} loading={{ activeSessions: loadingSessions }} />
            </TabsContent>

            {/* Session Analytics Tab *
            <TabsContent value="analytics" className="space-y-4">
              <SessionAnalyticsTab
                loading={loading}
                dailySessionsData={dailySessionsData}
                deviceDistribution={deviceDistribution}
                sessionMetrics={sessionMetrics}
              />
            </TabsContent>

            {/* Suspicious Activity Tab *
            <TabsContent value="suspicious" className="space-y-4">
              <SuspiciousActivityTab
                suspiciousActivities={suspiciousActivities}
                loading={loading}
                dailySessionsData={dailySessionsData}
                markAsReviewed={markAsReviewed}
              />
            </TabsContent>

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





          </Tabs>

*/}
      </Card>
    </SidebarInset>
  );
};
export default Dashboard;
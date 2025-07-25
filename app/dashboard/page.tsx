"use client";

import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/dashboard/Header";
import { FiltersCard } from "@/components/dashboard/FiltersCard";
import { SidebarInset } from "@/components/ui/sidebar";
import SessionsInfo from "@/components/dashboard/SessionsInfo";
import SuspiciousActivityAlert from "@/components/dashboard/SuspiciousActivityAlert";
import type { SuspiciousActivityAlert as SuspiciousActivityAlertType } from "@/services/types/session";

import { ActiveSessionsTab } from "@/components/dashboard/ActiveSessionsTab";
import { SessionAnalyticsTab } from "@/components/dashboard/SessionAnalyticsTab";
import { SuspiciousActivityTab } from "@/components/dashboard/SuspiciousActivityTab";
import { ActivityBreakdownTab } from "@/components/dashboard/ActivityBreakdownTab";
import { LoginTrendsTab } from "@/components/dashboard/LoginTrendsTab";
import { TopUsersTab } from "@/components/dashboard/TopUsersTab";

import { getSuspiciousActivityAlert } from "@/services/sessionService";
//import { getActiveSessions } from "@/services/sessionService";

const Dashboard: React.FC = () => {
  const [alert, setAlert] = useState<SuspiciousActivityAlertType | null>(null);
  const [loading, setLoading] = useState<{ suspicious: boolean }>({ suspicious: false });
  
  const [activeSessions, setActiveSessions] = useState([]);
  const [loadingSessions, setLoadingSessions] = useState(false);

  useEffect(() => {
    setLoading({ suspicious: true });
    getSuspiciousActivityAlert()
      .then(setAlert)
      .catch(() => setAlert(null))
      .finally(() => setLoading({ suspicious: false }));
  }, []);


  // useEffect(() => {
  //   setLoadingSessions(true);
  //   getActiveSessions()
  //     .then((data) => setActiveSessions(data))
  //     .catch((err) => console.error(err))
  //     .finally(() => setLoadingSessions(false));
  // }, []);





  const handleRefresh = () => {
    setLoading({ suspicious: true });
    getSuspiciousActivityAlert()
      .then(setAlert)
      .finally(() => setLoading({ suspicious: false }));
  };

  return (

        <SidebarInset className="p-2">
          <div className="flex items-center gap-2">
            <Header
              alertTotal={alert?.Total || 0}
              loading={loading}
              handleRefresh={handleRefresh}
            />
          </div>

          {/* Filters */}
          <Card className="flex flex-1 flex-col gap-4 p-5 pt-3">
            <FiltersCard />
            {/* Session Info Cards */}
            <SessionsInfo />
            {/* Suspicious Activity Alert */}
            <SuspiciousActivityAlert alert={alert} />

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
"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import Header from "@/components/dashboard/Header";
import { FiltersCard } from "@/components/dashboard/Filtter";
import type { SuspiciousActivity } from "@/components/dashboard/Header";
import {
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { FilterProvider } from "@/context/FilterContext";
import SessionsInfo from "@/components/dashboard/SessionsInfo";

const Dashboard: React.FC = () => {
  const [suspiciousActivities, setSuspiciousActivities] = useState<SuspiciousActivity[]>([]);
  const [loading, setLoading] = useState<{ suspicious: boolean }>({ suspicious: false });

  const handleRefresh = () => {
    setLoading({ suspicious: true });

    setTimeout(() => {
      setSuspiciousActivities([
        {
          id: "1",
          message: "Login from unusual device",
          timestamp: new Date().toISOString(),
        },
        {
          id: "2",
          message: "Suspicious geo-location detected",
          timestamp: new Date().toISOString(),
        },
      ]);
      setLoading({ suspicious: false });
    }, 1500);
  };

  return (
    <FilterProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="p-4">
          <div className="flex items-center gap-2">
            <Header
              suspiciousActivities={suspiciousActivities}
              loading={loading}
              handleRefresh={handleRefresh}
            />
          </div>

          {/* Filters */}
          <Card className="flex flex-1 flex-col gap-4 p-5 pt-3">
            <FiltersCard />
            {/* Session Info Cards */}
            <SessionsInfo />
          </Card>


        </SidebarInset>
      </SidebarProvider>
    </FilterProvider>
  );
};

export default Dashboard;

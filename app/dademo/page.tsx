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
import { DateRange } from "react-day-picker";

const Dashboard: React.FC = () => {
  const [suspiciousActivities, setSuspiciousActivities] = useState<SuspiciousActivity[]>([]);
  const [loading, setLoading] = useState<{ suspicious: boolean }>({ suspicious: false });

  // Filters
  const [timeRange, setTimeRange] = useState<string>("7d");
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [selectedDevice, setSelectedDevice] = useState<string>("all");
  const [suspiciousOnly, setSuspiciousOnly] = useState<boolean>(false);

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
    <SidebarProvider>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content */}
        <SidebarInset className="p-4">
        <Card className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">

            {/* Header */}
            <Header
              suspiciousActivities={suspiciousActivities}
              loading={loading}
              handleRefresh={handleRefresh}
            />
          </div>
          </Card>
            {/* Main Content */}
            {/* Filters */}
            <FiltersCard
              dateRange={dateRange}
              setDateRange={setDateRange}
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
              selectedDevice={selectedDevice}
              setSelectedDevice={setSelectedDevice}
              suspiciousOnly={suspiciousOnly}
              setSuspiciousOnly={setSuspiciousOnly}
              timeRange={timeRange}
              setTimeRange={setTimeRange}
            />
          
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;

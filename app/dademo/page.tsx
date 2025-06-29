"use client";

import React, { useState } from "react";
import Header from "@/components/dashboard/Header";
import { FiltersCard } from "@/components/dashboard/Filtter";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { SuspiciousActivity } from "@/components/dashboard/Header";
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

    // Simulate data refresh
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
      <div className="space-y-4 px-4 pb-8">
        {/* Header with alerts */}
        <Header
          suspiciousActivities={suspiciousActivities}
          loading={loading}
          handleRefresh={handleRefresh}
        />

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

        {/* TODO: Dashboard Cards, Charts, Tables, etc */}
        {/* Pass filter states to API-based components */}
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;

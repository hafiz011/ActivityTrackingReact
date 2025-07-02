"use client";

import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import Header from "@/components/dashboard/Header";
import { FiltersCard } from "@/components/dashboard/Filtter";
import {
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { FilterProvider } from "@/context/FilterContext";
import SessionsInfo from "@/components/dashboard/SessionsInfo";
import SuspiciousActivityAlert from "@/components/dashboard/SuspiciousActivityAlert";
import type { SuspiciousActivityAlert as SuspiciousActivityAlertType } from "@/services/types/session";
import { fetchSuspiciousActivityAlert } from "@/services/sessionService";

const Dashboard: React.FC = () => {
  const [alert, setAlert] = useState<SuspiciousActivityAlertType | null>(null);
  const [loading, setLoading] = useState<{ suspicious: boolean }>({ suspicious: false });

  useEffect(() => {
    setLoading({ suspicious: true });
    fetchSuspiciousActivityAlert()
      .then(setAlert)
      .catch(() => setAlert(null))
      .finally(() => setLoading({ suspicious: false }));
  }, []);

  const handleRefresh = () => {
    setLoading({ suspicious: true });
    fetchSuspiciousActivityAlert()
      .then(setAlert)
      .finally(() => setLoading({ suspicious: false }));
  };

  return (
    <FilterProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="p-4">
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
          </Card>
        </SidebarInset>
      </SidebarProvider>
    </FilterProvider>
  );
};

export default Dashboard;
"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Download, Loader2, RefreshCw } from "lucide-react";

export interface SuspiciousActivity {
  id: string;
  message: string;
  timestamp: string;
  [key: string]: any;
}

export interface HeaderProps {
  suspiciousActivities: SuspiciousActivity[];
  loading: Record<string, boolean>;
  handleRefresh: () => void;
}

const Header: React.FC<HeaderProps> = ({ suspiciousActivities, loading, handleRefresh }) => {
  const isLoading = Object.values(loading).some(Boolean);

  return (
    <Card className="flex flex-col sm:flex-row items-center justify-between px-4 py-2 sm:py-0 h-auto sm:h-16 gap-2 sm:gap-0">
      {/* Left Section: Logo + Breadcrumb */}
      <div className="flex items-center w-full sm:w-auto gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="hidden sm:block h-4 mr-2" />

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">Trackly</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Right Section: Actions */}
      <div className="flex items-center justify-end w-full sm:w-auto gap-2 sm:gap-4">
        <ThemeToggle showDropdown />

        {/* Alerts Button */}
        <Button variant="outline" size="sm" aria-label="Alerts">
          <Bell className="h-4 w-4 mr-2" />
          Alerts
          {suspiciousActivities.length > 0 && (
            <Badge variant="destructive" className="ml-2">
              {suspiciousActivities.length}
            </Badge>
          )}
        </Button>

        {/* Export Button */}
        <Button variant="outline" size="sm" aria-label="Export">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>

        {/* Refresh Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={handleRefresh}
          disabled={isLoading}
          aria-label="Refresh"
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          ) : (
            <RefreshCw className="h-4 w-4 mr-2" />
          )}
          Refresh
        </Button>
      </div>
    </Card>
  );
};

export default Header;

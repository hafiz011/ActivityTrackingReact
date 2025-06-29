"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
import { SidebarTrigger } from "@/components/ui/sidebar";

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

const Header: React.FC<HeaderProps> = ({
  suspiciousActivities,
  loading,
  handleRefresh,
}) => {
  const isLoading = Object.values(loading).some(Boolean);

  return (
    <div className="flex items-center gap-2 px-4">
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="h-4 mr-2" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">ActivityTracking</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <ThemeToggle showDropdown />
        <Button variant="outline" size="sm">
          <Bell className="h-4 w-4 mr-2" />
          Alerts
          {suspiciousActivities.length > 0 && (
            <Badge variant="destructive" className="ml-2">
              {suspiciousActivities.length}
            </Badge>
          )}
        </Button>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={handleRefresh}
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          ) : (
            <RefreshCw className="h-4 w-4 mr-2" />
          )}
          Refresh
        </Button>
      </div>
    </div>
  );
};

export default Header;

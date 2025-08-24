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
import { ThemeToggle } from "@/components/dashboard/theme-toggle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Download, Loader2, RefreshCw } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";


export interface HeaderProps {
  alertTotal: number;
  loading: Record<string, boolean>;
  handleRefresh: () => void;
}

const Header: React.FC<HeaderProps> = ({
  alertTotal,
  loading,
  handleRefresh,
}) => {
  const isLoading = Object.values(loading).some(Boolean);

  return (
    <Card className="w-full h-full min-h-[4rem] flex flex-col sm:flex-row items-center justify-between gap-2 px-2 sm:px-6 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      {/* Left Section */}
      <div className="flex items-center gap-2 w-full sm:w-auto mb-2 sm:mb-0">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="h-4 mr-2 hidden sm:block" />
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
      <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-end">
        <ThemeToggle showDropdown />
        <Button variant="outline" size="sm">
          <Bell className="h-4 w-4 mr-2" />
          Alerts
          { alertTotal > 0 && (
            <Badge variant="destructive" className="ml-2">
              { alertTotal }
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
    </Card>
  );
};

export default Header;
"use client";

import React from "react";
import dayjs from "dayjs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { TabsContent } from "@/components/ui/tabs";
import {
  Loader2,
  Shield,
  AlertTriangle,
  MapPin,
  Monitor,
  Globe,
} from "lucide-react";
import { SuspiciousActivityAlert } from "@/types/SuspiciousActivityAlert";

interface SuspiciousActivityTabProps {
  SuspiciousActivities: SuspiciousActivityAlert[];
  loading: {
    SuspiciousActivities: boolean;
  };
}

function getRiskLevelBadgeColor(riskLevel: string) {
  switch (riskLevel?.toLowerCase()) {
    case "high":
      return "bg-red-500 text-white";
    case "medium":
      return "bg-yellow-500 text-black";
    case "low":
      return "bg-green-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
}

function getSeverityClasses(riskLevel: string) {
  switch (riskLevel?.toLowerCase()) {
    case "high":
      return "border-red-300 bg-red-50 text-red-800";
    case "medium":
      return "border-yellow-300 bg-yellow-50 text-yellow-800";
    case "low":
      return "border-blue-200 bg-blue-50 text-blue-800";
    default:
      return "border-gray-200 bg-gray-50 text-gray-800";
  }
}

export const SuspiciousActivityTab: React.FC<SuspiciousActivityTabProps> = ({
  SuspiciousActivities,
  loading,
}) => (
  <TabsContent value="suspicious" className="space-y-4">
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-red-600" />
          Suspicious Activity Summary
        </CardTitle>
        <CardDescription>Recent threats and security alerts</CardDescription>
      </CardHeader>
      <CardContent>
        {loading.SuspiciousActivities ? (
          <div className="flex items-center justify-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : SuspiciousActivities.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
            <Shield className="h-12 w-12 mb-4" />
            <p className="text-lg font-medium">No suspicious activity detected</p>
            <p className="text-sm">All user sessions appear normal</p>
          </div>
        ) : (
          <div className="space-y-4">
            {SuspiciousActivities.map((activity) => {
              const severityClasses = getSeverityClasses(activity.riskLevel);
              return (
                <Card
                  key={activity.sessionId}
                  className={`p-4 border rounded-lg transition-shadow hover:shadow-lg ${severityClasses}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    {/* Left side info */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge className={getRiskLevelBadgeColor(activity.riskLevel)}>
                          {activity.riskLevel?.toUpperCase() || "UNKNOWN"}
                        </Badge>
                        <span className="font-medium">
                          {activity.userEmail || "Unknown"}
                        </span>
                      </div>

                      {activity.riskFactors?.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {activity.riskFactors.map((flag, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs"
                              title="Risk factor"
                            >
                              {flag}
                            </Badge>
                          ))}
                        </div>
                      )}

                      <div className="text-sm text-muted-foreground flex flex-wrap gap-4">
                        <span>
                          {dayjs(activity.loginTime, "MM/DD/YYYY HH:mm:ss").format(
                            "DD-MM-YYYY hh:mm:ss A"
                          )}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {activity.country ?? "Unknown"}
                        </span>
                        <span className="flex items-center gap-1">
                          <Monitor className="h-4 w-4" />
                          {activity.deviceType ?? "Unknown"}
                        </span>
                        <span className="flex items-center gap-1">
                          <Globe className="h-4 w-4" />
                          {activity.browser ?? "Unknown"}
                        </span>
                      </div>
                    </div>

                    {/* Right side status */}
                    <div className="flex flex-col items-end gap-2">
                      <Badge
                        className={
                          activity.is_Suspicious
                            ? "bg-red-500 text-white"
                            : "bg-green-500 text-white"
                        }
                      >
                        {activity.is_Suspicious ? "Suspicious" : "Reviewed"}
                      </Badge>
                      <Button size="sm" variant="secondary">
                        <Eye className="h-4 w-4 mr-1" /> View Details
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  </TabsContent>
);

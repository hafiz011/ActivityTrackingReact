"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import { Loader2, Shield, AlertTriangle, Check } from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

type SuspiciousActivity = {
  id: string;
  email: string;
  severity: "critical" | "warning" | "info";
  reviewed: boolean;
  flags: string[];
  timestamp: string;
  country: string;
  device: string;
};

interface SuspiciousActivityTabProps {
  suspiciousActivities: SuspiciousActivity[];
  loading: {
    suspiciousActivities: boolean;
    dailySessions: boolean;
  };
  dailySessionsData: { date: string; suspicious: number }[];
  markAsReviewed: (id: string) => void;
}

function getSeverityColor(severity: string) {
  switch (severity) {
    case "critical":
      return "border-red-300 bg-red-50";
    case "warning":
      return "border-yellow-300 bg-yellow-50";
    case "info":
      return "border-blue-200 bg-blue-50";
    default:
      return "border-gray-200 bg-gray-50";
  }
}

export const SuspiciousActivityTab: React.FC<SuspiciousActivityTabProps> = ({
  suspiciousActivities,
  loading,
  dailySessionsData,
  markAsReviewed,
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
        {loading.suspiciousActivities ? (
          <div className="flex items-center justify-center h-64">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : suspiciousActivities.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
            <Shield className="h-12 w-12 mb-4" />
            <p className="text-lg font-medium">No suspicious activity detected</p>
            <p className="text-sm">All user sessions appear normal</p>
          </div>
        ) : (
          <div className="space-y-4">
            {suspiciousActivities.map((activity) => (
              <div
                key={activity.id}
                className={`p-4 border rounded-lg ${getSeverityColor(activity.severity)} ${activity.reviewed ? "opacity-60" : ""}`}
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant={activity.severity === "critical" ? "destructive" : "secondary"}>
                        {activity.severity.toUpperCase()}
                      </Badge>
                      <span className="font-medium">{activity.email}</span>
                      {activity.reviewed && (
                        <Badge variant="outline" className="ml-2">
                          Reviewed
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activity.flags.map((flag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {flag}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {activity.timestamp} • {activity.country} • {activity.device}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => markAsReviewed(activity.id)}
                      disabled={activity.reviewed}
                    >
                      {activity.reviewed ? <Check className="h-4 w-4 mr-2" /> : null}
                      Mark {activity.reviewed ? "Reviewed" : "Safe"}
                    </Button>
                    <Button size="sm">Investigate</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="mt-4 text-xs text-muted-foreground">
          <p>
            API: <code>GET /api/sessions/suspicious?limit=10</code>
          </p>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Suspicious Login Trends</CardTitle>
        <CardDescription>Daily suspicious login attempts over time</CardDescription>
      </CardHeader>
      <CardContent>
        {loading.dailySessions ? (
          <div className="flex items-center justify-center h-[300px]">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : (
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dailySessionsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="suspicious"
                  stroke="#ff7300"
                  name="Suspicious Logins"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </CardContent>
    </Card>
  </TabsContent>
);
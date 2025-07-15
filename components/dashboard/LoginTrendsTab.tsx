"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";
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

interface LoginTrendsTabProps {
  loading: { loginTrend: boolean };
  loginTrendData: { time: string; logins: number }[];
  timeRange: string;
}

export const LoginTrendsTab: React.FC<LoginTrendsTabProps> = ({
  loading,
  loginTrendData,
  timeRange,
}) => (
  <Card>
    <CardHeader>
      <CardTitle>Login Trends</CardTitle>
      <CardDescription>
        Hourly login patterns over the selected time range
      </CardDescription>
    </CardHeader>
    <CardContent>
      {loading.loginTrend ? (
        <div className="flex items-center justify-center h-[300px]">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      ) : (
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={loginTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="logins"
                stroke="#8884d8"
                name="Logins"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
      <div className="mt-2 text-xs text-muted-foreground">
        <p>
          API: <code>GET /api/analytics/login-trends?range={timeRange}</code>
        </p>
      </div>
    </CardContent>
  </Card>
);
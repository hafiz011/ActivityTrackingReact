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
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";
import { SessionMetrics } from "@/types/SessionAnalytics";

interface SessionAnalyticsTabProps {
  loading: {
    SessionMetrics: boolean;
    dailySessionsData: boolean;
    deviceDistribution: boolean;
    deviceMetricsData: boolean;
  };
  dailySessionsData: { date: string; sessions: number; suspicious: number }[];
  deviceDistribution: { name: string; value: number }[];
  SessionMetrics: SessionMetrics | null;
  deviceMetricsData: { name: string; value: number }[];
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#333"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={12}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const SessionAnalyticsTab: React.FC<SessionAnalyticsTabProps> = ({
  loading,
  SessionMetrics,
  dailySessionsData,
  deviceDistribution,
  deviceMetricsData,
}) => {
  return (
    <>
      {/* Session Analytics Tab */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Daily Sessions Trend</CardTitle>
            <CardDescription>
              Total sessions and suspicious activity over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading.dailySessionsData ? (
              <div className="flex items-center justify-center h-[300px]">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            ) : (
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={dailySessionsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="sessions"
                      stackId="1"
                      stroke="#8884d8"
                      fill="#8884d8"
                      name="Total Sessions"
                    />
                    <Area
                      type="monotone"
                      dataKey="suspicious"
                      stackId="1"
                      stroke="#ff7300"
                      fill="#ff7300"
                      name="Suspicious"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Device Distribution</CardTitle>
            <CardDescription>Session breakdown by device type</CardDescription>
          </CardHeader>
          <CardContent>
            {loading.deviceDistribution ? (
              <div className="flex items-center justify-center h-[300px]">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            ) : (
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={deviceDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {deviceDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Actions Per Session</CardTitle>
            <CardDescription>
              Average number of actions users take per session
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading.deviceMetricsData ? (
              <div className="flex items-center justify-center h-[300px]">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            ) : (
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={deviceMetricsData.map(d => ({
                      name: d.name,
                      value: d.value,
                    }))}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" name="Actions" fill="#8884d8" />
                    {/* <Bar dataKey="value" name="Avg Actions" fill="#4f46e5" radius={[8, 8, 0, 0]} /> */}

                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Bounce Rate Analysis</CardTitle>
            <CardDescription>
              Sessions with ≤1 action or &lt; 10 seconds
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading.SessionMetrics ? (
              <div className="flex items-center justify-center h-[300px]">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            ) : (
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                     data={[
                        { name: "Bounce", value: SessionMetrics?.bounceRate ?? 0 },
                        { name: "Engaged", value: 100 - (SessionMetrics?.bounceRate ?? 0) },
                      ]}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      <Cell fill="#FF8042" />
                      <Cell fill="#0088FE" />
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};
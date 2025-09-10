"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Loader2, Badge } from "lucide-react";
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
    sessionDistribution: boolean;
  };
  SessionMetrics: SessionMetrics | null;
  dailySessionsData: { date: string; sessions: number; suspicious: number }[];
  deviceDistribution: {  name: string; total: number; avgDuration: number; avgActions: number; }[];
  sessionDistribution?: { category: 'Short' | 'Medium' | 'Long'; count: number; percentage: number; }[];
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



const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-3 border rounded-lg shadow-lg">
        <p className="font-medium">{data.category} Sessions</p>
        <p className="text-sm text-gray-600">
          Count: <span className="font-medium">{data.count}</span>
        </p>
        <p className="text-sm text-gray-600">
          Percentage: <span className="font-medium">{data.percentage}%</span>
        </p>
      </div>
    );
  }
  return null;
};

const CustomLegend = ({ payload }: any) => {
  return (
    <div className="flex justify-center gap-6 mt-4">
      {payload.map((entry: any, index: number) => (
        <div key={index} className="flex items-center gap-2">
          <div 
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-sm font-medium">{entry.value}</span>
          <Badge variant="secondary" className="ml-1">
            {entry.payload.count}
          </Badge>
        </div>
      ))}
    </div>
  );
};

export const SessionAnalyticsTab: React.FC<SessionAnalyticsTabProps> = ({
  loading,
  SessionMetrics,
  dailySessionsData,
  deviceDistribution,
  sessionDistribution,
  // deviceMetricsData,
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
                      dataKey="date"
                      stackId="1"
                      stroke="#1399ceff"
                      fill="#1399ceff"
                      name="Date"
                    />
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
                    {/* <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} /> */}
                    <Tooltip formatter={(value: number) => `${value.toFixed(2)}%`} />
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
            <CardTitle>Average Actions and Duration Per Device</CardTitle>
            <CardDescription>
              Average number of actions users take per session
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading.deviceDistribution ? (
              <div className="flex items-center justify-center h-[300px]">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            ) : deviceDistribution.length === 0 ? (
              <div className="flex items-center justify-center h-[300px] text-gray-500">
                No data available
              </div>
            ) : (
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={deviceDistribution.map(d => ({
                      name: d.name,
                      avgDuration: d.avgDuration || 0,  // keep numeric
                      avgActions: d.avgActions || 0,
                    }))}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip
                      formatter={(value, name) => {
                        if (name === "Avg Duration") {
                          const minutes = Math.floor(Number(value) / 60);
                          const seconds = Math.floor(Number(value) % 60);
                          return `${minutes}m ${seconds}s`;
                        }
                        if (name === "Avg Actions") {
                          return Number(value).toFixed(2);
                        }
                        return value;
                      }}
                    />
                    <Legend />
                    <Bar dataKey="avgDuration" name="Avg Duration" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="avgActions" name="Avg Actions" fill="#14b8a6" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </CardContent>
        </Card>

    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          {/* <Clock className="h-5 w-5 text-blue-600" /> */}
          <CardTitle>Session Duration Distribution</CardTitle>
        </div>
        <CardDescription>
          Distribution of user sessions by duration categories
        </CardDescription>
      </CardHeader>
      <CardContent>
        {loading?.sessionDistribution ? (
          <div className="flex items-center justify-center h-[300px]">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : (
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sessionDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ percentage }) => `${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                  animationBegin={0}
                  animationDuration={800}
                >
                  {sessionDistribution?.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend content={<CustomLegend />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </CardContent>
    </Card>

        
        {/* <Card>
          <CardHeader>
            <CardTitle>Session Duration Distribution</CardTitle>
            <CardDescription>
              Distribution of sessions by duration categories
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading.sessionDistribution ? (
              <div className="flex items-center justify-center h-[300px]">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            ) : sessionDistribution && sessionDistribution.length > 0 ? (
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={sessionDistribution.map(d => ({
                      category: d.category,
                      percentage: d.percentage || 0,  // keep numeric
                      count: d.count || 0,
                    }))}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip
                      formatter={(value, name) => {
                        if (name === "Percentage") {
                          return `${Number(value).toFixed(2)}%`;
                        }
                        if (name === "Count") {
                          return Number(value).toLocaleString();
                        }
                        return value;
                      }}
                    />
                    <Legend />
                    <Bar dataKey="percentage" name="Percentage" fill="#f97316" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="count" name="Count" fill="#10b981" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="flex items-center justify-center h-[300px] text-gray-500">
                No data available
              </div>
            )}
          </CardContent>
        </Card> */}
      </div>

      <div className="grid gap-4 md:grid-cols-1">
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
                      dataKey="total"
                    >
                      {deviceDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(total) => [`${total}`, "Total Session"]} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}
          </CardContent>
        </Card>


    {/* <Card>
      <CardHeader>
        <CardTitle>Suspicious Login Trends</CardTitle>
        <CardDescription>Daily suspicious login attempts over time</CardDescription>
      </CardHeader>
      <CardContent>
        {loading.dailySessionsData ? (
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
    </Card> */}

      </div>
    </>
  );
};
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Clock, Smartphone, TrendingUp } from "lucide-react";
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
import {
  SessionMetrics,
  DeviceDistribution,
  sessionTimeDistribution,
  countryDistribution,
  trafficSource,
} from "@/types/SessionAnalytics";

interface SessionAnalyticsTabProps {
  loading: {
    SessionMetrics: boolean;
    dailySessionsData: boolean;
    deviceDistribution: boolean;
    sessionTimeDistribution: boolean;
    countryDistribution: boolean;
    trafficSource: boolean;
  };
  SessionMetrics: SessionMetrics | null;
  dailySessionsData: { date: string; sessions: number; suspicious: number }[];
  deviceDistribution: DeviceDistribution[];
  sessionTimeDistribution?: sessionTimeDistribution[];
  countryDistribution?: countryDistribution[];
  trafficSource?: trafficSource[];
}

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#FF6B6B",
  "#4ECDC4",
  "#FFD166",
];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
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
      fontWeight="500"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-3 border rounded-lg shadow-lg border-gray-200">
        <p className="font-medium text-gray-900">
          {data.category || data.country || data.source || "Sessions"}
        </p>
        <p className="text-sm text-gray-600">
          Count: <span className="font-medium text-gray-900">{data.count || data.sessions}</span>
        </p>
        <p className="text-sm text-gray-600">
          Percentage: <span className="font-medium text-gray-900">{data.percentage}%</span>
        </p>
      </div>
    );
  }
  return null;
};



const CustomLegend = ({ payload }: any) => {
  return (
    <div className="flex justify-center gap-6 mt-4 flex-wrap">
      {payload.map((entry: any, index: number) => (
        <div key={index} className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-sm font-medium text-gray-700">{entry.value}</span>
          {entry.payload?.count && (
            <Badge variant="secondary" className="ml-1">
              {entry.payload.count}
            </Badge>
          )}
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
  sessionTimeDistribution,
  countryDistribution,
  trafficSource,
}) => {
  return (
    <div className="space-y-6">
      {/* Charts Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-400" />
              Daily Sessions Trend
            </CardTitle>
            <CardDescription>
              Total sessions and suspicious activity over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading.dailySessionsData ? (
              <div className="flex items-center justify-center h-[300px]">
                <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
              </div>
            ) : (
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={dailySessionsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="date"
                      stroke="#8ca30bff"
                      fontSize={12}
                      tickMargin={5}
                    />
                    <YAxis stroke="#8ca30bff" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        color: "#060607ff",
                        border: "1px solid #e2e8f0",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="sessions"
                      stackId="1"
                      stroke="#41b6e4ff"
                      fill="#3187d6d5"
                      fillOpacity={0.6}
                      name="Total Sessions"
                    />
                    <Area
                      type="monotone"
                      dataKey="suspicious"
                      stackId="2"
                      stroke="#ef4444"
                      fill="#ef4444"
                      fillOpacity={0.6}
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
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="h-5 w-5 text-green-600" />
              Device Performance Metrics
            </CardTitle>
            <CardDescription>
              Average duration and actions per device type
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading.deviceDistribution ? (
              <div className="flex items-center justify-center h-[300px]">
                <Loader2 className="h-8 w-8 animate-spin text-green-600" />
              </div>
            ) : deviceDistribution.length === 0 ? (
              <div className="flex items-center justify-center h-[300px] text-gray-500">
                No data available
              </div>
            ) : (
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={deviceDistribution.map((d) => ({
                      name: d.name,
                      avgDuration: d.avgDuration || 0,
                      avgActions: d.avgActions || 0,
                    }))}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" stroke="#666" fontSize={12} />
                    <YAxis stroke="#666" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        color: "#060607ff",
                        border: "1px solid #e2e8f0",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
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
                    <Bar
                      dataKey="avgDuration"
                      name="Avg Duration"
                      fill="#3b82f6"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      dataKey="avgActions"
                      name="Avg Actions"
                      fill="#10b981"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-purple-600" />
              Session Duration Distribution
            </CardTitle>
            <CardDescription>
              Distribution of user sessions by duration categories
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading.sessionTimeDistribution ? (
              <div className="flex items-center justify-center h-[300px]">
                <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
              </div>
            ) : sessionTimeDistribution && sessionTimeDistribution.length > 0 ? (
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={sessionTimeDistribution}
                      cx="50%"
                      cy="40%"
                      labelLine={false}
                      label={({ percentage }) => `${percentage}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="percentage"
                      animationBegin={0}
                      animationDuration={800}
                    >
                      {sessionTimeDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend content={<CustomLegend />} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="flex items-center justify-center h-[300px] text-gray-500">
                No data available
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="h-5 w-5 text-indigo-600" />
              Device Distribution
            </CardTitle>
            <CardDescription>Session breakdown by device type</CardDescription>
          </CardHeader>
          <CardContent>
            {loading.deviceDistribution ? (
              <div className="flex items-center justify-center h-[300px]">
                <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
              </div>
            ) : deviceDistribution.length > 0 ? (
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={deviceDistribution}
                      cx="50%"
                      cy="40%"
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
                    <Tooltip formatter={(total) => [`${total}`, "Total Sessions"]} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="flex items-center justify-center h-[300px] text-gray-500">
                No data available
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-red-600" />
              Bounce Rate Analysis
            </CardTitle>
            <CardDescription>
              Sessions with ≤1 action or &lt; 30 seconds
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading.SessionMetrics ? (
              <div className="flex items-center justify-center h-[300px]">
                <Loader2 className="h-8 w-8 animate-spin text-red-600" />
              </div>
            ) : SessionMetrics ? (
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: "Bounce", value: SessionMetrics.bounceRate ?? 0 },
                        { name: "Engaged", value: 100 - (SessionMetrics.bounceRate ?? 0) },
                      ]}
                      cx="50%"
                      cy="40%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      <Cell fill="#ef4444" />
                      <Cell fill="#10b981" />
                    </Pie>
                    <Tooltip formatter={(value: number) => `${value.toFixed(2)}%`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="flex items-center justify-center h-[300px] text-gray-500">
                No data available
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Geographic Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Geographic Distribution</CardTitle>
            <CardDescription>Sessions by user Country</CardDescription>
          </CardHeader>
          <CardContent>
            {loading.countryDistribution ? (
              <div className="flex items-center justify-center h-[300px]">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            ) : countryDistribution?.length ? (
              <div className="h-[300px] w-full flex gap-4">
                {/* Donut Chart */}
                <div className="flex-1">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={countryDistribution
                          .slice(0, 10) // top 6 countries
                          .concat({
                            country: "Others",
                            sessions: countryDistribution
                              .slice(10)
                              .reduce((sum, c) => sum + c.sessions, 0),
                            percentage: countryDistribution
                              .slice(10)
                              .reduce((sum, c) => sum + c.percentage, 0),
                          })}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={80}
                        paddingAngle={3}
                        dataKey="sessions"
                      >
                        {countryDistribution.slice(0, 10).map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        <Cell fill="#d1d5db" /> {/* Others */}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* Top Countries List */}
                <div className="w-1/3 overflow-y-auto">
                  <ul className="space-y-2 text-sm">
                    {countryDistribution.slice(0, 10).map((item, i) => (
                      <li key={i} className="flex justify-between">
                        <span>{item.country}</span>
                        <span className="font-medium">{item.sessions} ({item.percentage.toFixed(1)}%)</span>
                      </li>
                    ))}
                    {countryDistribution.length > 10 && (
                      <li className="flex justify-between text-gray-500">
                        <span>Others</span>
                        <span>
                          {countryDistribution
                            .slice(6)
                            .reduce((sum, c) => sum + c.sessions, 0)} (
                          {countryDistribution
                            .slice(6)
                            .reduce((sum, c) => sum + c.percentage, 0)
                            .toFixed(1)}
                          %)
                        </span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-[300px] text-gray-500">
                No data available
              </div>
            )}
          </CardContent>
        </Card>

        {/* Traffic Sources */}
        <Card>
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
            <CardDescription>Session origins and referrers</CardDescription>
          </CardHeader>
          <CardContent>
            {loading.trafficSource ? (
              <div className="flex items-center justify-center h-[300px]">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            ) : trafficSource?.length ? (
              <div className="h-[300px] w-full flex gap-4">
                {/* Donut Chart */}
                <div className="flex-1">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={trafficSource
                          .slice(0, 10) // top 4 sources
                          .concat({
                            source: "Others",
                            sessions: trafficSource
                              .slice(10)
                              .reduce((sum, t) => sum + t.sessions, 0),
                            percentage: trafficSource
                              .slice(10)
                              .reduce((sum, t) => sum + t.percentage, 0),
                          })}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={80}
                        paddingAngle={3}
                        dataKey="sessions"
                      >
                        {trafficSource.slice(0, 10).map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        <Cell fill="#d1d5db" /> {/* Others */}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* Top Sources List */}
                <div className="w-1/3 overflow-y-auto">
                  <ul className="space-y-2 text-sm">
                    {trafficSource.slice(0, 10).map((item, i) => (
                      <li key={i} className="flex justify-between">
                        <span>{item.source}</span>
                        <span className="font-medium">{item.sessions} ({item.percentage.toFixed(1)}%)</span>
                      </li>
                    ))}
                    {trafficSource.length > 10 && (
                      <li className="flex justify-between text-gray-500">
                        <span>Others</span>
                        <span>
                          {trafficSource
                            .slice(4)
                            .reduce((sum, t) => sum + t.sessions, 0)} (
                          {trafficSource
                            .slice(4)
                            .reduce((sum, t) => sum + t.percentage, 0)
                            .toFixed(1)}
                          %)
                        </span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-[300px] text-gray-500">
                No data available
              </div>
            )}
          </CardContent>
        </Card>








        {/* Bot vs Users */}
        {/* <Card>
          <CardHeader>
            <CardTitle>Bot vs Users</CardTitle>
            <CardDescription>Automated vs human traffic</CardDescription>
          </CardHeader>
          <CardContent>
            {loading.SessionMetrics ? (
              <div className="flex items-center justify-center h-[300px]">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            ) : SessionMetrics ? (
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: "Bots", value: SessionMetrics.botPercentage ?? 0 },
                        { name: "Users", value: SessionMetrics.userPercentage ?? 0 },
                      ]}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={80}
                      dataKey="value"
                      animationBegin={0}
                      animationDuration={800}
                    >
                      <Cell fill="#FF6B6B" />
                      <Cell fill="#4ECDC4" />
                    </Pie> */}
                    {/* <Tooltip content={<CustomTooltip />} />
                    <Legend content={<CustomLegend />} /> */}
                    {/* <Tooltip formatter={(value: number) => `${value.toFixed(2)}%`} />
                    <Legend />
                  </PieChart>
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
    </div>
  );
};
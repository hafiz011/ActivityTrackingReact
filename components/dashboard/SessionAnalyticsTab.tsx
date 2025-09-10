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
import { SessionMetrics, DeviceDistribution, SessionDistribution } from "@/types/SessionAnalytics";

interface SessionAnalyticsTabProps {
  loading: {
    SessionMetrics: boolean;
    dailySessionsData: boolean;
    deviceDistribution: boolean;
    sessionDistribution: boolean;
  };
  SessionMetrics: SessionMetrics | null;
  // dailySessionsData: DailySessionData[];
  dailySessionsData: { date: string; sessions: number; suspicious: number }[];

  deviceDistribution: DeviceDistribution[];
  sessionDistribution?: SessionDistribution[];
}
// import { SessionMetrics } from "@/types/SessionAnalytics";

// interface SessionAnalyticsTabProps {
//   loading: {
//     SessionMetrics: boolean;
//     dailySessionsData: boolean;
//     deviceDistribution: boolean;
//     sessionDistribution: boolean;
//   };
//   SessionMetrics: SessionMetrics | null;
//   dailySessionsData: { date: string; sessions: number; suspicious: number }[];
//   deviceDistribution: {  name: string; total: number; avgDuration: number; avgActions: number; }[];
//   sessionDistribution?: { category: 'Short' | 'Medium' | 'Long'; count: number; percentage: number; }[];
// }





const COLORS = ["#0088FE", "#00C49F", "#f08944ff", "#f76218ff", "#8884D8"];

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
        <p className="font-medium text-gray-900">{data.category} Sessions</p>
        <p className="text-sm text-gray-600">
          Count: <span className="font-medium text-gray-900">{data.count}</span>
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

const MetricCard = ({ title, value, icon: Icon, trend, description }: {
  title: string;
  value: string | number;
  icon: any;
  trend?: string;
  description?: string;
}) => (
  <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
    <div className="flex items-center gap-3">
      <div className="p-2 bg-blue-100 rounded-lg">
        <Icon className="h-5 w-5 text-blue-600" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        {trend && <p className="text-xs text-green-600">{trend}</p>}
        {description && <p className="text-xs text-gray-500 mt-1">{description}</p>}
      </div>
    </div>
  </div>
);

export const SessionAnalyticsTab: React.FC<SessionAnalyticsTabProps> = ({
  loading,
  SessionMetrics,
  dailySessionsData,
  deviceDistribution,
  sessionDistribution,
}) => {
  return (
    <div className="space-y-6">

      {/* Charts Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
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
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis 
                      dataKey="date" 
                      stroke="#666"
                      fontSize={12}
                      tickMargin={5}
                    />
                    <YAxis stroke="#666" fontSize={12} />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="sessions"
                      stackId="1"
                      stroke="#3b82f6"
                      fill="#3b82f6"
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
                    data={deviceDistribution.map(d => ({
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
                        backgroundColor: 'white',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
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
            {loading?.sessionDistribution ? (
              <div className="flex items-center justify-center h-[300px]">
                <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
              </div>
            ) : (
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={sessionDistribution}
                      cx="50%"
                      cy="40%"
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
            ) : (
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
              Sessions with ≤1 action or &lt; 10 seconds
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading.SessionMetrics ? (
              <div className="flex items-center justify-center h-[300px]">
                <Loader2 className="h-8 w-8 animate-spin text-red-600" />
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
            )}
          </CardContent>
        </Card>
      </div>

      {/* Future Features */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-dashed border-gray-300">
          <CardHeader>
            <CardTitle className="text-gray-600">Geographic Distribution</CardTitle>
            <CardDescription>Sessions by user location</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center h-[200px] text-gray-500">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                🌍
              </div>
              <p className="text-center">Geographic distribution chart coming soon!</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-dashed border-gray-300">
          <CardHeader>
            <CardTitle className="text-gray-600">Traffic Sources</CardTitle>
            <CardDescription>Session origins and referrers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center h-[200px] text-gray-500">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                🔗
              </div>
              <p className="text-center">Traffic sources chart coming soon!</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-dashed border-gray-300">
          <CardHeader>
            <CardTitle className="text-gray-600">Bot vs Users</CardTitle>
            <CardDescription>Automated vs human traffic</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center h-[200px] text-gray-500">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                🤖
              </div>
              <p className="text-center">Bot vs Users analysis coming soon!</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};










// "use client"
// import { useAuth } from "@/context/AuthContext";
// import { useRouter } from "next/navigation";
// import { useState, useEffect, useCallback } from "react"
// import type { DateRange } from "react-day-picker"
// import { addDays } from "date-fns"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { AppSidebar } from "@/components/app-sidebar"
// import { ThemeToggle } from "@/components/theme-toggle"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { FiltersCard } from "@/components/dashboard/FiltersCard"
// import { Progress } from "@/components/ui/progress"
// import { Slider } from "@/components/ui/slider"

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Avatar, AvatarFallback } from "@/components/ui/avatar"
// import { Label } from "@/components/ui/label"
// import { Switch } from "@/components/ui/switch"
// import { DatePickerWithRange } from "@/components/date-range-picker"




// import {
//   Activity,
//   Users,
//   Clock,
//   TrendingUp,
//   MapPin,
//   Monitor,
//   LogOut,
//   MoreHorizontal,
//   Filter,
//   Download,
//   RefreshCw,
//   AlertTriangle,
//   Shield,
//   Eye,
//   Bell,
//   Map,
//   BarChart3,
//   Zap,
//   Smartphone,
//   Tablet,
//   Check,
//   ChevronDown,
//   Loader2,
// } from "lucide-react"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
// import {
//   AreaChart,
//   Area,
//   LineChart,
//   Line,
//   PieChart,
//   Pie,
//   Cell,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   BarChart,
//   Bar,
// } from "recharts"
// import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"

// import { Separator } from "@/components/ui/separator"
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
// import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

// // API service for data fetching
// const apiService = {
//   // Active Sessions
//   getActiveSessions: async (filters = {}) => {
//     console.log("Fetching active sessions with filters:", filters)
//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 500))
//     return mockActiveSessions
//   },

//   // Suspicious Activity
//   getSuspiciousActivity: async (limit = 10) => {
//     console.log(`Fetching suspicious activity, limit: ${limit}`)
//     await new Promise((resolve) => setTimeout(resolve, 500))
//     return mockSuspiciousActivities
//   },

//   // Session Metrics
//   getSessionsDaily: async (dateRange) => {
//     console.log("Fetching daily sessions for range:", dateRange)
//     await new Promise((resolve) => setTimeout(resolve, 500))
//     return mockDailySessionsData
//   },

//   getSessionDurationAvg: async () => {
//     await new Promise((resolve) => setTimeout(resolve, 300))
//     return { avgDuration: "4m 32s", trend: 8 }
//   },

//   getActionsPerSession: async () => {
//     await new Promise((resolve) => setTimeout(resolve, 300))
//     return { avgActions: 12.8, trend: 5.2 }
//   },

//   getBounceRate: async () => {
//     await new Promise((resolve) => setTimeout(resolve, 300))
//     return { rate: 23.4, trend: -2.1 }
//   },

//   getTopUsers: async (limit = 5) => {
//     console.log(`Fetching top users, limit: ${limit}`)
//     await new Promise((resolve) => setTimeout(resolve, 500))
//     return mockTopActiveUsers
//   },

//   // Activity Breakdown
//   getActivityBreakdown: async (groupBy = "user") => {
//     console.log(`Fetching activity breakdown by: ${groupBy}`)
//     await new Promise((resolve) => setTimeout(resolve, 700))
//     return mockActivityBreakdown
//   },

//   // Recent Sessions
//   getRecentSessions: async (filters = {}) => {
//     console.log("Fetching recent sessions with filters:", filters)
//     await new Promise((resolve) => setTimeout(resolve, 500))
//     return mockActiveSessions
//   },

//   // Suspicious Login Alerts
//   getSuspiciousLoginAlerts: async () => {
//     await new Promise((resolve) => setTimeout(resolve, 400))
//     return mockSuspiciousActivities
//   },

//   // Active Users Count
//   getActiveUsersCount: async () => {
//     await new Promise((resolve) => setTimeout(resolve, 200))
//     return { count: 1234, trend: 12.5 }
//   },

//   // Login Trends
//   getLoginTrend: async (range = "7d") => {
//     console.log(`Fetching login trend for range: ${range}`)
//     await new Promise((resolve) => setTimeout(resolve, 500))
//     return mockLoginTrendData
//   },

//   // Device Distribution
//   getDeviceDistribution: async () => {
//     await new Promise((resolve) => setTimeout(resolve, 400))
//     return mockDeviceDistribution
//   },
// }

// // Mock data
// const mockActiveSessions = [
//   {
//     id: 1,
//     userId: "user_123",
//     email: "john.doe@example.com",
//     ipAddress: "192.168.1.100",
//     country: "United States",
//     city: "New York",
//     device: "Chrome 120 / Windows 11",
//     deviceType: "desktop",
//     loginTime: "2025-01-31 14:23:45",
//     suspicious: false,
//     actions: 23,
//     geoLocation: { lat: 40.7128, lng: -74.006 },
//   },
//   {
//     id: 2,
//     userId: "user_456",
//     email: "sarah.wilson@example.com",
//     ipAddress: "10.0.0.50",
//     country: "United Kingdom",
//     city: "London",
//     device: "Safari 17 / iOS 17",
//     deviceType: "mobile",
//     loginTime: "2025-01-31 14:18:12",
//     suspicious: true,
//     actions: 3,
//     geoLocation: { lat: 51.5074, lng: -0.1278 },
//   },
//   {
//     id: 3,
//     userId: "user_789",
//     email: "mike.johnson@example.com",
//     ipAddress: "172.16.0.25",
//     country: "Canada",
//     city: "Toronto",
//     device: "Firefox 121 / macOS 14",
//     deviceType: "desktop",
//     loginTime: "2025-01-31 14:15:33",
//     suspicious: false,
//     actions: 45,
//     geoLocation: { lat: 43.6532, lng: -79.3832 },
//   },
//   {
//     id: 4,
//     userId: "user_321",
//     email: "emma.davis@example.com",
//     ipAddress: "203.0.113.42",
//     country: "Australia",
//     city: "Sydney",
//     device: "Chrome 120 / Android 14",
//     deviceType: "mobile",
//     loginTime: "2025-01-31 14:10:22",
//     suspicious: false,
//     actions: 17,
//     geoLocation: { lat: -33.8688, lng: 151.2093 },
//   },
//   {
//     id: 5,
//     userId: "user_654",
//     email: "alex.brown@example.com",
//     ipAddress: "198.51.100.73",
//     country: "Germany",
//     city: "Berlin",
//     device: "Edge 120 / Windows 11",
//     deviceType: "desktop",
//     loginTime: "2025-01-31 14:05:18",
//     suspicious: false,
//     actions: 31,
//     geoLocation: { lat: 52.52, lng: 13.405 },
//   },
// ]

// const mockSuspiciousActivities = [
//   {
//     id: 1,
//     userId: "user_456",
//     email: "sarah.wilson@example.com",
//     flags: ["Multiple IPs", "Unusual Location"],
//     timestamp: "2025-01-31 14:18:12",
//     country: "Unknown",
//     device: "Mobile",
//     severity: "high",
//     reviewed: false,
//   },
//   {
//     id: 2,
//     userId: "user_321",
//     email: "suspicious@temp.com",
//     flags: ["Rapid Logins", "Bot-like Behavior"],
//     timestamp: "2025-01-31 13:45:22",
//     country: "Russia",
//     device: "Desktop",
//     severity: "critical",
//     reviewed: false,
//   },
//   {
//     id: 3,
//     userId: "user_987",
//     email: "potential.threat@example.com",
//     flags: ["Unusual Browser", "Suspicious IP Range"],
//     timestamp: "2025-01-31 12:32:15",
//     country: "Nigeria",
//     device: "Mobile",
//     severity: "medium",
//     reviewed: false,
//   },
// ]

// const mockDailySessionsData = [
//   { date: "Jan 25", sessions: 1234, suspicious: 23 },
//   { date: "Jan 26", sessions: 1456, suspicious: 18 },
//   { date: "Jan 27", sessions: 1123, suspicious: 31 },
//   { date: "Jan 28", sessions: 1678, suspicious: 15 },
//   { date: "Jan 29", sessions: 1890, suspicious: 42 },
//   { date: "Jan 30", sessions: 2134, suspicious: 28 },
//   { date: "Jan 31", sessions: 1987, suspicious: 19 },
// ]

// const mockLoginTrendData = [
//   { time: "00:00", logins: 45 },
//   { time: "04:00", logins: 23 },
//   { time: "08:00", logins: 189 },
//   { time: "12:00", logins: 234 },
//   { time: "16:00", logins: 156 },
//   { time: "20:00", logins: 98 },
// ]

// const mockDeviceDistribution = [
//   { name: "Desktop", value: 45, count: 5234 },
//   { name: "Mobile", value: 39, count: 4567 },
//   { name: "Tablet", value: 16, count: 1876 },
// ]

// const mockTopActiveUsers = [
//   { userId: "user_789", email: "mike.johnson@example.com", sessions: 45, actions: 1234 },
//   { userId: "user_123", email: "john.doe@example.com", sessions: 38, actions: 987 },
//   { userId: "user_654", email: "emma.davis@example.com", sessions: 32, actions: 876 },
//   { userId: "user_987", email: "alex.brown@example.com", sessions: 28, actions: 654 },
//   { userId: "user_456", email: "sarah.wilson@example.com", sessions: 25, actions: 543 },
// ]

// const mockActivityBreakdown = {
//   users: [
//     {
//       userId: "user_789",
//       email: "mike.johnson@example.com",
//       sessions: 45,
//       actions: 1234,
//       pagesVisited: ["Dashboard", "Profile", "Settings", "Products", "Orders"],
//       lastAction: "Checkout",
//       avgSessionDuration: "5m 23s",
//       recentActivity: [
//         { action: "View Product", timestamp: "2025-01-31 14:22:15", page: "/products/123" },
//         { action: "Add to Cart", timestamp: "2025-01-31 14:23:05", page: "/products/123" },
//         { action: "Checkout", timestamp: "2025-01-31 14:25:30", page: "/checkout" },
//       ],
//     },
//     {
//       userId: "user_123",
//       email: "john.doe@example.com",
//       sessions: 38,
//       actions: 987,
//       pagesVisited: ["Dashboard", "Analytics", "Users", "Reports"],
//       lastAction: "Export Report",
//       avgSessionDuration: "7m 12s",
//       recentActivity: [
//         { action: "View Analytics", timestamp: "2025-01-31 13:45:22", page: "/analytics" },
//         { action: "Filter Data", timestamp: "2025-01-31 13:47:18", page: "/analytics" },
//         { action: "Export Report", timestamp: "2025-01-31 13:50:05", page: "/analytics/export" },
//       ],
//     },
//     {
//       userId: "user_654",
//       email: "emma.davis@example.com",
//       sessions: 32,
//       actions: 876,
//       pagesVisited: ["Dashboard", "Messages", "Calendar", "Tasks"],
//       lastAction: "Create Task",
//       avgSessionDuration: "4m 45s",
//       recentActivity: [
//         { action: "View Calendar", timestamp: "2025-01-31 12:30:15", page: "/calendar" },
//         { action: "Create Event", timestamp: "2025-01-31 12:33:22", page: "/calendar/new" },
//         { action: "Create Task", timestamp: "2025-01-31 12:38:47", page: "/tasks/new" },
//       ],
//     },
//   ],
//   pages: [
//     {
//       path: "/dashboard",
//       title: "Dashboard",
//       views: 3456,
//       uniqueUsers: 1234,
//       avgTimeOnPage: "2m 15s",
//       bounceRate: "21.5%",
//     },
//     {
//       path: "/products",
//       title: "Products",
//       views: 2876,
//       uniqueUsers: 987,
//       avgTimeOnPage: "3m 45s",
//       bounceRate: "18.2%",
//     },
//     {
//       path: "/analytics",
//       title: "Analytics",
//       views: 1987,
//       uniqueUsers: 654,
//       avgTimeOnPage: "5m 32s",
//       bounceRate: "12.8%",
//     },
//   ],
//   sections: [
//     {
//       name: "User Dashboard",
//       totalViews: 8765,
//       uniqueUsers: 2345,
//       avgEngagement: "High",
//     },
//     {
//       name: "Admin Panel",
//       totalViews: 3456,
//       uniqueUsers: 123,
//       avgEngagement: "Very High",
//     },
//     {
//       name: "Product Catalog",
//       totalViews: 6543,
//       uniqueUsers: 1876,
//       avgEngagement: "Medium",
//     },
//   ],
// }

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

// export default function ActivityTrackingDashboard() {
//   // State for filters
//     const { isAuthenticated, isLoading: authLoading } = useAuth()
//     const router = useRouter()

//   // Redirect if not authenticated
//   useEffect(() => {
//     if (!authLoading && !isAuthenticated) {
//       router.push("/login")
//       return
//     }

//   }, [isAuthenticated, authLoading, router])


//   const [timeRange, setTimeRange] = useState("7d")
//   const [suspiciousOnly, setSuspiciousOnly] = useState(false)
//   const [selectedCountry, setSelectedCountry] = useState("all")
//   const [selectedDevice, setSelectedDevice] = useState("all")
//   const [viewMode, setViewMode] = useState("table") // table or map
//   const [dateRange, setDateRange] = useState<DateRange | undefined>({
//     from: addDays(new Date(), -7),
//     to: new Date(),
//   })
//   const [groupBy, setGroupBy] = useState("user") // user, page, section

//   // State for data
//   const [activeSessions, setActiveSessions] = useState([])
//   const [suspiciousActivities, setSuspiciousActivities] = useState([])
//   const [dailySessionsData, setDailySessionsData] = useState([])
//   const [loginTrendData, setLoginTrendData] = useState([])
//   const [deviceDistribution, setDeviceDistribution] = useState([])
//   const [topActiveUsers, setTopActiveUsers] = useState([])
//   const [activityBreakdown, setActivityBreakdown] = useState({ users: [], pages: [], sections: [] })
//   const [sessionMetrics, setSessionMetrics] = useState({
//     avgDuration: "0m 0s",
//     avgDurationTrend: 0,
//     avgActions: 0,
//     avgActionsTrend: 0,
//     bounceRate: 0,
//     bounceRateTrend: 0,
//   })
//   const [activeUsersCount, setActiveUsersCount] = useState({ count: 0, trend: 0 })

//   // Loading states
//   const [loading, setLoading] = useState({
//     activeSessions: false,
//     suspiciousActivities: false,
//     dailySessions: false,
//     loginTrend: false,
//     deviceDistribution: false,
//     topUsers: false,
//     activityBreakdown: false,
//     sessionMetrics: false,
//     activeUsersCount: false,
//   })


//     {/* animate background particles

//  const canvasRef = useRef<HTMLCanvasElement>(null)

//   // Particle effect
//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return

//     const ctx = canvas.getContext("2d")
//     if (!ctx) return

//     canvas.width = canvas.offsetWidth
//     canvas.height = canvas.offsetHeight

//     const particles: Particle[] = []
//     const particleCount = 100

//     class Particle {
//       x: number
//       y: number
//       size: number
//       speedX: number
//       speedY: number
//       color: string

//       constructor() {
//         this.x = Math.random() * canvas.width
//         this.y = Math.random() * canvas.height
//         this.size = Math.random() * 3 + 1
//         this.speedX = (Math.random() - 0.5) * 0.5
//         this.speedY = (Math.random() - 0.5) * 0.5
//         this.color = `rgba(${Math.floor(Math.random() * 100) + 100}, ${Math.floor(Math.random() * 100) + 150}, ${Math.floor(Math.random() * 55) + 200}, ${Math.random() * 0.5 + 0.2})`
//       }

//       update() {
//         this.x += this.speedX
//         this.y += this.speedY

//         if (this.x > canvas.width) this.x = 0
//         if (this.x < 0) this.x = canvas.width
//         if (this.y > canvas.height) this.y = 0
//         if (this.y < 0) this.y = canvas.height
//       }

//       draw() {
//         if (!ctx) return
//         ctx.fillStyle = this.color
//         ctx.beginPath()
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
//         ctx.fill()
//       }
//     }

//     for (let i = 0; i < particleCount; i++) {
//       particles.push(new Particle())
//     }

//     function animate() {
//       if (!ctx || !canvas) return
//       ctx.clearRect(0, 0, canvas.width, canvas.height)

//       for (const particle of particles) {
//         particle.update()
//         particle.draw()
//       }

//       requestAnimationFrame(animate)
//     }

//     animate()

//     const handleResize = () => {
//       if (!canvas) return
//       canvas.width = canvas.offsetWidth
//       canvas.height = canvas.offsetHeight
//     }

//     window.addEventListener("resize", handleResize)

//     return () => {
//       window.removeEventListener("resize", handleResize)
//     }
//   }, [])


// */}












//   // Function to fetch all data
//   const fetchAllData = useCallback(async () => {
//     // Fetch active sessions
//     setLoading((prev) => ({ ...prev, activeSessions: true }))
//     try {
//       const filters = {
//         suspiciousOnly,
//         country: selectedCountry !== "all" ? selectedCountry : undefined,
//         deviceType: selectedDevice !== "all" ? selectedDevice : undefined,
//         dateRange,
//       }
//       const sessions = await apiService.getActiveSessions(filters)
//       setActiveSessions(sessions)
//     } catch (error) {
//       console.error("Error fetching active sessions:", error)
//     } finally {
//       setLoading((prev) => ({ ...prev, activeSessions: false }))
//     }

//     // Fetch suspicious activities
//     setLoading((prev) => ({ ...prev, suspiciousActivities: true }))
//     try {
//       const activities = await apiService.getSuspiciousActivity()
//       setSuspiciousActivities(activities)
//     } catch (error) {
//       console.error("Error fetching suspicious activities:", error)
//     } finally {
//       setLoading((prev) => ({ ...prev, suspiciousActivities: false }))
//     }

//     // Fetch daily sessions data
//     setLoading((prev) => ({ ...prev, dailySessions: true }))
//     try {
//       const sessions = await apiService.getSessionsDaily(dateRange)
//       setDailySessionsData(sessions)
//     } catch (error) {
//       console.error("Error fetching daily sessions:", error)
//     } finally {
//       setLoading((prev) => ({ ...prev, dailySessions: false }))
//     }

//     // Fetch login trend data
//     setLoading((prev) => ({ ...prev, loginTrend: true }))
//     try {
//       const trend = await apiService.getLoginTrend(timeRange)
//       setLoginTrendData(trend)
//     } catch (error) {
//       console.error("Error fetching login trend:", error)
//     } finally {
//       setLoading((prev) => ({ ...prev, loginTrend: false }))
//     }

//     // Fetch device distribution
//     setLoading((prev) => ({ ...prev, deviceDistribution: true }))
//     try {
//       const distribution = await apiService.getDeviceDistribution()
//       setDeviceDistribution(distribution)
//     } catch (error) {
//       console.error("Error fetching device distribution:", error)
//     } finally {
//       setLoading((prev) => ({ ...prev, deviceDistribution: false }))
//     }

//     // Fetch top active users
//     setLoading((prev) => ({ ...prev, topUsers: true }))
//     try {
//       const users = await apiService.getTopUsers()
//       setTopActiveUsers(users)
//     } catch (error) {
//       console.error("Error fetching top users:", error)
//     } finally {
//       setLoading((prev) => ({ ...prev, topUsers: false }))
//     }

//     // Fetch activity breakdown
//     setLoading((prev) => ({ ...prev, activityBreakdown: true }))
//     try {
//       const breakdown = await apiService.getActivityBreakdown(groupBy)
//       setActivityBreakdown(breakdown)
//     } catch (error) {
//       console.error("Error fetching activity breakdown:", error)
//     } finally {
//       setLoading((prev) => ({ ...prev, activityBreakdown: false }))
//     }

//     // Fetch session metrics
//     setLoading((prev) => ({ ...prev, sessionMetrics: true }))
//     try {
//       const [duration, actions, bounce] = await Promise.all([
//         apiService.getSessionDurationAvg(),
//         apiService.getActionsPerSession(),
//         apiService.getBounceRate(),
//       ])

//       setSessionMetrics({
//         avgDuration: duration.avgDuration,
//         avgDurationTrend: duration.trend,
//         avgActions: actions.avgActions,
//         avgActionsTrend: actions.trend,
//         bounceRate: bounce.rate,
//         bounceRateTrend: bounce.trend,
//       })
//     } catch (error) {
//       console.error("Error fetching session metrics:", error)
//     } finally {
//       setLoading((prev) => ({ ...prev, sessionMetrics: false }))
//     }

//     // Fetch active users count
//     setLoading((prev) => ({ ...prev, activeUsersCount: true }))
//     try {
//       const count = await apiService.getActiveUsersCount()
//       setActiveUsersCount(count)
//     } catch (error) {
//       console.error("Error fetching active users count:", error)
//     } finally {
//       setLoading((prev) => ({ ...prev, activeUsersCount: false }))
//     }
//   }, [timeRange, suspiciousOnly, selectedCountry, selectedDevice, dateRange, groupBy])

//   // Fetch data on initial load and when filters change
//   useEffect(() => {
//     fetchAllData()
//   }, [fetchAllData])

//   // Function to handle refresh
//   const handleRefresh = () => {
//     fetchAllData()
//   }

//   // Function to mark suspicious activity as reviewed
//   const markAsReviewed = (id) => {
//     setSuspiciousActivities((prev) =>
//       prev.map((activity) => (activity.id === id ? { ...activity, reviewed: true } : activity)),
//     )
//   }

//   // Function to render custom pie chart label
//   const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
//     const RADIAN = Math.PI / 180
//     const radius = innerRadius + (outerRadius - innerRadius) * 0.5
//     const x = cx + radius * Math.cos(-midAngle * RADIAN)
//     const y = cy + radius * Math.sin(-midAngle * RADIAN)

//     return (
//       <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central" fontSize="12">
//         {`${name} ${(percent * 100).toFixed(0)}%`}
//       </text>
//     )
//   }

//   // Function to get severity color
//   const getSeverityColor = (severity) => {
//     switch (severity) {
//       case "critical":
//         return "text-red-600 bg-red-50 border-red-200"
//       case "high":
//         return "text-orange-600 bg-orange-50 border-orange-200"
//       case "medium":
//         return "text-yellow-600 bg-yellow-50 border-yellow-200"
//       default:
//         return "text-gray-600 bg-gray-50 border-gray-200"
//     }
//   }

//   // Function to get device icon
//   const getDeviceIcon = (deviceType) => {
//     switch (deviceType.toLowerCase()) {
//       case "mobile":
//         return <Smartphone className="h-4 w-4" />
//       case "tablet":
//         return <Tablet className="h-4 w-4" />
//       default:
//         return <Monitor className="h-4 w-4" />
//     }
//   }

//   return (
//     <SidebarProvider>
//       {/* Background particle effect */}
//       {/* <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30" /> */}
//       <AppSidebar />
//       <SidebarInset className="p-2">
//         {/* Header */}
//         <Card className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
//           <div className="flex items-center gap-2 px-4">
//             <SidebarTrigger className="-ml-1" />
//             <Separator orientation="vertical" className="mr-2 h-4" />
//             <Breadcrumb>
//               <BreadcrumbList>
//                 <BreadcrumbItem className="hidden md:block">
//                   <BreadcrumbLink href="#">ActivityTracking</BreadcrumbLink>
//                 </BreadcrumbItem>
//                 <BreadcrumbSeparator className="hidden md:block" />
//                 <BreadcrumbItem>
//                   <BreadcrumbPage>Dashboard</BreadcrumbPage>
//                 </BreadcrumbItem>
//               </BreadcrumbList>
//             </Breadcrumb>
//           </div>

//           <div className="ml-auto flex items-center gap-4 px-4">
//             <ThemeToggle showDropdown={true} />
//             <Button variant="outline" size="sm">
//               <Bell className="h-4 w-4 mr-2" />
//               Alerts
//               <Badge variant="destructive" className="ml-2">
//                 {suspiciousActivities.length}
//               </Badge>
//             </Button>
//             <Button variant="outline" size="sm">
//               <Download className="h-4 w-4 mr-2" />
//               Export
//             </Button>
//             <Button variant="outline" size="sm" onClick={handleRefresh} disabled={Object.values(loading).some(Boolean)}>
//               {Object.values(loading).some(Boolean) ? (
//                 <Loader2 className="h-4 w-4 mr-2 animate-spin" />
//               ) : (
//                 <RefreshCw className="h-4 w-4 mr-2" />
//               )}
//               Refresh
//             </Button>
//           </div>
//         </Card>

//         <Card className="flex flex-1 flex-col gap-4 p-5 pt-3">
//           <FiltersCard
//             dateRange={dateRange}
//             setDateRange={setDateRange}
//             selectedCountry={selectedCountry}
//             setSelectedCountry={setSelectedCountry}
//             selectedDevice={selectedDevice}
//             setSelectedDevice={setSelectedDevice}
//             suspiciousOnly={suspiciousOnly}
//             setSuspiciousOnly={setSuspiciousOnly}
//             timeRange={timeRange}
//             setTimeRange={setTimeRange}
//           />

//           {/* Real-time Metrics */}
//           <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                 <CardTitle className="text-sm font-medium">Active Users</CardTitle>
//                 <Zap className="h-4 w-4 text-green-600" />
//               </CardHeader>
//               <CardContent>
//                 {loading.activeUsersCount ? (
//                   <div className="flex items-center justify-center h-12">
//                     <Loader2 className="h-4 w-4 animate-spin" />
//                   </div>
//                 ) : (
//                   <>
//                     <div className="text-2xl font-bold text-green-600">{activeUsersCount.count.toLocaleString()}</div>
//                     <p className="text-xs text-muted-foreground">
//                       <span className={activeUsersCount.trend >= 0 ? "text-green-600" : "text-red-600"}>
//                         {activeUsersCount.trend >= 0 ? "+" : ""}
//                         {activeUsersCount.trend}%
//                       </span>{" "}
//                       from last period
//                     </p>
//                   </>
//                 )}
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                 <CardTitle className="text-sm font-medium">Suspicious Today</CardTitle>
//                 <AlertTriangle className="h-4 w-4 text-red-600" />
//               </CardHeader>
//               <CardContent>
//                 {loading.suspiciousActivities ? (
//                   <div className="flex items-center justify-center h-12">
//                     <Loader2 className="h-4 w-4 animate-spin" />
//                   </div>
//                 ) : (
//                   <>
//                     <div className="text-2xl font-bold text-red-600">{suspiciousActivities.length}</div>
//                     <p className="text-xs text-muted-foreground">
//                       <span className="text-red-600">+15%</span> from yesterday
//                     </p>
//                   </>
//                 )}
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                 <CardTitle className="text-sm font-medium">Avg Session</CardTitle>
//                 <Clock className="h-4 w-4 text-muted-foreground" />
//               </CardHeader>
//               <CardContent>
//                 {loading.sessionMetrics ? (
//                   <div className="flex items-center justify-center h-12">
//                     <Loader2 className="h-4 w-4 animate-spin" />
//                   </div>
//                 ) : (
//                   <>
//                     <div className="text-2xl font-bold">{sessionMetrics.avgDuration}</div>
//                     <p className="text-xs text-muted-foreground">
//                       <span className={sessionMetrics.avgDurationTrend >= 0 ? "text-green-600" : "text-red-600"}>
//                         {sessionMetrics.avgDurationTrend >= 0 ? "+" : ""}
//                         {sessionMetrics.avgDurationTrend}%
//                       </span>{" "}
//                       from last week
//                     </p>
//                   </>
//                 )}
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                 <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
//                 <TrendingUp className="h-4 w-4 text-muted-foreground" />
//               </CardHeader>
//               <CardContent>
//                 {loading.sessionMetrics ? (
//                   <div className="flex items-center justify-center h-12">
//                     <Loader2 className="h-4 w-4 animate-spin" />
//                   </div>
//                 ) : (
//                   <>
//                     <div className="text-2xl font-bold">{sessionMetrics.bounceRate}%</div>
//                     <p className="text-xs text-muted-foreground">
//                       <span className={sessionMetrics.bounceRateTrend < 0 ? "text-green-600" : "text-red-600"}>
//                         {sessionMetrics.bounceRateTrend >= 0 ? "+" : ""}
//                         {sessionMetrics.bounceRateTrend}%
//                       </span>{" "}
//                       {sessionMetrics.bounceRateTrend < 0 ? "improvement" : "increase"}
//                     </p>
//                   </>
//                 )}
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                 <CardTitle className="text-sm font-medium">Actions/Session</CardTitle>
//                 <Activity className="h-4 w-4 text-muted-foreground" />
//               </CardHeader>
//               <CardContent>
//                 {loading.sessionMetrics ? (
//                   <div className="flex items-center justify-center h-12">
//                     <Loader2 className="h-4 w-4 animate-spin" />
//                   </div>
//                 ) : (
//                   <>
//                     <div className="text-2xl font-bold">{sessionMetrics.avgActions}</div>
//                     <p className="text-xs text-muted-foreground">
//                       <span className={sessionMetrics.avgActionsTrend >= 0 ? "text-green-600" : "text-red-600"}>
//                         {sessionMetrics.avgActionsTrend >= 0 ? "+" : ""}
//                         {sessionMetrics.avgActionsTrend}%
//                       </span>{" "}
//                       from last week
//                     </p>
//                   </>
//                 )}
//               </CardContent>
//             </Card>
//           </div>

//           {/* Suspicious Activity Alerts */}
//           {suspiciousActivities.length > 0 && (
//             <Alert className="border-red-200 bg-red-50">
//               <AlertTriangle className="h-4 w-4 text-red-600" />
//               <AlertTitle className="text-red-800">Suspicious Activity Detected</AlertTitle>
//               <AlertDescription className="text-red-700">
//                 {suspiciousActivities.length} suspicious login attempts detected in the last hour.
//                 <Button variant="link" className="p-0 h-auto text-red-700 underline ml-1">
//                   Review now
//                 </Button>
//               </AlertDescription>
//             </Alert>
//           )}

//           {/* Main Dashboard Tabs */}
//           <Tabs defaultValue="sessions" className="space-y-4">
//             <TabsList className="grid w-full grid-cols-6">
//               <TabsTrigger value="sessions">Active Sessions</TabsTrigger>
//               <TabsTrigger value="analytics">Session Analytics</TabsTrigger>
//               <TabsTrigger value="suspicious">Suspicious Activity</TabsTrigger>
//               <TabsTrigger value="breakdown">Activity Breakdown</TabsTrigger>
//               <TabsTrigger value="trends">Login Trends</TabsTrigger>
//               <TabsTrigger value="users">Top Users</TabsTrigger>
//             </TabsList>

//             {/* Active Sessions Tab */}
//             <TabsContent value="sessions" className="space-y-4">
//               <Card>
//                 <CardHeader>
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <CardTitle className="flex items-center gap-2">
//                         <Users className="h-5 w-5" />
//                         Active Sessions by Location & Device
//                       </CardTitle>
//                       <CardDescription>Real-time view of currently logged-in users</CardDescription>
//                     </div>
//                     <div className="flex gap-2">
//                       <Button
//                         variant="outline"
//                         size="sm"
//                         onClick={() => setViewMode(viewMode === "table" ? "map" : "table")}
//                       >
//                         {viewMode === "table" ? (
//                           <Map className="h-4 w-4 mr-2" />
//                         ) : (
//                           <BarChart3 className="h-4 w-4 mr-2" />
//                         )}
//                         {viewMode === "table" ? "Map View" : "Table View"}
//                       </Button>
//                     </div>
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   {loading.activeSessions ? (
//                     <div className="flex items-center justify-center h-96">
//                       <div className="text-center">
//                         <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-muted-foreground" />
//                         <p className="text-muted-foreground">Loading session data...</p>
//                       </div>
//                     </div>
//                   ) : viewMode === "table" ? (
//                     <Table>
//                       <TableHeader>
//                         <TableRow>
//                           <TableHead>User</TableHead>
//                           <TableHead>IP Address</TableHead>
//                           <TableHead>Location</TableHead>
//                           <TableHead>Device</TableHead>
//                           <TableHead>Login Time</TableHead>
//                           <TableHead>Actions</TableHead>
//                           <TableHead>Status</TableHead>
//                           <TableHead></TableHead>
//                         </TableRow>
//                       </TableHeader>
//                       <TableBody>
//                         {activeSessions.map((session) => (
//                           <TableRow key={session.id}>
//                             <TableCell>
//                               <div className="flex items-center gap-2">
//                                 <Avatar className="h-8 w-8">
//                                   <AvatarFallback>{session.email.substring(0, 2).toUpperCase()}</AvatarFallback>
//                                 </Avatar>
//                                 <div>
//                                   <div className="font-medium">{session.userId}</div>
//                                   <div className="text-sm text-muted-foreground">{session.email}</div>
//                                 </div>
//                               </div>
//                             </TableCell>
//                             <TableCell className="font-mono text-sm">{session.ipAddress}</TableCell>
//                             <TableCell>
//                               <div className="flex items-center gap-2">
//                                 <MapPin className="h-4 w-4 text-muted-foreground" />
//                                 <div>
//                                   <div>{session.city}</div>
//                                   <div className="text-sm text-muted-foreground">{session.country}</div>
//                                 </div>
//                               </div>
//                             </TableCell>
//                             <TableCell>
//                               <div className="flex items-center gap-2">
//                                 {getDeviceIcon(session.deviceType)}
//                                 <span className="text-sm">{session.device}</span>
//                               </div>
//                             </TableCell>
//                             <TableCell className="text-sm">{session.loginTime}</TableCell>
//                             <TableCell>
//                               <Badge variant="outline">{session.actions} actions</Badge>
//                             </TableCell>
//                             <TableCell>
//                               {session.suspicious ? (
//                                 <Badge variant="destructive" className="flex items-center gap-1">
//                                   <AlertTriangle className="h-3 w-3" />
//                                   Suspicious
//                                 </Badge>
//                               ) : (
//                                 <Badge variant="default" className="flex items-center gap-1">
//                                   <Shield className="h-3 w-3" />
//                                   Normal
//                                 </Badge>
//                               )}
//                             </TableCell>
//                             <TableCell>
//                               <DropdownMenu>
//                                 <DropdownMenuTrigger asChild>
//                                   <Button variant="ghost" size="sm">
//                                     <MoreHorizontal className="h-4 w-4" />
//                                   </Button>
//                                 </DropdownMenuTrigger>
//                                 <DropdownMenuContent align="end">
//                                   <DropdownMenuItem>
//                                     <Eye className="h-4 w-4 mr-2" />
//                                     View Details
//                                   </DropdownMenuItem>
//                                   <DropdownMenuItem>
//                                     <LogOut className="h-4 w-4 mr-2" />
//                                     Force Logout
//                                   </DropdownMenuItem>
//                                   <DropdownMenuItem className="text-red-600">
//                                     <AlertTriangle className="h-4 w-4 mr-2" />
//                                     Block User
//                                   </DropdownMenuItem>
//                                 </DropdownMenuContent>
//                               </DropdownMenu>
//                             </TableCell>
//                           </TableRow>
//                         ))}
//                       </TableBody>
//                     </Table>
//                   ) : (
//                     <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
//                       <div className="text-center">
//                         <Map className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
//                         <h3 className="text-lg font-medium">Interactive Map View</h3>
//                         <p className="text-muted-foreground">
//                           Integrate with Leaflet or Google Maps API to show active session locations
//                         </p>
//                         <div className="mt-4 text-sm text-muted-foreground">
//                           <p>
//                             API Endpoint:{" "}
//                             <code className="bg-muted-foreground/20 px-1 py-0.5 rounded">GET /api/sessions/active</code>
//                           </p>
//                           <p>
//                             Params: <code className="bg-muted-foreground/20 px-1 py-0.5 rounded">isActive=true</code>
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </CardContent>
//               </Card>
//             </TabsContent>

//             {/* Session Analytics Tab */}
//             <TabsContent value="analytics" className="space-y-4">
//               <div className="grid gap-4 md:grid-cols-2">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Daily Sessions Trend</CardTitle>
//                     <CardDescription>Total sessions and suspicious activity over time</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     {loading.dailySessions ? (
//                       <div className="flex items-center justify-center h-[300px]">
//                         <Loader2 className="h-8 w-8 animate-spin" />
//                       </div>
//                     ) : (
//                       <div className="h-[300px] w-full">
//                         <ResponsiveContainer width="100%" height="100%">
//                           <AreaChart data={dailySessionsData}>
//                             <CartesianGrid strokeDasharray="3 3" />
//                             <XAxis dataKey="date" />
//                             <YAxis />
//                             <Tooltip />
//                             <Legend />
//                             <Area
//                               type="monotone"
//                               dataKey="sessions"
//                               stackId="1"
//                               stroke="#8884d8"
//                               fill="#8884d8"
//                               name="Total Sessions"
//                             />
//                             <Area
//                               type="monotone"
//                               dataKey="suspicious"
//                               stackId="1"
//                               stroke="#ff7300"
//                               fill="#ff7300"
//                               name="Suspicious"
//                             />
//                           </AreaChart>
//                         </ResponsiveContainer>
//                       </div>
//                     )}
//                     <div className="mt-2 text-xs text-muted-foreground">
//                       <p>
//                         API: <code>GET /api/analytics/sessions/daily</code>
//                       </p>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Device Distribution</CardTitle>
//                     <CardDescription>Session breakdown by device type</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     {loading.deviceDistribution ? (
//                       <div className="flex items-center justify-center h-[300px]">
//                         <Loader2 className="h-8 w-8 animate-spin" />
//                       </div>
//                     ) : (
//                       <div className="h-[300px] w-full">
//                         <ResponsiveContainer width="100%" height="100%">
//                           <PieChart>
//                             <Pie
//                               data={deviceDistribution}
//                               cx="50%"
//                               cy="50%"
//                               labelLine={false}
//                               label={renderCustomizedLabel}
//                               outerRadius={80}
//                               fill="#8884d8"
//                               dataKey="value"
//                             >
//                               {deviceDistribution.map((entry, index) => (
//                                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                               ))}
//                             </Pie>
//                             <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
//                             <Legend />
//                           </PieChart>
//                         </ResponsiveContainer>
//                       </div>
//                     )}
//                   </CardContent>
//                 </Card>
//               </div>

//               <div className="grid gap-4 md:grid-cols-2">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Actions Per Session</CardTitle>
//                     <CardDescription>Average number of actions users take per session</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     {loading.sessionMetrics ? (
//                       <div className="flex items-center justify-center h-[300px]">
//                         <Loader2 className="h-8 w-8 animate-spin" />
//                       </div>
//                     ) : (
//                       <div className="h-[300px] w-full">
//                         <ResponsiveContainer width="100%" height="100%">
//                           <BarChart
//                             data={[
//                               { name: "Desktop", value: 15.2 },
//                               { name: "Mobile", value: 8.7 },
//                               { name: "Tablet", value: 11.3 },
//                             ]}
//                             margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//                           >
//                             <CartesianGrid strokeDasharray="3 3" />
//                             <XAxis dataKey="name" />
//                             <YAxis />
//                             <Tooltip />
//                             <Legend />
//                             <Bar dataKey="value" name="Actions" fill="#8884d8" />
//                           </BarChart>
//                         </ResponsiveContainer>
//                       </div>
//                     )}
//                     <div className="mt-2 text-xs text-muted-foreground">
//                       <p>
//                         API: <code>GET /api/analytics/actions-per-session</code>
//                       </p>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Bounce Rate Analysis</CardTitle>
//                     <CardDescription>Sessions with ≤1 action or &lt; 10 seconds</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     {loading.sessionMetrics ? (
//                       <div className="flex items-center justify-center h-[300px]">
//                         <Loader2 className="h-8 w-8 animate-spin" />
//                       </div>
//                     ) : (
//                       <div className="h-[300px] w-full">
//                         <ResponsiveContainer width="100%" height="100%">
//                           <PieChart>
//                             <Pie
//                               data={[
//                                 { name: "Bounce", value: sessionMetrics.bounceRate },
//                                 { name: "Engaged", value: 100 - sessionMetrics.bounceRate },
//                               ]}
//                               cx="50%"
//                               cy="50%"
//                               labelLine={false}
//                               label={renderCustomizedLabel}
//                               outerRadius={80}
//                               fill="#8884d8"
//                               dataKey="value"
//                             >
//                               <Cell fill="#FF8042" />
//                               <Cell fill="#0088FE" />
//                             </Pie>
//                             <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
//                             <Legend />
//                           </PieChart>
//                         </ResponsiveContainer>
//                       </div>
//                     )}
//                     <div className="mt-2 text-xs text-muted-foreground">
//                       <p>
//                         API: <code>GET /api/analytics/bounce-rate</code>
//                       </p>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             </TabsContent>

//             {/* Suspicious Activity Tab */}
//             <TabsContent value="suspicious" className="space-y-4">
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center gap-2">
//                     <AlertTriangle className="h-5 w-5 text-red-600" />
//                     Suspicious Activity Summary
//                   </CardTitle>
//                   <CardDescription>Recent threats and security alerts</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   {loading.suspiciousActivities ? (
//                     <div className="flex items-center justify-center h-64">
//                       <Loader2 className="h-8 w-8 animate-spin" />
//                     </div>
//                   ) : suspiciousActivities.length === 0 ? (
//                     <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
//                       <Shield className="h-12 w-12 mb-4" />
//                       <p className="text-lg font-medium">No suspicious activity detected</p>
//                       <p className="text-sm">All user sessions appear normal</p>
//                     </div>
//                   ) : (
//                     <div className="space-y-4">
//                       {suspiciousActivities.map((activity) => (
//                         <div
//                           key={activity.id}
//                           className={`p-4 border rounded-lg ${getSeverityColor(activity.severity)} ${activity.reviewed ? "opacity-60" : ""}`}
//                         >
//                           <div className="flex items-start justify-between">
//                             <div className="space-y-2">
//                               <div className="flex items-center gap-2">
//                                 <Badge variant={activity.severity === "critical" ? "destructive" : "secondary"}>
//                                   {activity.severity.toUpperCase()}
//                                 </Badge>
//                                 <span className="font-medium">{activity.email}</span>
//                                 {activity.reviewed && (
//                                   <Badge variant="outline" className="ml-2">
//                                     Reviewed
//                                   </Badge>
//                                 )}
//                               </div>
//                               <div className="flex flex-wrap gap-2">
//                                 {activity.flags.map((flag, index) => (
//                                   <Badge key={index} variant="outline" className="text-xs">
//                                     {flag}
//                                   </Badge>
//                                 ))}
//                               </div>
//                               <div className="text-sm text-muted-foreground">
//                                 {activity.timestamp} • {activity.country} • {activity.device}
//                               </div>
//                             </div>
//                             <div className="flex gap-2">
//                               <Button
//                                 size="sm"
//                                 variant="outline"
//                                 onClick={() => markAsReviewed(activity.id)}
//                                 disabled={activity.reviewed}
//                               >
//                                 {activity.reviewed ? <Check className="h-4 w-4 mr-2" /> : null}
//                                 Mark {activity.reviewed ? "Reviewed" : "Safe"}
//                               </Button>
//                               <Button size="sm">Investigate</Button>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                   <div className="mt-4 text-xs text-muted-foreground">
//                     <p>
//                       API: <code>GET /api/sessions/suspicious?limit=10</code>
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardHeader>
//                   <CardTitle>Suspicious Login Trends</CardTitle>
//                   <CardDescription>Daily suspicious login attempts over time</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   {loading.dailySessions ? (
//                     <div className="flex items-center justify-center h-[300px]">
//                       <Loader2 className="h-8 w-8 animate-spin" />
//                     </div>
//                   ) : (
//                     <div className="h-[300px] w-full">
//                       <ResponsiveContainer width="100%" height="100%">
//                         <LineChart data={dailySessionsData}>
//                           <CartesianGrid strokeDasharray="3 3" />
//                           <XAxis dataKey="date" />
//                           <YAxis />
//                           <Tooltip />
//                           <Legend />
//                           <Line
//                             type="monotone"
//                             dataKey="suspicious"
//                             stroke="#ff7300"
//                             name="Suspicious Logins"
//                             strokeWidth={2}
//                           />
//                         </LineChart>
//                       </ResponsiveContainer>
//                     </div>
//                   )}
//                 </CardContent>
//               </Card>
//             </TabsContent>

//             {/* Activity Breakdown Tab */}
//             <TabsContent value="breakdown" className="space-y-4">
//               <Card>
//                 <CardHeader>
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <CardTitle>Activity Breakdown</CardTitle>
//                       <CardDescription>Detailed analysis by user, page, or section</CardDescription>
//                     </div>
//                     <Select value={groupBy} onValueChange={setGroupBy}>
//                       <SelectTrigger className="w-[180px]">
//                         <SelectValue placeholder="Group by" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="user">Group by User</SelectItem>
//                         <SelectItem value="page">Group by Page</SelectItem>
//                         <SelectItem value="section">Group by Section</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   {loading.activityBreakdown ? (
//                     <div className="flex items-center justify-center h-96">
//                       <Loader2 className="h-8 w-8 animate-spin" />
//                     </div>
//                   ) : groupBy === "user" ? (
//                     <Accordion type="single" collapsible className="w-full">
//                       {mockActivityBreakdown.users.map((user) => (
//                         <AccordionItem key={user.userId} value={user.userId}>
//                           <AccordionTrigger className="hover:bg-muted/50 px-4 rounded-md">
//                             <div className="flex items-center gap-3 w-full">
//                               <Avatar className="h-8 w-8">
//                                 <AvatarFallback>{user.email.substring(0, 2).toUpperCase()}</AvatarFallback>
//                               </Avatar>
//                               <div className="flex-1 text-left">
//                                 <div className="font-medium">{user.email}</div>
//                                 <div className="text-sm text-muted-foreground">{user.userId}</div>
//                               </div>
//                               <div className="text-right mr-8">
//                                 <div className="font-medium">{user.sessions} sessions</div>
//                                 <div className="text-sm text-muted-foreground">{user.actions} actions</div>
//                               </div>
//                             </div>
//                           </AccordionTrigger>
//                           <AccordionContent className="px-4">
//                             <div className="grid grid-cols-3 gap-4 text-sm mb-4">
//                               <div>
//                                 <div className="text-muted-foreground">Pages Visited</div>
//                                 <div className="font-medium">{user.pagesVisited.join(", ")}</div>
//                               </div>
//                               <div>
//                                 <div className="text-muted-foreground">Last Action</div>
//                                 <div className="font-medium">{user.lastAction}</div>
//                               </div>
//                               <div>
//                                 <div className="text-muted-foreground">Session Duration</div>
//                                 <div className="font-medium">{user.avgSessionDuration} avg</div>
//                               </div>
//                             </div>

//                             <div className="text-sm font-medium mb-2">Recent Activity</div>
//                             <Table>
//                               <TableHeader>
//                                 <TableRow>
//                                   <TableHead>Action</TableHead>
//                                   <TableHead>Page</TableHead>
//                                   <TableHead>Timestamp</TableHead>
//                                 </TableRow>
//                               </TableHeader>
//                               <TableBody>
//                                 {user.recentActivity.map((activity, index) => (
//                                   <TableRow key={index}>
//                                     <TableCell>{activity.action}</TableCell>
//                                     <TableCell className="font-mono text-xs">{activity.page}</TableCell>
//                                     <TableCell>{activity.timestamp}</TableCell>
//                                   </TableRow>
//                                 ))}
//                               </TableBody>
//                             </Table>
//                           </AccordionContent>
//                         </AccordionItem>
//                       ))}
//                     </Accordion>
//                   ) : groupBy === "page" ? (
//                     <div className="space-y-4">
//                       {mockActivityBreakdown.pages.map((page) => (
//                         <div key={page.path} className="border rounded-lg p-4">
//                           <div className="flex items-center justify-between mb-3">
//                             <div>
//                               <div className="font-medium">{page.title}</div>
//                               <div className="text-sm text-muted-foreground font-mono">{page.path}</div>
//                             </div>
//                             <div className="text-right">
//                               <div className="font-medium">{page.views.toLocaleString()} views</div>
//                               <div className="text-sm text-muted-foreground">
//                                 {page.uniqueUsers.toLocaleString()} unique users
//                               </div>
//                             </div>
//                           </div>
//                           <div className="grid grid-cols-2 gap-4 text-sm">
//                             <div>
//                               <div className="text-muted-foreground">Avg Time on Page</div>
//                               <div className="font-medium">{page.avgTimeOnPage}</div>
//                             </div>
//                             <div>
//                               <div className="text-muted-foreground">Bounce Rate</div>
//                               <div className="font-medium">{page.bounceRate}</div>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   ) : (
//                     <div className="space-y-4">
//                       {mockActivityBreakdown.sections.map((section) => (
//                         <div key={section.name} className="border rounded-lg p-4">
//                           <div className="flex items-center justify-between mb-3">
//                             <div>
//                               <div className="font-medium">{section.name}</div>
//                             </div>
//                             <div className="text-right">
//                               <div className="font-medium">{section.totalViews.toLocaleString()} views</div>
//                               <div className="text-sm text-muted-foreground">
//                                 {section.uniqueUsers.toLocaleString()} unique users
//                               </div>
//                             </div>
//                           </div>
//                           <div className="grid grid-cols-1 gap-4 text-sm">
//                             <div>
//                               <div className="text-muted-foreground">Average Engagement</div>
//                               <div className="font-medium">{section.avgEngagement}</div>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                   <div className="mt-4 text-xs text-muted-foreground">
//                     <p>
//                       API: <code>GET /api/analytics/activity-breakdown?groupBy={groupBy}</code>
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </TabsContent>

//             {/* Login Trends Tab */}
//             <TabsContent value="trends" className="space-y-4">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Login Trends</CardTitle>
//                   <CardDescription>Hourly login patterns over the selected time range</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   {loading.loginTrend ? (
//                     <div className="flex items-center justify-center h-[300px]">
//                       <Loader2 className="h-8 w-8 animate-spin" />
//                     </div>
//                   ) : (
//                     <div className="h-[300px] w-full">
//                       <ResponsiveContainer width="100%" height="100%">
//                         <LineChart data={loginTrendData}>
//                           <CartesianGrid strokeDasharray="3 3" />
//                           <XAxis dataKey="time" />
//                           <YAxis />
//                           <Tooltip />
//                           <Legend />
//                           <Line type="monotone" dataKey="logins" stroke="#8884d8" name="Logins" />
//                         </LineChart>
//                       </ResponsiveContainer>
//                     </div>
//                   )}
//                   <div className="mt-2 text-xs text-muted-foreground">
//                     <p>
//                       API: <code>GET /api/analytics/login-trends?range={timeRange}</code>
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </TabsContent>

//             {/* Top Users Tab */}
//             <TabsContent value="users" className="space-y-4">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Top Active Users</CardTitle>
//                   <CardDescription>Most active users based on sessions and actions</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   {loading.topUsers ? (
//                     <div className="flex items-center justify-center h-64">
//                       <Loader2 className="h-8 w-8 animate-spin" />
//                     </div>
//                   ) : (
//                     <Table>
//                       <TableHeader>
//                         <TableRow>
//                           <TableHead>User</TableHead>
//                           <TableHead>Email</TableHead>
//                           <TableHead>Sessions</TableHead>
//                           <TableHead>Actions</TableHead>
//                         </TableRow>
//                       </TableHeader>
//                       <TableBody>
//                         {topActiveUsers.map((user) => (
//                           <TableRow key={user.userId}>
//                             <TableCell>
//                               <div className="flex items-center gap-2">
//                                 <Avatar className="h-8 w-8">
//                                   <AvatarFallback>{user.email.substring(0, 2).toUpperCase()}</AvatarFallback>
//                                 </Avatar>
//                                 <div>{user.userId}</div>
//                               </div>
//                             </TableCell>
//                             <TableCell>{user.email}</TableCell>
//                             <TableCell>{user.sessions}</TableCell>
//                             <TableCell>{user.actions}</TableCell>
//                           </TableRow>
//                         ))}
//                       </TableBody>
//                     </Table>
//                   )}
//                   <div className="mt-4 text-xs text-muted-foreground">
//                     <p>
//                       API: <code>GET /api/users/top-active?limit=5</code>
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </TabsContent>
//           </Tabs>
//         </Card>
//       </SidebarInset>
//     </SidebarProvider>
//   )
// }

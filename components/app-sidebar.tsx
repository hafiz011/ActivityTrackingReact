"use client"

import React from "react"
import { Activity, AlertTriangle, BarChart3, Bell, ChevronUp, CreditCard, Globe, Home, LogOut, MapPin, Monitor, Settings, Shield, User2, Users, Zap, Database, FileText, HelpCircle, Search, ChevronDown, Building2, Calendar, Clock, Download, Key, Lock, Mail, Phone, Plus, Smartphone, TrendingUp, UserCheck, UserX, Wifi, Target, Layers, PieChart, Archive, Star, Bookmark, Flag, MessageSquare, Headphones, Book, GraduationCap, Heart, Crown } from 'lucide-react'

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"



// Company/Workspace data
const workspaces = [
  {
    name: "ActivityTracking Pro",
    logo: Activity,
    plan: "Enterprise",
  },
]

// Main navigation items
const mainNavItems = [
  {
    title: "Overview",
    url: "#",
    icon: Home,
    isActive: true,
    description: "Main dashboard overview",
  },
  {
    title: "Live Sessions",
    url: "#",
    icon: Zap,
    badge: "1,234",
    badgeVariant: "default",
    description: "Currently active user sessions",
  },
  {
    title: "Analytics Hub",
    url: "#",
    icon: BarChart3,
    items: [
      {
        title: "Session Analytics",
        url: "#",
        icon: PieChart,
        description: "Detailed session metrics",
      },
      {
        title: "User Behavior",
        url: "#",
        icon: Users,
        description: "User interaction patterns",
      },
      {
        title: "Performance Metrics",
        url: "#",
        icon: TrendingUp,
        description: "System performance data",
      },
      {
        title: "Geographic Data",
        url: "#",
        icon: MapPin,
        description: "Location-based analytics",
      },
      {
        title: "Device Analytics",
        url: "#",
        icon: Monitor,
        description: "Device and browser stats",
      },
      {
        title: "Custom Reports",
        url: "#",
        icon: FileText,
        description: "Build custom analytics reports",
      },
    ],
  },
  {
    title: "Real-time Monitoring",
    url: "#",
    icon: Activity,
    items: [
      {
        title: "Live Activity Feed",
        url: "#",
        icon: Wifi,
        badge: "Live",
        badgeVariant: "destructive",
      },
      {
        title: "System Health",
        url: "#",
        icon: Heart,
        description: "Monitor system status",
      },
      {
        title: "API Monitoring",
        url: "#",
        icon: Globe,
        description: "Track API performance",
      },
    ],
  },
]

// Security & Monitoring items
const securityItems = [
  {
    title: "Security Dashboard",
    url: "#",
    icon: Shield,
    description: "Security overview and alerts",
  },
  {
    title: "Threat Detection",
    url: "#",
    icon: AlertTriangle,
    badge: "3",
    badgeVariant: "destructive",
    description: "Active security threats",
  },
  {
    title: "User Authentication",
    url: "#",
    icon: Key,
    items: [
      {
        title: "Login Attempts",
        url: "#",
        icon: Lock,
        description: "Monitor login activities",
      },
      {
        title: "Failed Logins",
        url: "#",
        icon: UserX,
        badge: "12",
        badgeVariant: "secondary",
      },
      {
        title: "Multi-Factor Auth",
        url: "#",
        icon: Smartphone,
        description: "MFA configuration",
      },
      {
        title: "Session Management",
        url: "#",
        icon: Clock,
        description: "Manage user sessions",
      },
    ],
  },
  {
    title: "Access Control",
    url: "#",
    icon: UserCheck,
    items: [
      {
        title: "User Permissions",
        url: "#",
        icon: Users,
        description: "Manage user access levels",
      },
      {
        title: "Role Management",
        url: "#",
        icon: Crown,
        description: "Configure user roles",
      },
      {
        title: "API Keys",
        url: "#",
        icon: Key,
        description: "Manage API access keys",
      },
    ],
  },
  {
    title: "Compliance & Audit",
    url: "#",
    icon: Archive,
    items: [
      {
        title: "Audit Logs",
        url: "#",
        icon: FileText,
        description: "System audit trail",
      },
      {
        title: "Compliance Reports",
        url: "#",
        icon: Flag,
        description: "Generate compliance reports",
      },
      {
        title: "Data Retention",
        url: "#",
        icon: Database,
        description: "Configure data retention policies",
      },
    ],
  },
]

// Data & Analytics items
const dataItems = [
  {
    title: "Data Management",
    url: "#",
    icon: Database,
    items: [
      {
        title: "Data Sources",
        url: "#",
        icon: Layers,
        description: "Configure data inputs",
      },
      {
        title: "Data Quality",
        url: "#",
        icon: Target,
        description: "Monitor data integrity",
      },
      {
        title: "Data Export",
        url: "#",
        icon: Download,
        description: "Export analytics data",
      },
      {
        title: "Data Backup",
        url: "#",
        icon: Archive,
        description: "Backup and recovery",
      },
    ],
  },
  {
    title: "Reporting",
    url: "#",
    icon: FileText,
    items: [
      {
        title: "Scheduled Reports",
        url: "#",
        icon: Calendar,
        description: "Automated report generation",
      },
      {
        title: "Custom Dashboards",
        url: "#",
        icon: BarChart3,
        description: "Build custom views",
      },
      {
        title: "Report Templates",
        url: "#",
        icon: Bookmark,
        description: "Pre-built report templates",
      },
    ],
  },
  {
    title: "Integrations",
    url: "#",
    icon: Globe,
    items: [
      {
        title: "API Endpoints",
        url: "#",
        icon: Globe,
        description: "Manage API integrations",
      },
      {
        title: "Webhooks",
        url: "#",
        icon: Zap,
        description: "Configure webhook notifications",
      },
      {
        title: "Third-party Apps",
        url: "#",
        icon: Plus,
        description: "Connect external services",
      },
    ],
  },
]

// Administration items
const adminItems = [
  {
    title: "User Management",
    url: "#",
    icon: Users,
    items: [
      {
        title: "All Users",
        url: "#",
        icon: Users,
        description: "View and manage all users",
      },
      {
        title: "User Groups",
        url: "#",
        icon: Building2,
        description: "Organize users into groups",
      },
      {
        title: "Invitations",
        url: "#",
        icon: Mail,
        description: "Send user invitations",
      },
      {
        title: "Deactivated Users",
        url: "#",
        icon: UserX,
        description: "Manage inactive accounts",
      },
    ],
  },
  {
    title: "System Configuration",
    url: "#",
    icon: Settings,
    items: [
      {
        title: "General Settings",
        url: "#",
        icon: Settings,
        description: "Basic system configuration",
      },
      {
        title: "Email Settings",
        url: "#",
        icon: Mail,
        description: "Configure email notifications",
      },
      {
        title: "SMS Settings",
        url: "#",
        icon: Phone,
        description: "Configure SMS notifications",
      },
      {
        title: "Branding",
        url: "#",
        icon: Star,
        description: "Customize appearance",
      },
    ],
  },
  {
    title: "Billing & Usage",
    url: "#",
    icon: CreditCard,
    items: [
      {
        title: "Subscription",
        url: "#",
        icon: CreditCard,
        description: "Manage subscription plan",
      },
      {
        title: "Usage Analytics",
        url: "#",
        icon: BarChart3,
        description: "Monitor resource usage",
      },
      {
        title: "Billing History",
        url: "#",
        icon: FileText,
        description: "View billing records",
      },
      {
        title: "Cost Optimization",
        url: "#",
        icon: TrendingUp,
        description: "Optimize costs",
      },
    ],
  },
]

// Support & Help items
const supportItems = [
  {
    title: "Help Center",
    url: "#",
    icon: HelpCircle,
    description: "Browse help articles",
  },
  {
    title: "Documentation",
    url: "#",
    icon: Book,
    description: "Technical documentation",
  },
  {
    title: "API Reference",
    url: "#",
    icon: Globe,
    description: "API documentation",
  },
  {
    title: "Video Tutorials",
    url: "#",
    icon: GraduationCap,
    description: "Learn with video guides",
  },
  {
    title: "Contact Support",
    url: "#",
    icon: Headphones,
    badge: "24/7",
    badgeVariant: "secondary",
    description: "Get help from our team",
  },
  {
    title: "Feature Requests",
    url: "#",
    icon: MessageSquare,
    description: "Suggest new features",
  },
  {
    title: "System Status",
    url: "#",
    icon: Activity,
    description: "Check system status",
  },
]

export function AppSidebar({ ...props }) {
  const [selectedWorkspace, setSelectedWorkspace] = React.useState(workspaces[0])
  
  const { token, user, logout, isLoading, isAuthenticated } = useAuth();

  const router = useRouter();

   useEffect(() => {
    if(!isLoading && !isAuthenticated){
      router.push("/login")
    }
  }, [isLoading, isAuthenticated]);

  if (!token || !user) return null; // Optional: Blank while redirecting
    const handleLogout = () => {
    logout();            // Clear localStorage & context
    router.push("/dashboard"); // Redirect to login
    //  router.push("/login"); // Redirect to login
  };

  if(isLoading){
    return <div>Loading...</div>
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* Workspace Selector */}
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <selectedWorkspace.logo className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{selectedWorkspace.name}</span>
                <span className="truncate text-xs text-sidebar-foreground/70">{selectedWorkspace.plan}</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

      {/* Search */}
      <div className="hidden md:flex items-center space-x-1 rounded-full px-3 py-1.5 border border-slate-700/50 backdrop-blur-sm">
        <Search className="h-4 w-4 text-slate-400" />
        <input
        type="text"
        placeholder="Search systems..."
        className="bg-transparent border-none focus:outline-none text-sm w-40 placeholder:text-slate-500"
        />
      </div>
      </SidebarHeader>
      <SidebarContent>
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip={item.description} isActive={item.isActive}>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                        {item.badge && (
                          <Badge variant={item.badgeVariant || "secondary"} className="ml-auto text-xs">
                            {item.badge}
                          </Badge>
                        )}
                        {item.items && (
                          <ChevronDown className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                        )}
                      </a>
                    </SidebarMenuButton>
                    {item.items?.length ? (
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild tooltip={subItem.description}>
                                <a href={subItem.url}>
                                  {subItem.icon && <subItem.icon className="size-4" />}
                                  <span>{subItem.title}</span>
                                  {subItem.badge && (
                                    <Badge variant={subItem.badgeVariant || "secondary"} className="ml-auto text-xs">
                                      {subItem.badge}
                                    </Badge>
                                  )}
                                </a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    ) : null}
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Security & Monitoring */}
        <SidebarGroup>
          <SidebarGroupLabel>Security & Monitoring</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {securityItems.map((item) => (
                <Collapsible key={item.title} asChild>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip={item.description}>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                        {item.badge && (
                          <Badge variant={item.badgeVariant || "secondary"} className="ml-auto text-xs">
                            {item.badge}
                          </Badge>
                        )}
                        {item.items && (
                          <ChevronDown className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                        )}
                      </a>
                    </SidebarMenuButton>
                    {item.items?.length ? (
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild tooltip={subItem.description}>
                                <a href={subItem.url}>
                                  {subItem.icon && <subItem.icon className="size-4" />}
                                  <span>{subItem.title}</span>
                                  {subItem.badge && (
                                    <Badge variant={subItem.badgeVariant || "secondary"} className="ml-auto text-xs">
                                      {subItem.badge}
                                    </Badge>
                                  )}
                                </a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    ) : null}
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Data & Analytics */}
        <SidebarGroup>
          <SidebarGroupLabel>Data & Analytics</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {dataItems.map((item) => (
                <Collapsible key={item.title} asChild>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip={item.description}>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                        {item.badge && (
                          <Badge variant={item.badgeVariant || "secondary"} className="ml-auto text-xs">
                            {item.badge}
                          </Badge>
                        )}
                        {item.items && (
                          <ChevronDown className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                        )}
                      </a>
                    </SidebarMenuButton>
                    {item.items?.length ? (
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild tooltip={subItem.description}>
                                <a href={subItem.url}>
                                  {subItem.icon && <subItem.icon className="size-4" />}
                                  <span>{subItem.title}</span>
                                  {subItem.badge && (
                                    <Badge variant={subItem.badgeVariant || "secondary"} className="ml-auto text-xs">
                                      {subItem.badge}
                                    </Badge>
                                  )}
                                </a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    ) : null}
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Administration */}
        <SidebarGroup>
          <SidebarGroupLabel>Administration</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminItems.map((item) => (
                <Collapsible key={item.title} asChild>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip={item.description}>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                        {item.badge && (
                          <Badge variant={item.badgeVariant || "secondary"} className="ml-auto text-xs">
                            {item.badge}
                          </Badge>
                        )}
                        {item.items && (
                          <ChevronDown className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                        )}
                      </a>
                    </SidebarMenuButton>
                    {item.items?.length ? (
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild tooltip={subItem.description}>
                                <a href={subItem.url}>
                                  {subItem.icon && <subItem.icon className="size-4" />}
                                  <span>{subItem.title}</span>
                                  {subItem.badge && (
                                    <Badge variant={subItem.badgeVariant || "secondary"} className="ml-auto text-xs">
                                      {subItem.badge}
                                    </Badge>
                                  )}
                                </a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    ) : null}
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Support & Help */}
        <SidebarGroup>
          <SidebarGroupLabel>Support & Help</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {supportItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.description}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                      {item.badge && (
                        <Badge variant={item.badgeVariant || "secondary"} className="ml-auto text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarFallback className="rounded-lg">AD</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">{user.fullName}</span>
                    <span className="truncate text-xs text-sidebar-foreground/70">{user.email}</span>
                  </div>
                  <ChevronUp className="ml-auto size-4 transition-transform duration-200 data-[state=open]:rotate-180" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarFallback className="rounded-lg">AD</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">{user.fullName}</span>
                      <span className="truncate text-xs text-muted-foreground">{user.email}</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push("/profile")}>
                  <Settings className="mr-2 h-4 w-4" />
                  Account Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Help & Support
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Send Feedback
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                      Log out
                  </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

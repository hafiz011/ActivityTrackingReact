"use client"

import React, { useEffect } from "react"
import { 
  Activity, AlertTriangle, BarChart3, Logs, Zap, Users, Home, Calendar, Download, Globe, Plus,
  CreditCard, FileText, Settings, Phone, Mail, Star, TrendingUp, UserX, HelpCircle, MessageSquare,
  Headphones, Book, GraduationCap, ChevronDown, ChevronUp, LogOut 
} from 'lucide-react'

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
import { Search } from 'lucide-react'

// Type-safe Badge variant
type BadgeVariant = "default" | "destructive" | "secondary" | "outline"

interface AppSidebarProps {
  currentTab: string
  onTabChange: (tab: string) => void
}

// Workspace & Navigation Data
const workspaces = [{ name: "ActivityTracking Pro", logo: Activity, plan: "Enterprise" }]


// Main navigation items
// const mainNavItems = [
//   { title: "Overview", url: "/dashboard", icon: Home, isActive: true, description: "Main dashboard overview" },
//   { title: "Active Sessions", url: "sessions", icon: Zap, badge: "1,234", badgeVariant: "default", description: "Active Sessions" },
//   { title: "Suspicious Activity", url: "suspicious", icon: AlertTriangle, badge: "3", badgeVariant: "destructive", description: "Suspicious Activity" },
//   { title: "Top Users", url: "users", icon: Users, badgeVariant: "destructive", description: "Top Users" },
//   { title: "Activity Logs", url: "breakdown", icon: Activity, badgeVariant: "destructive", description: "Activity Logs" },
//   { title: "Behavior Pattern", url: "behavior", icon: Logs, badgeVariant: "destructive", description: "Behavior Pattern" },
// ]

const mainNavItems = [
  { title: "Overview", url: "analytics", icon: Home, description: "Main dashboard overview" },
  { title: "Active Sessions", url: "sessions", icon: Zap, badge: "1,234", badgeVariant: "default", description: "Active Sessions" },
  { title: "Suspicious Activity", url: "suspicious", icon: AlertTriangle, badge: "3", badgeVariant: "destructive", description: "Suspicious Activity" },
  { title: "Top Users", url: "users", icon: Users, description: "Top Users" },
  { title: "Activity Logs", url: "breakdown", icon: Activity, description: "Activity Logs" },
  { title: "Behavior Pattern", url: "behavior", icon: Logs, description: "Behavior Pattern" },

]

// Data & Analytics items
const dataItems = [
  { title: "Scheduled Reports", url: "scheduled-reports", icon: Calendar, description: "Automated report generation" },
  { title: "Report Download", url: "report-download", icon: Download, description: "Report Download" },
  {
    title: "Integrations",
    url: "#",
    icon: Globe,
    items: [
      { title: "API Endpoints", url: "#", icon: Globe, description: "Manage API integrations" },
      { title: "Webhooks", url: "#", icon: Zap, description: "Configure webhook notifications" },
      { title: "Third-party Apps", url: "#", icon: Plus, description: "Connect external services" },
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
      { title: "All Users", url: "#", icon: Users, description: "View and manage all users" },
      { title: "User Groups", url: "#", icon: Plus, description: "Organize users into groups" },
      { title: "Invitations", url: "#", icon: Mail, description: "Send user invitations" },
      { title: "Deactivated Users", url: "#", icon: UserX, description: "Manage inactive accounts" },
    ],
  },
  {
    title: "System Configuration",
    url: "#",
    icon: Settings,
    items: [
      { title: "General Settings", url: "#", icon: Settings, description: "Basic system configuration" },
      { title: "Email Settings", url: "#", icon: Mail, description: "Configure email notifications" },
      { title: "SMS Settings", url: "#", icon: Phone, description: "Configure SMS notifications" },
      { title: "Branding", url: "#", icon: Star, description: "Customize appearance" },
    ],
  },
  {
    title: "Billing & Usage",
    url: "#",
    icon: CreditCard,
    items: [
      { title: "Subscription", url: "#", icon: CreditCard, description: "Manage subscription plan" },
      { title: "Usage Analytics", url: "#", icon: BarChart3, description: "Monitor resource usage" },
      { title: "Billing History", url: "#", icon: FileText, description: "View billing records" },
      { title: "Cost Optimization", url: "#", icon: TrendingUp, description: "Optimize costs" },
    ],
  },
]

// Support & Help items
const supportItems = [
  { title: "Help Center", url: "#", icon: HelpCircle, description: "Browse help articles" },
  { title: "Documentation", url: "#", icon: Book, description: "Technical documentation" },
  { title: "API Reference", url: "#", icon: Globe, description: "API documentation" },
  { title: "Video Tutorials", url: "#", icon: GraduationCap, description: "Learn with video guides" },
  { title: "Contact Support", url: "#", icon: Headphones, badge: "24/7", badgeVariant: "secondary", description: "Get help from our team" },
  { title: "Feature Requests", url: "#", icon: MessageSquare, description: "Suggest new features" },
  { title: "System Status", url: "#", icon: Activity, description: "Check system status" },
]

export function AppSidebar({ currentTab, onTabChange, ...props }: AppSidebarProps) {
  const [selectedWorkspace] = React.useState(workspaces[0])
  const { token, user, logout, isLoading, isAuthenticated } = useAuth()
  const router = useRouter()
  

  useEffect(() => {
    if (!isLoading && !isAuthenticated) router.push("/login")
  }, [isLoading, isAuthenticated])

  if (!token || !user) return null
  if (isLoading) return <div>Loading...</div>

  const handleLogout = () => {
    logout()
    router.push("/login")
  }

  const renderBadge = (badge?: string, variant?: string) => (
    badge ? <Badge variant={variant as BadgeVariant || "secondary"} className="ml-auto text-xs">{badge}</Badge> : null
  )

  const renderIcon = (Icon: any) => <Icon className="size-4" />

  const renderSidebarItem = (item: any) => {
    const isActive = currentTab === item.url

    return (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton 
          asChild
          tooltip={item.description}
          isActive={isActive}
          onClick={() => onTabChange(item.url)}
        >
          <a href="#">
            {renderIcon(item.icon)}
            <span>{item.title}</span>
            {renderBadge(item.badge, item.badgeVariant)}
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    )
  }

  const renderSidebarGroup = (items: any[]) =>
    items?.map((item) => (
      <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
        <SidebarMenuItem>
          <SidebarMenuButton asChild tooltip={item.description} isActive={item.isActive}>
            <a href={item.url}>
              {renderIcon(item.icon)}
              <span>{item.title}</span>
              {renderBadge(item.badge, item.badgeVariant)}
              {item.items && <ChevronDown className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />}
            </a>
          </SidebarMenuButton>
          {item.items?.length && (
            <CollapsibleContent>
              <SidebarMenuSub>{renderSidebarItem(item.items)}</SidebarMenuSub>
            </CollapsibleContent>
          )}
        </SidebarMenuItem>
      </Collapsible>
    ))

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                {renderIcon(selectedWorkspace.logo)}
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{selectedWorkspace.name}</span>
                <span className="truncate text-xs text-sidebar-foreground/70">{selectedWorkspace.plan}</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <div className="hidden md:flex items-center space-x-1 rounded-full px-3 py-1.5 border border-slate-700/50 backdrop-blur-sm">
          <Search className="h-4 w-4 text-slate-400" />
          <input type="text" placeholder="Search systems..." className="bg-transparent border-none focus:outline-none text-sm w-40 placeholder:text-slate-500" />
        </div>
      </SidebarHeader>

      <SidebarContent>
       <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{mainNavItems.map(renderSidebarItem)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Data & Analytics</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{renderSidebarGroup(dataItems)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Administration</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{renderSidebarGroup(adminItems)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Support & Help</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {supportItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.description}>
                    <a href={item.url}>
                      {renderIcon(item.icon)}
                      <span>{item.title}</span>
                      {renderBadge(item.badge, item.badgeVariant)}
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
                <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                  <Avatar className="h-8 w-8 rounded-lg"><AvatarFallback className="rounded-lg">AD</AvatarFallback></Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">{user.fullName}</span>
                    <span className="truncate text-xs text-sidebar-foreground/70">{user.email}</span>
                  </div>
                  <ChevronUp className="ml-auto size-4 transition-transform duration-200 data-[state=open]:rotate-180" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg" side="bottom" align="end" sideOffset={4}>
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg"><AvatarFallback className="rounded-lg">AD</AvatarFallback></Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">{user.fullName}</span>
                      <span className="truncate text-xs text-muted-foreground">{user.email}</span>
                    </div>
                  </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push("/profile")}><Settings className="mr-2 h-4 w-4" />Account Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem><HelpCircle className="mr-2 h-4 w-4" />Help & Support</DropdownMenuItem>
                <DropdownMenuItem><MessageSquare className="mr-2 h-4 w-4" />Send Feedback</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-600"><LogOut className="mr-2 h-4 w-4" />Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}

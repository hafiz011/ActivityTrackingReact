// sidebar.config.ts
import { Home, Activity, Users, Map, Settings, Bell } from "lucide-react";

export type SidebarItem = {
  title: string;
  href: string;
  icon?: React.ElementType;
  children?: SidebarItem[];
};

export const sidebarConfig: SidebarItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Sessions",
    href: "/dashboard/sessions",
    icon: Activity,
    children: [
      {
        title: "Active Sessions",
        href: "/dashboard/sessions/active",
      },
      {
        title: "Suspicious Sessions",
        href: "/dashboard/sessions/suspicious",
      },
    ],
  },
  {
    title: "Users",
    href: "/dashboard/users",
    icon: Users,
  },
  {
    title: "Geo Map",
    href: "/dashboard/geo",
    icon: Map,
  },
  {
    title: "Alerts",
    href: "/dashboard/alerts",
    icon: Bell,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

// app/(dashboard)/dashboard/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FilterProvider } from "@/context/FilterContext";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { AppSidebar } from "@/components/app-sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Activity Tracking Dashboard",
  description: "Monitor user behavior and track activities across your applications",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <ThemeProvider>
            <FilterProvider>
              <SidebarProvider>
                <AppSidebar />
                {children}
              </SidebarProvider>
            </FilterProvider>
        </ThemeProvider>
  );
}

// app/(dashboard)/dashboard/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FilterProvider } from "@/context/FilterContext";
import { ThemeProvider } from "@/components/dashboard/theme-provider";
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
                {children}
            </FilterProvider>
        </ThemeProvider>
  );
}

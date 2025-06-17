import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from './context/AuthProvider';








const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Activity Tracking Dashboard",
  description: "Monitor user behavior and track activities across your applications",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
         <ThemeProvider>
            {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

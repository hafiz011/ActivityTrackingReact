import './globals.css'
import React from 'react'
import { AuthProvider } from "@/context/AuthContext";
import { Inter } from "next/font/google";
import { LandingTheme } from '@/components/LandingTheme';
import {HeaderSection} from '@/components/headerSection';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] })
export const metadata = {
  title: 'Landing page',
  description: 'Track users across devices and sessions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
          <AuthProvider>
            <LandingTheme>
              <HeaderSection />
              {children}
              <Footer />
            </LandingTheme>
          </AuthProvider>
      </body>
    </html>
  )
}

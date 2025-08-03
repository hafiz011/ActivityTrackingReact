"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Rocket, Search, CheckCircle, Shield, Copy } from "lucide-react"
import { useState } from "react"

export default function TracklyApiDocs() {
  const [copiedRequest, setCopiedRequest] = useState(false)
  const [copiedPayload, setCopiedPayload] = useState(false)

  const apiRequest = `POST /api/session/create
Headers:
  X-API-KEY: YOUR_API_KEY
  X-Session-Id: SESSION_ID_HERE`

  const jsonPayload = `{
  "user_Id": "465456465",
  "name": "username",
  "email": "example@gmail.com",
  "ip_Address": "202.125.30.60",
  "device": {
    "fingerprint": "fhiuhu7346385641646retertre5rvhroiv64156417rfuhi1564851ehuihvn",
    "browser": "chrome",
    "device_Type": "desktop",
    "os": "windows",
    "language": "en",
    "screen_Resolution": "1920*1280"
  },
  "localTime": "2025-07-29T11:57:57.484Z"
}`

  const fieldData = [
    { field: "user_Id", description: "Unique user identifier from your system" },
    { field: "username", description: "User's name" },
    { field: "email", description: "User's email address" },
    { field: "ip_Address", description: "User's public IP address" },
    { field: "device.fingerprint", description: "Unique device/browser fingerprint" },
    { field: "device.browser", description: "Browser name (e.g., Chrome)" },
    { field: "device.os", description: "Operating system (e.g., Windows)" },
    { field: "device_Type", description: "Device type (desktop, mobile)" },
    { field: "screen_Resolution", description: "User's screen resolution" },
    { field: "language", description: "Browser language" },
    { field: "localTime", description: "Client's local timestamp (ISO 8601)" },
  ]

  const benefits = [
    "Detect suspicious logins",
    "Track session behavior",
    "Build secure analytics",
    "Improve user experience with device-specific insights",
  ]

  return (
    <div className="min-h-screen mt-20">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2">
            <Rocket className="h-6 w-6 text-blue-600" />
            <h1 className="text-3xl font-bold text-white">Tech Ciph API Documentation</h1>
          </div>
          <p className="text-white/70">Structured user session data tracking for enhanced security and analytics</p>
        </div>

        {/* Example API Request */}
        <div className="relative bg-gradient-to-br from-blue-900/40 via-slate-900/60 to-cyan-900/30 via-transparent rounded-3xl p-12 border border-cyan-500/20 shadow-2xl mb-16 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-500 group overflow-hidden">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold flex items-center gap-2 text-white">
              <Rocket className="h-5 w-5 text-gray-300" />
              Example API Request
            </h2>
            <p className="text-white/70">
              Tech Chip API receives structured user session data from your frontend or backend. Here's how a sample
              request looks:
            </p>
          </div>
          <div className="space-y-4">
            <div className="relative">
              <pre className="bg-black/60 p-4 rounded-lg text-sm text-white/70 overflow-x-auto">
                <code>{apiRequest}</code>
              </pre>
            </div>
            <div className="relative">
              <pre className="bg-black/60 p-4 rounded-lg text-sm text-white/70 overflow-x-auto">
                <code>{jsonPayload}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Data Captured */}
        <div className="relative bg-gradient-to-br from-blue-900/40 via-slate-900/60 to-cyan-900/30 via-transparent rounded-3xl p-12 border border-cyan-500/20 shadow-2xl mb-16 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-500 group overflow-hidden">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold flex items-center gap-2 text-white">
              <Search className="h-5 w-5" />
              Data Captured
            </h2>
            <p className="text-white/70">Comprehensive session data fields and their descriptions</p>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold text-white">Field</TableHead>
                <TableHead className="font-semibold text-white">Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fieldData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Badge className="font-mono text-xs bg-green-400 text-black">
                      {item.field}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-white">{item.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Benefits */}
        <div className="relative bg-gradient-to-br from-blue-900/40 via-slate-900/60 to-cyan-900/30 via-transparent rounded-3xl p-12 border border-cyan-500/20 shadow-2xl mb-16 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-500 group overflow-hidden">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-white">
            <CheckCircle className="h-5 w-5 text-green-600" />
            This data helps you:
          </h2>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-white">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Action */}
        <div className="border-2 border-white/20 bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Shield className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-white">
                Built for developers who care about security, clarity, and control.
              </h3>
            </div>
            <p className="text-white/70">Want full documentation or SDK?</p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Request Access →
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

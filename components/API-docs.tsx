"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Rocket, Search, Shield, Copy } from "lucide-react"
import { useState } from "react"

export default function TracklyApiDocs() {
  const [copiedRequest, setCopiedRequest] = useState(false)
  const [copiedPayload, setCopiedPayload] = useState(false)

  const apiRequest = `POST https://apibizagent.techciph.com/Session/create
Headers:
  X-API-KEY: YOUR_API_KEY
Body: JSON`

  const jsonPayload = `{
  "Ip": "202.134.12.4",
  "ReferrerUrl": "https://example.com/login",
  "UserAgent": "Mozilla/5.0",
  "Language": "en-US",
  "Screen": "1920x1080"
}`


  const eventPayload = `{
  "sessionId": "SESSION_ID_HERE",
  "event": "page_view",
  "data": {
    "url": "/products/123",
    "productId": "123"
  }
}`

  const fieldData = [
    { field: "Ip", description: "User public IP address (auto detected if empty)" },
    { field: "ReferrerUrl", description: "Previous page user came from" },
    { field: "UserAgent", description: "Browser + OS info" },
    { field: "Language", description: "Browser language" },
    { field: "Screen", description: "Screen resolution in width x height" },
    { field: "sessionId", description: "Unique session identifier returned after creation" },
    { field: "event", description: "Event name (page_view, add_to_cart, login, etc.)" },
    { field: "data", description: "Custom event metadata" }
  ]

  const benefits = [
    "Real-time session creation",
    "Automatic device & geolocation detection",
    "Lightweight and fast event tracker",
    "AI-powered suspicious login detection"
  ]

  return (
    <div className="min-h-screen mt-20">
      <div className="max-w-4xl mx-auto p-6 space-y-6">

        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2">
            <Rocket className="h-6 w-6 text-cyan-400" />
            <h1 className="text-3xl font-bold text-white">Trackly API Documentation</h1>
          </div>
          <p className="text-white/70">Session creation, event tracking & intelligent analytics SDK</p>
        </div>

        {/* Install SDK */}
        <div className="bg-black/40 backdrop-blur p-6 rounded-xl border border-cyan-500/20">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Include Trackly SDK
          </h2>
          <pre className="bg-black/60 p-4 rounded-lg text-sm text-white/70 overflow-x-auto mt-3">
            {`<script async src="https://apibizagent.techciph.com/trackly.js?key=YOUR_API_KEY"></script>`}
          </pre>
        </div>

        {/* Session Create API */}
        <div className="bg-black/40 backdrop-blur p-6 rounded-xl border border-cyan-500/20">
          <h2 className="text-xl font-semibold text-white">1. Create Session</h2>

          <div className="flex justify-between mt-4">
            <h3 className="text-white/80">Request Example</h3>
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => { navigator.clipboard.writeText(apiRequest); setCopiedRequest(true); setTimeout(()=>setCopiedRequest(false),1000); }}
            >
              <Copy className="h-4 w-4 mr-1" />
              {copiedRequest ? "Copied!" : "Copy"}
            </Button>
          </div>

          <pre className="bg-black/60 p-4 rounded-lg text-sm text-white/70 overflow-x-auto mt-3">
            <code>{apiRequest}</code>
          </pre>

          <div className="flex justify-between mt-4">
            <h3 className="text-white/80">JSON Payload</h3>
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => { navigator.clipboard.writeText(jsonPayload); setCopiedPayload(true); setTimeout(()=>setCopiedPayload(false),1000); }}
            >
              <Copy className="h-4 w-4 mr-1" />
              {copiedPayload ? "Copied!" : "Copy"}
            </Button>
          </div>

          <pre className="bg-black/60 p-4 rounded-lg text-sm text-white/70 overflow-x-auto mt-3">
            <code>{jsonPayload}</code>
          </pre>
        </div>

        {/* Event Track API */}
        <div className="bg-black/40 backdrop-blur p-6 rounded-xl border border-cyan-500/20">
          <h2 className="text-xl font-semibold text-white">2. Track Event</h2>

          <pre className="bg-black/60 p-4 rounded-lg text-sm text-white/70 overflow-x-auto mt-3">
            <code>{eventPayload}</code>
          </pre>
        </div>

        {/* Data Captured Table */}
        <div className="bg-black/40 backdrop-blur p-6 rounded-xl border border-cyan-500/20">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <Search className="h-5 w-5" />
            Data Captured
          </h2>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-white">Field</TableHead>
                <TableHead className="text-white">Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fieldData.map((f, i) => (
                <TableRow key={i}>
                  <TableCell className="text-white/80">{f.field}</TableCell>
                  <TableCell className="text-white/60">{f.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Benefits */}
        <div className="bg-black/40 backdrop-blur p-6 rounded-xl border border-cyan-500/20">
          <h2 className="text-xl font-semibold text-white">Why Trackly?</h2>
          <div className="flex flex-wrap gap-2 mt-3">
            {benefits.map((b, i) => (
              <Badge key={i} className="bg-cyan-700/40 text-white border border-cyan-500/40">
                {b}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

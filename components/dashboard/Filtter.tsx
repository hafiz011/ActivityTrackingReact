"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, Filter } from "lucide-react";
import { DatePickerWithRange } from "@/components/date-range-picker";
import { DateRange } from "react-day-picker";
import { useState } from "react";

interface FiltersCardProps {
  dateRange: DateRange | undefined;
  setDateRange: (range: DateRange | undefined) => void;
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
  selectedDevice: string;
  setSelectedDevice: (device: string) => void;
  suspiciousOnly: boolean;
  setSuspiciousOnly: (suspicious: boolean) => void;
  timeRange: string;
  setTimeRange: (range: string) => void;
}

export function FiltersCard({
  dateRange,
  setDateRange,
  selectedCountry,
  setSelectedCountry,
  selectedDevice,
  setSelectedDevice,
  suspiciousOnly,
  setSuspiciousOnly,
  timeRange,
  setTimeRange,
}: FiltersCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Analytics Dashboard
        </h1>
        <p className="text-muted-foreground mt-1">
          Monitor user behavior and track activities across your applications
        </p>
      </div>

      <div className="flex items-center gap-4">
        {/* Quick Time Range Buttons */}
        <div className="flex items-center gap-2 p-1 bg-muted rounded-lg">
          {["24h", "7d", "30d"].map((range) => (
            <Button
              key={range}
              variant={timeRange === range ? "default" : "ghost"}
              size="sm"
              onClick={() => setTimeRange(range)}
              className="h-8"
            >
              {range}
            </Button>
          ))}
        </div>

        {/* Advanced Filters */}
        <Collapsible open={open} onOpenChange={setOpen}>
          <Card className="hover:border-primary/50 transition-colors">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Filter className="h-5 w-5 text-primary" />
                  Advanced Filters
                </CardTitle>
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-primary/10"
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                </CollapsibleTrigger>
              </div>
            </CardHeader>
            <CollapsibleContent>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Date Range Picker */}
                    <div>
                        <div className="space-y-2">
                            <Label className="text-sm font-medium">Date Range</Label>
                            <DatePickerWithRange date={dateRange} setDate={setDateRange} />
                        </div>
                    </div>

                  {/* Country Selector */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Country</Label>
                    <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                      <SelectTrigger className="hover:border-primary/50 transition-colors">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">🌍 All Countries</SelectItem>
                        <SelectItem value="us">🇺🇸 United States</SelectItem>
                        <SelectItem value="uk">🇬🇧 United Kingdom</SelectItem>
                        <SelectItem value="ca">🇨🇦 Canada</SelectItem>
                        <SelectItem value="au">🇦🇺 Australia</SelectItem>
                        <SelectItem value="de">🇩🇪 Germany</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Device Selector */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Device Type</Label>
                    <Select value={selectedDevice} onValueChange={setSelectedDevice}>
                      <SelectTrigger className="hover:border-primary/50 transition-colors">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">💻 All Devices</SelectItem>
                        <SelectItem value="desktop">🖥️ Desktop</SelectItem>
                        <SelectItem value="mobile">📱 Mobile</SelectItem>
                        <SelectItem value="tablet">📱 Tablet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Suspicious Activity Toggle */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Security Focus</Label>
                    <div className="flex items-center space-x-3 pt-2">
                      <Switch 
                        id="suspicious-only" 
                        checked={suspiciousOnly} 
                        onCheckedChange={setSuspiciousOnly}
                        className="data-[state=checked]:bg-red-600"
                      />
                      <Label htmlFor="suspicious-only" className="text-sm">
                        Suspicious Activity Only
                      </Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { TabsContent } from "@/components/ui/tabs";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

type ActivityBreakdownUser = {
  userId: string;
  email: string;
  sessions: number;
  actions: number;
  pagesVisited: string[];
  lastAction: string;
  avgSessionDuration: string;
  recentActivity: { action: string; page: string; timestamp: string }[];
};

type ActivityBreakdownPage = {
  path: string;
  title: string;
  views: number;
  uniqueUsers: number;
  avgTimeOnPage: string;
  bounceRate: string;
};

type ActivityBreakdownSection = {
  name: string;
  totalViews: number;
  uniqueUsers: number;
  avgEngagement: string;
};

interface ActivityBreakdownTabProps {
  loading: { activityBreakdown: boolean };
  mockActivityBreakdown: {
    users: ActivityBreakdownUser[];
    pages: ActivityBreakdownPage[];
    sections: ActivityBreakdownSection[];
  };
}

export const ActivityBreakdownTab: React.FC<ActivityBreakdownTabProps> = ({
  loading,
  mockActivityBreakdown,
}) => {
  const [groupBy, setGroupBy] = useState<"user" | "page" | "section">("user");

  return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Activity Breakdown</CardTitle>
              <CardDescription>
                Detailed analysis by user, page, or section
              </CardDescription>
            </div>
            <Select value={groupBy} onValueChange={v => setGroupBy(v as any)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Group by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="user">Group by User</SelectItem>
                <SelectItem value="page">Group by Page</SelectItem>
                <SelectItem value="section">Group by Section</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          {loading.activityBreakdown ? (
            <div className="flex items-center justify-center h-96">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : groupBy === "user" ? (
            <Accordion type="single" collapsible className="w-full">
              {mockActivityBreakdown.users.map((user) => (
                <AccordionItem key={user.userId} value={user.userId}>
                  <AccordionTrigger className="hover:bg-muted/50 px-4 rounded-md">
                    <div className="flex items-center gap-3 w-full">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          {user.email.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 text-left">
                        <div className="font-medium">{user.email}</div>
                        <div className="text-sm text-muted-foreground">
                          {user.userId}
                        </div>
                      </div>
                      <div className="text-right mr-8">
                        <div className="font-medium">{user.sessions} sessions</div>
                        <div className="text-sm text-muted-foreground">
                          {user.actions} actions
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    <div className="grid grid-cols-3 gap-4 text-sm mb-4">
                      <div>
                        <div className="text-muted-foreground">Pages Visited</div>
                        <div className="font-medium">{user.pagesVisited.join(", ")}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Last Action</div>
                        <div className="font-medium">{user.lastAction}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Session Duration</div>
                        <div className="font-medium">{user.avgSessionDuration} avg</div>
                      </div>
                    </div>
                    <div className="text-sm font-medium mb-2">Recent Activity</div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Action</TableHead>
                          <TableHead>Page</TableHead>
                          <TableHead>Timestamp</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {user.recentActivity.map((activity, index) => (
                          <TableRow key={index}>
                            <TableCell>{activity.action}</TableCell>
                            <TableCell className="font-mono text-xs">{activity.page}</TableCell>
                            <TableCell>{activity.timestamp}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : groupBy === "page" ? (
            <div className="space-y-4">
              {mockActivityBreakdown.pages.map((page) => (
                <div key={page.path} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="font-medium">{page.title}</div>
                      <div className="text-sm text-muted-foreground font-mono">{page.path}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{page.views.toLocaleString()} views</div>
                      <div className="text-sm text-muted-foreground">
                        {page.uniqueUsers.toLocaleString()} unique users
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Avg Time on Page</div>
                      <div className="font-medium">{page.avgTimeOnPage}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Bounce Rate</div>
                      <div className="font-medium">{page.bounceRate}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {mockActivityBreakdown.sections.map((section) => (
                <div key={section.name} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="font-medium">{section.name}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{section.totalViews.toLocaleString()} views</div>
                      <div className="text-sm text-muted-foreground">
                        {section.uniqueUsers.toLocaleString()} unique users
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Average Engagement</div>
                      <div className="font-medium">{section.avgEngagement}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="mt-4 text-xs text-muted-foreground">
            <p>
              API: <code>GET /api/analytics/activity-breakdown?groupBy={groupBy}</code>
            </p>
          </div>
        </CardContent>
      </Card>
  );
};
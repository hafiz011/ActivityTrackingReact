"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Map,
  BarChart3,
  Loader2,
  MapPin,
  Shield,
  AlertTriangle,
  MoreHorizontal,
  Eye,
  LogOut,
} from "lucide-react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// type Session = {
//   id: string;
//   userId: string;
//   email: string;
//   ipAddress: string;
//   city: string;
//   country: string;
//   deviceType: string;
//   device: string;
//   loginTime: string;
//   actions: number;
//   suspicious: boolean;
// };

import { Session } from "@/types/ActiveSessionResponse";
interface ActiveSessionsTabProps {
  activeSessions: Session[];
  loading: { activeSessions: boolean };
}

function getDeviceIcon(type: string) {
  if (type === "mobile") return <BarChart3 className="h-4 w-4 text-blue-500" />;
  if (type === "desktop") return <BarChart3 className="h-4 w-4 text-green-500" />;
  return <BarChart3 className="h-4 w-4 text-gray-400" />;
}


export const ActiveSessionsTab: React.FC<ActiveSessionsTabProps> = ({
  activeSessions,
  loading,
}) => {
  // State to manage view mode (table or map)
  const [viewMode, setViewMode] = useState<"table" | "map">("table");

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Active Sessions by Location & Device
              </CardTitle>
              <CardDescription>
                Real-time view of currently logged-in users
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setViewMode(viewMode === "table" ? "map" : "table")
                }
              >
                {viewMode === "table" ? (
                  <Map className="h-4 w-4 mr-2" />
                ) : (
                  <BarChart3 className="h-4 w-4 mr-2" />
                )}
                {viewMode === "table" ? "Map View" : "Table View"}
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {loading.activeSessions ? (
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">Loading session data...</p>
              </div>
            </div>
          ) : viewMode === "table" ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>IP Address</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Device</TableHead>
                  <TableHead>Login Time</TableHead>
                  <TableHead>Actions</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activeSessions.map((session) => (
                  <TableRow key={session.sessionid}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>
                            {session.userName.substring(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{session.userName}</div>
                          <div className="text-sm text-muted-foreground">
                            {session.email}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-sm">
                      {session.ipAddress}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <div>{session.city}</div>
                          <div className="text-sm text-muted-foreground">
                            {session.country}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getDeviceIcon(session.deviceType)}
                        <span className="text-sm">{session.deviceType}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">
                      {/* {session.loginTime.seconds
                        ? new Date(session.loginTime.seconds * 1000).toLocaleString()} */}
                    </TableCell>
                    <TableCell>
                      {/* <Badge variant="outline">{session.actions} actions</Badge> */}
                    </TableCell>
                    <TableCell>
                      {/* {session.suspicious ? (
                        <Badge variant="destructive" className="flex items-center gap-1">
                          <AlertTriangle className="h-3 w-3" />
                          Suspicious
                        </Badge>
                      ) : (
                        <Badge variant="default" className="flex items-center gap-1">
                          <Shield className="h-3 w-3" />
                          Normal
                        </Badge>
                      )} */}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <LogOut className="h-4 w-4 mr-2" />
                            Force Logout
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <AlertTriangle className="h-4 w-4 mr-2" />
                            Block User
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Map className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium">Interactive Map View</h3>
                <p className="text-muted-foreground">
                  Integrate with Leaflet or Google Maps API to show active session locations
                </p>
                <div className="mt-4 text-sm text-muted-foreground">
                  <p>
                    API Endpoint:{" "}
                    <code className="bg-muted-foreground/20 px-1 py-0.5 rounded">GET /api/sessions/active</code>
                  </p>
                  <p>
                    Params: <code className="bg-muted-foreground/20 px-1 py-0.5 rounded">isActive=true</code>
                  </p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
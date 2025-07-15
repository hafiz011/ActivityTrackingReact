"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type TopUser = {
  userId: string;
  email: string;
  sessions: number;
  actions: number;
};

interface TopUsersTabProps {
  loading: { topUsers: boolean };
  topActiveUsers: TopUser[];
}

export const TopUsersTab: React.FC<TopUsersTabProps> = ({
  loading,
  topActiveUsers,
}) => (
  <Card>
    <CardHeader>
      <CardTitle>Top Active Users</CardTitle>
      <CardDescription>
        Most active users based on sessions and actions
      </CardDescription>
    </CardHeader>
    <CardContent>
      {loading.topUsers ? (
        <div className="flex items-center justify-center h-64">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Sessions</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topActiveUsers.map((user) => (
              <TableRow key={user.userId}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>
                        {user.email.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>{user.userId}</div>
                  </div>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.sessions}</TableCell>
                <TableCell>{user.actions}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      <div className="mt-4 text-xs text-muted-foreground">
        <p>
          API: <code>GET /api/users/top-active?limit=5</code>
        </p>
      </div>
    </CardContent>
  </Card>
);
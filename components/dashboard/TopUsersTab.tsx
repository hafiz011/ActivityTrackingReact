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
import { TopUser } from "@/types/ActiveSessionResponse";

interface TopUsersTabProps {
  loading: { topUsers: boolean };
  topActiveUsers: TopUser[] | null;
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
            <TableHead className="text-center">User</TableHead>
            <TableHead className="text-center">Email</TableHead>
            <TableHead className="text-center">Sessions</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {topActiveUsers && topActiveUsers.length > 0 ? (
            topActiveUsers.map((user) => (
              <TableRow key={user.userId} className="text-center">
                <TableCell>
                  <div className="flex items-center justify-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>
                        {user.userName.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>{user.userName}</div>
                  </div>
                </TableCell>
                <TableCell className="text-center">{user.userEmail}</TableCell>
                <TableCell className="text-center">{user.session}</TableCell>
                <TableCell className="text-center">{user.action}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-4">
                No top active users found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    )}
  </CardContent>
</Card>

);
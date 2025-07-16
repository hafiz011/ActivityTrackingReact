// SuspiciousActivityAlert.tsx
"use client";

import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import type { SuspiciousActivityAlert as SuspiciousActivityAlertType } from "@/services/types/session";

interface Props {
  alert: SuspiciousActivityAlertType | null;
}

const SuspiciousActivityAlert: React.FC<Props> = ({ alert }) => {
  if (!alert || alert.Total === 0) return null;

  return (
    <Alert className="border-red-300 bg-red-100">
      <AlertTriangle className="h-5 w-5 text-red-800 fill-red-200 stroke-red-800" />
      <AlertTitle className="text-red-900 font-bold">Suspicious Activity Detected</AlertTitle>
      <AlertDescription className="text-red-800">
        {alert.Total} suspicious login attempts detected in the last {alert.LastDetected}.
        <Button variant="link" className="p-0 h-auto text-red-800 underline ml-1">
          Review now
        </Button>
      </AlertDescription>
    </Alert>
  );
};

export default SuspiciousActivityAlert;
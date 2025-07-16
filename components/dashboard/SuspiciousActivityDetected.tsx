// SuspiciousActivityDetected.tsx
import React from 'react';
import { AlertTriangle } from 'lucide-react';

// This component displays a fallback message when suspicious activity is detected
// but no specific alert data is available yet (e.g., during initial load or API fallback).

const SuspiciousActivityDetected: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Suspicious Activity Detected
        </h2>
        <AlertTriangle className="h-6 w-6 text-red-600" />
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        We have detected suspicious activity on your account. Please review the details below.
      </p>
      <div className="mt-4">
        <p className="text-sm text-red-600">Details of the suspicious activity will be displayed here.</p>
      </div>
    </div>
  );
};

export default SuspiciousActivityDetected;

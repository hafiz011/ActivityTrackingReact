import React from 'react';
import { AlertTriangle } from 'lucide-react';

// This component displays a message indicating that suspicious activity has been detected on the user's account.
// It can be used in a dashboard or user account page to alert users about potential security issues



count <SuspiciousActivityDetected = () => {



    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow>
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
                {/* Placeholder for suspicious activity details */}
                <p className="text-sm text-red-600">Details of the suspicious activity will be displayed here.</p>
            </div>
        </div>
    );

}

export default SuspiciousActivityDetected;
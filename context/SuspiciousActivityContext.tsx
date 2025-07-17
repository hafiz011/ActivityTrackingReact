'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { SuspiciousActivityAlert } from "@/services/types/session";
import { getSuspiciousActivityAlert } from '@/services/sessionService';

interface SuspiciousActivityContextType {
  alert: SuspiciousActivityAlert | null;
  isLoading: boolean;
  refetch: () => Promise<void>;
}

const SuspiciousActivityContext = createContext<SuspiciousActivityContextType | undefined>(undefined);

export const SuspiciousActivityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [alert, setAlert] = useState<SuspiciousActivityAlert | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchAlert = async () => {
    setIsLoading(true);
    try {
      const data = await getSuspiciousActivityAlert();
      setAlert(data);
    } catch (err) {
      console.error("Failed to fetch suspicious activity alert", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAlert();
  }, []);

  return (
    <SuspiciousActivityContext.Provider value={{ alert, isLoading, refetch: fetchAlert }}>
      {children}
    </SuspiciousActivityContext.Provider>
  );
};

export const useSuspiciousActivity = () => {
  const context = useContext(SuspiciousActivityContext);
  if (!context) {
    throw new Error("useSuspiciousActivity must be used within SuspiciousActivityProvider");
  }
  return context;
};

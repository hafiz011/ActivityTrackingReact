"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type TimeRange = "24h" | "7d" | "30d" | "custom";

export interface FilterState {
  timeRange: TimeRange;
  startDate: string | null;
  endDate: string | null;
  country: string;
  device: string;
}

interface FilterContextType extends FilterState {
  setTimeRange: (range: TimeRange) => void;
  setStartDate: (date: string | null) => void;
  setEndDate: (date: string | null) => void;
  setCountry: (country: string) => void;
  setDevice: (device: string) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [timeRange, setTimeRange] = useState<TimeRange>("24h");
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const [country, setCountry] = useState<string>("all");
  const [device, setDevice] = useState<string>("all");

  return (
    <FilterContext.Provider
      value={{
        timeRange,
        setTimeRange,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        country,
        setCountry,
        device,
        setDevice,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within FilterProvider");
  }
  return context;
};

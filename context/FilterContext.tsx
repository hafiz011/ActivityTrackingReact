import React, { createContext, useContext, useState, ReactNode } from "react";

export type DateFilterType = "24hours" | "7days" | "1month" | "custom";

export interface FilterState {
  startDate: string | null;
  endDate: string | null;
  country: string;
  device: string;
  suspiciousOnly: boolean;
}

interface FilterContextType extends FilterState {
  setStartDate: (date: string | null) => void;
  setEndDate: (date: string | null) => void;
  setCountry: (country: string) => void;
  setDevice: (device: string) => void;
  setSuspiciousOnly: (s: boolean) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const [country, setCountry] = useState<string>("all");
  const [device, setDevice] = useState<string>("all");
  const [suspiciousOnly, setSuspiciousOnly] = useState<boolean>(false);

  return (
    <FilterContext.Provider
      value={{
        startDate,
        endDate,
        country,
        device,
        suspiciousOnly,
        setStartDate,
        setEndDate,
        setCountry,
        setDevice,
        setSuspiciousOnly,
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

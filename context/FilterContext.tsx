import React, { createContext, useContext, useState, ReactNode } from "react";

export type DateFilterType = "24hours" | "7days" | "1month" | "custom";

interface FilterContextType {
  dateFilter: DateFilterType;
  customStartDate: string | null;
  customEndDate: string | null;
  deviceFilter: string; // e.g. "mobile", "desktop", "tablet", or ""
  suspiciousOnly: boolean;

  setDateFilter: (value: DateFilterType) => void;
  setCustomStartDate: (value: string | null) => void;
  setCustomEndDate: (value: string | null) => void;
  setDeviceFilter: (value: string) => void;
  setSuspiciousOnly: (value: boolean) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [dateFilter, setDateFilter] = useState<DateFilterType>("24hours");
  const [customStartDate, setCustomStartDate] = useState<string | null>(null);
  const [customEndDate, setCustomEndDate] = useState<string | null>(null);
  const [deviceFilter, setDeviceFilter] = useState<string>("");
  const [suspiciousOnly, setSuspiciousOnly] = useState<boolean>(false);

  return (
    <FilterContext.Provider
      value={{
        dateFilter,
        customStartDate,
        customEndDate,
        deviceFilter,
        suspiciousOnly,
        setDateFilter,
        setCustomStartDate,
        setCustomEndDate,
        setDeviceFilter,
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

// Hook to fetch filtered alerts
import axios from "axios";
import { useFilter } from "@/context/FilterContext";

export const useSuspiciousAlerts = () => {
  const {
    timeRange,
    startDate,
    endDate,
    country,
    device,
    suspiciousOnly,
  } = useFilter();

  const getAlerts = async () => {
    const params: Record<string, string> = {};

    if (timeRange !== "custom") params.range = timeRange;
    if (timeRange === "custom" && startDate) params.from = startDate;
    if (timeRange === "custom" && endDate) params.to = endDate;
    if (country !== "all") params.country = country;
    if (device !== "all") params.device = device;
    if (suspiciousOnly) params.suspiciousOnly = "true";

    const res = await axios.get("/Suspicious/alert", { params });
    return res.data;
  };

  return { getAlerts };
};

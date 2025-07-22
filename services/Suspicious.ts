import axios from "axios";
import { useFilter } from "@/context/FilterContext";

export const useSuspiciousAlerts = () => {
  const {
    startDate,
    endDate,
    country,
    device,
    suspiciousOnly,
    timeRange,
  } = useFilter();

  const getAlerts = async () => {
    const params: Record<string, string> = {};

    if (timeRange !== "custom") params.range = timeRange;
    if (startDate && timeRange === "custom") params.from = startDate;
    if (endDate && timeRange === "custom") params.to = endDate;
    if (country !== "all") params.country = country;
    if (device !== "all") params.device = device;

    const res = await axios.get("/Suspicious/alert", { params });
    return res.data;
  };

  return { getAlerts };
};

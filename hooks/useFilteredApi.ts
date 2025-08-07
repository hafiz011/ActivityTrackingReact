import { useFilter } from "@/context/FilterContext";
//import axios from "axios";
import axios from "@/lib/axios";


export const useFilteredApi = () => {
  const { timeRange, startDate, endDate, country, device } = useFilter();

  const buildParams = () => {
    const params: Record<string, string> = {};
    if (timeRange !== "custom") params.range = timeRange;
    if (timeRange === "custom" && startDate) params.from = startDate;
    if (timeRange === "custom" && endDate) params.to = endDate;
    if (country !== "all") params.country = country;
    if (device !== "all") params.device = device;
    return params;
  };

  const get = async <T = any>(endpoint: string): Promise<T> => {
    const res = await axios.get<T>(endpoint, { params: buildParams() });
    return res.data;
  };

  return { get };
};

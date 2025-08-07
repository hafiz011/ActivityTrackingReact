import { useFilter } from "@/context/FilterContext";
import axios from "@/lib/axios";

export const useFilteredApi = () => {
  const { startDate, endDate, country, device } = useFilter();

  const buildParams = () => {
    const params: Record<string, string> = {};

    if (startDate) params.from = new Date(startDate).toISOString();
    if (endDate) params.to = new Date(endDate).toISOString();

    if (country && country !== "all") params.country = country;
    if (device && device !== "all") params.device = device;

    return params;
  };

  const get = async <T = any>(endpoint: string): Promise<T> => {
    const res = await axios.get<T>(endpoint, { params: buildParams() });
    return res.data;
  };

  return { get };
};

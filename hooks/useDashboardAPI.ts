// hooks/useDashboardAPI.ts
import { useCallback } from "react";
import { useFilteredApi } from "./useFilteredApi";
import { SuspiciousActivityApiResponse } from "../types/SuspiciousActivityAlert";
import { ActiveSessionResponse } from "../types/ActiveSessionResponse";

export const useActiveUsers = () => {
  const { get } = useFilteredApi();
  const fetchActiveUsers = useCallback(() => {
    return get<ActiveSessionResponse>("/dashboard/ActiveUsers");
  }, [get]);
  return { fetchActiveUsers };
};

export const useSuspiciousAlerts = () => {
  const { get } = useFilteredApi();
  const fetchSuspiciousActivities = useCallback(() => {
    return get<SuspiciousActivityApiResponse>("/dashboard/alert");
  }, [get]);
  return { fetchSuspiciousActivities };
};





export const useAvgSessions = () => {
  const { get } = useFilteredApi();
  const fetchSessionMetrics = () => get("/dashboard/AvgSessions");
  return { fetchSessionMetrics };
};


export const useBounceRate = () => {
  const { get } = useFilteredApi();
  const fetchBounceRate = () => get("/dashboard/BounceRate");
  return { fetchBounceRate };
};


export const useActionSessions = () => {
  const { get } = useFilteredApi();
  const fetchActionSessions = () => get("/dashboard/ActionSessions");
  return { fetchActionSessions };
};

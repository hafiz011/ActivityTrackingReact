// hooks/useDashboardAPI.ts
import { useCallback } from "react";
import { useFilteredApi } from "./useFilteredApi";
import { SuspiciousActivityApiResponse } from "../types/SuspiciousActivityAlert";
import { ActiveSessionResponse } from "../types/ActiveSessionResponse";
import { SessionsAnalyticsResponse } from "../types/SessionAnalytics";

//
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

  const fetchSessionMetrics = useCallback(async () => { 
    const res = await get<SessionsAnalyticsResponse>("/dashboard/analytics");
    return res; // Assuming the response structure matches SessionsAnalyticsResponse
  }, [get]); 

  return { fetchSessionMetrics }; 
};

// export const useBounceRate = () => {
//   const { get } = useFilteredApi();
//   const fetchBounceRate = () => get("/dashboard/BounceRate");
//   return { fetchBounceRate };
// };


// export const useActionSessions = () => {
//   const { get } = useFilteredApi();
//   const fetchActionSessions = () => get("/dashboard/ActionSessions");
//   return { fetchActionSessions };
// };

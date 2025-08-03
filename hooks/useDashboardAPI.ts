// hooks/useDashboardAPI.ts
// This file contains hooks for fetching various dashboard metrics using a filtered API approach.
import { useFilteredApi } from "./useFilteredApi";
import { SuspiciousActivity } from "../types/SuspiciousActivity";

export const useActiveUsers = () => {
  const { get } = useFilteredApi();
  const fetchActiveUsersCount = () => get("/Sessions/ActiveUsers");
  return { fetchActiveUsersCount };
};


export const useSuspiciousAlerts = () => {
  const { get } = useFilteredApi();
  const fetchSuspiciousActivities = () => get<SuspiciousActivity[]>("/Suspicious/alert");
  return { fetchSuspiciousActivities };
};

// export const useSuspiciousAlerts = () => {
//   const { get } = useFilteredApi();
//   const fetchSuspiciousActivities = () => get("/Suspicious/alert");
//   return { fetchSuspiciousActivities };
// };


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

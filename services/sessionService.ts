import axios from "@/lib/axios"; // Axios instance with baseURL & token
import { FilterState } from "@/context/FilterContext";

import type {
  ActiveUsersResponse,
  SuspiciousActivity,
  SessionMetricsResponse,
  SuspiciousActivityAlert,

} from "@/services/types/session";




// Fetch suspicious activity alert
// This function fetches the latest suspicious activity alert from the server.
export const getSuspiciousActivityAlert = async (): Promise<SuspiciousActivityAlert> => {
  const response = await axios.get("/Suspicious/alert");
  return response.data as SuspiciousActivityAlert;
};


// Fetch active user count
export const fetchActiveUsersCount = async (filters: FilterState): Promise<ActiveUsersResponse> => {
  const response = await axios.get("/sessions/active-users-count", {
    params: buildQueryParams(filters),
  });
  return response.data as ActiveUsersResponse;
};

// Fetch suspicious sessions
export const fetchSuspiciousActivities = async (filters: FilterState): Promise<SuspiciousActivity[]> => {
  const response = await axios.get("/sessions/suspicious", {
    params: buildQueryParams(filters),
  });
  return response.data as SuspiciousActivity[];
};

// Fetch session metrics (avg duration, bounce rate, etc.)
export const fetchSessionMetrics = async (filters: FilterState): Promise<SessionMetricsResponse> => {
  const response = await axios.get("/sessions/metrics", {
    params: buildQueryParams(filters),
  });
  return response.data as SessionMetricsResponse;
};






// Helper: Convert filter context into query params
function buildQueryParams(filters: FilterState) {
  return {
    startDate: filters.startDate,
    endDate: filters.endDate,
    country: filters.country !== "all" ? filters.country : undefined,
    deviceType: filters.device !== "all" ? filters.device : undefined,
    suspiciousOnly: filters.suspiciousOnly || undefined,
  };
}




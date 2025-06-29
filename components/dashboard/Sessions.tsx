import React, { useEffect, useState } from "react";
import { useFilter } from "@/context/FilterContext";
import axios from "axios";

const Sessions = () => {
  const { startDate, endDate, country, device, suspiciousOnly } = useFilter();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!startDate || !endDate) return;

    const fetchSessions = async () => {
      const response = await axios.get("/sessions", {
        params: {
          startDate,
          endDate,
          country,
          device,
          suspiciousOnly,
        },
      });
      setData(response.data);
    };

    fetchSessions();
  }, [startDate, endDate, country, device, suspiciousOnly]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Sessions</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Sessions;

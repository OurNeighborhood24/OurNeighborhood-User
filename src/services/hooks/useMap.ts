import { useState, useEffect } from "react";
import {
  getMapReports,
  MapReportsRequest,
  ReportMapData,
} from "@/services/api/mapApi";

export const useMapReports = (initialParams?: MapReportsRequest) => {
  const [reports, setReports] = useState<ReportMapData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchReports = async (newParams: MapReportsRequest) => {
    if (!newParams.latitude || !newParams.longitude) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await getMapReports(newParams);
      setReports(data);
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "지도 데이터를 불러오는데 실패했습니다.";
      setError(errorMessage);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialParams?.latitude && initialParams?.longitude) {
      fetchReports(initialParams);
    }
  }, []);

  return {
    reports,
    loading,
    error,
    refetch: fetchReports,
  };
};

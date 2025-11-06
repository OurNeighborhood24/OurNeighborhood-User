import { useState, useEffect, useCallback } from "react";
import { regionService } from "@/services/api";
import { Region, LoadingState } from "@/types";

export const useRegions = () => {
  const [regions, setRegions] = useState<Region[]>([]);
  const [state, setState] = useState<LoadingState>("idle");
  const [error, setError] = useState<string | null>(null);

  const fetchRegions = useCallback(async () => {
    setState("loading");
    setError(null);

    try {
      const data = await regionService.getRegions();
      setRegions(data);
      setState("success");
    } catch (err: any) {
      setState("error");
      const errorMessage =
        err.response?.data?.message || "지역 목록을 불러오는데 실패했습니다.";
      setError(errorMessage);
    }
  }, []);

  useEffect(() => {
    fetchRegions();
  }, [fetchRegions]);

  return {
    regions,
    isLoading: state === "loading",
    error,
    state,
    refetch: fetchRegions,
  };
};

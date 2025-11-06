import { useState, useCallback, useEffect } from "react";
import { reportService } from "@/services/api";
import { Report } from "@/types";

interface UseInfiniteReportsReturn {
  reports: Report[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  loadMore: () => Promise<void>;
  refresh: () => Promise<void>;
}

export const useInfiniteReports = (
  pageSize: number = 15
): UseInfiniteReportsReturn => {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);

  const fetchReports = useCallback(
    async (currentOffset: number, isRefresh: boolean = false) => {
      if (loading) return;

      setLoading(true);
      setError(null);

      try {
        const response = await reportService.getAllReports(
          currentOffset,
          pageSize
        );

        if (isRefresh) {
          setReports(response.items);
        } else {
          setReports((prevReports) => [...prevReports, ...response.items]);
        }

        const newHasMore =
          response.items.length === pageSize &&
          currentOffset + response.items.length < response.total;
        setHasMore(newHasMore);

      } catch (err: any) {
        const errorMessage =
          err.response?.data?.message || "신고 목록을 불러오는데 실패했습니다.";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    },
    [loading, pageSize]
  );

  const loadMore = useCallback(async () => {
    if (!hasMore || loading) return;

    const nextOffset = offset + pageSize;
    setOffset(nextOffset);
    await fetchReports(nextOffset, false);
  }, [offset, pageSize, hasMore, loading, fetchReports]);

  const refresh = useCallback(async () => {
    setOffset(0);
    setHasMore(true);
    await fetchReports(0, true);
  }, [fetchReports]);

  useEffect(() => {
    fetchReports(0, true);
  }, []);

  return {
    reports,
    loading,
    error,
    hasMore,
    loadMore,
    refresh,
  };
};

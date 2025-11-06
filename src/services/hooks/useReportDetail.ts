import { useState, useCallback } from "react";
import { reportService } from "@/services/api";
import { ReportDetailResponse } from "@/types";

interface UseReportDetailReturn {
  reportDetail: ReportDetailResponse | null;
  loading: boolean;
  error: string | null;
  fetchReportDetail: (reportId: number) => Promise<void>;
}

export const useReportDetail = (): UseReportDetailReturn => {
  const [reportDetail, setReportDetail] = useState<ReportDetailResponse | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchReportDetail = useCallback(async (reportId: number) => {
    setLoading(true);
    setError(null);

    try {
      const response = await reportService.getReportDetail(reportId);
      setReportDetail(response);
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message ||
        "신고 상세 정보를 불러오는데 실패했습니다.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    reportDetail,
    loading,
    error,
    fetchReportDetail,
  };
};

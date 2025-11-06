import { useState, useCallback, useEffect } from "react";
import { reportService } from "@/services/api";
import {
  Report,
  ReportCategory,
  CreateReportRequest,
  ReportFormData,
  LoadingState,
} from "@/types";

export const useReport = () => {
  const [state, setState] = useState<LoadingState>("idle");
  const [error, setError] = useState<string | null>(null);

  const submitReport = useCallback(async (formData: ReportFormData) => {
    setState("loading");
    setError(null);

    try {
      let image_url: string | undefined;

      if (formData.image) {
        const imageResponse = await reportService.uploadImage(formData.image);
        image_url = imageResponse.image_url;
      }

      const reportData: CreateReportRequest = {
        category_id: formData.category_id,
        latitude: formData.latitude,
        longitude: formData.longitude,
        title: formData.title,
        description: formData.description,
        image_url,
      };

      const response = await reportService.createReport(reportData);

      setState("success");
      return response;
    } catch (err: any) {
      setState("error");
      const errorMessage =
        err.response?.data?.message || "신고 등록에 실패했습니다.";
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  }, []);

  return {
    submitReport,
    loading: state === "loading",
    error,
    state,
  };
};

export const useCategories = () => {
  const [categories, setCategories] = useState<ReportCategory[]>([]);
  const [state, setState] = useState<LoadingState>("idle");
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = useCallback(async () => {
    setState("loading");
    setError(null);

    try {
      const data = await reportService.getCategories();
      setCategories(data);
      setState("success");
    } catch (err: any) {
      setState("error");
      const errorMessage =
        err.response?.data?.message ||
        "카테고리 목록을 불러오는데 실패했습니다.";
      setError(errorMessage);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return {
    categories,
    isLoading: state === "loading",
    error,
    state,
    refetch: fetchCategories,
  };
};

export const useReportHistory = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [state, setState] = useState<LoadingState>("idle");
  const [error, setError] = useState<string | null>(null);

  const fetchReports = useCallback(async () => {
    setState("loading");
    setError(null);

    try {
      const data = await reportService.getMyReports();
      setReports(data);
      setState("success");
    } catch (err: any) {
      setState("error");
      const errorMessage =
        err.response?.data?.message || "신고 내역을 불러오는데 실패했습니다.";
      setError(errorMessage);
    }
  }, []);

  useEffect(() => {
    fetchReports();
  }, [fetchReports]);

  return {
    reports,
    loading: state === "loading",
    error,
    state,
    refetch: fetchReports,
  };
};

import { useState, useCallback, useEffect } from "react";
import { noticeService } from "@/services/api";
import { Notice, LoadingState } from "@/types";

export const useNotices = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [state, setState] = useState<LoadingState>("idle");
  const [error, setError] = useState<string | null>(null);

  const fetchNotices = useCallback(async () => {
    setState("loading");
    setError(null);

    try {
      const data = await noticeService.getNotices(0, 50); 
      setNotices(data.items);
      setState("success");
    } catch (err: any) {
      setState("error");
      const errorMessage =
        err.response?.data?.message || "공지사항을 불러오는데 실패했습니다.";
      setError(errorMessage);
    }
  }, []);

  useEffect(() => {
    fetchNotices();
  }, [fetchNotices]);

  return {
    notices,
    loading: state === "loading",
    error,
    state,
    refetch: fetchNotices,
  };
};


export const useNoticeDetail = (noticeId: number) => {
  const [notice, setNotice] = useState<Notice | null>(null);
  const [state, setState] = useState<LoadingState>("idle");
  const [error, setError] = useState<string | null>(null);

  const fetchNotice = useCallback(async () => {
    if (!noticeId) return;

    setState("loading");
    setError(null);

    try {
      const data = await noticeService.getNoticeById(noticeId);
      if (data) {
        setNotice(data);
        setState("success");
      } else {
        setState("error");
        setError("해당 공지사항을 찾을 수 없습니다.");
      }
    } catch (err: any) {
      setState("error");
      const errorMessage =
        err.response?.data?.message || "공지사항을 불러오는데 실패했습니다.";
      setError(errorMessage);
    }
  }, [noticeId]);

  useEffect(() => {
    fetchNotice();
  }, [fetchNotice]);

  return {
    notice,
    loading: state === "loading",
    error,
    state,
    refetch: fetchNotice,
  };
};

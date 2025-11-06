import { useState } from "react";
import {
  getCategoryRecommendation,
  CategoryRecommendation,
} from "../api/categoryApi";

export const useCategoryRecommendation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recommendation, setRecommendation] =
    useState<CategoryRecommendation | null>(null);

  const getRecommendation = async (content: string) => {
    if (!content || content.trim().length < 5) {
      setError("추천을 받으려면 최소 5자 이상 입력해주세요.");
      return null;
    }

    setLoading(true);
    setError(null);
    setRecommendation(null);

    try {
      const data = await getCategoryRecommendation(content);
      setRecommendation(data);
      return data;
    } catch (err: any) {
      const errorMessage =
        err?.response?.data?.message ||
        "카테고리 추천을 가져오는데 실패했습니다.";
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const clearRecommendation = () => {
    setRecommendation(null);
    setError(null);
  };

  return {
    loading,
    error,
    recommendation,
    getRecommendation,
    clearRecommendation,
  };
};

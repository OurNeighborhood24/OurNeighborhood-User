import { customAxios } from "@/lib/customAxios";

export interface CategoryRecommendation {
  category: string;
  reason: string;
}

export const getCategoryRecommendation = async (
  content: string
): Promise<CategoryRecommendation> => {
  try {
    const response = await customAxios.post<CategoryRecommendation>(
      "/reports/categories/recommend",
      {
        content,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

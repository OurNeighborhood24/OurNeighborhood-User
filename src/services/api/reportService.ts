import { customAxios } from "@/lib/customAxios";
import {
  CreateReportRequest,
  CreateReportResponse,
  ReportsResponse,
  CategoriesResponse,
  ImageUploadResponse,
  ReportsListResponse,
  ReportDetailResponse,
} from "@/types";

export const reportService = {
  getCategories: async (): Promise<CategoriesResponse> => {
    const response = await customAxios.get<CategoriesResponse>(
      "/reports/categories"
    );
    return response.data;
  },

  uploadImage: async (imageFile: File): Promise<ImageUploadResponse> => {
    const formData = new FormData();
    formData.append("file", imageFile); 

    const response = await customAxios.post<ImageUploadResponse>(
      "/reports/images",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  },

  createReport: async (
    data: CreateReportRequest
  ): Promise<CreateReportResponse> => {
    const response = await customAxios.post<CreateReportResponse>(
      "/reports",
      data
    );
    return response.data;
  },

  getAllReports: async (
    offset: number = 0,
    size: number = 15
  ): Promise<ReportsListResponse> => {
    const response = await customAxios.get<ReportsListResponse>(
      `/reports?offset=${offset}&size=${size}`
    );
    return response.data;
  },

  getMyReports: async (): Promise<ReportsResponse> => {
    const response = await customAxios.get<ReportsResponse>("/reports/my");
    return response.data;
  },

  getReportDetail: async (reportId: number): Promise<ReportDetailResponse> => {
    const response = await customAxios.get<ReportDetailResponse>(
      `/reports/${reportId}`
    );
    return response.data;
  },

  updateMyReport: async (
    reportId: number,
    reportData: Partial<CreateReportRequest>
  ) => {
    const response = await customAxios.patch(
      `/reports/my-reports/${reportId}`,
      reportData
    );
    return response.data;
  },

  deleteMyReport: async (reportId: number): Promise<void> => {
    await customAxios.delete(`/reports/my-reports/${reportId}`);
  },
};

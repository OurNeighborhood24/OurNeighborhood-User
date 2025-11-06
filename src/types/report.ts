export interface ReportFormData {
  title: string;
  description: string;
  category_id: number;
  latitude: number;
  longitude: number;
  address: string;
  image: File | null;
}

export interface CreateReportRequest {
  category_id: number;
  latitude: number;
  longitude: number;
  title: string;
  description: string;
  image_url?: string;
}

export interface Report {
  report_id: number;
  writer_id: number;
  category: {
    category_id: number;
    category_name: string;
  };
  latitude: number;
  longitude: number;
  title: string;
  description: string;
  image_url?: string;
  state: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "REJECTED";
  created_at: string;
}

export interface CreateReportResponse {
  report_id: number;
  writer_id: number;
  category: {
    category_id: number;
    category_name: string;
  };
  latitude: number;
  longitude: number;
  title: string;
  description: string;
  image_url?: string;
  state: string;
  created_at: string;
}

export interface ImageUploadResponse {
  message: string;
  image_url: string;
}

export interface ReportCategory {
  category_id: number;
  category_name: string;
}

export type ReportsResponse = Report[];

export interface ReportsListResponse {
  total: number;
  offset: number;
  size: number;
  items: Report[];
}

export interface ReportAnswer {
  report_answer_id: number;
  report_id: number;
  writer_id: number;
  answer: string;
  state: "CHECKED" | "PROCESSING" | "COMPLETED";
  created_at: string;
}

export interface ReportDetailResponse {
  report: Report;
  answers: ReportAnswer[];
}

export type CategoriesResponse = ReportCategory[];
import { customAxios } from "@/lib/customAxios";

export interface ReportMapData {
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
  image_url: string;
  state: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "REJECTED";
  created_at: string;
}

export interface MapReportsRequest {
  latitude?: number;
  longitude?: number;
  radius?: number;
  category?: number;
  limit?: number;
}

export const getMapReports = async (
  params: MapReportsRequest = {}
): Promise<ReportMapData[]> => {
  try {
    const queryParams = new URLSearchParams();

    if (params.latitude !== undefined) {
      queryParams.append("latitude", params.latitude.toString());
    }
    if (params.longitude !== undefined) {
      queryParams.append("longitude", params.longitude.toString());
    }
    if (params.radius !== undefined) {
      queryParams.append("radius", params.radius.toString());
    }
    if (params.category !== undefined) {
      queryParams.append("category", params.category.toString());
    }
    if (params.limit !== undefined) {
      queryParams.append("limit", params.limit.toString());
    }

    const response = await customAxios.get(
      `/reports/map?${queryParams.toString()}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("지도 신고 데이터를 불러올 수 없습니다.");
  }
};

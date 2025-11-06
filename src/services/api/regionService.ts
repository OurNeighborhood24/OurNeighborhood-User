import { customAxios } from "@/lib/customAxios";
import { RegionsResponse } from "@/types";

export const regionService = {
  getRegions: async (): Promise<RegionsResponse> => {
    const response = await customAxios.get<RegionsResponse>(
      "/users/users/regions"
    );
    return response.data;
  },
};

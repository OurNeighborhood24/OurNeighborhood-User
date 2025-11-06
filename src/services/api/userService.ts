import { customAxios } from "@/lib/customAxios";
import { RegisterRequest, RegisterResponse } from "@/types";

export const userService = {
  register: async (
    registerData: RegisterRequest
  ): Promise<RegisterResponse> => {
    const response = await customAxios.post<RegisterResponse>(
      "/users/users/register",
      registerData
    );
    return response.data;
  },

  getProfile: async () => {
    const response = await customAxios.get("/users/users/me");
    return response.data;
  },

  updateRegion: async (regionId: number) => {
    const response = await customAxios.patch("/users/users/region", {
      region_id: regionId,
    });
    return response.data;
  },
};

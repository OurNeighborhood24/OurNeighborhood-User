import { customAxios, TokenManager } from "@/lib/customAxios";
import { LoginRequest, LoginResponse } from "@/types";

export const authService = {
  login: async (loginData: LoginRequest): Promise<LoginResponse> => {
    const response = await customAxios.post<LoginResponse>(
      "/auth/login",
      loginData
    );

    if (response.data.access_token) {
      TokenManager.setAccessToken(response.data.access_token);
    }

    return response.data;
  },

  logout: async (): Promise<void> => {
    try {
      await customAxios.delete("/auth/logout");
    } catch (error) {
      console.error(error);
    } finally {
      TokenManager.removeAccessToken();
    }
  },

  refreshToken: async (): Promise<LoginResponse> => {
    const response = await customAxios.post<LoginResponse>("/auth/refresh");

    if (response.data.access_token) {
      TokenManager.setAccessToken(response.data.access_token);
    }

    return response.data;
  },
};

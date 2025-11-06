import axios, { AxiosInstance, AxiosResponse } from "axios";

class TokenManager {
  private static readonly ACCESS_TOKEN_KEY = "access_token";

  static getAccessToken(): string | null {
    return localStorage.getItem(this.ACCESS_TOKEN_KEY);
  }

  static setAccessToken(token: string): void {
    localStorage.setItem(this.ACCESS_TOKEN_KEY, token);
  }

  static removeAccessToken(): void {
    localStorage.removeItem(this.ACCESS_TOKEN_KEY);
  }
}

const createCustomAxios = (): AxiosInstance => {
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  if (!baseURL) {
    console.error("VITE_API_BASE_URL is not defined in environment variables");
  }

  const instance = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use(
    (config) => {
      const token = TokenManager.getAccessToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const refreshResponse = await axios.post(
            `${baseURL}/auth/refresh`,
            {},
            {
              withCredentials: false, 
            }
          );

          const newAccessToken = refreshResponse.data.access_token;
          TokenManager.setAccessToken(newAccessToken);

          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return instance(originalRequest);
        } catch (refreshError) {
          TokenManager.removeAccessToken();
          window.location.href = "/";
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    }
  );

  return instance;
};

export const customAxios = createCustomAxios();

export { TokenManager };

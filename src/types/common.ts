export interface ApiResponse<T = any> {
  message?: string;
  data?: T;
}

export interface ApiError {
  message: string;
  status?: number;
}

export type LoadingState = "idle" | "loading" | "success" | "error";

export type UserRole = "USER" | "ADMIN";

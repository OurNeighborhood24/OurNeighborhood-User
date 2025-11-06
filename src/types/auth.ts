export interface LoginRequest {
  user_id: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
}

export interface RefreshTokenResponse {
  access_token: string;
}

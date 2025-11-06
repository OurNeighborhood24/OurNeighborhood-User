import { UserRole } from "./common";
import { Region } from "./region";

export interface User {
  user_id: number;
  role: UserRole;
  region: Region;
}

export interface RegisterRequest {
  id: string;
  password: string;
  region_id: number;
  role: string;
}

export interface RegisterResponse {
  message: string;
  user: User;
}

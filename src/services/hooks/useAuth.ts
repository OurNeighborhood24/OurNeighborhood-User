import { useState, useCallback } from "react";
import { authService, userService } from "@/services/api";
import { LoginRequest, RegisterRequest, LoadingState } from "@/types";

export const useLogin = () => {
  const [state, setState] = useState<LoadingState>("idle");
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(async (loginData: LoginRequest) => {
    setState("loading");
    setError(null);

    try {
      const response = await authService.login(loginData);
      setState("success");
      return response;
    } catch (err: any) {
      setState("error");
      const errorMessage =
        err.response?.data?.message || "로그인에 실패했습니다.";
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  }, []);

  return {
    login,
    isLoading: state === "loading",
    error,
    state,
  };
};

export const useRegister = () => {
  const [state, setState] = useState<LoadingState>("idle");
  const [error, setError] = useState<string | null>(null);

  const register = useCallback(async (registerData: RegisterRequest) => {
    setState("loading");
    setError(null);

    try {
      const response = await userService.register(registerData);
      setState("success");
      return response;
    } catch (err: any) {
      setState("error");
      const errorMessage =
        err.response?.data?.message || "회원가입에 실패했습니다.";
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  }, []);

  return {
    register,
    isLoading: state === "loading",
    error,
    state,
  };
};

export const useLogout = () => {
  const [state, setState] = useState<LoadingState>("idle");

  const logout = useCallback(async () => {
    setState("loading");

    try {
      await authService.logout();
      setState("success");
    } catch (err) {
      setState("success");
    }
  }, []);

  return {
    logout,
    isLoading: state === "loading",
    state,
  };
};

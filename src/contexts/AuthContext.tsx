import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { TokenManager } from "@/lib/customAxios";
import { User } from "@/types";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = TokenManager.getAccessToken();
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSetUser = (userData: User | null) => {
    setUser(userData);
    setIsAuthenticated(!!userData);
  };

  const handleLogout = () => {
    TokenManager.removeAccessToken();
    setUser(null);
    setIsAuthenticated(false);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated,
    setUser: handleSetUser,
    logout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

import { createContext } from "react";
import { UserEntity } from "../entities/user.entity.ts";

export type AuthContextType = {
  user: UserEntity | null;
  permissions: string[];
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

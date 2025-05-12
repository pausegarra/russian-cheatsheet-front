import { createContext } from "react";
import { UserEntity } from "../entities/user.entity.ts";

export type AuthContextType = {
  user: UserEntity;
  permissions: string[];
}

export const AuthContext = createContext<AuthContextType | null>(null);

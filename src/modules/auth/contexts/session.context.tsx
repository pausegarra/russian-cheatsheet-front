import { createContext, useEffect, useState } from "react";
import { UserEntity } from "../entities/user.entity.ts";
import { authService } from "../root.ts";

type AuthContextType = {
  user: UserEntity;
  permissions: string[];
}

const AuthContext = createContext<AuthContextType | null>(null);

type props = {
  children: React.ReactNode;
}

export const AuthProvider = ({children}: props) => {
  const [user, setUser] = useState<AuthContextType | null>(null);

  useEffect(() => {
    const profile = getCurrentUser();
    const permissions = getPermissions();

    Promise.all([profile, permissions]).then(([profile, permissions]) => {
      setUser({user: profile, permissions});
    });
  }, []);

  async function getCurrentUser() {
    return await authService.loadUserProfile();
  }

  async function getPermissions() {
    return await authService.getPermissions();
  }

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  )
}
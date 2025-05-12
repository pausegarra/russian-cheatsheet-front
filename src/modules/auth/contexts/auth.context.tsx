import { useEffect, useState } from "react";
import { authService } from "../root.ts";
import { AuthContext, AuthContextType } from "./auth.provider.ts";

type props = {
  children: React.ReactNode;
}

export const AuthProvider = ({children}: props) => {
  const [user, setUser] = useState<AuthContextType | null>(null);

  useEffect(() => {
    const profile = getCurrentUser();
    const permissions = getPermissions();

    Promise.all([profile, permissions]).then(([profile, permissions]) => {
      setUser({user: profile, permissions, isLoading: false});
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
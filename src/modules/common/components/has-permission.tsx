import { ReactNode, useContext } from "react";
import { AuthContext } from "../../auth/contexts/auth.provider.ts";

type props = {
  children: ReactNode;
  permission?: string;
}

export function HasPermission({children, permission}: props) {
  const user = useContext(AuthContext);

  if (!user?.permissions.some(p => p === permission)) {
    return null;
  }

  return (
    <>
      {children}
    </>
  )
}
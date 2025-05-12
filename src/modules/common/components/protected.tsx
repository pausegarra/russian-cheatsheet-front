import { ReactNode, useContext, useEffect } from "react";
import { AuthContext } from "../../auth/contexts/auth.provider.ts";
import { useErrorBoundary } from "react-error-boundary";

type props = {
  children: ReactNode;
  permission?: string;
}

export function Protected({children, permission}: props) {
  const user = useContext(AuthContext);
  const {showBoundary} = useErrorBoundary();

  useEffect(() => {
    if (user?.isLoading !== false) {
      return;
    }

    if (user === null) {
      showBoundary("You must be logged in to access this page");
      return;
    }

    if (permission && !user.permissions?.includes(permission)) {
      showBoundary("Resource not found");
    }
  }, [user, showBoundary, permission]);

  if (user?.isLoading !== false) {
    return;
  }

  return (
    <>
      {children}
    </>
  )
}
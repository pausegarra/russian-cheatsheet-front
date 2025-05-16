import { ReactNode, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../auth/contexts/auth.provider.ts";
import { useErrorBoundary } from "react-error-boundary";
import { authService } from "../../auth/root.ts";

type props = {
  children: ReactNode;
  permission?: string;
}

export function Protected({children, permission}: props) {
  const user = useContext(AuthContext);
  const {showBoundary} = useErrorBoundary();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!authService.isAuthenticated()) {
      showBoundary("You must be logged in to access this page");
      setIsLoading(false);
      return;
    }


    if (user?.isLoading && permission && !user?.permissions?.includes(permission)) {
      showBoundary("Resource not found");
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
  }, [user, showBoundary, permission]);

  if (isLoading) {
    return null;
  }

  return (
    <>
      {children}
    </>
  )
}
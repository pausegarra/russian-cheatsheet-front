import { ReactNode, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../auth/contexts/auth.provider.ts";
import { useErrorBoundary } from "react-error-boundary";

type props = {
  children: ReactNode;
  permission?: string;
}

export function Protected({children, permission}: props) {
  const user = useContext(AuthContext);
  const {showBoundary} = useErrorBoundary();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user === null) {
      showBoundary("You must be logged in to access this page");
      return;
    }

    if (permission && !user.permissions?.includes(permission)) {
      showBoundary("Resource not found");
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
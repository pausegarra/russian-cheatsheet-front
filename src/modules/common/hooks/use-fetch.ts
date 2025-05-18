import { useErrorBoundary } from "react-error-boundary";

export function useFetch() {
  const {showBoundary} = useErrorBoundary();

  return async <T>(fn: () => Promise<T>): Promise<T | undefined> => {
    try {
      return await fn();
    } catch (e: any) {
      if (e.status === 401) {
        showBoundary("You must be logged in");
        return;
      }

      if (e.status === 403) {
        showBoundary("You don't have permissions");
        return;
      }

      throw e;
    }
  }
}
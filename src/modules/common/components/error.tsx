import { Button } from "@mantine/core";
import { FallbackProps } from "react-error-boundary";
import classes from "./error.module.css";

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className={classes.container} role="alert">
      <div className={classes.card}>
        <h1 className={classes.title}>System Exception Encountered</h1>
        <p style={{ color: 'var(--rc-text-secondary)', fontSize: '0.875rem', margin: 0 }}>
          An unexpected error occurred while executing the linguistic application:
        </p>
        <pre className={classes.trace}>{error.message}</pre>
        <Button
          onClick={resetErrorBoundary}
          style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}
        >
          Recover Session
        </Button>
      </div>
    </div>
  );
}
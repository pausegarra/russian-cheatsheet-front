import type { FallbackProps } from "react-error-boundary";

export function ErrorFallback({ resetErrorBoundary }: FallbackProps) {
  return (
    <main
      role="alert"
      className="mx-auto flex min-h-screen max-w-xl flex-col justify-center gap-6 px-6"
    >
      <p className="eyebrow">Something went wrong</p>
      <h1 className="page-title">A little interruption.</h1>
      <p className="text-muted">
        This page could not be displayed. Try again to continue reading.
      </p>
      <div>
        <button className="button button-primary" onClick={resetErrorBoundary}>
          Try again
        </button>
        <a className="ml-4 text-sm text-sage" href="/">
          Back to dictionary
        </a>
      </div>
    </main>
  );
}

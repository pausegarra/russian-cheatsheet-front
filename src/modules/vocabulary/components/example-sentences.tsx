import { useEffect, useState } from "react";
import { wordService } from "../root.ts";
import type { ExampleSentenceEntity } from "../entities/example-sentence.entity.ts";

export function ExampleSentences({ wordId }: { wordId: string }) {
  const [examples, setExamples] = useState<ExampleSentenceEntity[]>([]);
  const [page, setPage] = useState(0);
  const [nextPage, setNextPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(false);
    wordService
      .getWordExamples(wordId, nextPage)
      .then((result) => {
        if (cancelled) return;
        setExamples((current) =>
          nextPage === 0 ? result.data : [...current, ...result.data],
        );
        setPage(result.page);
        setHasNextPage(result.hasNextPage);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [wordId, nextPage, attempt]);
  return (
    <section aria-labelledby="examples-title" className="space-y-6">
      <div className="flex items-baseline gap-3">
        <h2 id="examples-title" className="text-2xl font-medium">
          Words in context
        </h2>
        <span className="text-xs text-faint">Usage examples</span>
      </div>
      <div className="space-y-4">
        {examples.map((example) => (
          <figure
            key={example.id}
            className="rounded-xl border border-line bg-surface p-6"
          >
            <blockquote lang="ru" className="text-lg">
              {example.russian}
            </blockquote>
            <figcaption className="mt-3 space-y-2">
              {example.translations
                .filter(
                  (translation) =>
                    !translation.language.toLowerCase().startsWith("es"),
                )
                .map((translation, index) => (
                  <p
                    key={`${translation.language}-${translation.position}-${index}`}
                    className="text-sm text-muted"
                  >
                    <span className="mr-2 text-xs text-faint">
                      {translation.language.toUpperCase()}
                    </span>
                    {translation.text}
                  </p>
                ))}
              {example.contributor && (
                <p className="pt-2 text-xs text-faint">
                  Source: {example.contributor}
                </p>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
      {loading && (
        <p role="status" className="text-sm text-muted">
          Loading examples…
        </p>
      )}
      {error && (
        <div role="alert" className="flex flex-wrap items-center gap-4">
          <p className="text-sm text-muted">Examples could not be loaded.</p>
          <button
            className="button text-sm"
            onClick={() => setAttempt((value) => value + 1)}
          >
            Retry examples
          </button>
        </div>
      )}
      {!error && !loading && !examples.length && (
        <p className="text-sm text-muted">
          No examples available for this entry.
        </p>
      )}
      {hasNextPage && !error && (
        <button
          className="button"
          disabled={loading}
          onClick={() => setNextPage(page + 1)}
        >
          {loading ? "Loading…" : "More examples"}
        </button>
      )}
    </section>
  );
}

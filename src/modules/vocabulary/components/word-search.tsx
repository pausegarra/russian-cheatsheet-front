import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  XIcon,
} from "@phosphor-icons/react";
import { useEffect, useId, useState } from "react";
import type { KeyboardEvent } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { wordService } from "../root.ts";
import { translationText } from "../entities/word.entity.ts";
import type { WordEntity } from "../entities/word.entity.ts";
import type { Paginated } from "../../common/responses/paginated.ts";

type SearchResult = {
  query: string;
  page: number;
  matchMode: 'precise' | 'contains';
  data?: Paginated<WordEntity>;
  error?: boolean;
};

export function WordSearch({ compact = false }: { compact?: boolean }) {
  const [params, setParams] = useSearchParams();
  const query = params.get("search") ?? "";
  const term = query.trim();
  const matchModeParam = params.get("matchMode");
  const matchMode = matchModeParam === "contains" ? "contains" : "precise";
  const pageParam = Number(params.get("page"));
  const page = Number.isSafeInteger(pageParam) && pageParam > 0 ? pageParam : 1;
  const [result, setResult] = useState<SearchResult | null>(null);
  const [attempt, setAttempt] = useState(0);
  const [pending, setPending] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [expanded, setExpanded] = useState(!compact);
  const { pathname } = useLocation();
  const showResults = !compact || expanded;
  const navigate = useNavigate();
  const id = useId();
  const current =
    result?.query === term && result.page === page && result.matchMode === matchMode
      ? result
      : null;
  const loading = term.length > 0 && (!current || pending);
  const words = current?.data?.data ?? [];

  useEffect(() => {
    if (matchModeParam === null || matchModeParam === "precise" || matchModeParam === "contains") return;
    setParams((previous) => {
      const next = new URLSearchParams(previous);
      next.delete("matchMode");
      return next;
    }, { replace: true });
  }, [matchModeParam, setParams]);

  useEffect(() => {
    if (!term) return;
    let cancelled = false;
    const timer = window.setTimeout(() => {
      setPending(true);
      wordService
        .getWords(page, term, matchMode)
        .then((data) => {
          if (!cancelled) setResult({ query: term, page, matchMode, data });
        })
        .catch(() => {
          if (!cancelled) setResult({ query: term, page, matchMode, error: true });
        })
        .finally(() => {
          if (!cancelled) setPending(false);
        });
    }, 300);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [term, page, matchMode, attempt]);

  useEffect(() => {
    setActiveIndex(-1);
  }, [term, page, matchMode]);

  useEffect(() => {
    setExpanded(!compact);
  }, [pathname, compact]);

  function updateSearch(value: string) {
    setExpanded(true);
    setActiveIndex(-1);
    setParams(
      (previous) => {
        const next = new URLSearchParams(previous);
        if (value) next.set("search", value);
        else next.delete("search");
        next.delete("matchMode");
        next.delete("page");
        return next;
      },
      { replace: true },
    );
  }

  function changeMatchMode(nextMode: 'precise' | 'contains') {
    setActiveIndex(-1);
    setExpanded(true);
    setParams((previous) => {
      const next = new URLSearchParams(previous);
      if (nextMode === "contains") next.set("matchMode", "contains");
      else next.delete("matchMode");
      next.delete("page");
      return next;
    });
  }

  function changePage(nextPage: number) {
    setActiveIndex(-1);
    setParams(
      (previous) => {
        const next = new URLSearchParams(previous);
        next.set("page", String(nextPage));
        return next;
      },
      { replace: true },
    );
  }

  function handleKey(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      updateSearch("");
      return;
    }
    if (!words.length || loading || !showResults) return;
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const next =
        event.key === "ArrowDown"
          ? (activeIndex + 1) % words.length
          : activeIndex <= 0
            ? words.length - 1
            : activeIndex - 1;
      setActiveIndex(next);
      document
        .getElementById(`${id}-option-${next}`)
        ?.scrollIntoView({ block: "nearest" });
    }
    if (event.key === "Enter") {
      event.preventDefault();
      const word = words[activeIndex] ?? words[0];
      navigate(`/vocabulary/${encodeURIComponent(word.id)}?${params}`, {
        state: { fromApp: true },
      });
      setActiveIndex(-1);
      setExpanded(false);
    }
  }

  return (
    <section
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setExpanded(false);
      }}
      aria-label="Dictionary search"
      className="w-full max-w-3xl"
    >
      {!compact && (
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-xs">
          <label htmlFor={`${id}-input`} className="font-semibold text-ink">
            DICTIONARY
          </label>
          <span className="text-faint">Russian, English and Spanish</span>
        </div>
      )}
      <form
        role="search"
        onSubmit={(event) => {
          event.preventDefault();
          setExpanded(true);
          setAttempt((value) => value + 1);
        }}
      >
        <div className="flex items-center gap-3 rounded-xl border border-line bg-surface p-3 focus-within:border-sage sm:gap-4 sm:p-4">
          <MagnifyingGlassIcon
            size={24}
            className="shrink-0 text-sage"
            aria-hidden="true"
          />
          <input
            id={`${id}-input`}
            aria-label="Search Russian or English"
            role="combobox"
            aria-autocomplete="list"
            aria-expanded={showResults && words.length > 0 && !loading}
            aria-controls={`${id}-results`}
            aria-activedescendant={
              showResults &&
              activeIndex >= 0 &&
              activeIndex < words.length &&
              !loading
                ? `${id}-option-${activeIndex}`
                : undefined
            }
            autoComplete="off"
            spellCheck={false}
            value={query}
            onChange={(event) => updateSearch(event.target.value)}
            onFocus={() => setExpanded(true)}
            onKeyDown={handleKey}
            placeholder="A word in Russian, English or Spanish…"
            className="min-w-0 flex-1 bg-transparent py-2 text-base text-ink outline-none placeholder:text-faint sm:text-lg"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                updateSearch("");
                document.getElementById(`${id}-input`)?.focus();
              }}
              className="rounded-md p-2 text-muted hover:text-ink"
              aria-label="Clear search"
            >
              <XIcon size={18} />
            </button>
          )}
          <button
            type="submit"
            className="rounded-lg bg-sage p-3 text-canvas hover:bg-[#d4e4c4]"
            aria-label="Search"
          >
            <ArrowRightIcon size={20} />
          </button>
        </div>
      </form>
      {!term && !compact && (
        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-faint">
          <span>Try a word</span>
          {["привет", "love", "говорить"].map((sample) => (
            <button
              key={sample}
              onClick={() => {
                updateSearch(sample);
                document.getElementById(`${id}-input`)?.focus();
              }}
              className="rounded-md border border-line px-2 py-1 text-muted hover:border-sage hover:text-sage"
            >
              {sample}
            </button>
          ))}
        </div>
      )}
      <div
        role="status"
        aria-live="polite"
        className={term && showResults ? "mt-4 text-sm text-muted" : "sr-only"}
      >
        {!showResults
          ? ""
          : loading
            ? "Looking up your word…"
            : current?.error
              ? "Dictionary is unavailable."
              : current?.data
                ? `${current.data.totalElements} ${current.data.totalElements === 1 ? "result" : "results"} for “${term}”`
                : ""}
      </div>
      {showResults && term && (
        <div className="mt-2 flex items-center gap-3 text-xs text-muted">
          {matchMode === "precise" ? (
            <button
              type="button"
              className="text-sage underline-offset-4 hover:underline"
              onClick={() => changeMatchMode("contains")}
            >
              Include partial matches
            </button>
          ) : (
            <>
              <span>Partial matches included</span>
              <button
                type="button"
                className="text-sage underline-offset-4 hover:underline"
                onClick={() => changeMatchMode("precise")}
              >
                Use precise search
              </button>
            </>
          )}
        </div>
      )}
      {showResults && term && current?.error && !loading && (
        <div className="mt-3 rounded-xl border border-line p-6">
          <p className="mb-4 text-sm text-muted">
            Could not load words. Check your connection and try again.
          </p>
          <button
            className="button"
            onClick={() => {
              setPending(true);
              setAttempt((value) => value + 1);
            }}
          >
            Try again
          </button>
        </div>
      )}
      {showResults &&
        term &&
        current?.data &&
        !loading &&
        words.length === 0 && (
          <div className="mt-4 rounded-xl border border-line p-6 text-sm text-muted">
            <p>
              {page > 1
                ? "No words found on this page. Return to the first page for this search."
                : matchMode === "precise"
                  ? "No precise matches found."
                  : "No words found. Try another spelling or translation."}
            </p>
            {page > 1 && (
              <button
                type="button"
                className="button mt-4 block"
                onClick={() => changePage(1)}
              >
                First page
              </button>
            )}
          </div>
        )}
      <div
        id={`${id}-results`}
        role="listbox"
        aria-label="Dictionary results"
        aria-busy={loading}
        className={
          showResults && words.length && !loading
            ? "mt-3 max-h-96 overflow-y-auto rounded-xl border border-line bg-surface"
            : "hidden"
        }
      >
        {!loading &&
          words.map((word, index) => (
            <Link
              key={word.id}
              id={`${id}-option-${index}`}
              role="option"
              aria-selected={activeIndex === index}
              to={`/vocabulary/${encodeURIComponent(word.id)}?${params}`}
              state={{ fromApp: true }}
              onClick={() => {
                setActiveIndex(-1);
                setExpanded(false);
              }}
              className={`group flex items-center justify-between gap-4 border-b border-line p-4 last:border-b-0 hover:bg-raised ${activeIndex === index ? "bg-raised" : ""}`}
            >
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-3">
                  <span lang="ru" className="text-xl text-ink">
                    {word.russian}
                  </span>
                  {word.type && (
                    <span className="text-xs text-faint">{word.type}</span>
                  )}
                </div>
                <p className="mt-1 text-sm wrap-anywhere text-muted">
                  {word.searchMatch?.language === "en" || word.searchMatch?.language === "es"
                    ? word.searchMatch.text
                    : translationText(word, "en") || translationText(word, "es") || "View word details"}
                  {(word.searchMatch?.language === "en" || word.searchMatch?.language === "es") && (
                    <span className="ml-2 text-xs text-faint">
                      {word.searchMatch.language === "en" ? "English match" : "Spanish match"}
                    </span>
                  )}
                </p>
              </div>
              <ArrowRightIcon
                size={18}
                className="shrink-0 text-faint group-hover:text-sage"
              />
            </Link>
          ))}
      </div>
      {showResults &&
        current?.data &&
        !loading &&
        (page > 1 || (words.length > 0 && current.data.hasNextPage)) && (
          <div className="mt-4 flex items-center justify-between gap-3">
            <button
              type="button"
              className="button text-sm"
              disabled={page <= 1}
              onClick={() => changePage(page - 1)}
            >
              <ArrowLeftIcon size={16} />
              Previous
            </button>
            <span className="text-xs text-muted">
              Page {page}
              {current.data.totalPages >= page
                ? ` of ${current.data.totalPages}`
                : ""}
            </span>
            <button
              type="button"
              className="button text-sm"
              disabled={!current.data.hasNextPage}
              onClick={() => changePage(page + 1)}
            >
              Next
              <ArrowRightIcon size={16} />
            </button>
          </div>
        )}
    </section>
  );
}

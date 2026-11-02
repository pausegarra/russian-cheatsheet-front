import { Link, useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { WordEntity, translationText } from "../entities/word.entity.ts";
import { wordService } from "../root.ts";
import { Layout } from "../../common/components/layout.tsx";
import { ExampleSentences } from "../components/example-sentences.tsx";
import { WordFormsDisplay } from "../components/word-forms.tsx";
import { WordSearch } from "../components/word-search.tsx";

export function ShowVocabulary() {
  const { id = "" } = useParams();
  return (
    <Layout backTo="/">
      <div className="mb-12">
        <p className="mb-3 text-xs text-faint">
          A different word? Keep exploring.
        </p>
        <WordSearch compact />
      </div>
      <WordEntry key={id} id={id} />
    </Layout>
  );
}

function WordEntry({ id }: { id: string }) {
  const [word, setWord] = useState<WordEntity | null>(null);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [params] = useSearchParams();
  useEffect(() => {
    let cancelled = false;
    wordService
      .getWord(id)
      .then((data) => {
        if (!cancelled) {
          setWord(data);
          document.title = `${data.russian} · Russian Cheatsheet`;
        }
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, [id, attempt]);

  if (error)
    return (
      <div role="alert" className="space-y-4 py-8">
        <h1 className="text-3xl">This word could not be loaded.</h1>
        <p className="text-muted">
          The entry may be unavailable. Try again or search for another word
          above.
        </p>
        <button
          className="button"
          onClick={() => {
            setError(false);
            setAttempt((value) => value + 1);
          }}
        >
          Try again
        </button>
      </div>
    );
  if (!word)
    return (
      <div role="status" className="animate-pulse py-12 text-muted">
        Opening your word…
      </div>
    );

  return (
    <article className="space-y-12">
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="eyebrow">Dictionary entry</span>
          {word.type && <span className="badge">{word.type}</span>}
          {word.aspect && <span className="badge">{word.aspect}</span>}
        </div>
        <h1
          lang="ru"
          className="text-5xl font-medium tracking-tight wrap-anywhere sm:text-7xl"
        >
          {word.russian}
        </h1>
        <p className="max-w-3xl text-xl text-muted sm:text-2xl">
          {translationText(word, "en") || "No English translation available."}
        </p>
        {word.usage && (
          <p className="max-w-2xl text-sm text-muted">{word.usage}</p>
        )}
        {word.relatedWords && word.relatedWords.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {word.relatedWords.map((related) => (
              <Link
                key={`${related.id}-${related.relation}`}
                to={`/vocabulary/${encodeURIComponent(related.id)}?${params}`}
                state={{ fromApp: true }}
                className="inline-flex items-center gap-2 rounded-lg border border-line px-3 py-2 text-sm text-sage hover:bg-raised"
              >
                <span lang="ru">{related.russian}</span>
                {related.relation !== "related" && (
                  <span className="text-xs text-muted">{related.relation}</span>
                )}
                <ArrowUpRightIcon size={14} />
              </Link>
            ))}
          </div>
        )}
      </header>
      <WordFormsDisplay
        type={word.type}
        aspect={word.aspect}
        russian={word.russian}
        forms={word.forms ?? null}
      />
      <ExampleSentences key={word.id} wordId={word.id} />
    </article>
  );
}

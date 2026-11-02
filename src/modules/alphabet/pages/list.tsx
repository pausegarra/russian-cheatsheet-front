import { alphabetService } from "../root.ts";
import { Layout } from "../../common/components/layout.tsx";

const letters = alphabetService.getAlphabet();
export function ListAlphabet() {
  return (
    <Layout backTo="/">
      <header className="mb-12 space-y-6">
        <p className="eyebrow">Reference · 33 letters</p>
        <h1 className="page-title">
          A new alphabet.
          <br />
          <span className="text-sage">A familiar starting point.</span>
        </h1>
        <p className="max-w-xl text-lg text-muted">
          Meet the Cyrillic alphabet. Each letter, its Latin counterpart and its
          sound, all in one place.
        </p>
      </header>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6">
        {letters.map((letter) => (
          <article
            key={letter.id}
            className="rounded-xl border border-line bg-surface p-6"
          >
            <h2 lang="ru" className="mb-6 text-4xl font-medium text-sage">
              {letter.cyrillic}
              <span className="ml-1 text-muted">
                {letter.cyrillic.toLowerCase()}
              </span>
            </h2>
            <dl className="space-y-2 text-sm">
              <div className="flex flex-wrap justify-between gap-2">
                <dt className="text-faint">Latin</dt>
                <dd>{letter.latin}</dd>
              </div>
              <div className="flex flex-wrap justify-between gap-2">
                <dt className="text-faint">IPA</dt>
                <dd>{letter.ipa}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </Layout>
  );
}

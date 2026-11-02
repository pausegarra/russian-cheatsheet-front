import { ArrowDownIcon, ArrowUpRightIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Layout } from "../components/layout.tsx";
import { WordSearch } from "../../vocabulary/components/word-search.tsx";

const references = [
  {
    to: "/alphabet",
    glyph: "Аа",
    title: "The Cyrillic alphabet",
    description: "33 letters. Sounds, transliteration and a new way to read.",
    note: "Start with the sounds",
  },
  {
    to: "/grammar/cases",
    glyph: "Я",
    title: "Make sense of cases",
    description: "Who, what, where, to whom. Six cases, one clear reference.",
    note: "Find the right ending",
  },
  {
    to: "/grammar",
    glyph: "Мы",
    title: "A little grammar goes far",
    description:
      "Declensions, pronouns, numbers and verbs. Keep the essentials close.",
    note: "Explore the guides",
  },
];

export function Presentation() {
  return (
    <Layout>
      <section aria-labelledby="home-title" className="pt-8 sm:pt-12">
        <p className="eyebrow mb-6">
          Маленькая помощь · A little help with Russian
        </p>
        <h1
          id="home-title"
          className="max-w-2xl text-5xl font-medium tracking-tight sm:text-7xl"
        >
          Find your word.
          <br />
          <span className="text-sage">Keep your flow.</span>
        </h1>
        <p className="mt-6 mb-10 max-w-xl text-base text-muted sm:text-lg">
          Your Russian reference, within reach. Look up a word, untangle its
          forms, see it in a sentence.
        </p>
        <WordSearch />
      </section>
      <section aria-labelledby="reference-title" className="mt-16 sm:mt-24">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ArrowDownIcon size={16} className="text-sage" />
            <h2 id="reference-title" className="text-sm font-medium text-muted">
              A few things worth keeping close
            </h2>
          </div>
          <span className="text-xs text-faint">Your pocket reference</span>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {references.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              state={{ fromApp: true }}
              className="group flex flex-col rounded-xl border border-line bg-surface p-6 hover:border-sage/50 hover:bg-raised"
            >
              <div className="mb-8 flex items-start justify-between">
                <span lang="ru" className="text-4xl text-sage">
                  {item.glyph}
                </span>
                <ArrowUpRightIcon
                  size={20}
                  className="text-faint group-hover:text-sage"
                />
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 mb-6 text-sm text-muted">{item.description}</p>
              <span className="mt-auto text-xs text-sage">{item.note}</span>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}

import { GrammarGuidePage } from "../components/grammar-guide-page.tsx";
import {
  adjectiveCases,
  nounPluralCases,
  nounSingularCases,
} from "../data/declensions.ts";
import classes from "./grammar-reference.module.css";

const singularColumns = [
  { key: "mama", label: "Feminine · -а" },
  { key: "nedelya", label: "Feminine · -я" },
  { key: "stol", label: "Masculine · inanimate" },
  { key: "student", label: "Masculine · animate" },
  { key: "okno", label: "Neuter" },
  { key: "noch", label: "Feminine · -ь" },
] as const;

const pluralColumns = [
  { key: "stol", label: "Masculine · inanimate" },
  { key: "student", label: "Masculine · animate" },
  { key: "kniga", label: "Feminine" },
  { key: "okno", label: "Neuter" },
] as const;

const adjectiveColumns = [
  { key: "masculine", label: "Masculine" },
  { key: "feminine", label: "Feminine" },
  { key: "neuter", label: "Neuter" },
  { key: "plural", label: "Plural" },
] as const;

export function DeclensionsPage() {
  return (
    <GrammarGuidePage
      eyebrow="Grammar · Endings"
      title="Noun and adjective declensions"
      intro="Use these model forms to look up common endings by case. They show regular patterns; check an individual vocabulary entry for irregular forms."
      sources={[
        {
          label: "OpenRussian noun declension",
          href: "https://en.openrussian.org/grammar/nouns-declensions",
        },
        {
          label: "OpenRussian adjective declension",
          href: "https://en.openrussian.org/grammar/adjectives-declensions",
        },
      ]}
    >
      <section className={classes.section} aria-labelledby="noun-singular-title">
        <div className={classes.sectionHeader}>
          <span className={classes.eyebrow}>Nouns · singular</span>
          <h2 id="noun-singular-title" className={classes.sectionTitle}>
            Common singular patterns
          </h2>
          <p className={classes.note}>
            Noun class depends mostly on gender and the nominative ending. The
            table uses one model word for each common pattern.
          </p>
        </div>

        <div
          className={classes.tableViewport}
          role="region"
          aria-label="Singular noun declension patterns"
          tabIndex={0}
        >
          <table className={[classes.table, classes.wideTable].join(" ")}>
            <caption className={classes.visuallyHidden}>
              Singular forms of common Russian noun patterns
            </caption>
            <thead>
              <tr>
                <th scope="col">Case</th>
                {singularColumns.map((column) => (
                  <th scope="col" key={column.key}>
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {nounSingularCases.map((row) => (
                <tr key={row.caseName}>
                  <th scope="row">{row.caseName}</th>
                  {singularColumns.map((column) => (
                    <td className={classes.russianValue} lang="ru" key={column.key}>
                      {row[column.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={classes.section} aria-labelledby="noun-plural-title">
        <div className={classes.sectionHeader}>
          <span className={classes.eyebrow}>Nouns · plural</span>
          <h2 id="noun-plural-title" className={classes.sectionTitle}>
            Plural patterns
          </h2>
          <p className={classes.note}>
            Genitive plural endings vary across nouns. Learn frequent words with
            their vocabulary entry.
          </p>
        </div>

        <div
          className={classes.tableViewport}
          role="region"
          aria-label="Plural noun declension patterns"
          tabIndex={0}
        >
          <table className={classes.table}>
            <caption className={classes.visuallyHidden}>
              Plural forms of masculine, feminine, and neuter nouns
            </caption>
            <thead>
              <tr>
                <th scope="col">Case</th>
                {pluralColumns.map((column) => (
                  <th scope="col" key={column.key}>
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {nounPluralCases.map((row) => (
                <tr key={row.caseName}>
                  <th scope="row">{row.caseName}</th>
                  {pluralColumns.map((column) => (
                    <td className={classes.russianValue} lang="ru" key={column.key}>
                      {row[column.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <aside className={classes.callout}>
        <strong>Accusative and animacy:</strong> masculine singular and plural
        animate nouns use the genitive form; inanimate nouns match the
        nominative. Feminine singular nouns have their own{" "}
        <span lang="ru">-у / -ю</span> endings. For example:{" "}
        <span lang="ru">вижу стол</span>, but <span lang="ru">вижу студе́нта</span>.
      </aside>

      <section className={classes.section} aria-labelledby="adjective-title">
        <div className={classes.sectionHeader}>
          <span className={classes.eyebrow}>Adjectives · hard pattern</span>
          <h2 id="adjective-title" className={classes.sectionTitle}>
            Adjectives agree with the noun
          </h2>
          <p className={classes.note}>
            The adjective changes for the noun&apos;s gender, number, and case.
            Masculine and plural accusative forms also depend on animacy.
          </p>
        </div>

        <div
          className={classes.tableViewport}
          role="region"
          aria-label="Hard adjective declension pattern"
          tabIndex={0}
        >
          <table className={classes.table}>
            <caption className={classes.visuallyHidden}>
              Declension of the hard adjective новый
            </caption>
            <thead>
              <tr>
                <th scope="col">Case</th>
                {adjectiveColumns.map((column) => (
                  <th scope="col" key={column.key}>
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {adjectiveCases.map((row) => (
                <tr key={row.caseName}>
                  <th scope="row">{row.caseName}</th>
                  {adjectiveColumns.map((column) => (
                    <td className={classes.russianValue} lang="ru" key={column.key}>
                      {row[column.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className={classes.note}>
          For masculine and plural accusative, the first form is inanimate and
          the second is animate. Soft adjectives such as{" "}
          <span lang="ru">си́ний</span> use a related pattern with spelling
          changes.
        </p>
      </section>
    </GrammarGuidePage>
  );
}

import { GrammarGuidePage } from "../components/grammar-guide-page.tsx";
import {
  personalPronounCases,
  possessivePronouns,
} from "../data/pronouns.ts";
import classes from "./grammar-reference.module.css";

const personalPronounHeaders = [
  "я",
  "ты",
  "он",
  "она́",
  "оно́",
  "мы",
  "вы",
  "они́",
] as const;

const possessiveColumns = [
  { key: "masculine", label: "Masculine" },
  { key: "feminine", label: "Feminine" },
  { key: "neuter", label: "Neuter" },
  { key: "plural", label: "Plural" },
] as const;

export function PronounsPage() {
  return (
    <GrammarGuidePage
      eyebrow="Grammar · Pronouns"
      title="Pronouns by case"
      intro="Personal pronouns have irregular forms. Use this table for a quick lookup; the prepositional column includes a common preposition."
      sources={[
        {
          label: "OpenRussian personal pronouns",
          href: "https://en.openrussian.org/grammar/personal-pronouns",
        },
        {
          label: "OpenRussian possessive pronouns",
          href: "https://en.openrussian.org/grammar/possessive-pronouns",
        },
      ]}
    >
      <section className={classes.section} aria-labelledby="personal-pronouns-title">
        <div className={classes.sectionHeader}>
          <span className={classes.eyebrow}>Personal pronouns</span>
          <h2 id="personal-pronouns-title" className={classes.sectionTitle}>
            All six cases
          </h2>
        </div>

        <div
          className={classes.tableViewport}
          role="region"
          aria-label="Personal pronouns by case"
          tabIndex={0}
        >
          <table className={[classes.table, classes.wideTable].join(" ")}>
            <caption className={classes.visuallyHidden}>
              Russian personal pronouns declined by case
            </caption>
            <thead>
              <tr>
                <th scope="col">Case</th>
                {personalPronounHeaders.map((pronoun) => (
                  <th scope="col" key={pronoun} lang="ru">
                    {pronoun}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {personalPronounCases.map((row) => (
                <tr key={row.caseName}>
                  <th scope="row">{row.caseName}</th>
                  {personalPronounHeaders.map((pronoun, index) => (
                    <td className={classes.russianValue} lang="ru" key={pronoun}>
                      {row.forms[index]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className={classes.note}>
          Genitive and accusative forms match. After a preposition, third-person
          pronouns gain <span lang="ru">н</span>:{" "}
          <span lang="ru">у него́, к ней, с ни́ми</span>.
        </p>
        <p className={classes.note}>
          <span lang="ru">ты</span> is informal singular;{" "}
          <span lang="ru">вы</span> is plural or formal. For things,{" "}
          <span lang="ru">он / она́ / оно́</span> follows the noun&apos;s
          grammatical gender.
        </p>
      </section>

      <section className={classes.section} aria-labelledby="possessive-title">
        <div className={classes.sectionHeader}>
          <span className={classes.eyebrow}>Possessive pronouns</span>
          <h2 id="possessive-title" className={classes.sectionTitle}>
            Match the thing owned
          </h2>
          <p className={classes.note}>
            These forms agree with the possessed noun, not with the owner.
          </p>
        </div>

        <div
          className={classes.tableViewport}
          role="region"
          aria-label="Possessive pronouns by gender and number"
          tabIndex={0}
        >
          <table className={classes.table}>
            <caption className={classes.visuallyHidden}>
              Nominative forms of Russian possessive pronouns
            </caption>
            <thead>
              <tr>
                <th scope="col">Meaning</th>
                {possessiveColumns.map((column) => (
                  <th scope="col" key={column.key}>
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {possessivePronouns.map((row) => (
                <tr key={row.meaning}>
                  <th scope="row">{row.meaning}</th>
                  {possessiveColumns.map((column) => (
                    <td className={classes.russianValue} lang="ru" key={column.key}>
                      {row[column.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <aside className={classes.callout}>
          <strong>Fixed forms:</strong>{" "}
          <span lang="ru">его́, её, их</span> do not change. Use{" "}
          <span lang="ru">свой</span> when the owner is the sentence subject:{" "}
          <span lang="ru">Он взял свою́ кни́гу.</span> Other possessives also
          take the noun&apos;s case: <span lang="ru">о моём до́ме</span>.
        </aside>
      </section>
    </GrammarGuidePage>
  );
}

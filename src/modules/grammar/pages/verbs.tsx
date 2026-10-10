import { GrammarGuidePage } from "../components/grammar-guide-page.tsx";
import {
  aspectExamples,
  pastConjugation,
  presentConjugation,
} from "../data/verbs.ts";
import classes from "./grammar-reference.module.css";

export function VerbsPage() {
  return (
    <GrammarGuidePage
      eyebrow="Grammar · Verbs"
      title="Verb endings, tense, and aspect"
      intro="Use the model forms to recognize common conjugation patterns. Check the vocabulary entry for the exact forms and stress of a specific verb."
      sources={[
        {
          label: "OpenRussian conjugation",
          href: "https://en.openrussian.org/grammar/verbs-conjugation",
        },
        {
          label: "OpenRussian verb aspects",
          href: "https://en.openrussian.org/grammar/verbs-aspects",
        },
      ]}
    >
      <section className={classes.section} aria-labelledby="present-title">
        <div className={classes.sectionHeader}>
          <span className={classes.eyebrow}>Present tense · imperfective</span>
          <h2 id="present-title" className={classes.sectionTitle}>
            Two common conjugation patterns
          </h2>
          <p className={classes.note}>
            Most verbs follow one of these patterns. The infinitive ending is a
            useful clue, but exceptions and stem changes exist.
          </p>
        </div>

        <div
          className={classes.tableViewport}
          role="region"
          aria-label="Russian present tense conjugation patterns"
          tabIndex={0}
        >
          <table className={classes.table}>
            <caption className={classes.visuallyHidden}>
              Present tense forms of работать and говорить
            </caption>
            <thead>
              <tr>
                <th scope="col">Person</th>
                <th scope="col">1st · рабо́тать</th>
                <th scope="col">2nd · говори́ть</th>
              </tr>
            </thead>
            <tbody>
              {presentConjugation.map((row) => (
                <tr key={row.person}>
                  <th scope="row" lang="ru">
                    {row.person}
                  </th>
                  <td className={classes.russianValue} lang="ru">
                    {row.first}
                  </td>
                  <td className={classes.russianValue} lang="ru">
                    {row.second}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className={classes.note}>
          First conjugation is common for verbs not ending in{" "}
          <span lang="ru">-ить</span>. It commonly uses{" "}
          <span lang="ru">-ю/-у, -ешь, -ет, -ем, -ете, -ют/-ут</span>. Second
          conjugation is common for verbs ending in <span lang="ru">-ить</span>{" "}
          and uses{" "}
          <span lang="ru">-ю/-у, -ишь, -ит, -им, -ите, -ят/-ат</span>. Exceptions
          exist. For example,{" "}
          <span lang="ru">писа́ть → пишу́</span> changes its stem.
        </p>
      </section>

      <section className={classes.section} aria-labelledby="past-title">
        <div className={classes.sectionHeader}>
          <span className={classes.eyebrow}>Past tense</span>
          <h2 id="past-title" className={classes.sectionTitle}>
            Match the subject&apos;s gender and number
          </h2>
        </div>
        <div
          className={classes.tableViewport}
          role="region"
          aria-label="Russian past tense forms"
          tabIndex={0}
        >
          <table className={classes.table}>
            <caption className={classes.visuallyHidden}>
              Past tense forms of читать
            </caption>
            <thead>
              <tr>
                <th scope="col">Subject</th>
                <th scope="col">Ending</th>
                <th scope="col">читать</th>
              </tr>
            </thead>
            <tbody>
              {pastConjugation.map((row) => (
                <tr key={row.gender}>
                  <th scope="row">{row.gender}</th>
                  <td className={classes.russianValue} lang="ru">
                    {row.gender === "Masculine"
                      ? "-л"
                      : row.gender === "Feminine"
                        ? "-ла"
                        : row.gender === "Neuter"
                          ? "-ло"
                          : "-ли"}
                  </td>
                  <td className={classes.russianValue} lang="ru">
                    {row.form}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={classes.section} aria-labelledby="aspect-title">
        <div className={classes.sectionHeader}>
          <span className={classes.eyebrow}>Aspect · the action&apos;s point of view</span>
          <h2 id="aspect-title" className={classes.sectionTitle}>
            Process or result?
          </h2>
          <p className={classes.note}>
            Imperfective often describes an ongoing, repeated, or general action.
            Perfective often presents a bounded action or result; individual
            pairs can add their own meaning.
          </p>
        </div>

        <div className={classes.exampleGrid}>
          {aspectExamples.map((item) => (
            <figure className={classes.exampleCard} key={item.aspect}>
              <figcaption className={classes.exampleTitle}>
                {item.aspect} · {item.meaning}
              </figcaption>
              <blockquote className={classes.exampleRussian} lang="ru">
                {item.example}
              </blockquote>
              <p className={classes.exampleTranslation}>{item.translation}</p>
            </figure>
          ))}
        </div>

        <aside className={classes.callout}>
          Imperfective verbs have present, past, and a compound future with{" "}
          <span lang="ru">быть</span>: <span lang="ru">буду чита́ть</span>.
          Perfective verbs have past and future, but no present tense;{" "}
          <span lang="ru">прочита́ю</span> means “I will finish reading”.
        </aside>
      </section>

      <aside className={classes.callout}>
        The present tense of <span lang="ru">быть</span> is usually omitted in
        simple statements: <span lang="ru">Я студе́нт. Она́ до́ма.</span>
      </aside>
    </GrammarGuidePage>
  );
}

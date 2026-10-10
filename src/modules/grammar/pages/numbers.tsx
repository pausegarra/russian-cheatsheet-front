import { GrammarGuidePage } from "../components/grammar-guide-page.tsx";
import { numeralExamples, quantityRules } from "../data/numbers.ts";
import classes from "./grammar-reference.module.css";

export function NumbersPage() {
  return (
    <GrammarGuidePage
      eyebrow="Grammar · Numbers"
      title="Numbers, dates, and time"
      intro="The number often controls the form of the noun that follows. These patterns cover the most common counts and everyday date and time phrases."
      sources={[
        {
          label: "OpenRussian numbers",
          href: "https://en.openrussian.org/grammar/cheat-sheet-numbers",
        },
        {
          label: "OpenRussian dates",
          href: "https://en.openrussian.org/grammar/dates",
        },
      ]}
    >
      <section className={classes.section} aria-labelledby="quantity-title">
        <div className={classes.sectionHeader}>
          <span className={classes.eyebrow}>Number + noun</span>
          <h2 id="quantity-title" className={classes.sectionTitle}>
            Choose the noun form from the number
          </h2>
        </div>

        <div
          className={classes.tableViewport}
          role="region"
          aria-label="Russian number and noun agreement"
          tabIndex={0}
        >
          <table className={classes.table}>
            <caption className={classes.visuallyHidden}>
              Noun forms used after Russian numbers
            </caption>
            <thead>
              <tr>
                <th scope="col">Number</th>
                <th scope="col">Noun form</th>
                <th scope="col">Examples</th>
              </tr>
            </thead>
            <tbody>
              {quantityRules.map((rule) => (
                <tr key={rule.pattern}>
                  <th scope="row">{rule.pattern}</th>
                  <td>{rule.nounForm}</td>
                  <td className={classes.russianValue} lang="ru">
                    {rule.examples}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className={classes.note}>
          These forms describe counting phrases in the nominative. In other
          cases, both forms can change: <span lang="ru">к двум стола́м</span>.
          Animate accusative uses forms such as{" "}
          <span lang="ru">вижу двух студе́нтов</span>.
        </p>
        <p className={classes.note}>
          For compound numbers, the last word controls the pattern:{" "}
          <span lang="ru">два́дцать оди́н год</span>,{" "}
          <span lang="ru">два́дцать два го́да</span>,{" "}
          <span lang="ru">два́дцать пять лет</span>.
        </p>
      </section>

      <section className={classes.section} aria-labelledby="ordinal-title">
        <div className={classes.sectionHeader}>
          <span className={classes.eyebrow}>Ordinal numbers</span>
          <h2 id="ordinal-title" className={classes.sectionTitle}>
            Ordinals behave like adjectives
          </h2>
          <p className={classes.note}>
            Match the ordinal to the noun in gender and number.
          </p>
        </div>
        <div className={classes.exampleGrid}>
          <div className={classes.exampleCard}>
            <h3 className={classes.exampleTitle}>Masculine</h3>
            <span className={classes.exampleRussian} lang="ru">
              пе́рвый день
            </span>
          </div>
          <div className={classes.exampleCard}>
            <h3 className={classes.exampleTitle}>Feminine</h3>
            <span className={classes.exampleRussian} lang="ru">
              пе́рвая неде́ля
            </span>
          </div>
          <div className={classes.exampleCard}>
            <h3 className={classes.exampleTitle}>Neuter</h3>
            <span className={classes.exampleRussian} lang="ru">
              пе́рвое число́
            </span>
          </div>
          <div className={classes.exampleCard}>
            <h3 className={classes.exampleTitle}>Plural</h3>
            <span className={classes.exampleRussian} lang="ru">
              пе́рвые дни
            </span>
          </div>
        </div>
      </section>

      <section className={classes.section} aria-labelledby="practical-title">
        <div className={classes.sectionHeader}>
          <span className={classes.eyebrow}>Everyday phrases</span>
          <h2 id="practical-title" className={classes.sectionTitle}>
            Age, dates, and time
          </h2>
        </div>
        <div className={classes.exampleGrid}>
          {numeralExamples.map((group) => (
            <article className={classes.exampleCard} key={group.title}>
              <h3 className={classes.exampleTitle}>{group.title}</h3>
              <ul className={classes.exampleList}>
                {group.examples.map((example) => (
                  <li key={example.russian}>
                    <span className={classes.exampleRussian} lang="ru">
                      {example.russian}
                    </span>
                    <span className={classes.exampleTranslation}>
                      {example.translation}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </GrammarGuidePage>
  );
}

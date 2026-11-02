import { useState } from "react";
import { Layout } from "../../common/components/layout.tsx";
import { russianCases } from "../data/cases.ts";
import classes from "./cases.module.css";

export function CasesPage() {
  const [activeCase, setActiveCase] = useState<string>("nominative");

  return (
    <Layout backTo="/grammar">
      <article className={classes.container}>
        <header className={classes.header}>
          <span className={classes.eyebrow}>Grammar · 6 cases</span>
          <h1 className={classes.pageTitle}>Russian grammatical cases</h1>
          <p className={classes.intro}>
            Russian changes a noun&apos;s form to show its role in a sentence.
            Choose a case to explore its questions, uses, and examples.
          </p>
        </header>

        <div className={classes.tabs}>
          <div
            role="tablist"
            className={classes.tabList}
            aria-label="Russian grammatical cases"
          >
            {russianCases.map((item) => (
              <button
                type="button"
                role="tab"
                key={item.id}
                id={`tab-${item.id}`}
                aria-controls={`panel-${item.id}`}
                aria-selected={activeCase === item.id}
                tabIndex={activeCase === item.id ? 0 : -1}
                onClick={() => setActiveCase(item.id)}
                onKeyDown={(event) => {
                  const keys = ["ArrowLeft", "ArrowRight", "Home", "End"];
                  if (!keys.includes(event.key)) return;
                  event.preventDefault();
                  const current = russianCases.findIndex(
                    (entry) => entry.id === activeCase,
                  );
                  const index =
                    event.key === "Home"
                      ? 0
                      : event.key === "End"
                        ? russianCases.length - 1
                        : (current +
                            (event.key === "ArrowRight" ? 1 : -1) +
                            russianCases.length) %
                          russianCases.length;
                  setActiveCase(russianCases[index].id);
                  document
                    .getElementById(`tab-${russianCases[index].id}`)
                    ?.focus();
                }}
                className={classes.tab}
              >
                {item.name}
              </button>
            ))}
          </div>

          {russianCases.map((item) => (
            <div
              role="tabpanel"
              key={item.id}
              id={`panel-${item.id}`}
              aria-labelledby={`tab-${item.id}`}
              hidden={activeCase !== item.id}
              tabIndex={0}
              className={classes.tabPanel}
            >
              <section
                className={classes.casePanel}
                aria-labelledby={`${item.id}-title`}
              >
                <div className={classes.caseSummary}>
                  <span className={classes.russianName} lang="ru">
                    {item.russianName}
                  </span>
                  <h2 id={`${item.id}-title`} className={classes.caseTitle}>
                    {item.name}
                  </h2>
                  <p className={classes.question} lang="ru">
                    {item.question}
                  </p>
                  <p className={classes.role}>{item.role}</p>
                </div>

                <div className={classes.caseDetails}>
                  <div>
                    <h3 className={classes.sectionTitle}>Common uses</h3>
                    <ul className={classes.useList}>
                      {item.uses.map((use) => (
                        <li key={use}>{use}</li>
                      ))}
                    </ul>
                    {item.prepositions.length > 0 && (
                      <p className={classes.prepositions}>
                        <strong>Frequent prepositions:</strong>{" "}
                        <span lang="ru">{item.prepositions.join(", ")}</span>
                      </p>
                    )}
                  </div>

                  <figure className={classes.example}>
                    <blockquote lang="ru">{item.example}</blockquote>
                    <figcaption>{item.translation}</figcaption>
                  </figure>
                </div>
              </section>
            </div>
          ))}
        </div>

        <section className={classes.section} aria-labelledby="declension-title">
          <div className={classes.sectionHeader}>
            <span className={classes.eyebrow}>One word, six forms</span>
            <h2 id="declension-title" className={classes.sectionTitle}>
              How <span lang="ru">студе́нт</span> changes
            </h2>
            <p className={classes.note}>
              This masculine animate noun uses the Genitive form for the
              Accusative. Other endings depend on gender, number, and
              declension.
            </p>
          </div>
          <table className={classes.declensionTable}>
            <caption className={classes.visuallyHidden}>
              Singular forms of студент by case
            </caption>
            <thead>
              <tr>
                <th scope="col">Case</th>
                <th scope="col">Form</th>
              </tr>
            </thead>
            <tbody>
              {russianCases.map((item) => (
                <tr
                  key={item.id}
                  className={
                    activeCase === item.id
                      ? classes.activeDeclensionRow
                      : undefined
                  }
                  aria-current={activeCase === item.id ? "true" : undefined}
                >
                  <th scope="row">{item.name}</th>
                  <td lang="ru">{item.studentForm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <aside className={classes.movement} aria-labelledby="movement-title">
          <div>
            <span className={classes.eyebrow}>A useful contrast</span>
            <h2 id="movement-title" className={classes.sectionTitle}>
              Destination or location?
            </h2>
            <p className={classes.note}>
              With <span lang="ru">в</span>, movement toward a place takes the
              Accusative; being in a place takes the Prepositional.
            </p>
          </div>
          <div className={classes.movementExamples}>
            <p>
              <strong>Destination · Accusative</strong>
              <span lang="ru">Я иду́ в парк.</span>
              <span>I am going to the park.</span>
            </p>
            <p>
              <strong>Location · Prepositional</strong>
              <span lang="ru">Я гуля́ю в па́рке.</span>
              <span>I am walking in the park.</span>
            </p>
          </div>
        </aside>

        <p className={classes.source}>
          Case usage cross-checked with{" "}
          <a
            href="https://en.openrussian.org/grammar"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenRussian grammar
          </a>
          .
        </p>
      </article>
    </Layout>
  );
}

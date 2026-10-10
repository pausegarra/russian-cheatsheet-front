import { Tabs } from "@mantine/core";
import { useState } from "react";
import { Layout } from "../../common/components/layout.tsx";
import { russianCases } from "../data/cases.ts";
import classes from "./cases.module.css";

export function CasesPage() {
  const [activeCase, setActiveCase] = useState<string | null>("nominative");

  return (
    <Layout>
      <article className={classes.container}>
        <header className={classes.header}>
          <span className={classes.eyebrow}>Grammar · 6 cases</span>
          <h1 className={classes.pageTitle}>Russian grammatical cases</h1>
          <p className={classes.intro}>
            Russian changes a noun&apos;s form to show its role in a sentence. Choose a
            case to explore its questions, uses, and examples.
          </p>
        </header>

        <Tabs value={activeCase} onChange={setActiveCase} className={classes.tabs}>
          <Tabs.List
            className={classes.tabList}
            aria-label="Russian grammatical cases"
          >
            {russianCases.map((item) => (
              <Tabs.Tab key={item.id} value={item.id} className={classes.tab}>
                {item.name}
              </Tabs.Tab>
            ))}
          </Tabs.List>

          {russianCases.map((item) => (
            <Tabs.Panel key={item.id} value={item.id} className={classes.tabPanel}>
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
            </Tabs.Panel>
          ))}
        </Tabs>

        <section className={classes.section} aria-labelledby="declension-title">
          <div className={classes.sectionHeader}>
            <span className={classes.eyebrow}>One word, six forms</span>
            <h2 id="declension-title" className={classes.sectionTitle}>
              How <span lang="ru">студе́нт</span> changes
            </h2>
            <p className={classes.note}>
              This masculine animate noun uses the Genitive form for the Accusative.
              Other endings depend on gender, number, and declension.
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
                  className={activeCase === item.id ? classes.activeDeclensionRow : undefined}
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
          </a>.
        </p>
      </article>
    </Layout>
  );
}

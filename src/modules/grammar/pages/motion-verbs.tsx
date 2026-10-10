import { Layout } from "../../common/components/layout.tsx";
import {
  motionVerbExamples,
  motionVerbPairs,
  motionVerbPrefixes,
} from "../data/motion-verbs.ts";
import classes from "./motion-verbs.module.css";

export function MotionVerbsPage() {
  return (
    <Layout>
      <article className={classes.container}>
        <header className={classes.header}>
          <span className={classes.eyebrow}>Grammar · Verbs of motion</span>
          <h1 className={classes.pageTitle}>Russian verbs of motion</h1>
          <p className={classes.intro}>
            Russian uses paired verbs to show how someone moves and whether you
            mean one particular journey or movement in general. Start with two
            questions: what is the way of travel, and is this one trip or a usual
            route?
          </p>
        </header>

        <section className={classes.section} aria-labelledby="direction-title">
          <div className={classes.sectionHeader}>
            <span className={classes.eyebrow}>01 · Choose the movement pattern</span>
            <h2 id="direction-title" className={classes.sectionTitle}>
              One trip or a usual route?
            </h2>
            <p className={classes.note}>
              One way forms describe a particular journey in a clear direction.
              Their general partners cover habits, repeated trips, movement
              without one trip in focus, and going somewhere as a visit or a
              there and back journey.
            </p>
          </div>

          <div className={classes.contrastGrid}>
            <figure className={classes.exampleCard}>
              <figcaption className={classes.cardLabel}>
                {motionVerbExamples.oneWayNow.label}
              </figcaption>
              <blockquote lang="ru">{motionVerbExamples.oneWayNow.russian}</blockquote>
              <p>{motionVerbExamples.oneWayNow.translation}</p>
              <p className={classes.cardNote}>
                <span lang="ru">иду́</span> presents this as one journey toward a
                destination.
              </p>
            </figure>

            <figure className={classes.exampleCard}>
              <figcaption className={classes.cardLabel}>
                {motionVerbExamples.habitual.label}
              </figcaption>
              <blockquote lang="ru">{motionVerbExamples.habitual.russian}</blockquote>
              <p>{motionVerbExamples.habitual.translation}</p>
              <p className={classes.cardNote}>
                <span lang="ru">хожу́</span> describes a regular route, not one trip
                happening now.
              </p>
            </figure>
          </div>
        </section>

        <section className={classes.section} aria-labelledby="pairs-title">
          <div className={classes.sectionHeader}>
            <span className={classes.eyebrow}>02 · Choose the way of moving</span>
            <h2 id="pairs-title" className={classes.sectionTitle}>
              Common motion verb pairs
            </h2>
            <p className={classes.note}>
              The same one trip versus general movement contrast appears across
              walking, transport, running, flying, swimming, and carrying.
            </p>
          </div>

          <div
            className={classes.tableViewport}
            role="region"
            aria-label="Russian motion verb pairs"
            tabIndex={0}
          >
            <table className={classes.pairTable}>
              <caption className={classes.visuallyHidden}>
                Russian motion verb pairs by type of movement
              </caption>
              <thead>
                <tr>
                  <th scope="col">Movement</th>
                  <th scope="col">
                    Unidirectional
                    <span className={classes.tableHeaderDetail}>
                      One particular journey
                    </span>
                  </th>
                  <th scope="col">
                    Multidirectional
                    <span className={classes.tableHeaderDetail}>
                      General, repeated, or there and back
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {motionVerbPairs.map((pair) => (
                  <tr key={pair.oneWay}>
                    <th scope="row">{pair.meaning}</th>
                    <td lang="ru">{pair.oneWay}</td>
                    <td lang="ru">{pair.general}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={classes.tableHint}>
            These are imperfective pairs. The contrast tells you about the
            movement pattern, not whether the action is complete.
          </p>
        </section>

        <section className={classes.section} aria-labelledby="past-title">
          <div className={classes.sectionHeader}>
            <span className={classes.eyebrow}>03 · Read the past in context</span>
            <h2 id="past-title" className={classes.sectionTitle}>
              The same contrast appears in the past
            </h2>
          </div>

          <div className={classes.contrastGrid}>
            <figure className={classes.exampleCard}>
              <figcaption className={classes.cardLabel}>
                {motionVerbExamples.pastInProgress.label}
              </figcaption>
              <blockquote lang="ru">
                {motionVerbExamples.pastInProgress.russian}
              </blockquote>
              <p>{motionVerbExamples.pastInProgress.translation}</p>
            </figure>

            <figure className={classes.exampleCard}>
              <figcaption className={classes.cardLabel}>
                {motionVerbExamples.pastCompleted.label}
              </figcaption>
              <blockquote lang="ru">
                {motionVerbExamples.pastCompleted.russian}
              </blockquote>
              <p>{motionVerbExamples.pastCompleted.translation}</p>
            </figure>
          </div>

          <p className={classes.callout}>
            In the past, a general motion verb can describe a completed visit or
            a trip there and back. It can also describe repeated travel. The
            surrounding sentence tells you which reading fits.
          </p>
        </section>

        <section className={classes.section} aria-labelledby="prefixes-title">
          <div className={classes.sectionHeader}>
            <span className={classes.eyebrow}>04 · Prefixes</span>
            <h2 id="prefixes-title" className={classes.sectionTitle}>
              Prefixes add direction or mark the start
            </h2>
            <p className={classes.note}>
              A prefix can mark arrival, departure, entering, leaving, or setting
              off. Many prefixed forms describe a bounded action and are
              perfective, but the exact meaning depends on the prefix and verb.
            </p>
          </div>

          <div className={classes.prefixGrid}>
            {motionVerbPrefixes.map((item) => (
              <article className={classes.prefixCard} key={item.prefix}>
                <div className={classes.prefixHeading}>
                  <span className={classes.prefix} lang="ru">
                    {item.prefix}
                  </span>
                  <h3>{item.path}</h3>
                </div>
                <div className={classes.prefixForms}>
                  <span>
                    <span>On foot</span>
                    <span lang="ru">{item.onFoot}</span>
                  </span>
                  <span>
                    <span>By vehicle</span>
                    <span lang="ru">{item.byVehicle}</span>
                  </span>
                </div>
                <blockquote lang="ru">{item.example}</blockquote>
                <p className={classes.translation}>{item.translation}</p>
              </article>
            ))}
          </div>
        </section>

        <aside className={classes.aspectNote} aria-labelledby="aspect-title">
          <div>
            <span className={classes.eyebrow}>Keep two ideas separate</span>
            <h2 id="aspect-title" className={classes.sectionTitle}>
              Direction is not aspect
            </h2>
          </div>
          <div className={classes.aspectText}>
            <p>
              Without a prefix, both verbs in a motion pair are imperfective:
              <span lang="ru"> идти́</span> and <span lang="ru">ходи́ть</span>{" "}
              differ by movement pattern.
            </p>
            <p>
              A prefix can create a perfective verb with a result or endpoint,
              such as <span lang="ru">прийти́</span> “arrive” or{" "}
              <span lang="ru">пойти́</span> “set off”.
            </p>
          </div>
        </aside>

        <p className={classes.source}>
          Further reading: {" "}
          <a
            href="https://en.openrussian.org/grammar/verbs-of-motion"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenRussian guide to verbs of motion
          </a>
          .
        </p>
      </article>
    </Layout>
  );
}

import { Layout } from "../components/layout.tsx";
import classes from "./reference.module.css";
import { Link } from "react-router-dom";

export function Presentation() {
  return (
    <Layout>
      <div className={classes.heroSection}>
        <h1 className={classes.heroTitle}>Russian Linguistic Reference & Cheatsheet</h1>
        <p className={classes.heroSubtitle}>
          A practical reference for Russian learners. Browse the Cyrillic alphabet,
          searchable vocabulary, word forms, and quick grammar references.
        </p>
      </div>

      <div className={classes.moduleGrid}>
        <div className={classes.moduleCard}>
          <span className={classes.moduleId}>[MOD-01]</span>
          <h2 className={classes.moduleTitle}>Lexicon & Inflections</h2>
          <p className={classes.moduleDescription}>
            Search vocabulary with word forms, aspectual pairings, related words,
            and bilingual usage examples.
          </p>
        </div>

        <div className={classes.moduleCard}>
          <span className={classes.moduleId}>[MOD-02]</span>
          <h2 className={classes.moduleTitle}>Phonetics & Cyrillic</h2>
          <p className={classes.moduleDescription}>
            Complete 33-letter Cyrillic alphabet catalog with Latin transliteration
            and International Phonetic Alphabet (IPA) transcriptions.
          </p>
        </div>

        <Link
          to="/grammar"
          state={{ fromApp: true }}
          className={[classes.moduleCard, classes.moduleCardLink].join(" ")}
        >
          <span className={classes.moduleId}>[MOD-03]</span>
          <h2 className={classes.moduleTitle}>Grammar quick references</h2>
          <p className={classes.moduleDescription}>
            Scan cases, declensions, pronouns, numbers, verb patterns, and verbs
            of motion.
          </p>
        </Link>
      </div>

    </Layout>
  );
}

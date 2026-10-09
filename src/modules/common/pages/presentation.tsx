import { IconAlertTriangle } from "@tabler/icons-react";
import { Layout } from "../components/layout.tsx";
import classes from "./reference.module.css";

export function Presentation() {
  return (
    <Layout>
      <div className={classes.heroSection}>
        <h1 className={classes.heroTitle}>Russian Linguistic Reference & Cheatsheet</h1>
        <p className={classes.heroSubtitle}>
          An instrument-grade reference tool designed for Russian language learners.
          Quickly consult grammatical case declensions, verbal aspect matrices,
          motion verb pairs, and core vocabulary with complete morphological forms.
        </p>
      </div>

      <div className={classes.moduleGrid}>
        <div className={classes.moduleCard}>
          <span className={classes.moduleId}>[MOD-01]</span>
          <h2 className={classes.moduleTitle}>Grammar Matrices</h2>
          <p className={classes.moduleDescription}>
            Systematic declension endings for all six Russian cases across genders and numbers,
            accompanied by real usage contexts and example sentences.
          </p>
        </div>

        <div className={classes.moduleCard}>
          <span className={classes.moduleId}>[MOD-02]</span>
          <h2 className={classes.moduleTitle}>Lexicon & Inflections</h2>
          <p className={classes.moduleDescription}>
            Searchable dictionary featuring full morphological inflection tables,
            aspectual pairings, related words, and bilingual example sentences.
          </p>
        </div>

        <div className={classes.moduleCard}>
          <span className={classes.moduleId}>[MOD-03]</span>
          <h2 className={classes.moduleTitle}>Phonetics & Cyrillic</h2>
          <p className={classes.moduleDescription}>
            Complete 33-letter Cyrillic alphabet catalog with Latin transliteration
            and International Phonetic Alphabet (IPA) transcriptions.
          </p>
        </div>
      </div>

      <div className={classes.statusNotice}>
        <IconAlertTriangle size={20} color="var(--rc-warning)" style={{ flexShrink: 0, marginTop: 2 }} />
        <div>
          <div className={classes.statusTitle}>Active Development Workbench</div>
          <div className={classes.statusBody}>
            This application is continuously updated with refined linguistic datasets and expanded declension models.
          </div>
        </div>
      </div>
    </Layout>
  );
}
import { Link } from "react-router-dom";
import { GrammarGuidePage } from "../components/grammar-guide-page.tsx";
import classes from "./grammar-reference.module.css";

const grammarGuides = [
  {
    to: "/grammar/cases",
    title: "Cases",
    description: "Six cases, their roles, common uses, and prepositions.",
  },
  {
    to: "/grammar/declensions",
    title: "Noun and adjective endings",
    description: "Model forms across gender, number, and case.",
  },
  {
    to: "/grammar/pronouns",
    title: "Pronouns",
    description: "Personal pronouns by case and possessive agreement.",
  },
  {
    to: "/grammar/numbers",
    title: "Numbers, dates, and time",
    description: "Number and noun agreement with everyday examples.",
  },
  {
    to: "/grammar/verbs",
    title: "Verb quick reference",
    description: "Present and past endings, future, and aspect.",
  },
  {
    to: "/grammar/motion-verbs",
    title: "Verbs of motion",
    description: "One-way and general movement, plus common prefixes.",
  },
] as const;

export function GrammarIndexPage() {
  return (
    <GrammarGuidePage
      eyebrow="Reference · Grammar"
      title="Grammar quick references"
      intro="Short guides for common patterns. Use the vocabulary dictionary for the exact forms of an individual word."
    >
      <div className={classes.guideGrid}>
        {grammarGuides.map((guide) => (
          <Link
            to={guide.to}
            className={classes.guideCard}
            key={guide.to}
          >
            <h2 className={classes.guideTitle}>{guide.title}</h2>
            <p className={classes.guideDescription}>{guide.description}</p>
          </Link>
        ))}
      </div>
    </GrammarGuidePage>
  );
}

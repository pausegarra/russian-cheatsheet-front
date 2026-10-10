import { ReactNode } from "react";
import { Layout } from "../../common/components/layout.tsx";
import classes from "../pages/grammar-reference.module.css";

export type GrammarSource = {
  label: string;
  href: string;
};

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  sources?: GrammarSource[];
  children: ReactNode;
};

export function GrammarGuidePage({
  eyebrow,
  title,
  intro,
  sources = [],
  children,
}: Props) {
  return (
    <Layout>
      <article className={classes.container}>
        <header className={classes.header}>
          <span className={classes.eyebrow}>{eyebrow}</span>
          <h1 className={classes.pageTitle}>{title}</h1>
          <p className={classes.intro}>{intro}</p>
        </header>

        {children}

        {sources.length > 0 && (
          <p className={classes.source}>
            Further reading:{" "}
            {sources.map((source, index) => (
              <span key={source.href}>
                {index > 0 && "; "}
                <a href={source.href} target="_blank" rel="noopener noreferrer">
                  {source.label}
                </a>
              </span>
            ))}
          </p>
        )}
      </article>
    </Layout>
  );
}

import { Link, useParams } from "react-router-dom";
import { WordEntity, translationText } from "../entities/word.entity.ts";
import { useCallback, useEffect, useState } from "react";
import { wordService } from "../root.ts";
import { Layout } from "../../common/components/layout.tsx";
import { useErrorBoundary } from "react-error-boundary";
import { ExampleSentences } from "../components/example-sentences.tsx";
import { WordFormsDisplay } from "../components/word-forms.tsx";
import classes from "../components/vocabulary.module.css";
import sharedClasses from "../../common/components/components.module.css";

export function ShowVocabulary() {
  const { id } = useParams();
  const [word, setWord] = useState<WordEntity>({} as WordEntity);
  const { showBoundary } = useErrorBoundary();

  const getWord = useCallback(async () => {
    try {
      const result = await wordService.getWord(id || '');
      setWord(result);
    } catch (error) {
      showBoundary(error);
    }
  }, [id, showBoundary]);

  useEffect(() => {
    getWord();
  }, [getWord]);

  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.wordHeader}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <h1 className={classes.wordHeadword} lang="ru">{word.russian}</h1>
            {word.type && <span className={sharedClasses.badge}>{word.type}</span>}
            {word.aspect && <span className={sharedClasses.badge}>{word.aspect}</span>}
          </div>
          <div className={classes.wordTranslation}>{translationText(word, 'en')}</div>

          {word.relatedWords && word.relatedWords.length > 0 && (
            <div className={classes.chipsContainer}>
              {word.relatedWords.map((related) => (
                <Link
                  key={`${related.id}-${related.relation}`}
                  to={`/vocabulary/${related.id}`}
                  className={classes.relatedChip}
                >
                  <span lang="ru">{related.russian}</span>
                  {related.relation !== 'related' && ` · ${related.relation}`}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className={classes.metadataGrid}>
          <div className={classes.metaItem}>
            <span className={classes.metaLabel}>Headword</span>
            <span className={classes.metaValue} lang="ru">{word.russian}</span>
          </div>
          <div className={classes.metaItem}>
            <span className={classes.metaLabel}>Primary Translation</span>
            <span className={classes.metaValue}>{translationText(word, 'en')}</span>
          </div>
          {word.aspect && (
            <div className={classes.metaItem}>
              <span className={classes.metaLabel}>Aspect</span>
              <span className={classes.metaValue}>{word.aspect}</span>
            </div>
          )}
          {word.usage && (
            <div className={classes.metaItem}>
              <span className={classes.metaLabel}>Usage Context</span>
              <span className={classes.metaValue}>{word.usage}</span>
            </div>
          )}
        </div>

        <WordFormsDisplay
          type={word.type}
          aspect={word.aspect}
          russian={word.russian}
          forms={word.forms ?? null}
        />

        {word.id && <ExampleSentences wordId={word.id} />}
      </div>
    </Layout>
  );
}

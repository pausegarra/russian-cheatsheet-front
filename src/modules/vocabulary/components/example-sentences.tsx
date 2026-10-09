import { Anchor, Button, Group, Stack, Text } from "@mantine/core";
import { useErrorBoundary } from "react-error-boundary";
import { useCallback, useEffect, useState } from "react";
import { wordService } from "../root.ts";
import { ExampleSentenceEntity } from "../entities/example-sentence.entity.ts";
import classes from "./vocabulary.module.css";
import sharedClasses from "../../common/components/components.module.css";

type Props = {
  wordId: string;
};

export function ExampleSentences({ wordId }: Props) {
  const [examples, setExamples] = useState<ExampleSentenceEntity[]>([]);
  const [page, setPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { showBoundary } = useErrorBoundary();

  const loadExamples = useCallback(async (nextPage: number) => {
    setIsLoading(true);
    try {
      const result = await wordService.getWordExamples(wordId, nextPage);
      setExamples(current => nextPage === 0 ? result.data : [...current, ...result.data]);
      setPage(result.page);
      setHasNextPage(result.hasNextPage);
    } catch (error: unknown) {
      showBoundary(error instanceof Error ? error.message : "Could not load examples");
    } finally {
      setIsLoading(false);
    }
  }, [showBoundary, wordId]);

  useEffect(() => {
    setExamples([]);
    setPage(0);
    void loadExamples(0);
  }, [loadExamples]);

  return (
    <Stack mt="md" gap="md">
      <h2 className={classes.sectionHeading}>Usage Examples</h2>
      {examples.map(example => (
        <div key={example.id} className={classes.exampleCard}>
          <div className={classes.exampleRussian} lang="ru">{example.russian}</div>
          {example.translations
            .filter(translation => !translation.language.toLowerCase().startsWith('es'))
            .map((translation, index) => (
              <div key={`${translation.language}-${translation.position}-${index}`} className={classes.exampleTranslation}>
                <span className={sharedClasses.badge} style={{ marginRight: '0.5rem' }}>
                  {translation.language.toUpperCase()}
                </span>
                {translation.text}
              </div>
            ))}
          <Group gap="md" mt="xs">
            {example.contributor && (
              <Text size="xs" c="dimmed" style={{ fontFamily: 'var(--rc-font-mono)' }}>
                Source: {example.contributor}
              </Text>
            )}
            {example.audioUrl && (
              <Anchor href={example.audioUrl} target="_blank" rel="noreferrer" size="xs" style={{ color: 'var(--rc-accent)' }}>
                Audio ↗
              </Anchor>
            )}
          </Group>
        </div>
      ))}
      {examples.length === 0 && !isLoading && (
        <Text c="dimmed" size="sm">No examples available for this entry.</Text>
      )}
      {hasNextPage && (
        <Button
          variant="light"
          onClick={() => loadExamples(page + 1)}
          loading={isLoading}
          style={{ alignSelf: 'flex-start' }}
        >
          Load more examples
        </Button>
      )}
    </Stack>
  );
}

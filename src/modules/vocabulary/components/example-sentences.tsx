import { Anchor, Card, Group, Stack, Text, Title } from "@mantine/core";
import { useErrorBoundary } from "react-error-boundary";
import { useCallback, useEffect, useState } from "react";
import { wordService } from "../root.ts";
import { ExampleSentenceEntity } from "../entities/example-sentence.entity.ts";

type props = {
  wordId: string;
}

export function ExampleSentences({wordId}: props) {
  const [examples, setExamples] = useState<ExampleSentenceEntity[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const {showBoundary} = useErrorBoundary();

  const loadExamples = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await wordService.getAllWordExamples(wordId);
      setExamples(result);
    } catch (error: unknown) {
      showBoundary(error instanceof Error ? error.message : "Could not load examples");
    } finally {
      setIsLoading(false);
    }
  }, [showBoundary, wordId]);

  useEffect(() => {
    setExamples([]);
    void loadExamples();
  }, [loadExamples]);

  return (
    <Stack mt="md">
      <Title order={3}>Examples</Title>
      {examples.map(example => (
        <Card key={example.id} withBorder>
          <Stack gap="xs">
            <Text>{example.russian}</Text>
            {example.translations.map((translation, index) => (
              <Text key={`${translation.language}-${translation.position}-${index}`} c="dimmed">
                <strong>{translation.language.toUpperCase()}:</strong> {translation.text}
              </Text>
            ))}
            <Group gap="md">
              {example.contributor && <Text size="sm" c="dimmed">Source contributor: {example.contributor}</Text>}
              {example.audioUrl && <Anchor href={example.audioUrl} target="_blank" rel="noreferrer">Audio</Anchor>}
            </Group>
          </Stack>
        </Card>
      ))}
      {examples.length === 0 && !isLoading && <Text c="dimmed">No examples available.</Text>}
    </Stack>
  );
}

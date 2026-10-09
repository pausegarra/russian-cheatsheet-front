import { Link, useParams } from "react-router-dom";
import { WordEntity, translationText } from "../entities/word.entity.ts";
import { useCallback, useEffect, useState } from "react";
import { wordService } from "../root.ts";
import { Anchor, Breadcrumbs, Divider, Grid, Text, Title } from "@mantine/core";
import { Layout } from "../../common/components/layout.tsx";
import { useErrorBoundary } from "react-error-boundary";
import { ExampleSentences } from "../components/example-sentences.tsx";
import { WordFormsDisplay } from "../components/word-forms.tsx";

export function ShowVocabulary() {
  const {id} = useParams();
  const [word, setWord] = useState<WordEntity>({} as WordEntity);
  const {showBoundary} = useErrorBoundary();

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
      <Title>Vocabulary {word.russian} ({translationText(word, 'en')})</Title>
      {word.relatedWords && word.relatedWords.length > 0 && (
        <Breadcrumbs mt="xs" mb="md">
          {word.relatedWords.map(related => (
            <Anchor
              key={`${related.id}-${related.relation}`}
              component={Link}
              to={`/vocabulary/${related.id}`}
            >
              {related.russian}{related.relation !== 'related' && ` (${related.relation})`}
            </Anchor>
          ))}
        </Breadcrumbs>
      )}
      <Divider my="md" />

      <Grid>
        <Grid.Col span={3}>
          <Text><strong>Russian:</strong> {word.russian}</Text>
        </Grid.Col>
        <Grid.Col span={3}>
          <Text><strong>English:</strong> {translationText(word, 'en')}</Text>
        </Grid.Col>
        <Grid.Col span={3}>
          <Text><strong>Spanish:</strong> {translationText(word, 'es')}</Text>
        </Grid.Col>
        <Grid.Col span={3}>
          <Text><strong>Type:</strong> {word.type}</Text>
        </Grid.Col>
        {word.aspect && (
          <Grid.Col span={3}>
            <Text><strong>Aspect:</strong> {word.aspect}</Text>
          </Grid.Col>
        )}
        {word.usage && (
          <Grid.Col span={9}>
            <Text><strong>Usage:</strong> {word.usage}</Text>
          </Grid.Col>
        )}
        {word.audioUrl && (
          <Grid.Col span={3}>
            <Anchor href={word.audioUrl} target="_blank" rel="noreferrer">Word audio</Anchor>
          </Grid.Col>
        )}
      </Grid>

      <Divider my="md" />

      <WordFormsDisplay
        type={word.type}
        aspect={word.aspect}
        russian={word.russian}
        forms={word.forms ?? null}
      />

      {word.id && <ExampleSentences wordId={word.id} />}
    </Layout>
  )
}

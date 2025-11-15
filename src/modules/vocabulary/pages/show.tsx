import { Link, useParams } from "react-router-dom";
import { WordEntity } from "../entities/word.entity.ts";
import { useCallback, useEffect, useState } from "react";
import { wordService } from "../root.ts";
import { Button, Divider, Grid, Group, Text, Title } from "@mantine/core";
import { Layout } from "../../common/components/layout.tsx";
import { HasPermission } from "../../common/components/has-permission.tsx";
import { IconCheck, IconEdit } from "@tabler/icons-react";
import { Conjugations } from "../components/conjugations.tsx";
import { useFetch } from "../../common/hooks/use-fetch.ts";
import { useErrorBoundary } from "react-error-boundary";
import { WordCases } from "../components/cases.tsx";
import { DeclinationsMatrix } from "../components/declinations-matrix.tsx";
import { notificationsService } from "../../common/root.ts";

export function ShowVocabulary() {
  const {id} = useParams();
  const [word, setWord] = useState<WordEntity>({} as WordEntity);
  const fetch = useFetch();
  const {showBoundary} = useErrorBoundary();

  const getWord = useCallback(async () => {
    const word = await fetch(async () => await wordService.getWord(id || ''));
    if (!word) {
      showBoundary('Word not found');
      return;
    }

    setWord(word);
  }, [id]);

  async function handlePublish() {
    await fetch(async () => await wordService.publishWord(word));
    notificationsService.success('Word published');
    getWord();
  }

  useEffect(() => {
    getWord();
  }, [getWord]);

  return (
    <Layout>
      <Group align={"center"} justify={"space-between"} h="100%">
        <Title>Vocabulary {word.russian} ({word.english})</Title>
        <Group>
          <HasPermission permission={"words#update"}>
            <Button component={Link} c={"black"} to={`/vocabulary/${id}/edit`} variant="gradient" gradient={{ from: "yellow", to: "orange" }} leftSection={<IconEdit size={16}/>}>
              Edit Word
            </Button>
          </HasPermission>
          {word.publishedAt === null && (
            <HasPermission permission={"words#publish"}>
              <Button variant="gradient" gradient={{ from: "green", to: "blue" }} onClick={handlePublish} leftSection={<IconCheck size={16}/>}>
                Publish Word
              </Button>
            </HasPermission>
          )}
        </Group>
      </Group>
      <Divider my="md" />

      <Grid>
        <Grid.Col span={3}>
          <Text><strong>Russian:</strong> {word.russian}</Text>
        </Grid.Col>
        <Grid.Col span={3}>
          <Text><strong>English:</strong> {word.english}</Text>
        </Grid.Col>
        <Grid.Col span={3}>
          <Text><strong>Spanish:</strong> {word.spanish}</Text>
        </Grid.Col>
        <Grid.Col span={3}>
          <Text><strong>Type:</strong> {word.type}</Text>
        </Grid.Col>
      </Grid>

      <Divider my="md" />

      {word.type === 'VERB' && word.conjugations && <Conjugations conjugations={word.conjugations} />}

      {word.type === 'NOUN' && word.declinations && <WordCases cases={word.declinations} />}

      {(
        word.type === "ADJECTIVE" ||
        word.type === "PRONOUN" ||
        word.type === "PARTICIPLE" ||
        word.type === "ORDINAL"
      ) && (
        <>
          <DeclinationsMatrix declinations={word.declinationMatrix} />
        </>
      )}
    </Layout>
  )

}
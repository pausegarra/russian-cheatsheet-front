import { Link, useParams } from "react-router-dom";
import { WordEntity } from "../entities/word.entity.ts";
import { useEffect, useState } from "react";
import { wordService } from "../root.ts";
import { Button, Divider, Grid, Group, Text, Title } from "@mantine/core";
import { ConjugationTable } from "../components/conjugation-row.tsx";
import { Layout } from "../../common/components/layout.tsx";
import { HasPermission } from "../../common/components/has-permission.tsx";
import { IconEdit } from "@tabler/icons-react";
import { Conjugations } from "../components/conjugations.tsx";

export function ShowVocabulary() {
  const {id} = useParams();
  const [word, setWord] = useState<WordEntity>({} as WordEntity);

  useEffect(() => {
    wordService.getWord(id || '').then(setWord)
  }, [id]);

  return (
    <Layout>
      <Group align={"center"} justify={"space-between"} h="100%">
        <Title>Vocabulary {word.russian} ({word.english})</Title>
        <HasPermission permission={"words#update"}>
          <Button component={Link} c={"black"} to={`/vocabulary/${id}/edit`} variant="gradient" gradient={{ from: "yellow", to: "orange" }} leftSection={<IconEdit size={16}/>}>
            Edit Word
          </Button>
        </HasPermission>
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
    </Layout>
  )

}
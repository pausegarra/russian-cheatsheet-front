import { Link, useNavigate, useParams } from "react-router-dom";
import { WordEntity } from "../entities/word.entity.ts";
import { useCallback, useEffect, useState } from "react";
import { wordService } from "../root.ts";
import { Button, Divider, Grid, Group, Text, Title } from "@mantine/core";
import { Layout } from "../../common/components/layout.tsx";
import { HasPermission } from "../../common/components/has-permission.tsx";
import { IconCheck, IconEdit, IconTrash } from "@tabler/icons-react";
import { Conjugations } from "../components/conjugations.tsx";
import { useFetch } from "../../common/hooks/use-fetch.ts";
import { useErrorBoundary } from "react-error-boundary";
import { WordCases } from "../components/cases.tsx";
import { DeclinationsMatrix } from "../components/declinations-matrix.tsx";
import { notificationsService } from "../../common/root.ts";
import Swal from "sweetalert2";

export function ShowVocabulary() {
  const {id} = useParams();
  const [word, setWord] = useState<WordEntity>({} as WordEntity);
  const [isDeleting, setIsDeleting] = useState(false);
  const fetch = useFetch();
  const {showBoundary} = useErrorBoundary();
  const navigate = useNavigate();

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

  async function handleDelete() {
    const result = await Swal.fire({
      title: 'Delete word?',
      text: `This will permanently delete "${word.russian}"`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#d9480f'
    });

    if (!result.isConfirmed) {
      return;
    }

    setIsDeleting(true);

    try {
      await wordService.deleteWord(word.id);
      notificationsService.success('Word deleted');
      navigate('/vocabulary');
    } catch (e: any) {
      if (e.status === 401) {
        showBoundary('You must be logged in');
        return;
      }

      if (e.status === 403) {
        notificationsService.error("You don't have permissions to delete this word");
        return;
      }

      if (e.status === 404) {
        notificationsService.error('Word does not exist or was already deleted');
        navigate('/vocabulary');
        return;
      }

      notificationsService.error('Unexpected error deleting word');
    } finally {
      setIsDeleting(false);
    }
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
          <HasPermission permission={"words#delete"}>
            <Button variant="gradient" gradient={{ from: "red", to: "pink" }} onClick={handleDelete} leftSection={<IconTrash size={16}/>} loading={isDeleting} disabled={isDeleting}>
              Delete Word
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

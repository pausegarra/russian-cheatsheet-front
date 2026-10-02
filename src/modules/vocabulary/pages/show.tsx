import { Link, useNavigate, useParams } from "react-router-dom";
import { WordEntity, translationText } from "../entities/word.entity.ts";
import { useCallback, useEffect, useState } from "react";
import { wordService } from "../root.ts";
import { Anchor, Button, Divider, Grid, Group, Text, Title } from "@mantine/core";
import { Layout } from "../../common/components/layout.tsx";
import { HasPermission } from "../../common/components/has-permission.tsx";
import { IconCheck, IconEdit, IconTrash } from "@tabler/icons-react";
import { useFetch } from "../../common/hooks/use-fetch.ts";
import { useErrorBoundary } from "react-error-boundary";
import { notificationsService } from "../../common/root.ts";
import Swal from "sweetalert2";
import { ExampleSentences } from "../components/example-sentences.tsx";
import { WordFormsDisplay } from "../components/word-forms.tsx";

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
        <Title>Vocabulary {word.russian} ({translationText(word, 'en')})</Title>
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

      <WordFormsDisplay type={word.type} forms={word.forms ?? null} />

      {word.relatedWords && word.relatedWords.length > 0 && (
        <>
          <Divider my="md" />
          <Title order={3} mb="md">Related words</Title>
          <Grid>
            {word.relatedWords.map(related => (
              <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={`${related.id}-${related.relation}`}>
                <Text>
                  <strong>{related.relation}:</strong>{' '}
                  <Anchor component={Link} to={`/vocabulary/${related.id}`}>
                    {related.russian}
                  </Anchor>
                </Text>
              </Grid.Col>
            ))}
          </Grid>
        </>
      )}

      {word.id && <ExampleSentences wordId={word.id} />}
    </Layout>
  )

}

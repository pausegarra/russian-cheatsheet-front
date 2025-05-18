import { Layout } from "../../common/components/layout.tsx";
import { useParams } from "react-router-dom";
import { WordEntity } from "../entities/word.entity.ts";
import { useCallback, useEffect } from "react";
import { wordService } from "../root.ts";
import { Button, Divider, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { WordForm } from "../components/word-form.tsx";
import { IconEdit } from "@tabler/icons-react";
import { notificationsService } from "../../common/root.ts";
import { useFetch } from "../../common/hooks/use-fetch.ts";
import { useErrorBoundary } from "react-error-boundary";

export function EditWordPage() {
  const {id} = useParams();
  const fetch = useFetch();
  const {showBoundary} = useErrorBoundary();
  const form = useForm<WordEntity>({
    initialValues: {} as WordEntity
  })

  const getWord = useCallback(async () => {
    const word = await fetch(async () => await wordService.getWord(id || ''));
    if (!word) {
      showBoundary('Word not found');
      return;
    }

    form.setValues(word);
  }, [id, form]);

  useEffect(() => {
    getWord();
  }, []);

  async function handleSubmit(values: WordEntity) {
    await fetch(async () => await wordService.updateWord(values));
    getWord();
    notificationsService.success('Word updated');
  }

  return (
    <Layout>
      <Title order={2} mb="lg">Edit Word: {form.getValues().russian} ({form.getValues().english})</Title>
      <Divider my="md" />

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <WordForm form={form}/>

        <Divider my="md" />

        <Button type={"submit"} variant={"gradient"} gradient={{ from: "yellow", to: "orange" }} c={"black"} leftSection={<IconEdit size={16}/>}>
          Save
        </Button>
      </form>
    </Layout>
  );
}
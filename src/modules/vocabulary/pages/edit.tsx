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

export function EditWordPage() {
  const {id} = useParams();
  const form = useForm<WordEntity>({
    initialValues: {} as WordEntity
  })

  const getWord = useCallback(() => {
    wordService.getWord(id || '').then(form.setValues)
  }, [id, form]);

  useEffect(() => {
    getWord();
  }, []);

  async function handleSubmit(values: WordEntity) {
    await wordService.updateWord(values);
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
import { Layout } from "../../common/components/layout.tsx";
import { useParams } from "react-router-dom";
import { WordEntity, WordTranslationEntity } from "../entities/word.entity.ts";
import { useCallback, useEffect } from "react";
import { wordService } from "../root.ts";
import { Button, Divider, Group, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { WordForm } from "../components/word-form.tsx";
import { IconCheck, IconEdit } from "@tabler/icons-react";
import { notificationsService } from "../../common/root.ts";
import { useFetch } from "../../common/hooks/use-fetch.ts";
import { useErrorBoundary } from "react-error-boundary";
import { HasPermission } from "../../common/components/has-permission.tsx";
import { emptyWordForms, normalizeWordForms } from "../constants.ts";

function editableTranslations(translations: WordTranslationEntity[]): WordTranslationEntity[] {
  const manualTranslations = translations.filter(translation => translation.managedBy === 'MANUAL');

  for (const language of ['en', 'es']) {
    if (!manualTranslations.some(translation => translation.language === language)) {
      manualTranslations.push({
        language,
        text: '',
        position: manualTranslations.length,
        managedBy: 'MANUAL'
      });
    }
  }

  return manualTranslations;
}

export function EditWordPage() {
  const {id} = useParams();
  const fetch = useFetch();
  const {showBoundary} = useErrorBoundary();
  const form = useForm<WordEntity>({
    initialValues: {
      id: '',
      russian: '',
      translations: [
        { language: 'en', text: '', position: 0, managedBy: 'MANUAL' },
        { language: 'es', text: '', position: 1, managedBy: 'MANUAL' }
      ],
      type: '',
      aspect: null,
      forms: emptyWordForms(),
      publishedAt: null
    }
  })

  const getWord = useCallback(async () => {
    const word = await fetch(async () => await wordService.getWord(id || ''));
    if (!word) {
      showBoundary('Word not found');
      return;
    }

    const values = {
      ...form.getValues(),
      id: word.id,
      russian: word.russian,
      translations: editableTranslations(word.translations ?? []),
      type: word.type,
      aspect: word.aspect ?? null,
      forms: normalizeWordForms(word.forms),
      publishedAt: word.publishedAt
    };

    form.setValues(values);
  }, [id, form]);

  useEffect(() => {
    getWord();
  }, []);

  async function handleSubmit(values: WordEntity) {
    await fetch(async () => await wordService.updateWord(values));
    getWord();
    notificationsService.success('Word updated');
  }

  async function handlePublish() {
    await fetch(async () => await wordService.publishWord(form.getValues()));
    notificationsService.success('Word published');
    getWord();
  }

  return (
    <Layout>
      <Group align={"center"} justify={"space-between"}>
        <Title order={2} mb="lg">Edit Word: {form.getValues().russian}</Title>
        {form.getValues().publishedAt === null && (
          <HasPermission permission={"words#publish"}>
            <Button variant="gradient" gradient={{ from: "green", to: "blue" }} onClick={handlePublish} leftSection={<IconCheck size={16}/>}>
              Publish Word
            </Button>
          </HasPermission>
        )}
      </Group>
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

import { Layout } from "../../common/components/layout.tsx";
import { useParams } from "react-router-dom";
import { WordEntity } from "../entities/word.entity.ts";
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

export function EditWordPage() {
  const {id} = useParams();
  const fetch = useFetch();
  const {showBoundary} = useErrorBoundary();
  const form = useForm<WordEntity>({
    initialValues: {
      id: '',
      russian: '',
      english: '',
      spanish: '',
      type: '',
      conjugations: {
        imperfectivePresentFirstPersonSingular: '',
        imperfectivePresentSecondPersonSingular: '',
        imperfectivePresentThirdPersonSingular: '',
        imperfectivePresentFirstPersonPlural: '',
        imperfectivePresentSecondPersonPlural: '',
        imperfectivePresentThirdPersonPlural: '',
        imperfectivePastMasculine: '',
        imperfectivePastFeminine: '',
        imperfectivePastNeuter: '',
        imperfectivePastPlural: '',
        imperfectiveFutureFirstPersonSingular: '',
        imperfectiveFutureSecondPersonSingular: '',
        imperfectiveFutureThirdPersonSingular: '',
        imperfectiveFutureFirstPersonPlural: '',
        imperfectiveFutureSecondPersonPlural: '',
        imperfectiveFutureThirdPersonPlural: '',
        perfectivePastMasculine: '',
        perfectivePastFeminine: '',
        perfectivePastNeuter: '',
        perfectivePastPlural: '',
        perfectiveFutureFirstPersonSingular: '',
        perfectiveFutureSecondPersonSingular: '',
        perfectiveFutureThirdPersonSingular: '',
        perfectiveFutureFirstPersonPlural: '',
        perfectiveFutureSecondPersonPlural: '',
        perfectiveFutureThirdPersonPlural: ''
      },
      declinations: {
        nominative: '',
        genitive: '',
        dative: '',
        accusative: '',
        instrumental: '',
        prepositional: '',
        nominativePlural: '',
        genitivePlural: '',
        dativePlural: '',
        accusativePlural: '',
        instrumentalPlural: '',
        prepositionalPlural: ''
      },
      declinationMatrix: {
        nominativeMasculine: '',
        nominativeFeminine: '',
        nominativeNeuter: '',
        nominativePlural: '',
        accusativeMasculine: '',
        accusativeFeminine: '',
        accusativeNeuter: '',
        accusativePlural: '',
        genitiveMasculine: '',
        genitiveFeminine: '',
        genitiveNeuter: '',
        genitivePlural: '',
        dativeMasculine: '',
        dativeFeminine: '',
        dativeNeuter: '',
        dativePlural: '',
        instrumentalMasculine: '',
        instrumentalFeminine: '',
        instrumentalNeuter: '',
        instrumentalPlural: '',
        prepositionalMasculine: '',
        prepositionalFeminine: '',
        prepositionalNeuter: '',
        prepositionalPlural: ''
      },
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
      english: word.english,
      spanish: word.spanish,
      type: word.type,
      publishedAt: word.publishedAt
    };

    if (word.declinations !== null) {
      values.declinations = word.declinations;
    }

    if (word.declinationMatrix !== null) {
      values.declinationMatrix = word.declinationMatrix;
    }

    if (word.conjugations !== null) {
      values.conjugations = word.conjugations;
    }

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
        <Title order={2} mb="lg">Edit Word: {form.getValues().russian} ({form.getValues().english} / {form.getValues().spanish})</Title>
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
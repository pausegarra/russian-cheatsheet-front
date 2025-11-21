import { Button, Divider, Title } from "@mantine/core";
import { Layout } from "../../common/components/layout.tsx";
import { WordForm } from "../components/word-form.tsx";
import { WordEntity } from "../entities/word.entity.ts";
import { wordService } from "../root.ts";
import { useForm } from "@mantine/form";
import { WordAlreadyExists } from "../exception/WordAlreadyExists.ts";
import { useErrorBoundary } from "react-error-boundary";
import { BadRequest } from "../../common/exception/bad-request.ts";
import { notificationsService } from "../../common/root.ts";
import { IconPlus } from "@tabler/icons-react";
import { useFetch } from "../../common/hooks/use-fetch.ts";

export function CreateVocabulary() {
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
  const {showBoundary} = useErrorBoundary();
  const fetch = useFetch();

  async function handleSubmit(values: WordEntity) {
    try {
      await fetch(async () => await wordService.createWord(values));
      notificationsService.success('Word created');
      form.reset();
    } catch (e) {
      if (e instanceof WordAlreadyExists) {
        notificationsService.error(e.message);
        return;
      }

      if (e instanceof BadRequest) {
        notificationsService.error(e.message);
        return;
      }

      showBoundary(e.message);
    }
  }

  return (
    <>
      <Layout>
        <Title mb={10} order={2}>Create vocabulary</Title>

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <WordForm form={form}/>

          <Divider my="md" />

          <Button type={"submit"} variant={"gradient"} gradient={{ from: "blue", to: "cyan" }} leftSection={<IconPlus size={16}/>}>
            Add
          </Button>
        </form>
      </Layout>
    </>
  )
}
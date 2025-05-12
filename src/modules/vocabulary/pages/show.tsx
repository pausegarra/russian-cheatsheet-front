import { useParams } from "react-router-dom";
import { WordEntity } from "../entities/word.entity.ts";
import { useEffect, useState } from "react";
import { wordService } from "../root.ts";
import { Divider, Stack, Title } from "@mantine/core";
import { ConjugationTable } from "../components/conjugation-row.tsx";
import { Layout } from "../../common/components/layout.tsx";

export function ShowVocabulary() {
  const {id} = useParams();
  const [word, setWord] = useState<WordEntity>({} as WordEntity);

  useEffect(() => {
    wordService.getWord(id || '').then(setWord)
  }, [id]);

  return (
    <Layout>
      <Title order={2} mb="lg">Vocabulary: {word.russian} ({word.english})</Title>
      <Divider my="md" />

      {word.type === 'VERB' && word.conjugations && (
        <Stack>
          <ConjugationTable title='Imperfective - Present' rows={[
            { label: 'я', value: word.conjugations.imperfectivePresentFirstPersonSingular },
            { label: 'ты', value: word.conjugations.imperfectivePresentSecondPersonSingular },
            { label: 'он/она/оно', value: word.conjugations.imperfectivePresentThirdPersonSingular },
            { label: 'мы', value: word.conjugations.imperfectivePresentFirstPersonPlural },
            { label: 'вы', value: word.conjugations.imperfectivePresentSecondPersonPlural },
            { label: 'они', value: word.conjugations.imperfectivePresentThirdPersonPlural },
          ]} />

          <ConjugationTable title='Imperfective - Past' rows={[
            { label: 'Masculine', value: word.conjugations.imperfectivePastMasculine },
            { label: 'Feminine', value: word.conjugations.imperfectivePastFeminine },
            { label: 'Neuter', value: word.conjugations.imperfectivePastNeuter },
            { label: 'Plural', value: word.conjugations.imperfectivePastPlural },
          ]} />

          <ConjugationTable title='Imperfective - Future' rows={[
            { label: 'я', value: word.conjugations.imperfectiveFutureFirstPersonSingular },
            { label: 'ты', value: word.conjugations.imperfectiveFutureSecondPersonSingular },
            { label: 'он/она/оно', value: word.conjugations.imperfectiveFutureThirdPersonSingular },
            { label: 'мы', value: word.conjugations.imperfectiveFutureFirstPersonPlural },
            { label: 'вы', value: word.conjugations.imperfectiveFutureSecondPersonPlural },
            { label: 'они', value: word.conjugations.imperfectiveFutureThirdPersonPlural },
          ]} />

          <ConjugationTable title='Perfective - Present' rows={[
            { label: 'я', value: word.conjugations.perfectivePresentFirstPersonSingular },
            { label: 'ты', value: word.conjugations.perfectivePresentSecondPersonSingular },
            { label: 'он/она/оно', value: word.conjugations.perfectivePresentThirdPersonSingular },
            { label: 'мы', value: word.conjugations.perfectivePresentFirstPersonPlural },
            { label: 'вы', value: word.conjugations.perfectivePresentSecondPersonPlural },
            { label: 'они', value: word.conjugations.perfectivePresentThirdPersonPlural },
          ]} />

          <ConjugationTable title='Perfective - Past' rows={[
            { label: 'Masculine', value: word.conjugations.perfectivePastMasculine },
            { label: 'Feminine', value: word.conjugations.perfectivePastFeminine },
            { label: 'Neuter', value: word.conjugations.perfectivePastNeuter },
            { label: 'Plural', value: word.conjugations.perfectivePastPlural },
          ]} />

          <ConjugationTable title='Perfective - Future' rows={[
            { label: 'я', value: word.conjugations.perfectiveFutureFirstPersonSingular },
            { label: 'ты', value: word.conjugations.perfectiveFutureSecondPersonSingular },
            { label: 'он/она/оно', value: word.conjugations.perfectiveFutureThirdPersonSingular },
            { label: 'мы', value: word.conjugations.perfectiveFutureFirstPersonPlural },
            { label: 'вы', value: word.conjugations.perfectiveFutureSecondPersonPlural },
            { label: 'они', value: word.conjugations.perfectiveFutureThirdPersonPlural },
          ]} />
        </Stack>
      )}
    </Layout>
  )

}
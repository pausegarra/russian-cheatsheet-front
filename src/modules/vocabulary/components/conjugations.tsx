import { ConjugationEntity } from "../entities/conjugation.entity.ts";
import { Grid } from "@mantine/core";
import { ConjugationTable } from "./conjugation-row.tsx";

type props = {
  conjugations: ConjugationEntity
}

export function Conjugations({conjugations}: props) {
  return (
    <Grid>
      <Grid.Col span={6}>
        <ConjugationTable title='Imperfective - Present' rows={[
          { label: 'я', value: conjugations.imperfectivePresentFirstPersonSingular },
          { label: 'ты', value: conjugations.imperfectivePresentSecondPersonSingular },
          { label: 'он/она/оно', value: conjugations.imperfectivePresentThirdPersonSingular },
          { label: 'мы', value: conjugations.imperfectivePresentFirstPersonPlural },
          { label: 'вы', value: conjugations.imperfectivePresentSecondPersonPlural },
          { label: 'они', value: conjugations.imperfectivePresentThirdPersonPlural },
        ]} />
      </Grid.Col>

      <Grid.Col span={6}>
        <ConjugationTable title='Perfective - Present' rows={[
          { label: 'я', value: conjugations.perfectivePresentFirstPersonSingular },
          { label: 'ты', value: conjugations.perfectivePresentSecondPersonSingular },
          { label: 'он/она/оно', value: conjugations.perfectivePresentThirdPersonSingular },
          { label: 'мы', value: conjugations.perfectivePresentFirstPersonPlural },
          { label: 'вы', value: conjugations.perfectivePresentSecondPersonPlural },
          { label: 'они', value: conjugations.perfectivePresentThirdPersonPlural },
        ]} />
      </Grid.Col>

      <Grid.Col span={6}>
        <ConjugationTable title='Imperfective - Future' rows={[
          { label: 'я', value: conjugations.imperfectiveFutureFirstPersonSingular },
          { label: 'ты', value: conjugations.imperfectiveFutureSecondPersonSingular },
          { label: 'он/она/оно', value: conjugations.imperfectiveFutureThirdPersonSingular },
          { label: 'мы', value: conjugations.imperfectiveFutureFirstPersonPlural },
          { label: 'вы', value: conjugations.imperfectiveFutureSecondPersonPlural },
          { label: 'они', value: conjugations.imperfectiveFutureThirdPersonPlural },
        ]} />
      </Grid.Col>

      <Grid.Col span={6}>
        <ConjugationTable title='Perfective - Future' rows={[
          { label: 'я', value: conjugations.perfectiveFutureFirstPersonSingular },
          { label: 'ты', value: conjugations.perfectiveFutureSecondPersonSingular },
          { label: 'он/она/оно', value: conjugations.perfectiveFutureThirdPersonSingular },
          { label: 'мы', value: conjugations.perfectiveFutureFirstPersonPlural },
          { label: 'вы', value: conjugations.perfectiveFutureSecondPersonPlural },
          { label: 'они', value: conjugations.perfectiveFutureThirdPersonPlural },
        ]} />
      </Grid.Col>

      <Grid.Col span={6}>
        <ConjugationTable title='Imperfective - Past' rows={[
          { label: 'Masculine', value: conjugations.imperfectivePastMasculine },
          { label: 'Feminine', value: conjugations.imperfectivePastFeminine },
          { label: 'Neuter', value: conjugations.imperfectivePastNeuter },
          { label: 'Plural', value: conjugations.imperfectivePastPlural },
        ]} />
      </Grid.Col>

      <Grid.Col span={6}>
        <ConjugationTable title='Perfective - Past' rows={[
          { label: 'Masculine', value: conjugations.perfectivePastMasculine },
          { label: 'Feminine', value: conjugations.perfectivePastFeminine },
          { label: 'Neuter', value: conjugations.perfectivePastNeuter },
          { label: 'Plural', value: conjugations.perfectivePastPlural },
        ]} />
      </Grid.Col>
    </Grid>
  );
}
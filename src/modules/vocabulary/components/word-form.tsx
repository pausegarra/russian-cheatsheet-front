import { UseFormReturnType } from "@mantine/form";
import { Divider, Grid, Select, TextInput, Title } from "@mantine/core";
import { WordEntity } from "../entities/word.entity.ts";
import { WordConjugationForm } from "./word-conjugation-form.tsx";
import {
  imperfectiveFutureConjugations,
  imperfectivePastConjugations,
  imperfectivePresentConjugations,
  perfectiveFutureConjugations,
  perfectivePastConjugations,
  perfectivePresentConjugations
} from "../constants.ts";
import { CasesForm } from "./cases-form.tsx";

type props = {
  form: UseFormReturnType<WordEntity>;
}

export function WordForm({form}: props) {

  return (
    <>
      <Grid>
        <Grid.Col span={3}>
          <TextInput
            label="Russian"
            placeholder="Russian"
            {...form.getInputProps('russian')}
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <TextInput
            label="English"
            placeholder="English"
            {...form.getInputProps('english')}
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <TextInput
            label="Spanish"
            placeholder="Spanish"
            {...form.getInputProps('spanish')}
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <Select
            label="Type"
            placeholder="Pick a tupe"
            data={["VERB", "NOUN", "ADJECTIVE", "ADVERB"]}
            {...form.getInputProps('type')}
          />
        </Grid.Col>
      </Grid>

      {form.values.type === 'VERB' && (
        <>
          <Divider my="md" />

          <Title order={3} mb="md">Conjugations</Title>

          <Grid>
            <Grid.Col span={6}>
              <WordConjugationForm form={form} title='Imperfective - Present' rows={imperfectivePresentConjugations}/>
            </Grid.Col>
            <Grid.Col span={6}>
              <WordConjugationForm form={form} title='Perfective - Present' rows={perfectivePresentConjugations} />
            </Grid.Col>
            <Grid.Col span={6}>
              <WordConjugationForm form={form} title='Imperfective - Future' rows={imperfectiveFutureConjugations} />
            </Grid.Col>
            <Grid.Col span={6}>
              <WordConjugationForm form={form} title='Perfective - Future' rows={perfectiveFutureConjugations} />
            </Grid.Col>
            <Grid.Col span={6}>
              <WordConjugationForm form={form} title='Imperfective - Past' rows={imperfectivePastConjugations} />
            </Grid.Col>
            <Grid.Col span={6}>
              <WordConjugationForm form={form} title='Perfective - Past' rows={perfectivePastConjugations} />
            </Grid.Col>
          </Grid>
        </>
      )}

      {(form.values.type !== 'VERB' && form.values.type !== 'ADVERB' && form.values.type !== "") && (
        <>
          <Divider my="md" />

          <Title order={3} mb="md">Cases</Title>

          <CasesForm form={form} />
        </>
      )}
    </>
  )
}
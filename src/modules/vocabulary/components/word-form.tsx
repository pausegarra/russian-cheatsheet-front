import { UseFormReturnType } from '@mantine/form';
import { Divider, Grid, Select, TextInput, Title } from '@mantine/core';
import { WordEntity, WordFormType, WordType } from '../entities/word.entity.ts';
import { emptyWordForms, wordAspectOptions, wordFormGroups, wordTypeOptions } from '../constants.ts';
import { WordFormsForm } from './word-forms.tsx';

type props = {
  form: UseFormReturnType<WordEntity>;
}

export function WordForm({ form }: props) {
  const translations = form.values.translations ?? [];
  const englishTranslationIndex = Math.max(0, translations.findIndex(translation => translation.language === 'en'));
  const spanishTranslationIndex = Math.max(0, translations.findIndex(translation => translation.language === 'es'));

  function changeType(value: string | null) {
    const type = (value ?? '') as WordType | '';
    const visibleFields = new Set(wordFormGroups(type).flatMap(group => group.fields));
    const forms = { ...emptyWordForms(), ...form.values.forms };
    (Object.keys(forms) as WordFormType[]).forEach(field => {
      if (!visibleFields.has(field)) {
        forms[field] = '';
      }
    });
    form.setFieldValue('type', type);
    form.setFieldValue('forms', forms);
    if (type !== 'verb') {
      form.setFieldValue('aspect', null);
    }
  }

  return (
    <>
      <Grid>
        <Grid.Col span={{ base: 12, md: 3 }}>
          <TextInput label="Russian" placeholder="Russian" {...form.getInputProps('russian')} />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 3 }}>
          <TextInput label="English" placeholder="English" {...form.getInputProps(`translations.${englishTranslationIndex}.text`)} />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 3 }}>
          <TextInput label="Spanish" placeholder="Spanish" {...form.getInputProps(`translations.${spanishTranslationIndex}.text`)} />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 3 }}>
          <Select label="Type" placeholder="Pick a type" data={wordTypeOptions} value={form.values.type || null} onChange={changeType} required />
        </Grid.Col>
        {form.values.type === 'verb' && (
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Select
              label="Aspect"
              placeholder="Pick an aspect"
              data={wordAspectOptions}
              value={form.values.aspect}
              onChange={value => form.setFieldValue('aspect', value as WordEntity['aspect'])}
              required
            />
          </Grid.Col>
        )}
      </Grid>

      <Divider my="md" />
      <Title order={3} mb="md">Forms</Title>
      <WordFormsForm form={form} />
    </>
  );
}

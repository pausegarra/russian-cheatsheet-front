import { UseFormReturnType } from '@mantine/form';
import { Grid, Table, TextInput, Title } from '@mantine/core';
import { WordEntity, WordForms, WordType } from '../entities/word.entity.ts';
import { wordFormGroups } from '../constants.ts';

type FormProps = {
  form: UseFormReturnType<WordEntity>;
};

export function WordFormsForm({ form }: FormProps) {
  return (
    <>
      {wordFormGroups(form.values.type).map(group => (
        <section key={group.title}>
          <Title order={4} mt="md" mb="sm">{group.title}</Title>
          <Grid>
            {group.fields.map(field => (
              <Grid.Col key={field} span={{ base: 12, sm: 6, md: 4 }}>
                <TextInput
                  label={field}
                  {...form.getInputProps(`forms.${field}`)}
                />
              </Grid.Col>
            ))}
          </Grid>
        </section>
      ))}
    </>
  );
}

type DisplayProps = {
  type: WordType | '' | null;
  forms: WordForms | null;
};

export function WordFormsDisplay({ type, forms }: DisplayProps) {
  if (!forms) {
    return null;
  }

  const groups = wordFormGroups(type);
  const populatedGroups = groups
    .map(group => ({
      ...group,
      fields: group.fields.filter(field => forms[field]?.trim())
    }))
    .filter(group => group.fields.length > 0);

  if (populatedGroups.length === 0) {
    return null;
  }

  return (
    <>
      {populatedGroups.map(group => (
        <section key={group.title}>
          <Title order={4} mt="md" mb="sm">{group.title}</Title>
          <Table withTableBorder striped>
            <Table.Tbody>
              {group.fields.map(field => (
                <Table.Tr key={field}>
                  <Table.Th>{field}</Table.Th>
                  <Table.Td>{forms[field]}</Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </section>
      ))}
    </>
  );
}

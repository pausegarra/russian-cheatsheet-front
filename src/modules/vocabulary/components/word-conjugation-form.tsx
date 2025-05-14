import { UseFormReturnType } from "@mantine/form";
import { WordEntity } from "../entities/word.entity.ts";
import { Card, Table, TextInput, Title } from "@mantine/core";

type props = {
  form: UseFormReturnType<WordEntity>;
  title: string;
  rows: {
    form: string;
    conjugationName: string;
  }[]
}

export function WordConjugationForm({form, title, rows}: props) {
  return (
    <Card shadow="md" padding="lg" radius="md" withBorder>
      <Title order={3} mb="md">{title}</Title>
      <Table striped highlightOnHover withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Form</Table.Th>
            <Table.Th>Conjugation</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {rows.map((row) => (
            <Table.Tr key={row.form}>
              <Table.Td>
                {row.form}
              </Table.Td>
              <Table.Td>
                <TextInput
                  {...form.getInputProps(`conjugations.${row.conjugationName}`)}
                />
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Card>
  )
}
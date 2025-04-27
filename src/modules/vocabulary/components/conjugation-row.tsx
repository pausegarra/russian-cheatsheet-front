import { Card, Table, Title } from "@mantine/core";

type props = {
  title: string;
  rows: {
    label: string;
    value: string;
  }[];
}

export function ConjugationTable({ title, rows }: props) {
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
            <Table.Tr key={row.label}>
              <Table.Td>{row.label}</Table.Td>
              <Table.Td>{row.value || '-'}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Card>
  );
}
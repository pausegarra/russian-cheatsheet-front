import { Grid, Table, Text, Title } from "@mantine/core";
import { WordCasesEntity } from "../entities/cases.entity.ts";

type props = {
  cases: WordCasesEntity
}

export function WordCases({cases}: props) {
  return (
    <>
      <Title order={2}>Cases</Title>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Case</Table.Th>
            <Table.Th>Value</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td><strong>Nominative</strong></Table.Td>
            <Table.Td>{cases.nominative}</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td><strong>Genitive</strong></Table.Td>
            <Table.Td>{cases.genitive}</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td><strong>Dative</strong></Table.Td>
            <Table.Td>{cases.dative}</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td><strong>Accusative</strong></Table.Td>
            <Table.Td>{cases.accusative}</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td><strong>Instrumental</strong></Table.Td>
            <Table.Td>{cases.instrumental}</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td><strong>Prepositional</strong></Table.Td>
            <Table.Td>{cases.prepositional}</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </>
  )
}
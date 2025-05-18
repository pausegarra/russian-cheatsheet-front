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
            <Table.Th>Masculine</Table.Th>
            <Table.Th>Feminine</Table.Th>
            <Table.Th>Neuter</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td><strong>Nominative</strong></Table.Td>
            <Table.Td>{cases.nominativeMasculine}</Table.Td>
            <Table.Td>{cases.nominativeFeminine}</Table.Td>
            <Table.Td>{cases.nominativeNeuter}</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td><strong>Genitive</strong></Table.Td>
            <Table.Td>{cases.genitiveMasculine}</Table.Td>
            <Table.Td>{cases.genitiveFeminine}</Table.Td>
            <Table.Td>{cases.genitiveNeuter}</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td><strong>Dative</strong></Table.Td>
            <Table.Td>{cases.dativeMasculine}</Table.Td>
            <Table.Td>{cases.dativeFeminine}</Table.Td>
            <Table.Td>{cases.dativeNeuter}</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td><strong>Accusative</strong></Table.Td>
            <Table.Td>{cases.accusativeMasculine}</Table.Td>
            <Table.Td>{cases.accusativeFeminine}</Table.Td>
            <Table.Td>{cases.accusativeNeuter}</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td><strong>Instrumental</strong></Table.Td>
            <Table.Td>{cases.instrumentalMasculine}</Table.Td>
            <Table.Td>{cases.instrumentalFeminine}</Table.Td>
            <Table.Td>{cases.instrumentalNeuter}</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td><strong>Prepositional</strong></Table.Td>
            <Table.Td>{cases.prepositionalMasculine}</Table.Td>
            <Table.Td>{cases.prepositionalFeminine}</Table.Td>
            <Table.Td>{cases.prepositionalNeuter}</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </>
  )
}
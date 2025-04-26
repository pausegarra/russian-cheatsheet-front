import { Table } from "@mantine/core"
import { LetterEntity } from "../entities/letter.entity"

type props = {
  letter: LetterEntity
}

export function LetterRow({letter}: props) {
  return (
    <Table.Tr>
      <Table.Td>{letter.cyrillic}</Table.Td>
      <Table.Td>{letter.latin}</Table.Td>
      <Table.Td>{letter.ipa}</Table.Td>
    </Table.Tr>
  )
}
import { Table } from "@mantine/core"
import { WordEntity } from "../entities/word.entity"

type props = {
  word: WordEntity
}

export function WordRow({word}: props) {
  return (
    <Table.Tr>
      <Table.Td>{word.russian}</Table.Td>
      <Table.Td>{word.english}</Table.Td>
      <Table.Td>{word.spanish}</Table.Td>
      <Table.Td>{word.type}</Table.Td>
    </Table.Tr>
  )
}
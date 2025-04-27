import { Button, Table } from "@mantine/core"
import { WordEntity } from "../entities/word.entity"
import { Link } from "react-router-dom";
import { IconEye } from "@tabler/icons-react";

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
      <Table.Td>
        {word.type === 'VERB' && (
          <Button size={"xs"} component={Link} to={`/vocabulary/${word.id}`}>
            <IconEye size={16} stroke={1.6}/>
          </Button>
        )}
      </Table.Td>
    </Table.Tr>
  )
}
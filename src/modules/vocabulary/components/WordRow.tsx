import { Button, Table } from "@mantine/core"
import { WordEntity, translationText } from "../entities/word.entity"
import { Link } from "react-router-dom";
import { IconEye } from "@tabler/icons-react";

type props = {
  word: WordEntity;
}

export function WordRow({word}: props) {
  return (
    <Table.Tr>
      <Table.Td>{word.russian}</Table.Td>
      <Table.Td>{translationText(word, 'en')}</Table.Td>
      <Table.Td>{translationText(word, 'es')}</Table.Td>
      <Table.Td>{word.type}</Table.Td>
      <Table.Td>
        <Button size="compact-xs" component={Link} to={`/vocabulary/${word.id}`} aria-label={`View ${word.russian}`}>
          <IconEye size={16} stroke={1.6}/>
        </Button>
      </Table.Td>
    </Table.Tr>
  )
}

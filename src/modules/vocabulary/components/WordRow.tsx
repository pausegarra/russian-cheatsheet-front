import { Button, Group, Table } from "@mantine/core"
import { WordEntity } from "../entities/word.entity"
import { Link } from "react-router-dom";
import { IconEdit, IconEye } from "@tabler/icons-react";
import { HasPermission } from "../../common/components/has-permission.tsx";

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
        <Group>
          <Button size={"compact-xs"} component={Link} to={`/vocabulary/${word.id}`}>
            <IconEye size={16} stroke={1.6}/>
          </Button>
          <HasPermission permission={"words#update"}>
            <Button size={"compact-xs"} component={Link} bg={"orange"} to={`/vocabulary/${word.id}/edit`}>
              <IconEdit size={16} stroke={1.6}/>
            </Button>
          </HasPermission>
        </Group>
      </Table.Td>
    </Table.Tr>
  )
}
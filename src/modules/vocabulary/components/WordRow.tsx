import { Button, Group, Table } from "@mantine/core"
import { WordEntity } from "../entities/word.entity"
import { Link } from "react-router-dom";
import { IconCheck, IconEdit, IconEye, IconTrash } from "@tabler/icons-react";
import { HasPermission } from "../../common/components/has-permission.tsx";

type props = {
  word: WordEntity;
  onDelete?: (word: WordEntity) => void;
  onPublish?: (word: WordEntity) => void;
  isDeleting?: boolean;
  isPublishing?: boolean;
}

export function WordRow({word, onDelete, onPublish, isDeleting = false, isPublishing = false}: props) {
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
          <HasPermission permission={"words#delete"}>
            <Button size={"compact-xs"} bg={"red"} onClick={() => onDelete?.(word)} loading={isDeleting} disabled={isDeleting}>
              <IconTrash size={16} stroke={1.6}/>
            </Button>
          </HasPermission>
          {onPublish && (
            <HasPermission permission={"words#publish"}>
              <Button size={"compact-xs"} bg={"green"} onClick={() => onPublish(word)} loading={isPublishing} disabled={isPublishing}>
                <IconCheck size={16} stroke={1.6}/>
              </Button>
            </HasPermission>
          )}
        </Group>
      </Table.Td>
    </Table.Tr>
  )
}

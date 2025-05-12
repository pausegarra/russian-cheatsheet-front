import { Button, Group, Pagination, Stack, Table, TextInput, Title } from "@mantine/core";
import { WordEntity } from "../entities/word.entity.ts";
import { useEffect, useState } from "react";
import { wordService } from "../root.ts";
import { WordRow } from "../components/WordRow.tsx";
import { Paginated } from "../../common/responses/paginated.ts";
import { useDebouncedState } from "@mantine/hooks";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import { Layout } from "../../common/components/layout.tsx";
import { Link } from "react-router-dom";
import { HasPermission } from "../../common/components/has-permission.tsx";

export function ListVocabulary() {

  const [words, setWords] = useState<Paginated<WordEntity>>({} as Paginated<WordEntity>);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useDebouncedState('', 500);

  useEffect(() => {
    wordService.getWords(page, search).then(setWords)
  }, [page, search]);

  return (
    <Layout>
      <Group align={"center"} justify={"space-between"} h="100%">
        <Title>Vocabulary</Title>
        <HasPermission permission={"words#create"}>
          <Button component={Link} to={"/vocabulary/create"} variant="gradient" gradient={{ from: "blue", to: "cyan" }} leftSection={<IconPlus size={16}/>}>
            Add Word
          </Button>
        </HasPermission>
      </Group>
      <TextInput
        mt="xl"
        defaultValue={search}
        placeholder="Search"
        size="sm"
        leftSection={<IconSearch size={16}/>}
        onChange={(event) => setSearch(event.currentTarget.value)}
      />
      <Stack gap="xl" justify="center" align="center">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Russian</Table.Th>
              <Table.Th>English</Table.Th>
              <Table.Th>Spanish</Table.Th>
              <Table.Th>Type</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {words.data?.map(word => (
              <WordRow key={word.id} word={word}/>
            ))}
          </Table.Tbody>
        </Table>

        <Pagination total={words.totalPages} value={words.page + 1} onChange={setPage}/>
      </Stack>
    </Layout>
  )
}
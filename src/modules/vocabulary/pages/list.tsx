import { Pagination, Stack, Table, TextInput, Title } from "@mantine/core";
import { WordEntity } from "../entities/word.entity.ts";
import { useCallback, useEffect, useState } from "react";
import { wordService } from "../root.ts";
import { WordRow } from "../components/WordRow.tsx";
import { Paginated } from "../../common/responses/paginated.ts";
import { useDebouncedState } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import { Layout } from "../../common/components/layout.tsx";

export function ListVocabulary() {
  const [words, setWords] = useState<Paginated<WordEntity>>({} as Paginated<WordEntity>);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useDebouncedState('', 500);

  const loadWords = useCallback(async (targetPage: number, targetSearch: string) => {
    const data = await wordService.getWords(targetPage, targetSearch);
    setWords(data);
  }, []);

  useEffect(() => {
    loadWords(page, search);
  }, [loadWords, page, search]);

  return (
    <Layout>
      <Title>Vocabulary</Title>
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
              <Table.Th>Details</Table.Th>
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

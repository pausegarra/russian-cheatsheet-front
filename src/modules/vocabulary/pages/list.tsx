import { Pagination, Stack, Table, Title } from "@mantine/core";
import { WordEntity } from "../entities/word.entity.ts";
import { useEffect, useState } from "react";
import { wordService } from "../root.ts";
import { WordRow } from "../components/WordRow.tsx";
import { Paginated } from "../../common/responses/paginated.ts";

export function ListVocabulary() {

  const [words, setWords] = useState<Paginated<WordEntity>>({} as Paginated<WordEntity>);
  const [page, setPage] = useState(1);

  useEffect(() => {
    wordService.getWords(page).then(setWords)
  }, [page]);

  return (
    <>
      <Title>Vocabulary</Title>
      <Stack gap="xl" justify="center" align="center" mt="xl">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Russian</Table.Th>
              <Table.Th>English</Table.Th>
              <Table.Th>Spanish</Table.Th>
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
    </>
  )
}
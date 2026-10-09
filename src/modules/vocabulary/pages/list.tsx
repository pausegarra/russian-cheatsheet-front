import { Pagination, Stack, Table, TextInput } from "@mantine/core";
import { WordEntity } from "../entities/word.entity.ts";
import { useCallback, useEffect, useState } from "react";
import { wordService } from "../root.ts";
import { WordRow } from "../components/WordRow.tsx";
import { Paginated } from "../../common/responses/paginated.ts";
import { useDebouncedState } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import { Layout } from "../../common/components/layout.tsx";
import classes from "../components/vocabulary.module.css";

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
      <div className={classes.container}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--rc-text-primary)', margin: 0 }}>
            Vocabulary Dictionary
          </h1>
          <p style={{ color: 'var(--rc-text-secondary)', fontSize: '0.875rem', margin: '0.25rem 0 0' }}>
            Comprehensive lexicon reference with part-of-speech categorization and morphological details.
          </p>
        </div>

        <div className={classes.toolbar}>
          <div className={classes.searchField}>
            <TextInput
              defaultValue={search}
              placeholder="Search Russian or English words..."
              size="sm"
              leftSection={<IconSearch size={16} color="var(--rc-text-muted)" />}
              onChange={(event) => setSearch(event.currentTarget.value)}
            />
          </div>
        </div>

        <Stack gap="xl" justify="center" align="center">
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th style={{ width: '35%' }}>Russian</Table.Th>
                <Table.Th style={{ width: '35%' }}>English</Table.Th>
                <Table.Th style={{ width: '20%' }}>Type</Table.Th>
                <Table.Th style={{ width: '10%', textAlign: 'center' }}>Details</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {words.data?.map(word => (
                <WordRow key={word.id} word={word} />
              ))}
            </Table.Tbody>
          </Table>

          {words.totalPages > 1 && (
            <Pagination
              total={words.totalPages}
              value={words.page + 1}
              onChange={setPage}
            />
          )}
        </Stack>
      </div>
    </Layout>
  );
}

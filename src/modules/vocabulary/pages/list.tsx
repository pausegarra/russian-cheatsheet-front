import { Pagination, Stack, Table, TextInput } from "@mantine/core";
import { WordEntity } from "../entities/word.entity.ts";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { wordService } from "../root.ts";
import { WordRow } from "../components/WordRow.tsx";
import { Paginated } from "../../common/responses/paginated.ts";
import { IconSearch } from "@tabler/icons-react";
import { Layout } from "../../common/components/layout.tsx";
import classes from "../components/vocabulary.module.css";

function getPageFromSearchParams(value: string | null): number {
  const page = Number(value);
  return Number.isInteger(page) && page > 0 ? page : 1;
}

export function ListVocabulary() {
  const [words, setWords] = useState<Paginated<WordEntity>>({} as Paginated<WordEntity>);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const page = getPageFromSearchParams(searchParams.get("page"));
  const urlSearch = searchParams.get("search") ?? "";
  const [search, setSearch] = useState(urlSearch);

  const loadWords = useCallback(async (targetPage: number, targetSearch: string) => {
    const data = await wordService.getWords(targetPage, targetSearch);
    setWords(data);
  }, []);

  useEffect(() => {
    loadWords(page, urlSearch);
  }, [loadWords, page, urlSearch]);

  useEffect(() => {
    setSearch(urlSearch);
  }, [urlSearch]);

  useEffect(() => {
    if (search === urlSearch) return;

    const timeoutId = window.setTimeout(() => {
      setSearchParams((current) => {
        const next = new URLSearchParams(current);
        if (search) next.set("search", search);
        else next.delete("search");
        next.delete("page");
        return next;
      }, { replace: true, state: location.state });
    }, 500);

    return () => window.clearTimeout(timeoutId);
  }, [location.state, search, setSearchParams, urlSearch]);

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
              value={search}
              placeholder="Search Russian or English words..."
              size="sm"
              leftSection={<IconSearch size={16} color="var(--rc-text-muted)" />}
              onChange={(event) => setSearch(event.currentTarget.value)}
            />
          </div>
        </div>

        <Stack gap="xl" justify="center" align="center">
          <div
            className={classes.tableViewport}
            role="region"
            aria-label="Vocabulary words"
            tabIndex={0}
          >
            <Table className={classes.vocabularyTable}>
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
          </div>

          {words.totalPages > 1 && (
            <Pagination
              total={words.totalPages}
              value={page}
              onChange={(nextPage) => {
                setSearchParams((current) => {
                  const next = new URLSearchParams(current);
                  if (nextPage === 1) next.delete("page");
                  else next.set("page", String(nextPage));
                  return next;
                }, { state: location.state });
              }}
            />
          )}
        </Stack>
      </div>
    </Layout>
  );
}

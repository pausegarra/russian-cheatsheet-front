import { Button, Group, Pagination, Stack, Table, TextInput, Title } from "@mantine/core";
import { WordEntity } from "../entities/word.entity.ts";
import { useCallback, useEffect, useState } from "react";
import { wordService } from "../root.ts";
import { WordRow } from "../components/WordRow.tsx";
import { Paginated } from "../../common/responses/paginated.ts";
import { useDebouncedState } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import { Layout } from "../../common/components/layout.tsx";
import { Link } from "react-router-dom";
import { HasPermission } from "../../common/components/has-permission.tsx";
import Swal from "sweetalert2";
import { notificationsService } from "../../common/root.ts";
import { useErrorBoundary } from "react-error-boundary";

export function ListUnpublished() {
  const [words, setWords] = useState<Paginated<WordEntity>>({} as Paginated<WordEntity>);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useDebouncedState('', 500);
  const [deletingWordId, setDeletingWordId] = useState<string | null>(null);
  const [publishingWordId, setPublishingWordId] = useState<string | null>(null);
  const {showBoundary} = useErrorBoundary();

  const loadWords = useCallback(async (targetPage: number, targetSearch: string) => {
    const data = await wordService.getWordsUnpublished(targetPage, targetSearch);
    setWords(data);
  }, []);

  const handleDelete = useCallback(async (word: WordEntity) => {
    const result = await Swal.fire({
      title: 'Delete word?',
      text: `This will permanently delete "${word.russian}"`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#d9480f'
    });

    if (!result.isConfirmed) {
      return;
    }

    setDeletingWordId(word.id);

    try {
      await wordService.deleteWord(word.id);
      notificationsService.success('Word deleted');

      const currentLength = words.data?.length ?? 0;
      if (currentLength === 1 && page > 1) {
        setPage((previous) => previous - 1);
      } else {
        setWords((previous) => new Paginated<WordEntity>(
          previous.data?.filter((item) => item.id !== word.id) ?? [],
          previous.page,
          previous.pageSize,
          previous.totalPages,
          Math.max(0, previous.totalElements - 1),
          previous.hasNextPage,
          previous.hasPreviousPage
        ));
      }
    } catch (e: any) {
      if (e.status === 401) {
        showBoundary('You must be logged in');
        return;
      }

      if (e.status === 403) {
        notificationsService.error("You don't have permissions to delete this word");
        return;
      }

      if (e.status === 404) {
        notificationsService.error('Word does not exist or was already deleted');
        await loadWords(page, search);
        return;
      }

      notificationsService.error('Unexpected error deleting word');
    } finally {
      setDeletingWordId(null);
    }
  }, [loadWords, page, search, showBoundary, words.data]);

  const handlePublish = useCallback(async (word: WordEntity) => {
    setPublishingWordId(word.id);

    try {
      await wordService.publishWord(word);
      notificationsService.success('Word published');

      const currentLength = words.data?.length ?? 0;
      if (currentLength === 1 && page > 1) {
        setPage((previous) => previous - 1);
      } else {
        setWords((previous) => new Paginated<WordEntity>(
          previous.data?.filter((item) => item.id !== word.id) ?? [],
          previous.page,
          previous.pageSize,
          previous.totalPages,
          Math.max(0, previous.totalElements - 1),
          previous.hasNextPage,
          previous.hasPreviousPage
        ));
      }
    } catch (e: any) {
      if (e.status === 401) {
        showBoundary('You must be logged in');
        return;
      }

      if (e.status === 403) {
        notificationsService.error("You don't have permissions to publish this word");
        return;
      }

      if (e.status === 404) {
        notificationsService.error('Word does not exist or was already published');
        await loadWords(page, search);
        return;
      }

      notificationsService.error('Unexpected error publishing word');
    } finally {
      setPublishingWordId(null);
    }
  }, [loadWords, page, search, showBoundary, words.data]);

  useEffect(() => {
    loadWords(page, search);
  }, [loadWords, page, search]);

  return (
    <Layout>
      <Group align={"center"} justify={"space-between"} h="100%">
        <Title>Vocabulary Unpublished</Title>
        <HasPermission permission={"words#publish"}>
          <Button component={Link} to={"/vocabulary"} variant="gradient" gradient={{ from: "orange", to: "yellow" }}>
            View published
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
              <WordRow
                key={word.id}
                word={word}
                onDelete={handleDelete}
                onPublish={handlePublish}
                isDeleting={deletingWordId === word.id}
                isPublishing={publishingWordId === word.id}
              />
            ))}
          </Table.Tbody>
        </Table>

        <Pagination total={words.totalPages} value={words.page + 1} onChange={setPage}/>
      </Stack>
    </Layout>
  )
}

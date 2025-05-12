import { Table, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { alphabetService } from "../root.ts";
import { LetterEntity } from "../entities/letter.entity.ts";
import { LetterRow } from "../components/LetterRow.tsx";
import { Layout } from "../../common/components/layout.tsx";

export function ListAlphabet() {

  const [letters, setLetters] = useState<LetterEntity[]>([]);

  useEffect(() => {
    alphabetService.getAlphabet().then(setLetters)
  }, []);

  return (
    <Layout>
      <Title>Alphabet</Title>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Cyrillic</Table.Th>
            <Table.Th>Latin</Table.Th>
            <Table.Th>IPA</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {letters.map(letter => (
            <LetterRow key={letter.id} letter={letter}/>
          ))}
        </Table.Tbody>
      </Table>
    </Layout>
  )
}
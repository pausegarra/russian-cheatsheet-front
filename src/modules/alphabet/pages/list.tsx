import { Table } from "@mantine/core";
import { useEffect, useState } from "react";
import { alphabetService } from "../root.ts";
import { LetterEntity } from "../entities/letter.entity.ts";
import { LetterRow } from "../components/LetterRow.tsx";
import { Layout } from "../../common/components/layout.tsx";
import classes from "../components/alphabet.module.css";

export function ListAlphabet() {
  const [letters, setLetters] = useState<LetterEntity[]>([]);

  useEffect(() => {
    setLetters(alphabetService.getAlphabet());
  }, []);

  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.headerRow}>
          <h1 className={classes.pageTitle}>Alphabet Reference</h1>
          <span className={classes.countBadge}>[33 GLYPHS]</span>
        </div>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th style={{ width: '30%' }}>Cyrillic</Table.Th>
              <Table.Th style={{ width: '35%' }}>Latin</Table.Th>
              <Table.Th style={{ width: '35%' }}>IPA</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {letters.map((letter) => (
              <LetterRow key={letter.id} letter={letter} />
            ))}
          </Table.Tbody>
        </Table>
      </div>
    </Layout>
  );
}
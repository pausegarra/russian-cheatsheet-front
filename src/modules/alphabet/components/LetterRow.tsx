import { Table } from "@mantine/core";
import { LetterEntity } from "../entities/letter.entity.ts";
import classes from "./alphabet.module.css";

type Props = {
  letter: LetterEntity;
};

export function LetterRow({ letter }: Props) {
  return (
    <Table.Tr>
      <Table.Td>
        <span className={classes.cyrillicGlyph} lang="ru">{letter.cyrillic}</span>
      </Table.Td>
      <Table.Td>
        <span className={classes.latinText}>{letter.latin}</span>
      </Table.Td>
      <Table.Td>
        <span className={classes.ipaTag}>[{letter.ipa}]</span>
      </Table.Td>
    </Table.Tr>
  );
}
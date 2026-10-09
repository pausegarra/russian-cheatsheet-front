import { Table } from "@mantine/core";
import { WordEntity, translationText } from "../entities/word.entity.ts";
import { Link } from "react-router-dom";
import { IconEye } from "@tabler/icons-react";
import classes from "./vocabulary.module.css";
import sharedClasses from "../../common/components/components.module.css";

type Props = {
  word: WordEntity;
};

export function WordRow({ word }: Props) {
  return (
    <Table.Tr>
      <Table.Td>
        <span className={classes.wordRussian} lang="ru">{word.russian}</span>
      </Table.Td>
      <Table.Td>
        <span className={classes.wordEnglish}>{translationText(word, 'en')}</span>
      </Table.Td>
      <Table.Td>
        <span className={sharedClasses.badge}>{word.type}</span>
      </Table.Td>
      <Table.Td style={{ textAlign: 'center' }}>
        <Link
          to={`/vocabulary/${word.id}`}
          className={classes.actionButton}
          aria-label={`View ${word.russian}`}
        >
          <IconEye size={16} />
        </Link>
      </Table.Td>
    </Table.Tr>
  );
}

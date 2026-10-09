import { Table } from '@mantine/core';
import { Layout } from "../components/layout.tsx";
import classes from "./reference.module.css";

const CASES_DATA = [
  {
    tag: 'NOM',
    title: 'Nominative — Кто? Что?',
    question: 'Used to indicate the subject of a sentence (Who? What?).',
    usages: ['To name an object or person', 'To indicate the subject performing the action'],
    exampleRu: 'Это студент.',
    exampleEn: '(This is a student.)',
    endings: [
      { gender: 'Masculine', ending: '–' },
      { gender: 'Feminine', ending: '–а / –я' },
      { gender: 'Neuter', ending: '–о / –е' },
      { gender: 'Plural', ending: '–ы / –и' },
    ],
  },
  {
    tag: 'GEN',
    title: 'Genitive — Кого? Чего?',
    question: 'Used to express possession, absence, and quantity (Whose? Of what?).',
    usages: [
      'Possession (with nouns)',
      'Absence of something (with negation: нет...)',
      'Part of a whole',
      'After numbers (2, 3, 4 → gen. sg.; 5+ → gen. pl.)',
      'Prepositions: из, до, около, после, без, для',
    ],
    exampleRu: 'У меня нет книги.',
    exampleEn: '(I do not have a book.)',
    endings: [
      { gender: 'Masculine', ending: '–а / –я' },
      { gender: 'Feminine', ending: '–ы / –и' },
      { gender: 'Neuter', ending: '–а / –я' },
      { gender: 'Plural', ending: '–ов / –ей / –' },
    ],
  },
  {
    tag: 'DAT',
    title: 'Dative — Кому? Чему?',
    question: 'Used for the indirect object (To whom? To what?).',
    usages: [
      'Recipient of an action (give to, say to)',
      'Expressing age (Мне 20 лет)',
      'Impersonal states (Мне холодно, нужно, можно)',
      'Prepositions: к, по',
    ],
    exampleRu: 'Я звоню другу.',
    exampleEn: '(I am calling a friend.)',
    endings: [
      { gender: 'Masculine', ending: '–у / –ю' },
      { gender: 'Feminine', ending: '–е / –и' },
      { gender: 'Neuter', ending: '–у / –ю' },
      { gender: 'Plural', ending: '–ам / –ям' },
    ],
  },
  {
    tag: 'ACC',
    title: 'Accusative — Кого? Что?',
    question: 'Used for direct objects and destination/motion (Whom? What?).',
    usages: [
      'Direct object of a transitive verb',
      'Direction of motion with в/на (Я иду в школу)',
      'Inanimate masculine/neuter = same as nominative',
      'Animate masculine = same as genitive',
    ],
    exampleRu: 'Я читаю книгу.',
    exampleEn: '(I am reading a book.)',
    endings: [
      { gender: 'Masculine (inanim/anim)', ending: '– / –а (–я)' },
      { gender: 'Feminine', ending: '–у / –ю' },
      { gender: 'Neuter', ending: '–о / –е' },
      { gender: 'Plural (inanim/anim)', ending: '–ы (–и) / –ов (–ей)' },
    ],
  },
  {
    tag: 'INST',
    title: 'Instrumental — Кем? Чем?',
    question: 'Used to show instrument, accompaniment, or role (With whom? With what?).',
    usages: [
      'Tool or instrument used to perform an action',
      'Accompaniment with preposition с (с другом)',
      'Profession or temporary state with быть, работать',
      'Prepositions: с, за, под, над, перед, между',
    ],
    exampleRu: 'Я пишу ручкой.',
    exampleEn: '(I write with a pen.)',
    endings: [
      { gender: 'Masculine', ending: '–ом / –ем' },
      { gender: 'Feminine', ending: '–ой / –ей' },
      { gender: 'Neuter', ending: '–ом / –ем' },
      { gender: 'Plural', ending: '–ами / –ями' },
    ],
  },
  {
    tag: 'PREP',
    title: 'Prepositional — О ком? О чём?',
    question: 'Used exclusively with prepositions (About whom? About what? Where?).',
    usages: [
      'Topic of thought/speech with о/об (думать о друге)',
      'Static location with в/на (Я живу в Москве)',
      'Means of transport with на (на автобусе)',
    ],
    exampleRu: 'Мы говорим о фильме.',
    exampleEn: '(We are talking about the movie.)',
    endings: [
      { gender: 'Masculine', ending: '–е (–ии)' },
      { gender: 'Feminine', ending: '–е (–ии)' },
      { gender: 'Neuter', ending: '–е (–ии)' },
      { gender: 'Plural', ending: '–ах / –ях' },
    ],
  },
];

export default function RussianCasesWithEndings() {
  return (
    <Layout>
      <div className={classes.caseSection}>
        <div>
          <h1 className={classes.heroTitle}>Russian Cases Reference</h1>
          <p className={classes.heroSubtitle}>
            Russian grammar uses six grammatical cases to mark noun, adjective, and pronoun roles in a sentence.
            Below is the comprehensive workbench guide with typical endings and usage examples.
          </p>
        </div>

        {CASES_DATA.map((c) => (
          <div key={c.tag} className={classes.moduleCard}>
            <div className={classes.caseHeader}>
              <div>
                <h2 className={classes.caseTitle}>{c.title}</h2>
                <div className={classes.caseSubtitle}>{c.question}</div>
              </div>
              <span className={classes.moduleId}>[{c.tag}]</span>
            </div>

            <ul className={classes.usageList}>
              {c.usages.map((u, i) => (
                <li key={i}>{u}</li>
              ))}
            </ul>

            <div className={classes.caseExample}>
              <strong style={{ color: 'var(--rc-text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', marginRight: '0.5rem' }}>Example:</strong>
              <span className={classes.caseExampleCyrillic} lang="ru">{c.exampleRu}</span>
              <span className={classes.caseExampleTranslation}>{c.exampleEn}</span>
            </div>

            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th style={{ width: '50%' }}>Gender / Number</Table.Th>
                  <Table.Th style={{ width: '50%' }}>Ending</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {c.endings.map((row) => (
                  <Table.Tr key={row.gender}>
                    <Table.Td>{row.gender}</Table.Td>
                    <Table.Td style={{ fontFamily: 'var(--rc-font-cyrillic)', fontWeight: 500 }} lang="ru">
                      {row.ending}
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </div>
        ))}
      </div>
    </Layout>
  );
}

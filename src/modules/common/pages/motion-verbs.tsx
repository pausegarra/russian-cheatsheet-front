import { Table } from "@mantine/core";
import { Layout } from "../components/layout.tsx";
import classes from "./reference.module.css";

const VERB_PAIRS = [
  { pair: 'идти / ходить', meaning: 'to go (on foot)' },
  { pair: 'ехать / ездить', meaning: 'to go (by transport)' },
  { pair: 'бежать / бегать', meaning: 'to run' },
  { pair: 'лететь / летать', meaning: 'to fly' },
  { pair: 'плыть / плавать', meaning: 'to swim, to sail' },
  { pair: 'ползти / ползать', meaning: 'to crawl' },
  { pair: 'тащить / таскать', meaning: 'to drag, pull' },
  { pair: 'нести / носить', meaning: 'to carry (by hand)' },
  { pair: 'везти / возить', meaning: 'to carry (by vehicle)' },
  { pair: 'гнать / гонять', meaning: 'to drive, chase' },
  { pair: 'катить / катать', meaning: 'to roll' },
  { pair: 'брести / бродить', meaning: 'to wander' },
];

const COMPARISON_ROWS = [
  { verb: 'идти', type: 'Unidirectional (on foot)', example: 'Я иду в парк', translation: 'I am going to the park (now)' },
  { verb: 'ходить', type: 'Multidirectional (on foot)', example: 'Я хожу в парк каждый день', translation: 'I go to the park every day' },
  { verb: 'ехать', type: 'Unidirectional (transport)', example: 'Мы едем в Москву', translation: 'We are driving to Moscow' },
  { verb: 'ездить', type: 'Multidirectional (transport)', example: 'Мы ездим в Москву каждое лето', translation: 'We travel to Moscow every summer' },
];

export default function MotionVerbs() {
  return (
    <Layout>
      <div className={classes.caseSection}>
        <div>
          <h1 className={classes.heroTitle}>Russian Motion Verbs</h1>
          <p className={classes.heroSubtitle}>
            Russian motion verbs distinguish unidirectional movement (one-way, currently happening) from
            multidirectional movement (habitual, round-trip, or without specific direction).
          </p>
        </div>

        <div className={classes.moduleCard}>
          <div className={classes.caseHeader}>
            <h2 className={classes.caseTitle}>1. Core Motion Verb Pairs</h2>
            <span className={classes.moduleId}>[UNIDIR / MULTIDIR]</span>
          </div>
          <div className={classes.verbsPairGrid}>
            {VERB_PAIRS.map((item) => (
              <div key={item.pair} className={classes.verbPairItem}>
                <span className={classes.verbPairCyrillic} lang="ru">{item.pair}</span>
                <span className={classes.verbPairMeaning}>{item.meaning}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={classes.moduleCard}>
          <div className={classes.caseHeader}>
            <h2 className={classes.caseTitle}>2. Base Verb Comparison</h2>
            <span className={classes.moduleId}>[USAGE MATRIX]</span>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th style={{ width: '20%' }}>Verb</Table.Th>
                  <Table.Th style={{ width: '25%' }}>Type</Table.Th>
                  <Table.Th style={{ width: '25%' }}>Example</Table.Th>
                  <Table.Th style={{ width: '30%' }}>Translation</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {COMPARISON_ROWS.map((row) => (
                  <Table.Tr key={row.verb}>
                    <Table.Td style={{ fontFamily: 'var(--rc-font-cyrillic)', fontWeight: 600 }} lang="ru">
                      {row.verb}
                    </Table.Td>
                    <Table.Td>{row.type}</Table.Td>
                    <Table.Td style={{ fontFamily: 'var(--rc-font-cyrillic)' }} lang="ru">
                      {row.example}
                    </Table.Td>
                    <Table.Td style={{ color: 'var(--rc-text-secondary)' }}>
                      {row.translation}
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

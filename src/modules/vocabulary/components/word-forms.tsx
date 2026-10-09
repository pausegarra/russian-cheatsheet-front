import { Grid, Table } from '@mantine/core';
import { WordAspect, WordFormType, WordForms, WordType } from '../entities/word.entity.ts';
import { wordFormGroups } from '../constants.ts';
import classes from './vocabulary.module.css';

type DisplayProps = {
  type: WordType | '' | null;
  aspect: WordAspect | null;
  russian: string;
  forms: WordForms | null;
};

type FormRow = {
  label: string;
  value: string;
};

type DisplayGroup = {
  title: string;
  rows: FormRow[];
};

const FORM_LABELS: Record<WordFormType, string> = {
  ru_base: 'Form',
  ru_noun_sg_nom: 'Nominative',
  ru_noun_sg_gen: 'Genitive',
  ru_noun_sg_dat: 'Dative',
  ru_noun_sg_acc: 'Accusative',
  ru_noun_sg_inst: 'Instrumental',
  ru_noun_sg_prep: 'Prepositional',
  ru_noun_pl_nom: 'Nominative',
  ru_noun_pl_gen: 'Genitive',
  ru_noun_pl_dat: 'Dative',
  ru_noun_pl_acc: 'Accusative',
  ru_noun_pl_inst: 'Instrumental',
  ru_noun_pl_prep: 'Prepositional',
  ru_verb_imperative_sg: 'Singular',
  ru_verb_imperative_pl: 'Plural',
  ru_verb_past_m: 'Masculine',
  ru_verb_past_f: 'Feminine',
  ru_verb_past_n: 'Neuter',
  ru_verb_past_pl: 'Plural',
  ru_verb_presfut_sg1: 'First person singular',
  ru_verb_presfut_sg2: 'Second person singular',
  ru_verb_presfut_sg3: 'Third person singular',
  ru_verb_presfut_pl1: 'First person plural',
  ru_verb_presfut_pl2: 'Second person plural',
  ru_verb_presfut_pl3: 'Third person plural',
  ru_verb_gerund_present: 'Present',
  ru_verb_gerund_past: 'Past',
  ru_verb_participle_active_present: 'Present',
  ru_verb_participle_active_past: 'Past',
  ru_verb_participle_passive_present: 'Present',
  ru_verb_participle_passive_past: 'Past',
  ru_adj_comparative: 'Comparative',
  ru_adj_superlative: 'Superlative',
  ru_adj_short_m: 'Masculine',
  ru_adj_short_f: 'Feminine',
  ru_adj_short_n: 'Neuter',
  ru_adj_short_pl: 'Plural',
  ru_adj_m_nom: 'Nominative',
  ru_adj_m_gen: 'Genitive',
  ru_adj_m_dat: 'Dative',
  ru_adj_m_acc: 'Accusative',
  ru_adj_m_inst: 'Instrumental',
  ru_adj_m_prep: 'Prepositional',
  ru_adj_f_nom: 'Nominative',
  ru_adj_f_gen: 'Genitive',
  ru_adj_f_dat: 'Dative',
  ru_adj_f_acc: 'Accusative',
  ru_adj_f_inst: 'Instrumental',
  ru_adj_f_prep: 'Prepositional',
  ru_adj_n_nom: 'Nominative',
  ru_adj_n_gen: 'Genitive',
  ru_adj_n_dat: 'Dative',
  ru_adj_n_acc: 'Accusative',
  ru_adj_n_inst: 'Instrumental',
  ru_adj_n_prep: 'Prepositional',
  ru_adj_pl_nom: 'Nominative',
  ru_adj_pl_gen: 'Genitive',
  ru_adj_pl_dat: 'Dative',
  ru_adj_pl_acc: 'Accusative',
  ru_adj_pl_inst: 'Instrumental',
  ru_adj_pl_prep: 'Prepositional'
};

const imperfectiveFuturePersons = [
  { label: 'First person singular', auxiliary: 'буду' },
  { label: 'Second person singular', auxiliary: 'будешь' },
  { label: 'Third person singular', auxiliary: 'будет' },
  { label: 'First person plural', auxiliary: 'будем' },
  { label: 'Second person plural', auxiliary: 'будете' },
  { label: 'Third person plural', auxiliary: 'будут' }
];

export function WordFormsDisplay({ type, aspect, russian, forms }: DisplayProps) {
  const wordForms = forms ?? {};
  const groups: DisplayGroup[] = [];

  for (const group of wordFormGroups(type)) {
    const isPresentFutureGroup = group.title === 'Present / future';
    const title = isPresentFutureGroup && type === 'verb'
      ? aspect === 'perfective'
        ? 'Future'
        : aspect === 'imperfective'
          ? 'Present'
          : group.title
      : group.title;

    const rows = group.fields
      .map(field => ({ label: FORM_LABELS[field], value: wordForms[field]?.trim() ?? '' }))
      .filter(row => row.value.length > 0);

    if (rows.length > 0) {
      groups.push({ title, rows });
    }

    if (isPresentFutureGroup && type === 'verb' && aspect === 'imperfective') {
      const infinitive = wordForms.ru_base?.trim() || russian?.trim();
      if (infinitive) {
        groups.push({
          title: 'Future',
          rows: imperfectiveFuturePersons.map(({ label, auxiliary }) => ({
            label,
            value: `${auxiliary} ${infinitive}`
          }))
        });
      }
    }
  }

  if (groups.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className={classes.sectionHeading}>Morphological Forms & Inflections</h2>
      <Grid gutter="md">
        {groups.map(group => (
          <Grid.Col key={group.title} span={{ base: 12, md: 6 }}>
            <div className={classes.exampleCard}>
              <div style={{ fontFamily: 'var(--rc-font-mono)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--rc-accent)', textTransform: 'uppercase' }}>
                {group.title}
              </div>
              <Table>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th style={{ width: '50%' }}>Category</Table.Th>
                    <Table.Th style={{ width: '50%' }}>Form</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {group.rows.map(row => (
                    <Table.Tr key={row.label}>
                      <Table.Td style={{ fontSize: '0.8125rem' }}>{row.label}</Table.Td>
                      <Table.Td style={{ fontFamily: 'var(--rc-font-cyrillic)', fontWeight: 500 }} lang="ru">
                        {row.value}
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </div>
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
}

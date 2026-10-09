import { WordFormType, WordType } from './entities/word.entity.ts';

export interface WordFormGroup {
  title: string;
  fields: WordFormType[];
}

const baseGroup: WordFormGroup = { title: 'Base', fields: ['ru_base'] };
const nounGroups: WordFormGroup[] = [
  { title: 'Singular', fields: ['ru_noun_sg_nom', 'ru_noun_sg_gen', 'ru_noun_sg_dat', 'ru_noun_sg_acc', 'ru_noun_sg_inst', 'ru_noun_sg_prep'] },
  { title: 'Plural', fields: ['ru_noun_pl_nom', 'ru_noun_pl_gen', 'ru_noun_pl_dat', 'ru_noun_pl_acc', 'ru_noun_pl_inst', 'ru_noun_pl_prep'] }
];
const verbGroups: WordFormGroup[] = [
  { title: 'Imperative', fields: ['ru_verb_imperative_sg', 'ru_verb_imperative_pl'] },
  { title: 'Past', fields: ['ru_verb_past_m', 'ru_verb_past_f', 'ru_verb_past_n', 'ru_verb_past_pl'] },
  { title: 'Present / future', fields: ['ru_verb_presfut_sg1', 'ru_verb_presfut_sg2', 'ru_verb_presfut_sg3', 'ru_verb_presfut_pl1', 'ru_verb_presfut_pl2', 'ru_verb_presfut_pl3'] },
  { title: 'Gerunds', fields: ['ru_verb_gerund_present', 'ru_verb_gerund_past'] },
  { title: 'Active participles', fields: ['ru_verb_participle_active_present', 'ru_verb_participle_active_past'] },
  { title: 'Passive participles', fields: ['ru_verb_participle_passive_present', 'ru_verb_participle_passive_past'] }
];
const adjectiveGroups: WordFormGroup[] = [
  { title: 'Masculine', fields: ['ru_adj_m_nom', 'ru_adj_m_gen', 'ru_adj_m_dat', 'ru_adj_m_acc', 'ru_adj_m_inst', 'ru_adj_m_prep'] },
  { title: 'Feminine', fields: ['ru_adj_f_nom', 'ru_adj_f_gen', 'ru_adj_f_dat', 'ru_adj_f_acc', 'ru_adj_f_inst', 'ru_adj_f_prep'] },
  { title: 'Neuter', fields: ['ru_adj_n_nom', 'ru_adj_n_gen', 'ru_adj_n_dat', 'ru_adj_n_acc', 'ru_adj_n_inst', 'ru_adj_n_prep'] },
  { title: 'Plural', fields: ['ru_adj_pl_nom', 'ru_adj_pl_gen', 'ru_adj_pl_dat', 'ru_adj_pl_acc', 'ru_adj_pl_inst', 'ru_adj_pl_prep'] },
  { title: 'Short forms', fields: ['ru_adj_short_m', 'ru_adj_short_f', 'ru_adj_short_n', 'ru_adj_short_pl'] },
  { title: 'Degrees', fields: ['ru_adj_comparative', 'ru_adj_superlative'] }
];

export function wordFormGroups(type: WordType | '' | null): WordFormGroup[] {
  switch (type) {
    case 'noun':
      return [baseGroup, ...nounGroups];
    case 'verb':
      return [baseGroup, ...verbGroups];
    case 'adjective':
    case 'pronoun':
      return [baseGroup, ...adjectiveGroups];
    case 'adverb':
    case 'expression':
    case 'other':
    default:
      return [baseGroup];
  }
}

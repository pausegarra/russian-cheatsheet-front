import { WordAspect, WordFormType, WordForms, WordType } from './entities/word.entity.ts';

export interface WordFormGroup {
  title: string;
  fields: WordFormType[];
}

export const wordTypeOptions: WordType[] = [
  'noun', 'pronoun', 'verb', 'adjective', 'adverb', 'expression', 'other'
];

export const wordAspectOptions: WordAspect[] = ['imperfective', 'perfective', 'both'];

const baseGroup: WordFormGroup = { title: 'Base', fields: ['ru_base'] };
const nounGroups: WordFormGroup[] = [
  { title: 'Noun · singular', fields: ['ru_noun_sg_nom', 'ru_noun_sg_gen', 'ru_noun_sg_dat', 'ru_noun_sg_acc', 'ru_noun_sg_inst', 'ru_noun_sg_prep'] },
  { title: 'Noun · plural', fields: ['ru_noun_pl_nom', 'ru_noun_pl_gen', 'ru_noun_pl_dat', 'ru_noun_pl_acc', 'ru_noun_pl_inst', 'ru_noun_pl_prep'] }
];
const verbGroups: WordFormGroup[] = [
  { title: 'Verb · imperative', fields: ['ru_verb_imperative_sg', 'ru_verb_imperative_pl'] },
  { title: 'Verb · past', fields: ['ru_verb_past_m', 'ru_verb_past_f', 'ru_verb_past_n', 'ru_verb_past_pl'] },
  { title: 'Verb · present/future', fields: ['ru_verb_presfut_sg1', 'ru_verb_presfut_sg2', 'ru_verb_presfut_sg3', 'ru_verb_presfut_pl1', 'ru_verb_presfut_pl2', 'ru_verb_presfut_pl3'] },
  { title: 'Verb · gerunds', fields: ['ru_verb_gerund_present', 'ru_verb_gerund_past'] },
  { title: 'Verb · active participles', fields: ['ru_verb_participle_active_present', 'ru_verb_participle_active_past'] },
  { title: 'Verb · passive participles', fields: ['ru_verb_participle_passive_present', 'ru_verb_participle_passive_past'] }
];
const adjectiveGroups: WordFormGroup[] = [
  { title: 'Adjective · masculine', fields: ['ru_adj_m_nom', 'ru_adj_m_gen', 'ru_adj_m_dat', 'ru_adj_m_acc', 'ru_adj_m_inst', 'ru_adj_m_prep'] },
  { title: 'Adjective · feminine', fields: ['ru_adj_f_nom', 'ru_adj_f_gen', 'ru_adj_f_dat', 'ru_adj_f_acc', 'ru_adj_f_inst', 'ru_adj_f_prep'] },
  { title: 'Adjective · neuter', fields: ['ru_adj_n_nom', 'ru_adj_n_gen', 'ru_adj_n_dat', 'ru_adj_n_acc', 'ru_adj_n_inst', 'ru_adj_n_prep'] },
  { title: 'Adjective · plural', fields: ['ru_adj_pl_nom', 'ru_adj_pl_gen', 'ru_adj_pl_dat', 'ru_adj_pl_acc', 'ru_adj_pl_inst', 'ru_adj_pl_prep'] },
  { title: 'Adjective · short forms', fields: ['ru_adj_short_m', 'ru_adj_short_f', 'ru_adj_short_n', 'ru_adj_short_pl'] },
  { title: 'Adjective · degrees', fields: ['ru_adj_comparative', 'ru_adj_superlative'] }
];

export function wordFormGroups(type: WordType | ''): WordFormGroup[] {
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

const allFormTypes = [
  ...baseGroup.fields,
  ...nounGroups.flatMap(group => group.fields),
  ...verbGroups.flatMap(group => group.fields),
  ...adjectiveGroups.flatMap(group => group.fields)
];

export function emptyWordForms(): WordForms {
  return Object.fromEntries(allFormTypes.map(formType => [formType, ''])) as WordForms;
}

export function normalizeWordForms(forms?: WordForms | null): WordForms {
  const normalized = emptyWordForms();
  allFormTypes.forEach(formType => {
    normalized[formType] = forms?.[formType] ?? '';
  });
  return normalized;
}

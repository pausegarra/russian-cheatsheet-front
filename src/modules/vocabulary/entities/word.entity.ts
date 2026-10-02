export type WordType = 'adjective' | 'adverb' | 'expression' | 'noun' | 'other' | 'pronoun' | 'verb';
export type WordAspect = 'imperfective' | 'perfective' | 'both';
export type WordRelationType = 'related' | 'synonym' | 'antonym';

export interface RelatedWordEntity {
  id: string;
  russian: string;
  relation: WordRelationType;
}

export type WordFormType =
  | 'ru_base'
  | 'ru_noun_sg_nom' | 'ru_noun_sg_gen' | 'ru_noun_sg_dat' | 'ru_noun_sg_acc' | 'ru_noun_sg_inst' | 'ru_noun_sg_prep'
  | 'ru_noun_pl_nom' | 'ru_noun_pl_gen' | 'ru_noun_pl_dat' | 'ru_noun_pl_acc' | 'ru_noun_pl_inst' | 'ru_noun_pl_prep'
  | 'ru_verb_imperative_sg' | 'ru_verb_imperative_pl'
  | 'ru_verb_past_m' | 'ru_verb_past_f' | 'ru_verb_past_n' | 'ru_verb_past_pl'
  | 'ru_verb_presfut_sg1' | 'ru_verb_presfut_sg2' | 'ru_verb_presfut_sg3'
  | 'ru_verb_presfut_pl1' | 'ru_verb_presfut_pl2' | 'ru_verb_presfut_pl3'
  | 'ru_verb_gerund_present' | 'ru_verb_gerund_past'
  | 'ru_verb_participle_active_present' | 'ru_verb_participle_active_past'
  | 'ru_verb_participle_passive_present' | 'ru_verb_participle_passive_past'
  | 'ru_adj_comparative' | 'ru_adj_superlative'
  | 'ru_adj_short_m' | 'ru_adj_short_f' | 'ru_adj_short_n' | 'ru_adj_short_pl'
  | 'ru_adj_m_nom' | 'ru_adj_m_gen' | 'ru_adj_m_dat' | 'ru_adj_m_acc' | 'ru_adj_m_inst' | 'ru_adj_m_prep'
  | 'ru_adj_f_nom' | 'ru_adj_f_gen' | 'ru_adj_f_dat' | 'ru_adj_f_acc' | 'ru_adj_f_inst' | 'ru_adj_f_prep'
  | 'ru_adj_n_nom' | 'ru_adj_n_gen' | 'ru_adj_n_dat' | 'ru_adj_n_acc' | 'ru_adj_n_inst' | 'ru_adj_n_prep'
  | 'ru_adj_pl_nom' | 'ru_adj_pl_gen' | 'ru_adj_pl_dat' | 'ru_adj_pl_acc' | 'ru_adj_pl_inst' | 'ru_adj_pl_prep';

export type WordForms = Partial<Record<WordFormType, string>>;

export interface WordEntity {
  id: string;
  russian: string;
  type: WordType | '' | null;
  aspect: WordAspect | null;
  forms?: WordForms | null;
  publishedAt: string | null;
  externalId?: string | null;
  translations: WordTranslationEntity[];
  relatedWords?: RelatedWordEntity[];
  usage?: string | null;
  audioUrl?: string | null;
  checksum?: string | null;
}

export interface WordTranslationEntity {
  language: string;
  text: string;
  managedBy?: 'OPENRUSSIAN' | 'MANUAL';
  position: number;
}

export function translationText(word: WordEntity, language: string): string {
  return (word.translations ?? [])
    .filter(translation => translation.language === language)
    .sort((left, right) => left.position - right.position)
    .map(translation => translation.text)
    .join('; ');
}

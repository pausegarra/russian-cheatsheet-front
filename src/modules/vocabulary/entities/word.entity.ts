import { ConjugationEntity } from "./conjugation.entity.ts";
import { WordCasesEntity } from "./cases.entity.ts";

export interface WordEntity {
  id: string;
  russian: string;
  english: string;
  spanish: string;
  type: string;
  conjugations: ConjugationEntity;
  cases: WordCasesEntity;
}
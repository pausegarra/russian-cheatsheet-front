import { ConjugationEntity } from "./conjugation.entity.ts";

export interface WordEntity {
  id: string;
  russian: string;
  english: string;
  spanish: string;
  type: string;
  conjugations: ConjugationEntity;
}
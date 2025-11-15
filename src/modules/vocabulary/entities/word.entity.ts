import { ConjugationEntity } from "./conjugation.entity.ts";
import { WordCasesEntity } from "./cases.entity.ts";
import { WordDeclinationMatrixEntity } from "./word-declination-matrix.ts";

export interface WordEntity {
  id: string;
  russian: string;
  english: string;
  spanish: string;
  type: string;
  conjugations: ConjugationEntity;
  declinations: WordCasesEntity;
  declinationMatrix: WordDeclinationMatrixEntity;
  publishedAt: string | null;
}
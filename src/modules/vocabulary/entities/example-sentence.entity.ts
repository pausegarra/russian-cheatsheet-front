export interface ExampleSentenceEntity {
  id: string;
  russian: string;
  translations: ExampleTranslationEntity[];
  contributor: string | null;
  audioUrl: string | null;
  checksum: string;
  linkedWordIds: string[];
}

export interface ExampleTranslationEntity {
  language: string;
  text: string;
  position: number;
}

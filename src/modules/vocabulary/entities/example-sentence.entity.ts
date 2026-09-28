export interface ExampleSentenceEntity {
  id: string;
  externalId: string;
  russian: string;
  translations: ExampleTranslationEntity[];
  contributor: string | null;
  audioUrl: string | null;
  checksum: string;
  linkedWordExternalIds: string[];
}

export interface ExampleTranslationEntity {
  language: string;
  text: string;
  position: number;
}

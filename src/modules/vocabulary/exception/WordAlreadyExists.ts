export class WordAlreadyExists extends Error {

  constructor(public readonly russian: string) {
    super(`Word with russian ${russian} already exists`);
  }

}
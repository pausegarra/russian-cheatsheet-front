import { LetterEntity } from "../entities/letter.entity.ts";

export class AlphabetService {

  constructor(
    private readonly words: LetterEntity[]
  ) {}

  public getAlphabet(): LetterEntity[] {
    return this.words;
  }

}
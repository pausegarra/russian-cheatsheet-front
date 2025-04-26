import { LetterEntity } from "../entities/letter.entity.ts";
import { IFetchService } from "@betino/fetch";

export class AlphabetService {

  constructor(
    private readonly fetch: IFetchService
  ) {}

  public async getAlphabet(): Promise<LetterEntity[]> {
    return await this.fetch.get<LetterEntity[]>("/api/letters");
  }

}
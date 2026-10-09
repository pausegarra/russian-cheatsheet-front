import { WordEntity } from "../entities/word.entity.ts";
import { IFetchService } from "@betino/fetch";
import { Paginated } from "../../common/responses/paginated.ts";
import { ExampleSentenceEntity } from "../entities/example-sentence.entity.ts";

export class WordService {

  constructor(private readonly fetch: IFetchService) {}

  public async getWords(page: number, search: string): Promise<Paginated<WordEntity>> {
    const pageSubtracted = page - 1;
    return await this.fetch.get<Paginated<WordEntity>>(`/api/v1/words?page=${pageSubtracted}&search=${search}&perPage=25`);
  }

  public getWord(id: string): Promise<WordEntity> {
    return this.fetch.get<WordEntity>(`/api/v1/words/${id}`);
  }

  public getWordExamples(id: string, page = 0, perPage = 10): Promise<Paginated<ExampleSentenceEntity>> {
    return this.fetch.get<Paginated<ExampleSentenceEntity>>(`/api/v1/words/${id}/examples?page=${page}&perPage=${perPage}`);
  }

}

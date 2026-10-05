import { WordEntity } from "../entities/word.entity.ts";
import { IFetchService } from "@betino/fetch";
import { Paginated } from "../../common/responses/paginated.ts";
import { AuthService } from "../../auth/contracts/auth-service.ts";
import { WordAlreadyExists } from "../exception/WordAlreadyExists.ts";
import { BadRequest } from "../../common/exception/bad-request.ts";
import { ExampleSentenceEntity } from "../entities/example-sentence.entity.ts";

export class WordService {

  constructor(
    private readonly fetch: IFetchService,
    private readonly authService: AuthService
  ) {}

  public async getWords(page: number, search: string): Promise<Paginated<WordEntity>> {
    const pageSubtracted = page - 1;
    return await this.fetch.get<Paginated<WordEntity>>(`/api/words?page=${pageSubtracted}&search=${search}&perPage=25`);
  }

  public async getWordsUnpublished(page: number, search: string): Promise<Paginated<WordEntity>> {
    const token = this.authService.getAccessToken()
    const pageSubtracted = page - 1;
    return await this.fetch.get<Paginated<WordEntity>>(`/api/words/unpublished?page=${pageSubtracted}&search=${search}&perPage=25`, {}, {
      Authorization: `Bearer ${token}`
    });
  }

  public getWord(id: string): Promise<WordEntity> {
    return this.fetch.get<WordEntity>(`/api/words/${id}`);
  }

  public getWordExamples(id: string, page = 0, perPage = 10): Promise<Paginated<ExampleSentenceEntity>> {
    return this.fetch.get<Paginated<ExampleSentenceEntity>>(`/api/words/${id}/examples?page=${page}&perPage=${perPage}`);
  }

  public async updateWord(word: WordEntity): Promise<void> {
    const token = this.authService.getAccessToken()
    await this.fetch.put<{ resourceId: string }>(`/api/words/${word.id}`, this.toManualWordRequest(word), {
      Authorization: `Bearer ${token}`
    });
  }

  public async publishWord(word: WordEntity): Promise<void> {
    const token = this.authService.getAccessToken()
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/words/${word.id}/publish`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw {
        status: response.status
      };
    }
  }

  public async deleteWord(wordId: string): Promise<void> {
    const token = this.authService.getAccessToken()
    await this.fetch.delete<void>(`/api/words/${wordId}`, {
      Authorization: `Bearer ${token}`
    });
  }

  public async createWord(word: WordEntity): Promise<string> {
    try {
      const token = this.authService.getAccessToken()
      const response = await this.fetch.post<{ resourceId: string }>(`/api/words`, this.toManualWordRequest(word), {
        Authorization: `Bearer ${token}`
      });
      return response.resourceId;
    } catch (e: any) {
      if (e.status === 400 && e.error.code === 'WORD_ALREADY_EXISTS') {
        throw new WordAlreadyExists(word.russian);
      }

      if (e.status === 400 && e.error.code === 'ILLEGAL_ARGUMENT') {
        throw new BadRequest(e.error.message);
      }

      throw e;
    }
  }

  private toManualWordRequest(word: WordEntity) {
    const translations = (word.translations ?? [])
      .filter(translation => word.externalId == null || translation.language !== 'en')
      .map(({ language, text, position }) => ({ language, text, position }));

    return {
      russian: word.russian,
      type: word.type,
      aspect: word.aspect,
      translations,
      forms: word.forms
    };
  }

}

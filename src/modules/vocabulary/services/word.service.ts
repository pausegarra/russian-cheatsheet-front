import { WordEntity } from "../entities/word.entity.ts";
import { IFetchService } from "@betino/fetch";
import { Paginated } from "../../common/responses/paginated.ts";
import { AuthService } from "../../auth/contracts/auth-service.ts";
import { WordAlreadyExists } from "../exception/WordAlreadyExists.ts";
import { BadRequest } from "../../common/exception/bad-request.ts";

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

  public async updateWord(word: WordEntity): Promise<void> {
    const token = this.authService.getAccessToken()
    await this.fetch.put<{ resourceId: string }>(`/api/words/${word.id}`, word, {
      Authorization: `Bearer ${token}`
    });
  }

  public async publishWord(word: WordEntity): Promise<void> {
    const token = this.authService.getAccessToken()
    await fetch(`${import.meta.env.VITE_API_URL}/api/words/${word.id}/publish`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  public async createWord(word: WordEntity): Promise<string> {
    try {
      const token = this.authService.getAccessToken()
      const response = await this.fetch.post<{ resourceId: string }>(`/api/words`, word, {
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

}
import { WordEntity } from "../entities/word.entity.ts";
import { IFetchService } from "@betino/fetch";
import { Paginated } from "../../common/responses/paginated.ts";
import { AuthService } from "../../auth/contracts/auth-service.ts";
import { WordAlreadyExists } from "../exception/WordAlreadyExists.ts";
import { UnahandledError } from "../../common/exception/unahandled-error.ts";
import { Forbidden } from "../../common/exception/forbidden.ts";
import { BadRequest } from "../../common/exception/bad-request.ts";
import { Unauthenticated } from "../../common/exception/unauithenticated.ts";

export class WordService {

  constructor(
    private readonly fetch: IFetchService,
    private readonly authService: AuthService
  ) {}

  public async getWords(page: number, search: string): Promise<Paginated<WordEntity>> {
    const pageSubtracted = page - 1;
    return await this.fetch.get<Paginated<WordEntity>>(`/api/words?page=${pageSubtracted}&search=${search}`);
  }

  public getWord(id: string): Promise<WordEntity> {
    return this.fetch.get<WordEntity>(`/api/words/${id}`);
  }

  public async updateWord(word: WordEntity): Promise<void> {
    const token = this.authService.getAccessToken()
    await this.fetch.patch<{ resourceId: string }>(`/api/words/${word.id}`, word, {
      Authorization: `Bearer ${token}`
    });
  }

  public async createWord(word: WordEntity): Promise<string> {
    try {
      const token = this.authService.getAccessToken()
      const response = await this.fetch.post<{ resourceId: string }>(`/api/words`, word, {
        Authorization: `Bearer ${token}`
      });
      return response.resourceId;
    } catch (e) {
      if (e.status === 400 && e.error.code === 'WORD_ALREADY_EXISTS') {
        throw new WordAlreadyExists(word.russian);
      }

      if (e.status === 400 && e.error.code === 'ILLEGAL_ARGUMENT') {
        throw new BadRequest(e.error.message);
      }

      if (e.status === 401) {
        throw new Unauthenticated();
      }

      if (e.status === 403) {
        throw new Forbidden();
      }

      throw new UnahandledError(e.message);
    }
  }

}
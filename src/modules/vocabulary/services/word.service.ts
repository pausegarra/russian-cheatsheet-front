import { WordEntity } from "../entities/word.entity.ts";
import { IFetchService } from "@betino/fetch";
import { Paginated } from "../../common/responses/paginated.ts";
import { AuthService } from "../../auth/contracts/auth-service.ts";

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

  public async createWord(word: WordEntity): Promise<string> {
    const token = this.authService.getAccessToken()
    const response = await this.fetch.post<{ resourceId: string }>(`/api/words`, word, {
      Authorization: `Bearer ${token}`
    });
    return response.resourceId;
  }

}
import { WordService } from "./services/word.service.ts";
import { fetchService } from "../common/root.ts";
import { authService } from "../auth/root.ts";

export const wordService = new WordService(fetchService, authService);
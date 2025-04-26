import { WordService } from "./services/word.service.ts";
import { fetchService } from "../common/root.ts";

export const wordService = new WordService(fetchService);
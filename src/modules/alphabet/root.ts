import { AlphabetService } from "./services/alphabet.service.ts";
import { fetchService } from "../common/root.ts";

export const alphabetService = new AlphabetService(fetchService);
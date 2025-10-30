import { AlphabetService } from "./services/alphabet.service.ts";
import letters from "./data/letters.json";
import { LetterEntity } from "./entities/letter.entity.ts";

const lettersEntities: LetterEntity[] = letters.map(letter => new LetterEntity(letter._id, letter._cyrillic, letter._latin, letter._ipa));

export const alphabetService = new AlphabetService(lettersEntities);
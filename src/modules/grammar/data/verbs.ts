export const presentConjugation = [
  { person: "я", first: "рабо́таю", second: "говорю́" },
  { person: "ты", first: "рабо́таешь", second: "говори́шь" },
  { person: "он / она́ / оно́", first: "рабо́тает", second: "говори́т" },
  { person: "мы", first: "рабо́таем", second: "говори́м" },
  { person: "вы", first: "рабо́таете", second: "говори́те" },
  { person: "они́", first: "рабо́тают", second: "говоря́т" },
] as const;

export const pastConjugation = [
  { gender: "Masculine", form: "чита́л" },
  { gender: "Feminine", form: "чита́ла" },
  { gender: "Neuter", form: "чита́ло" },
  { gender: "Plural", form: "чита́ли" },
] as const;

export const aspectExamples = [
  {
    aspect: "Imperfective",
    meaning: "Process, repetition, or a general fact",
    example: "Я чита́ю кни́гу.",
    translation: "I am reading a book.",
  },
  {
    aspect: "Perfective",
    meaning: "A completed action or result",
    example: "Я прочита́ю кни́гу.",
    translation: "I will read the book to the end.",
  },
] as const;

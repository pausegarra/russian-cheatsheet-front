export const quantityRules = [
  {
    pattern: "Ends in 1 (except 11)",
    nounForm: "Nominative singular",
    examples: "оди́н стол, одна́ кни́га, одно́ окно́",
  },
  {
    pattern: "Ends in 2–4 (except 12–14)",
    nounForm: "Genitive singular",
    examples: "два стола́, три кни́ги, четы́ре окна́",
  },
  {
    pattern: "Ends in 0 or 5–9",
    nounForm: "Genitive plural",
    examples: "пять столо́в, пять книг, пять о́кон",
  },
  {
    pattern: "11–14",
    nounForm: "Genitive plural",
    examples: "оди́ннадцать столо́в, двена́дцать книг",
  },
] as const;

export const numeralExamples = [
  {
    title: "Ages",
    examples: [
      { russian: "Мне оди́н год.", translation: "I am one year old." },
      { russian: "Мне два го́да.", translation: "I am two years old." },
      {
        russian: "Мне два́дцать оди́н год.",
        translation: "I am twenty-one years old.",
      },
      { russian: "Мне два́дцать пять лет.", translation: "I am twenty-five." },
    ],
  },
  {
    title: "Dates",
    examples: [
      {
        russian: "Сего́дня деся́тое октября́.",
        translation: "Today is October 10.",
      },
      {
        russian: "Я роди́лся деся́того октября́.",
        translation: "I was born on October 10.",
      },
    ],
  },
  {
    title: "At the hour",
    examples: [
      { russian: "в час", translation: "at one o’clock" },
      { russian: "в два часа́", translation: "at two o’clock" },
      { russian: "в пять часо́в", translation: "at five o’clock" },
    ],
  },
] as const;

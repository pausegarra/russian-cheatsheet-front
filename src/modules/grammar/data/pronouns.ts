export const personalPronounCases = [
  {
    caseName: "Nominative",
    forms: ["я", "ты", "он", "она́", "оно́", "мы", "вы", "они́"],
  },
  {
    caseName: "Genitive",
    forms: ["меня́", "тебя́", "его́", "её", "его́", "нас", "вас", "их"],
  },
  {
    caseName: "Dative",
    forms: ["мне", "тебе́", "ему́", "ей", "ему́", "нам", "вам", "им"],
  },
  {
    caseName: "Accusative",
    forms: ["меня́", "тебя́", "его́", "её", "его́", "нас", "вас", "их"],
  },
  {
    caseName: "Instrumental",
    forms: ["мно́й", "тобо́й", "им", "е́й", "им", "на́ми", "ва́ми", "и́ми"],
  },
  {
    caseName: "Prepositional",
    forms: [
      "обо мне",
      "о тебе́",
      "о нём",
      "о ней",
      "о нём",
      "о нас",
      "о вас",
      "о них",
    ],
  },
] as const;

export const possessivePronouns = [
  {
    meaning: "My",
    masculine: "мой",
    feminine: "моя́",
    neuter: "моё",
    plural: "мои́",
  },
  {
    meaning: "Your (ты)",
    masculine: "твой",
    feminine: "твоя́",
    neuter: "твоё",
    plural: "твои́",
  },
  {
    meaning: "One's own",
    masculine: "свой",
    feminine: "своя́",
    neuter: "своё",
    plural: "свои́",
  },
  {
    meaning: "Our",
    masculine: "наш",
    feminine: "на́ша",
    neuter: "на́ше",
    plural: "на́ши",
  },
  {
    meaning: "Your (вы)",
    masculine: "ваш",
    feminine: "ва́ша",
    neuter: "ва́ше",
    plural: "ва́ши",
  },
] as const;

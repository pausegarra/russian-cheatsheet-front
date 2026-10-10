export type RussianCaseId =
  | "nominative"
  | "genitive"
  | "dative"
  | "accusative"
  | "instrumental"
  | "prepositional";

export type RussianCaseGuide = {
  id: RussianCaseId;
  name: string;
  russianName: string;
  question: string;
  role: string;
  uses: string[];
  prepositions: string[];
  example: string;
  translation: string;
  studentForm: string;
};

export const russianCases: RussianCaseGuide[] = [
  {
    id: "nominative",
    name: "Nominative",
    russianName: "именительный",
    question: "кто́? что?",
    role: "Names the person or thing that the sentence is about, often its subject.",
    uses: ["Subject of an action", "Names or identifies something"],
    prepositions: [],
    example: "Студе́нт изуча́ет язы́к.",
    translation: "A student is studying a language.",
    studentForm: "студе́нт",
  },
  {
    id: "genitive",
    name: "Genitive",
    russianName: "родительный",
    question: "кого́? чего́?",
    role: "Connects a noun to possession, absence, or quantity.",
    uses: ["Possession", "Absence after нет", "Quantity"],
    prepositions: ["у", "без", "из"],
    example: "У студе́нта нет биле́та.",
    translation: "The student has no ticket.",
    studentForm: "студе́нта",
  },
  {
    id: "dative",
    name: "Dative",
    russianName: "дательный",
    question: "кому́? чему́?",
    role: "Marks a recipient or the person affected by a state.",
    uses: ["Recipient of an action", "Person experiencing a state"],
    prepositions: ["к"],
    example: "Преподава́тель даёт студе́нту зада́ние.",
    translation: "The teacher gives the student an assignment.",
    studentForm: "студе́нту",
  },
  {
    id: "accusative",
    name: "Accusative",
    russianName: "винительный",
    question: "кого́? что?",
    role: "Marks a direct object or, with в and на, a destination.",
    uses: ["Direct object", "Destination after в or на"],
    prepositions: ["в", "на", "через"],
    example: "Я ви́жу студе́нта.",
    translation: "I see the student.",
    studentForm: "студе́нта",
  },
  {
    id: "instrumental",
    name: "Instrumental",
    russianName: "творительный",
    question: "ке́м? че́м?",
    role: "Shows a means, companion, or role.",
    uses: ["Means used for an action", "Companion with с", "Role or profession"],
    prepositions: ["с", "над", "перед"],
    example: "Она́ е́дет с дру́гом.",
    translation: "She is travelling with a friend.",
    studentForm: "студе́нтом",
  },
  {
    id: "prepositional",
    name: "Prepositional",
    russianName: "предложный",
    question: "о ком? о чём? где?",
    role: "Marks a topic or location and always appears with a preposition.",
    uses: ["Topic after о", "Location after в or на"],
    prepositions: ["о", "в", "на"],
    example: "Мы говори́м о студе́нте.",
    translation: "We are talking about the student.",
    studentForm: "о студе́нте",
  },
];

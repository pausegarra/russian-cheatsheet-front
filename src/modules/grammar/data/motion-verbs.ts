export type MotionVerbPair = {
  oneWay: string;
  general: string;
  meaning: string;
};

export const motionVerbPairs: MotionVerbPair[] = [
  { oneWay: "идти́", general: "ходи́ть", meaning: "travel on foot" },
  { oneWay: "е́хать", general: "е́здить", meaning: "travel by vehicle" },
  { oneWay: "бежа́ть", general: "бе́гать", meaning: "run" },
  { oneWay: "лете́ть", general: "лета́ть", meaning: "fly" },
  { oneWay: "плыть", general: "пла́вать", meaning: "swim or travel by water" },
  { oneWay: "нести́", general: "носи́ть", meaning: "carry on foot" },
  { oneWay: "везти́", general: "вози́ть", meaning: "transport by vehicle" },
];

export type MotionVerbPrefix = {
  prefix: string;
  path: string;
  onFoot: string;
  byVehicle: string;
  example: string;
  translation: string;
};

export const motionVerbPrefixes: MotionVerbPrefix[] = [
  {
    prefix: "при-",
    path: "arrival",
    onFoot: "прийти́",
    byVehicle: "прие́хать",
    example: "По́езд прие́хал на ста́нцию.",
    translation: "The train arrived at the station.",
  },
  {
    prefix: "у-",
    path: "departure",
    onFoot: "уйти́",
    byVehicle: "уе́хать",
    example: "Авто́бус уе́хал без нас.",
    translation: "The bus left without us.",
  },
  {
    prefix: "в-",
    path: "entry",
    onFoot: "войти́",
    byVehicle: "въе́хать",
    example: "Она́ вошла́ в ко́мнату.",
    translation: "She entered the room.",
  },
  {
    prefix: "вы-",
    path: "exit",
    onFoot: "вы́йти",
    byVehicle: "вы́ехать",
    example: "Мы вы́шли из до́ма.",
    translation: "We went out of the house.",
  },
  {
    prefix: "по-",
    path: "setting off",
    onFoot: "пойти́",
    byVehicle: "пое́хать",
    example: "Они́ пое́хали ра́но.",
    translation: "They set off early.",
  },
];

type MotionVerbExample = {
  label: string;
  russian: string;
  translation: string;
};

export const motionVerbExamples = {
  oneWayNow: {
    label: "One trip in progress",
    russian: "Я иду́ в библиоте́ку.",
    translation: "I am on my way to the library now.",
  },
  habitual: {
    label: "A usual route",
    russian: "Я хожу́ в библиоте́ку по суббо́там.",
    translation: "I go to the library on Saturdays.",
  },
  pastInProgress: {
    label: "One trip in progress in the past",
    russian: "Он е́хал в Москву́, когда́ слома́лась маши́на.",
    translation: "He was on his way to Moscow when the car broke down.",
  },
  pastCompleted: {
    label: "A completed or repeated trip",
    russian: "Он е́здил в Москву́ в про́шлом ме́сяце.",
    translation: "He went to Moscow last month.",
  },
} satisfies Record<"oneWayNow" | "habitual" | "pastInProgress" | "pastCompleted", MotionVerbExample>;

import { Preposition } from "../types";

export const prepositions: Preposition[] = [
  {
    preposition: "В / Во",
    meaning: `“In”, “into”, or “to” – It shows that something is inside or that you are going inside`,
    usage: `
      With the Accusative case → When there is movement into a place. (to, into).
      With the Prepositional case → When something is already inside. (in, inside).
    `,
    keyRule: `
      Movement → Accusative (to, into)
      No movement → Prepositional (in, inside)
    `,
    examples: `
      With Accusative (movement):
      \t•\tИду в школу → I’m going to school.
      \t•\tПоехал в Москву → I went to Moscow.
      \t•\tСажусь в машину → I’m getting into the car.
      
      With Prepositional (location):
      \t•\tЯ в школе → I’m at school.
      \t•\tОн в Москве → He’s in Moscow.
      \t•\tКнига в сумке → The book is in the bag.
    `,
    specialNote: `
      Sometimes you’ll see Во instead of В → This happens before words starting with В or Ф, to make it easier to pronounce.
      Example:
      \t•\tВо Франции → In France.
      \t•\tВо вторник → On Tuesday.
    `,
    realLifeSituations: `
      \t•\tYou leave home and say: Я иду в магазин → I’m going to the store.
      \t•\tYou are already inside the store and say: Я в магазине → I’m in the store.
    `
  },
  {
    preposition: "НA",
    meaning: `
      \t•\t“On”, “on top of”, “to”, “at”
      \t•\tIt’s used when something is on a surface or when you’re going to an event or public institution.
    `,
    usage: `
      \t•\tWith the Accusative case → When there is movement towards a surface, event, or institution (to).
      \t•\tWith the Prepositional case → When something is already on a surface, event, or institution (on).
    `,
    keyRule: `
      Movement → Accusative (to)
      No movement → Prepositional (on)
    `,
    examples: `
      With Accusative (movement):
      \t•\tИду на работу → I’m going to work.
      \t•\tПоехал на концерт → I went to a concert.
      \t•\tПоставь книгу на стол → Put the book on the table.
      
      With Prepositional (location):
      \t•\tЯ на работе → I’m at work.
      \t•\tОн на концерте → He’s at the concert.
      \t•\tКнига на столе → The book is on the table.
    `,
    specialNote: `
      НА is also used with places like на улице (on the street), на пляже (at the beach), and events: на вечеринке (at a party).
      This is different from English because in English we say “in the street”, but in Russian, it’s НА улице.
    `,
    realLifeSituations: `
      \t•\tYou’re leaving for work:
      Иду на работу → I’m going to work.
      \t•\tYou’re already at work:
      Я на работе → I’m at work.
    `
  },
  {
    preposition: "ИЗ",
    meaning: `“From inside”, or “out of”, or “from” (a place or origin).`,
    usage: `
      \t•\tAlways with the Genitive case.
      \t•\tUse it when:
      \t1.\tYou come out of a place.
      \t2.\tYou say where you are from (origin).
    `,
    keyRule: ``,
    examples: `
      \t•\tВышел из дома → He came out of the house.
      \t•\tДостал книгу из сумки → He took the book out of the bag.
      \t•\tЯ из Испании → I am from Spain.
      \t•\tОн из Москвы → He is from Moscow.
    `,
    specialNote: `
      ИЗ is only for “from inside” a place or as “from (origin)”.
      For “from (a person)” or a point that is not enclosed, we use ОТ.
    `,
    realLifeSituations: `
      \t•\tYou leave your car:
      Выхожу из машины → I’m getting out of the car.
      \t•\tYou introduce yourself:
      Я из Барселоны → I’m from Barcelona.
    `
  },
  {
    preposition: "ОТ",
    meaning: `
      \t•\t“From” — but not from inside like ИЗ.
      \t•\tIt means “from someone” or “from a point” (like distance, direction, origin but not enclosed space).
    `,
    usage: `
      \t•\tAlways with the Genitive case.
      \t•\tUse it when:
      \t1.\tSomething comes from a person (gift, message).
      \t2.\tYou move away from someone or something (not inside).
    `,
    keyRule: ``,
    examples: `
      \t•\tПодарок от мамы → A gift from mom.
      \t•\tСообщение от друга → A message from a friend.
      \t•\tИду от врача домой → I’m going from the doctor’s place to home.
      \t•\tДом далеко от реки → The house is far from the river.
    `,
    specialNote: ``,
    realLifeSituations: `
      \t•\tYou got a call:
      Звонок от коллеги → A call from a colleague.
      \t•\tYou’re leaving a friend’s house:
      Ухожу от друга → I’m leaving my friend’s place.
    `
  },
  {
    preposition: "ДО",
    meaning: `
      \t•\t“Until”, “up to”, “as far as”.
      \t•\tIt shows a limit in space or time.
    `,
    usage: `
      \t•\tAlways with the Genitive case.
      \t•\tUse it for:
      \t1.\tDistance/Direction → up to a certain place.
      \t2.\tTime → until a certain moment.
    `,
    keyRule: ``,
    examples: `
      \t•\tДойти до станции → To walk up to the station.
      \t•\tДо магазина 5 минут → It’s 5 minutes to the store.
      \t•\tДо встречи! → Until we meet! (See you later!)
      \t•\tРаботаю до 6 часов → I work until 6 o’clock.
    `,
    specialNote: `
      ДО often pairs with verbs of motion:
      \t•\tдойти до… → to reach
      \t•\tдобежать до… → to run up to
    `,
    realLifeSituations: `
      \t•\tYou’re walking:
      Иду до метро → I’m walking up to the metro.
      \t•\tTalking about time:
      Жду тебя до вечера → I’ll wait for you until evening.
    `
  },
  {
    preposition: "ПО",
    meaning: `
      \t•\t“Along”, “through”, “by”, “according to”, “on”, “via” – it depends on the context.
      \t•\tThink of it as covering an area, direction, or communication method.
    `,
    usage: `
      \t•\tUsually with the Dative case, sometimes with others in idioms.
      \t•\tUse it when talking about:
      \t1.\tMovement within an area (around, along).
      \t2.\tMeans of communication (phone, internet).
      \t3.\tDistribution (each, by something).
      \t4.\tAccording to rules.
    `,
    keyRule: ``,
    examples: `
      1. Along / through (movement)
      \t•\tГуляю по парку → I’m walking through the park.
      \t•\tЕхали по дороге → They drove along the road.
      
      2. Means of communication
      \t•\tПо телефону → On the phone.
      \t•\tПо радио → On the radio.
      
      3. According to
      \t•\tПо закону → According to the law.
      \t•\tПо плану → According to the plan.
      
      4. Distribution / Per
      \t•\tРазделили по одному яблоку каждому → They gave one apple to each person.
    `,
    specialNote: `
      \t•\tIn some cases, ПО can mean “after” (like по окончании = after finishing).
      \t•\tIt’s a very flexible preposition, so context is everything.
    `,
    realLifeSituations: `
      \t•\tTalking about location:
      Прогуливаемся по городу → We’re walking around the city.
      \t•\tTalking on the phone:
      Разговариваю по телефону → I’m speaking on the phone.
    `
  },
  {
    preposition: "С / СО",
    meaning: `
      \t•\tTwo main meanings:
      \t1.\tWith (together with someone or something).
      \t2.\tFrom / off (indicating origin when leaving a surface or place).
    `,
    usage: `
      \t•\tInstrumental case → “WITH” (companionship, addition).
      \t•\tGenitive case → “FROM” (origin, from a surface).
    `,
    keyRule: ``,
    examples: `
      1. WITH (Instrumental)
      \t•\tЧай с молоком → Tea with milk.
      \t•\tПошёл с другом → He went with a friend.
      \t•\tС фотоаппаратом → With a camera.
      
      2. FROM (Genitive)
      \t•\tСойти с поезда → To get off the train.
      \t•\tСнять книгу с полки → Take the book off the shelf.
      \t•\tС работы домой → From work (to home).
    `,
    specialNote: `
      \t•\tС is versatile, so check the case:
      \t•\tIf the next noun is Instrumental → WITH.
      \t•\tIf the next noun is Genitive → FROM.
    `,
    realLifeSituations: `
      \t•\tOrdering tea:
      Чай с лимоном → Tea with lemon.
      \t•\tLeaving somewhere:
      Иду с работы домой → I’m going home from work.
    `
  },
  {
    preposition: "У",
    meaning: `
      \t•\t“At” someone’s place.
      \t•\tUsed to express possession (“I have…”).
      \t•\tAlso means near / by / next to.
    `,
    usage: `
      \t•\tAlways with the Genitive case.
      \t•\tUse it in three main situations:
      \t1.\tAt someone’s place (location).
      \t2.\tTo say you have something.
      \t3.\tTo mean near or by something.
    `,
    keyRule: ``,
    examples: `
      1. At someone’s place
      \t•\tЯ у друга → I’m at a friend’s place.
      \t•\tМы у врача → We’re at the doctor’s.
      
      2. To say “I have”
      \t•\tУ меня есть книга → I have a book (literally: “At me there is a book”).
      \t•\tУ него есть машина → He has a car.
      
      3. Near / by something
      \t•\tУ магазина → By the store.
      \t•\tСтою у дома → I’m standing by the house.
    `,
    specialNote: `
      \t•\tRussian doesn’t use “to have” as a verb. Instead, it uses У + Genitive + есть (there is):
      У меня есть… = “I have…”.
    `,
    realLifeSituations: `
      \t•\tVisiting someone:
      Я у мамы → I’m at my mom’s.
      \t•\tSaying what you own:
      У нас есть кот → We have a cat.
      \t•\tGiving directions:
      Встретимся у метро → Let’s meet by the metro.
    `
  },
  {
    preposition: "К",
    meaning: `
      \t•\t“To”, “toward”, “towards” (used mainly with people, sometimes places or objects).
      \t•\tIt shows movement toward a goal, person, or object but not inside (that’s for В or НА).
    `,
    usage: `
      \t•\tAlways with the Dative case.
      \t•\tUse it when:
      \t1.\tYou’re going to a person.
      \t2.\tYou’re approaching an object or point.
      \t3.\tYou mean toward something in a broader sense.
    `,
    keyRule: ``,
    examples: `
      Toward a person
      \t•\tИду к врачу → I’m going to the doctor.
      \t•\tПошёл к другу → He went to a friend.
      
      Toward an object or place
      \t•\tПодошёл к окну → He approached the window.
      \t•\tПодойти к столу → Come to the table.
      
      Toward an abstract goal
      \t•\tСтремиться к успеху → To strive for success.
    `,
    specialNote: ``,
    realLifeSituations: `
      \t•\tDoctor appointment:
      Я иду к врачу → I’m going to the doctor.
      \t•\tAsking someone to approach:
      Подойди ко мне → Come to me.
    `
  },
  {
    preposition: "ВМЕСТО",
    meaning: `
      \t•\t“Instead of”.
      \t•\tIt shows replacement or substitution.
    `,
    usage: `
      \t•\tAlways with the Genitive case.
      \t•\tUse it when:
      \t1.\tSomething replaces something else.
      \t2.\tYou want to say “instead of doing X, you did Y”.
    `,
    keyRule: ``,
    examples: `
      \t•\tВместо чая я выпил кофе → Instead of tea, I drank coffee.
      \t•\tВместо мамы пришёл папа → Instead of mom, dad came.
      \t•\tВместо того чтобы отдыхать, он работал → Instead of resting, he worked.
    `,
    specialNote: `
      \t•\tOften combined with того чтобы + verb for actions:
      \t•\tВместо того чтобы учиться, он играл в игры → Instead of studying, he played games.
    `,
    realLifeSituations: `
      \t•\tOrdering at a café:
      Вместо сока можно чай? → Can I have tea instead of juice?
      \t•\tTalking about a change of plans:
      Мы пошли в парк вместо кино → We went to the park instead of the cinema.
    `
  },
  {
    preposition: "ПОД",
    meaning: `
      \t•\t“Under”, “beneath”, “below”, or even “towards” (in some figurative uses).
      \t•\tIt indicates position under something or movement to under something.
    `,
    usage: `
      \t•\tWith Accusative → Movement to a position under something.
      \t•\tWith Instrumental → Location under something (no movement).
    `,
    keyRule: ``,
    examples: `
      With Accusative (movement):
      \t•\tПоложил мяч под стол → I put the ball under the table.
      \t•\tЗашёл под мост → He went under the bridge.
      
      With Instrumental (location):
      \t•\tКот под столом → The cat is under the table.
      \t•\tМы под деревом → We are under a tree.
    `,
    specialNote: `
      \t•\tSometimes ПОД appears in idiomatic expressions:
      \t•\tПод вечер → Toward evening.
      \t•\tПод Новый год → Around New Year’s.
    `,
    realLifeSituations: `
      \t•\tLooking for your phone:
      Телефон под кроватью → The phone is under the bed.
      \t•\tGiving instructions:
      Поставь коробку под стул → Put the box under the chair.
    `
  },
  {
    preposition: "НАД",
    meaning: `
      \t•\t“Above”, “over”, “on top of”.
      \t•\tIt indicates that something is higher than something else (no contact, just above).
    `,
    usage: `
      \t•\tAlways with the Instrumental case.
      \t•\tUse it when describing position above something or control/dominance (figurative).
    `,
    keyRule: ``,
    examples: `
      Position above:
      \t•\tЛампа висит над столом → The lamp is hanging above the table.
      \t•\tСамолёт летит над городом → The plane is flying over the city.
      
      Figurative:
      \t•\tОн смеялся надо мной → He laughed at me (literally: “above me”).
    `,
    specialNote: `
      \t•\tНАД is rarely used for movement (that’s usually через, “over/across”), but in figurative speech, it appears a lot.
    `,
    realLifeSituations: `
      \t•\tLooking up:
      Солнце над горизонтом → The sun is above the horizon.
      \t•\tTalking about superiority:
      Начальник стоит над подчинёнными → The boss is over the subordinates (in authority).
    `
  },
  {
    preposition: "ПЕРЕД",
    meaning: `
      \t•\t“In front of”, “before” (in terms of time or space).
      \t•\tIt shows something located ahead of something else or happening before an event.
    `,
    usage: `
      \t•\tAlways with the Instrumental case.
      \t•\tUse it for:
      \t1.\tSpace → in front of something.
      \t2.\tTime → before something happens.
    `,
    keyRule: ``,
    examples: `
      Space (position):
      \t•\tМашина стоит перед домом → The car is in front of the house.
      \t•\tПеред входом была очередь → There was a line in front of the entrance.
      Time:
      \t•\tПеред ужином помой руки → Wash your hands before dinner.
      \t•\tПеред экзаменом я нервничал → I was nervous before the exam.
    `,
    specialNote: `
      \t•\tUnlike НАПРОТИВ (which means “opposite”), ПЕРЕД means directly in front of something, near it.
    `,
    realLifeSituations: `
      \t•\tWaiting in front of a store:
      Мы стоим перед магазином → We are standing in front of the store.
      \t•\tTalking about time:
      Перед сном я читаю книгу → I read a book before going to bed.
    `
  },
  {
    preposition: "ЗА",
    meaning: `
      \t•\tMain meanings:
      \t1.\tBehind / beyond (spatial position).
      \t2.\tFor (support or exchange).
      \t3.\tDuring (time-related, like “in” a certain period).
    `,
    usage: `
      \t•\tAccusative case → Movement behind something or goal/action for something.
      \t•\tInstrumental case → Location behind something (no movement).
    `,
    keyRule: ``,
    examples: `
      1. Spatial – Behind
      \t•\tПоставь стул за стол → Put the chair behind the table (movement → Acc.).
      \t•\tКошка за диваном → The cat is behind the sofa (location → Inst.).
      
      2. For (in favor of)
      \t•\tЯ за тебя! → I’m for you! (support).
      \t•\tСпасибо за помощь → Thank you for the help.
      
      3. Exchange
      \t•\tКупил за 100 рублей → Bought it for 100 rubles.
      
      4. Time
      \t•\tЗа час до поезда → An hour before the train.
      \t•\tЗа неделю он прочитал книгу → He read the book in a week.
    `,
    specialNote: `
      \t•\tЗА with toasts: За тебя! = “Cheers to you!”
      \t•\tWith Accusative, it’s often used to express support or a goal.
    `,
    realLifeSituations: `
      \t•\tYou’re moving furniture:
      Поставь коробку за дверь → Put the box behind the door.
      \t•\tAt dinner:
      Поднимем бокалы за здоровье! → Let’s raise our glasses for health! (toast).
    `
  },
  {
    preposition: "ПРО",
    meaning: `
      What does it mean?
      \t•\t“About”, “concerning”, “regarding”.
      \t•\tUsed when talking about a topic or subject.
    `,
    usage: `
      \t•\tAlways with the Accusative case.
      \t•\tUse it when you want to say what something is about, or you’re talking about someone/something.
    `,
    keyRule: ``,
    examples: `
      \t•\tКнига про Москву → A book about Moscow.
      \t•\tФильм про любовь → A movie about love.
      \t•\tМы говорили про тебя → We talked about you.
      \t•\tРасскажи про свою семью → Tell me about your family.
    `,
    specialNote: `
      \t•\tПРО is more informal. In formal or written speech, Russians often use О + Prepositional case (e.g., о Москве = about Moscow).
      \t•\tExample:
      Книга о Москве (formal) = Книга про Москву (colloquial).
    `,
    realLifeSituations: `
      \t•\tAsking in conversation:
      Что ты знаешь про этот фильм? → What do you know about this movie?
      \t•\tTalking about gossip:
      Они говорили про соседей → They were talking about the neighbors.
    `
  },
  {
    preposition: "БЕЗ",
    meaning: `
      \t•\t“Without”.
      \t•\tUsed to show the absence of something or someone.
    `,
    usage: `
      \t•\tAlways with the Genitive case.
    `,
    keyRule: ``,
    examples: `
      \t•\tКофе без сахара → Coffee without sugar.
      \t•\tЖизнь без любви → Life without love.
      \t•\tНе могу жить без тебя → I can’t live without you.
      \t•\tСуп без соли невкусный → Soup without salt is tasteless.
    `,
    specialNote: `
      \t•\tVery common in food orders and romantic phrases.
      \t•\tPairs naturally with Genitive because it’s about “lack/absence” (Genitive loves negation).
    `,
    realLifeSituations: `
      \t•\tOrdering in a café:
      Кофе без молока, пожалуйста → Coffee without milk, please.
      \t•\tTalking dramatically:
      Жизнь без музыки — ошибка → Life without music is a mistake.
    `
  },
  {
    preposition: "ДЛЯ",
    meaning: `
      What does it mean?
      \t•\t“For” (indicating purpose, benefit, or intended recipient).
      \t•\tShows who or what something is meant for.
    `,
    usage: `
      \t•\tAlways with the Genitive case.
    `,
    keyRule: ``,
    examples: `
      \t•\tПодарок для мамы → A gift for mom.
      \t•\tЭто важно для меня → This is important for me.
      \t•\tСредство для мытья посуды → A product for washing dishes.
      \t•\tУроки для детей → Lessons for children.
    `,
    specialNote: `
      \t•\tUse ДЛЯ for benefit/purpose, not for giving something physically (that would be “кому” with Dative, no preposition).
    `,
    realLifeSituations: `
      \t•\tIn a store:
      Есть что-то для волос? → Do you have something for hair?
      \t•\tTalking about meaning:
      Эта работа для опытных людей → This job is for experienced people.
    `
  },
  {
    preposition: "ПРИ",
    meaning: `
      \t•\tIt can mean:
      \t1.\t“During”, “at the time of”.
      \t2.\t“In the presence of”.
      \t3.\t“Under (a condition or authority)”.
    `,
    usage: `
      \t•\tAlways with the Prepositional case.
    `,
    keyRule: ``,
    examples: `
      1. During / At the time of
      \t•\tПри Петре I → Under Peter I (during his reign).
      \t•\tПри советской власти → Under Soviet rule.
      
      2. In the presence of
      \t•\tНе говори об этом при детях → Don’t talk about this in front of the kids.
      
      3. Under a condition
      \t•\tПри необходимости звоните → Call if necessary (literally: under necessity).
      \t•\tПри хорошем настроении всё возможно → When in a good mood, everything is possible.
    `,
    specialNote: `
      \t•\tПРИ does not mean physical proximity (like “near”), even though it feels like “at”. It’s more about circumstances, conditions, or presence
    `,
    realLifeSituations: `
      \t•\tTalking about history:
      Это было при царе → This happened under the Tsar.
      \t•\tSetting a condition:
      При желании можно всё → If you want, anything is possible.
    `
  },
  {
    preposition: "МЕЖДУ",
    meaning: `
      What does it mean?
      \t•\t“Between” or “among”.
      \t•\tIt indicates a position in the middle of two or more objects/people.
    `,
    usage: `
      \t•\tAlways with the Instrumental case.
    `,
    keyRule: ``,
    examples: `
      \t•\tМежду столом и окном → Between the table and the window.
      \t•\tСидеть между друзьями → To sit between friends.
      \t•\tМежду городами 50 километров → There are 50 kilometers between the cities.
    `,
    specialNote: `
      \t•\tUnlike English “among” vs “between”, Russian МЕЖДУ works for both.
      \t•\tIt’s also used figuratively:
      Между нами говоря → Between us, honestly.
    `,
    realLifeSituations: `
      \t•\tGiving directions:
      Аптека находится между банком и магазином → The pharmacy is between the bank and the store.
      \t•\tTalking socially:
      Разговор между коллегами → A conversation between colleagues.
    `
  }
];
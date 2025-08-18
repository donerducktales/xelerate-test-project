import { Locale } from "next-intl";

export type Translations = {
  [key in Locale]: string;
};

export interface AchievementsList {
  id: number;
  achievementName: Translations;
  achievementDescription: Translations;
  completed: boolean;
  opened: boolean;
  additionalInfo: Translations;
  achievementType: "platform" | "specialist";
  progress: number;
  maxProgress: number;
  rank: 1 | 2 | 3;
}

export const achievementsList: AchievementsList[] = [
  {
    id: 0,
    achievementName: {
      en: "Documentary",
      uk: "Документаліст",
    },
    achievementDescription: {
      en: "Added 30 useful documents.",
      uk: "Додано 30 корисних документів.",
    },
    completed: false,
    opened: true,
    additionalInfo: {
      en: "lorem ipsum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, quos.",
      uk: "Lorem Ipsum є псевдо- латинський текст використовується у веб - дизайні, типографіка, верстка,",
    },
    achievementType: "platform",
    progress: 7,
    maxProgress: 8,
    rank: 1,
  },
  {
    id: 1,
    achievementName: {
      en: "Documentary",
      uk: "Документаліст",
    },
    achievementDescription: {
      en: "Added 40 useful documents.",
      uk: "Додано 40 корисних документів.",
    },
    completed: false,
    opened: true,
    additionalInfo: {
      en: "lorem ipsum",
      uk: "Лорем Іпсум",
    },
    achievementType: "platform",
    progress: 3,
    maxProgress: 10,
    rank: 2,
  },
  {
    id: 2,
    achievementName: {
      en: "Article author",
      uk: "Автор статей",
    },
    achievementDescription: {
      en: "For articles published on the platform",
      uk: "За опубліковані статті на платформі",
    },
    completed: true,
    opened: true,
    additionalInfo: {
      en: "something...",
      uk: "щось...",
    },
    achievementType: "platform",
    progress: 8,
    maxProgress: 8,
    rank: 1,
  },
  {
    id: 3,
    achievementName: {
      en: "Introduction",
      uk: "Знайомство",
    },
    achievementDescription: {
      en: "For introduction",
      uk: "За знайомство",
    },
    completed: true,
    opened: false,
    additionalInfo: {
      en: "lorem ipsum again...",
      uk: "лорем іпсум знову...",
    },
    achievementType: "specialist",
    progress: 0,
    maxProgress: 8,
    rank: 1,
  },
  {
    id: 4,
    achievementName: {
      en: "Documentary",
      uk: "Документаліст",
    },
    achievementDescription: {
      en: "Added 30 useful documents.",
      uk: "Додано 30 корисних документів.",
    },
    completed: true,
    opened: false,
    additionalInfo: {
      en: "lorem ipsum again... х2",
      uk: "лорем іпсум знову... х2",
    },
    achievementType: "platform",
    progress: 0,
    maxProgress: 8,
    rank: 1,
  },
  {
    id: 5,
    achievementName: {
      en: "Blogger",
      uk: "Блогер",
    },
    achievementDescription: {
      en: "Posted 10 posts",
      uk: "Виставлено 10 постів",
    },
    completed: false,
    opened: true,
    additionalInfo: {
      en: "lorem ipsum obviously...",
      uk: "лорем іпсум очевидно...",
    },
    achievementType: "platform",
    progress: 5,
    maxProgress: 8,
    rank: 1,
  },
  {
    id: 6,
    achievementName: {
      en: "Blogger 2",
      uk: "Блогер 2",
    },
    achievementDescription: {
      en: "Posted 25 posts",
      uk: "Виставлено 25 постів",
    },
    completed: true,
    opened: false,
    additionalInfo: {
      en: "Have you ever expected something but lorem ipsum?)",
      uk: "Чи ти чогось очікував окрім лорем іпсум?)",
    },
    achievementType: "platform",
    progress: 0,
    maxProgress: 8,
    rank: 1,
  },
  {
    id: 7,
    achievementName: {
      en: "Blogger 3",
      uk: "Блогер 3",
    },
    achievementDescription: {
      en: "Posted 50 posts",
      uk: "Виставлено 50 постів",
    },
    completed: true,
    opened: false,
    additionalInfo: {
      en: "lorem ipsum... okay",
      uk: "лорем іпсум... добре"
    },
    achievementType: "platform",
    progress: 0,
    maxProgress: 8,
    rank: 1,
  },
];

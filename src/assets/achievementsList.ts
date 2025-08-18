export interface AchievementsList {
  id: number;
  achievementName: string;
  achievementDescription: string;
  completed: boolean;
  opened: boolean;
  additionalInfo: string;
  achievementType: "platform" | "specialist";
  progress: number;
  maxProgress: number;
  rank: 1 | 2 | 3;
}

export const achievementsList: AchievementsList[] = [
  {
    id: 0,
    achievementName: "Документаліст",
    achievementDescription: "Додано 30 корисних документів.",
    completed: false,
    opened: true,
    additionalInfo:
      "lorem ipsum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, quos.",
    achievementType: "platform",
    progress: 7,
    maxProgress: 8,
    rank: 1,
  },
  {
    id: 1,
    achievementName: "Документаліст",
    achievementDescription: "Додано 40 корисних документів.",
    completed: false,
    opened: true,
    additionalInfo: "lorem ipsum Lorem ipsum dolor, sit amet.",
    achievementType: "platform",
    progress: 3,
    maxProgress: 10,
    rank: 2,
  },
  {
    id: 2,
    achievementName: "Автор статей",
    achievementDescription: "За опубліковані статті на платформі",
    completed: true,
    opened: true,
    additionalInfo: "lorem ipsum, sit amet.",
    achievementType: "platform",
    progress: 8,
    maxProgress: 8,
    rank: 1,
  },
  {
    id: 3,
    achievementName: "Знайомство",
    achievementDescription: "За знайомство",
    completed: true,
    opened: false,
    additionalInfo: "lorem ipsum, sit fffamet.",
    achievementType: "specialist",
    progress: 0,
    maxProgress: 8,
    rank: 1,
  },
  {
    id: 4,
    achievementName: "Документаліст",
    achievementDescription: "Додано 30 корисних документів",
    completed: true,
    opened: false,
    additionalInfo: "lorem ipsum, sit fffamet.",
    achievementType: "platform",
    progress: 0,
    maxProgress: 8,
    rank: 1,
  },
  {
    id: 5,
    achievementName: "Блогер",
    achievementDescription: "Виставлено 10 постів",
    completed: false,
    opened: true,
    additionalInfo: "lorem ipsum, sit fffamet.",
    achievementType: "platform",
    progress: 5,
    maxProgress: 8,
    rank: 1,
  },
  {
    id: 6,
    achievementName: "Блогер 2",
    achievementDescription: "Виставлено 25 постів",
    completed: true,
    opened: false,
    additionalInfo: "lorem ipsum, sit fffamet.",
    achievementType: "platform",
    progress: 0,
    maxProgress: 8,
    rank: 1,
  },
  {
    id: 7,
    achievementName: "Блогер 3",
    achievementDescription: "Виставлено 50 постів",
    completed: true,
    opened: false,
    additionalInfo: "lorem ipsum, sit fffamet.",
    achievementType: "platform",
    progress: 0,
    maxProgress: 8,
    rank: 1,
  },
];

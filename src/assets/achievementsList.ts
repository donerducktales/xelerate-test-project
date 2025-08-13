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
    progress: 2,
    maxProgress: 8,
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
  },
];

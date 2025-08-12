interface AchievementsList {
  id: number;
  achievementName: string;
  achievementDescription: string;
  completed: boolean;
  opened: boolean;
  additionalInfo: string;
  achievementType: "platform" | "specialist";
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
  },
  {
    id: 1,
    achievementName: "Документаліст",
    achievementDescription: "Додано 40 корисних документів.",
    completed: false,
    opened: true,
    additionalInfo: "lorem ipsum Lorem ipsum dolor, sit amet.",
    achievementType: "platform",
  },
  {
    id: 2,
    achievementName: "Автор статей",
    achievementDescription: "За опубліковані статті на платформі",
    completed: true,
    opened: true,
    additionalInfo: "lorem ipsum, sit amet.",
    achievementType: "platform",
  },
  {
    id: 3,
    achievementName: "Знайомство",
    achievementDescription: "За знайомство",
    completed: true,
    opened: true,
    additionalInfo: "lorem ipsum, sit fffamet.",
    achievementType: "specialist",
  },
];

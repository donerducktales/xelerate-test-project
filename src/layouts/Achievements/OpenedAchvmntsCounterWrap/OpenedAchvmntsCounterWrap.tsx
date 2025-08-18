import OpenedAchvmntsCounter from "@/components/OpenedAchvmntsCounter/OpenedAchvmntsCounter";
import styles from "./OpenedAchvmntsCounterWrap.module.scss";
import { achievementsList } from "@/assets/achievementsList";
import { Locale, useLocale } from "next-intl";

type Translations = {
  [key in Locale]: string;
};

interface OpenedAchievementsCounter {
  id: number;
  amount: number;
  achievementType: Translations;
}

const openedAchievementsCounter: OpenedAchievementsCounter[] = [
  {
    id: 0,
    amount: achievementsList.filter((el) => el.rank === 1).length,
    achievementType: {
      en: "Achievements unlocked 1 rank",
      uk: "Досягнень відрито 1 рангу",
    },
  },
  {
    id: 1,
    amount: achievementsList.filter((el) => el.rank === 2).length,
    achievementType: {
      en: "Achievements unlocked 2 rank",
      uk: "Досягнень відрито 2 рангу",
    },
  },
  {
    id: 2,
    amount: achievementsList.filter((el) => el.rank === 3).length,
    achievementType: {
      en: "Achievements unlocked 3 rank",
      uk: "Досягнень відрито 3 рангу",
    },
  },
  {
    id: 3,
    amount: 143 - achievementsList.length,
    achievementType: {
      en: "Achievements locked",
      uk: "Досягнень закрито",
    },
  },
];

export default function OpenedAchvmntsCounterWrap() {
  const locale = useLocale();

  return (
    <div className={styles.openedAchievementsCounterWrap}>
      {openedAchievementsCounter.map((el) => (
        <OpenedAchvmntsCounter
          key={el.id}
          amount={el.amount}
          achvmntType={el.achievementType[locale]}
        />
      ))}
    </div>
  );
}

import SelectAchievementCard from "@/components/SelectAchievementCard/SelectAchievementCard";
import styles from "./SelectAchievementsWrap.module.scss";
import { achievementsList } from "@/assets/achievementsList";
import { Locale, useLocale } from "next-intl";

type Translations = {
  [key in Locale]: string;
};

interface AchievementVariant {
  id: number;
  orderNumber: string;
  name: Translations;
  clickName: "all" | "platform" | "specialist";
  achievementsQuantity: number;
}

const achievementVariant: AchievementVariant[] = [
  {
    id: 0,
    orderNumber: "01",
    name: {
      en: "All achievements",
      uk: "Всі досягнення",
    },
    clickName: "all",
    achievementsQuantity: achievementsList.length,
  },
  {
    id: 1,
    orderNumber: "02",
    name: {
      en: "Achievements on platform",
      uk: "Досягнення на платформі",
    },
    clickName: "platform",
    achievementsQuantity: achievementsList.filter(
      (el) => el.achievementType === "platform"
    ).length,
  },
  {
    id: 2,
    orderNumber: "03",
    name: {
      en: "Specialist's achievements",
      uk: "Досягнення спеціаліста",
    },
    clickName: "specialist",
    achievementsQuantity: achievementsList.filter(
      (el) => el.achievementType === "specialist"
    ).length,
  },
];

export default function SelectAchievementsWrap() {
  const locale = useLocale();

  return (
    <div className={styles.selectAchievementsWrap}>
      {achievementVariant.map((el) => (
        <SelectAchievementCard
          key={el.id}
          orderNumber={el.orderNumber}
          name={el.name[locale]}
          achievementsQuantity={el.achievementsQuantity}
          clickName={el.clickName}
        />
      ))}
    </div>
  );
}

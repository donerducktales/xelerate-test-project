import SelectAchievementCard from "@/components/SelectAchievementCard/SelectAchievementCard";
import styles from "./SelectAchievementsWrap.module.scss";

interface AchievementVariant {
  id: number;
  orderNumber: string;
  name: string;
  clickName: "all" | "platform" | "specialist";
  achievementsQuantity: number;
}

const achievementVariant: AchievementVariant[] = [
  {
    id: 0,
    orderNumber: "01",
    name: "Всі досягнення",
    clickName: "all",
    achievementsQuantity: 134,
  },
  {
    id: 1,
    orderNumber: "02",
    name: "Досягнення на платформі",
    clickName: "platform",
    achievementsQuantity: 33,
  },
  {
    id: 2,
    orderNumber: "03",
    name: "Досягнення спеціаліста",
    clickName: "specialist",
    achievementsQuantity: 22,
  },
];

export default function SelectAchievementsWrap() {
  return (
    <div className={styles.selectAchievementsWrap}>
      {achievementVariant.map((el) => (
        <SelectAchievementCard
          key={el.id}
          orderNumber={el.orderNumber}
          name={el.name}
          achievementsQuantity={el.achievementsQuantity}
          clickName={el.clickName}
        />
      ))}
    </div>
  );
}

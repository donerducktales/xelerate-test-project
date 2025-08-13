import { AchievementsList } from "@/assets/achievementsList";
import styles from "./AchievementTypeWrapper.module.scss";

interface AchievementTypeWrapperProps {
  achievementName: string;
  achievementQuantity: number;
  achievementCard: AchievementsList[]; 
}

export default function AchievementTypeWrapper({
  achievementName,
  achievementQuantity,
  achievementCard,
}: AchievementTypeWrapperProps) {
  return (
    <section className={styles.achievementTypeWrapper}>
      <div className={styles.achievementTypeWrapText}>
        <h1>{achievementName}</h1>
        <p>{achievementQuantity}</p>
      </div>

      {/* {achievementCard.map((el) => (
        <div key={el.id}>
          <p>{el.achievementName}</p>
        </div>
      ))} */}
    </section>
  );
}

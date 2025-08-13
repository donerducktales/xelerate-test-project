import { AchievementsList } from "@/assets/achievementsList";
import styles from "./AchievementTypeWrapper.module.scss";
import AchievementTypeCard from "../AchievementTypeCard/AchievementTypeCard";

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
      <div className={styles.achievementTypeCards}>
        {achievementCard.map((el) => (
          <AchievementTypeCard
            id={el.id}
            key={el.id}
            achievementName={el.achievementName}
            achievementDescription={el.achievementDescription}
            completed={el.completed}
            opened={el.opened}
            additionalInfo={el.additionalInfo}
            achievementType={el.achievementType}
            progress={el.progress}
            maxProgress={el.maxProgress}
          />
        ))}
      </div>
    </section>
  );
}

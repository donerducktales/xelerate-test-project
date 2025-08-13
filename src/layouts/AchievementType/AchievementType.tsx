"use client";

import useSelectAchievementsStore from "@/lib/SelectAchievementState";
import styles from "./AchievementType.module.scss";
import AchievementTypeWrapper from "@/components/AchievementTypeWrapper/AchievementTypeWrapper";
import { AchievementsList, achievementsList } from "@/assets/achievementsList";

const platformAchievements: AchievementsList[] = achievementsList.filter(
  (el) => el.achievementType === "platform"
);
const specialistAchievements: AchievementsList[] = achievementsList.filter(
  (el) => el.achievementType === "specialist"
);

export default function AchievementType() {
  const { value } = useSelectAchievementsStore();

  return (
    <section className={styles.achievementType}>
      {value === "all" ? (
        <>
          <AchievementTypeWrapper
            achievementName="Досягнення на платформі"
            achievementQuantity={platformAchievements.length}
            achievementCard={platformAchievements}
          />
          <AchievementTypeWrapper
            achievementName="Досягнення спеціаліста"
            achievementQuantity={specialistAchievements.length}
            achievementCard={specialistAchievements}
          />
        </>
      ) : value === "platform" ? (
        <AchievementTypeWrapper
          achievementName="Досягнення на платформі"
          achievementQuantity={platformAchievements.length}
          achievementCard={platformAchievements}
        />
      ) : value === "specialist" ? (
        <AchievementTypeWrapper
          achievementName="Досягнення спеціаліста"
          achievementQuantity={specialistAchievements.length}
          achievementCard={specialistAchievements}
        />
      ) : (
        ""
      )}
    </section>
  );
}

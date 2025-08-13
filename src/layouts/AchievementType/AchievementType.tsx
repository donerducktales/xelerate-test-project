"use client";

import useSelectAchievementsStore from "@/lib/SelectAchievementState";
import styles from "./AchievementType.module.scss";

export default function AchievementType() {
  const { value } = useSelectAchievementsStore();

  return (
    <section className={styles.achievementType}>
      {value === "all" ? (
        <p>All</p>
      ) : value === "platform" ? (
        <p>Platform</p>
      ) : value === "specialist" ? (
        <p>Specialist</p>
      ) : (
        ""
      )}
    </section>
  );
}

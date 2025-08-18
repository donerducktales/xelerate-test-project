"use client";

import useSelectAchievementsStore from "@/lib/SelectAchievementState";
import styles from "./AchievementType.module.scss";
import AchievementTypeWrapper from "@/components/AchievementTypeWrapper/AchievementTypeWrapper";
import { AchievementsList, achievementsList } from "@/assets/achievementsList";
import { useTranslations } from "next-intl";

const platformAchievements: AchievementsList[] = achievementsList.filter(
  (el) => el.achievementType === "platform"
);
const specialistAchievements: AchievementsList[] = achievementsList.filter(
  (el) => el.achievementType === "specialist"
);

export default function AchievementType() {
  const { value } = useSelectAchievementsStore();
  const t = useTranslations("homePage");

  return (
    <section className={styles.achievementType}>
      {value === "all" ? (
        <>
          <AchievementTypeWrapper
            achievementName={t("achievementType.achievementName.platform")}
            achievementQuantity={platformAchievements.length}
            achievementCard={platformAchievements}
          />
          <AchievementTypeWrapper
            achievementName={t("achievementType.achievementName.specialist")}
            achievementQuantity={specialistAchievements.length}
            achievementCard={specialistAchievements}
          />
        </>
      ) : value === "platform" ? (
        <AchievementTypeWrapper
          achievementName={t("achievementType.achievementName.platform")}
          achievementQuantity={platformAchievements.length}
          achievementCard={platformAchievements}
        />
      ) : value === "specialist" ? (
        <AchievementTypeWrapper
          achievementName={t("achievementType.achievementName.specialist")}
          achievementQuantity={specialistAchievements.length}
          achievementCard={specialistAchievements}
        />
      ) : (
        ""
      )}
    </section>
  );
}

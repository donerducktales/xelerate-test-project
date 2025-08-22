"use client";

import useSelectAchievementsStore from "@/lib/states/SelectAchievementState";
import styles from "./AchievementType.module.scss";
import AchievementTypeWrapper from "@/components/AchievementTypeWrapper/AchievementTypeWrapper";
import { AchievementsList, achievementsList } from "@/assets/achievementsList";
import { useTranslations } from "next-intl";
import useSelectRanksStore from "@/lib/states/SelectRanksState";

export default function AchievementType() {
  const { value } = useSelectAchievementsStore();
  const { rank } = useSelectRanksStore();
  const t = useTranslations("homePage");

  const platformAchievementsBase: AchievementsList[] = achievementsList.filter(
    (el) => el.achievementType === "platform"
  );
  const specialistAchievementsBase: AchievementsList[] =
    achievementsList.filter((el) => el.achievementType === "specialist");

  const filterByRank = (items: AchievementsList[]) => {
    if (rank === "rank1") {
      return items.filter((el) => el.rank === 1);
    } else if (rank === "rank2") {
      return items.filter((el) => el.rank === 2);
    } else if (rank === "rank3") {
      return items.filter((el) => el.rank === 3);
    } else {
      return items;
    }
  };

  const platformAchievements = filterByRank(platformAchievementsBase);
  const specialistAchievements = filterByRank(specialistAchievementsBase);

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

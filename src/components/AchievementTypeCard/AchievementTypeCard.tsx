import { AchievementsList } from "@/assets/achievementsList";
import styles from "./AchievementTypeCard.module.scss";
import Image from "next/image";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

const AchievementCardTopPart = ({
  opened,
  additionalInfo,
}: {
  opened: boolean;
  additionalInfo: string;
}) => {
  "use client";

  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.achievementCardTopPart}>
      {toggle && (
        <div className={styles.achievementCardTopPartContextMenu}>
          {additionalInfo}
        </div>
      )}
      {opened === true ? (
        <Image
          src={"/completed-icon.svg"}
          alt="completed achievement icon"
          width={115}
          height={115}
        />
      ) : (
        <Image
          src={"/closed-achievement-icon.svg"}
          alt="closed achievement icon"
          width={80}
          height={80}
        />
      )}
      <button
        className={styles.achievementCardTopPartButton}
        onClick={() => setToggle(!toggle)}
      >
        <Image src={"/info-icon.svg"} alt="info icon" width={24} height={24} />
      </button>
    </div>
  );
};

const AchievementCardBottomPart = ({
  achievementName,
  completed,
  achievementDescription,
  progress,
  maxProgress,
}: {
  achievementName: string;
  completed: boolean;
  achievementDescription: string;
  progress: number;
  maxProgress: number;
}) => {
  const t = useTranslations("homePage");
  
  return (
    <div className={styles.achievementCardBottomPart}>
      <h1>{achievementName}</h1>
      {completed === true ? (
        <h2>{achievementDescription}</h2>
      ) : (
        <div className={styles.achievementCardBottomPartProgressBar}>
          <div className={styles.bottomPartProgressBarQuantity}>
            <h2>{t("achievementType.achievementTypeCardComponent.h2")}</h2>
            <div>
              <p>
                {progress} / {maxProgress}
              </p>
            </div>
          </div>
          <div className={styles.bottomPartProgressBar}>
            <div
              className={styles.bottomPartProgressBarProgress}
              style={{
                width: `${(progress / maxProgress) * 100}%`,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default function AchievementTypeCard({
  achievementName,
  achievementDescription,
  completed,
  opened,
  additionalInfo,
  progress,
  maxProgress,
}: AchievementsList) {
  const locale = useLocale();
  
  return (
    <div className={styles.achievementTypeCard}>
      <AchievementCardTopPart opened={opened} additionalInfo={additionalInfo[locale]} />
      <AchievementCardBottomPart
        achievementName={achievementName[locale]}
        completed={completed}
        achievementDescription={achievementDescription[locale]}
        progress={progress}
        maxProgress={maxProgress}
      />
    </div>
  );
}

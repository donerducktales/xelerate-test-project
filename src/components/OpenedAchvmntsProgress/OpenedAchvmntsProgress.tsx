import Image from "next/image";
import styles from "./OpenedAchvmntsProgress.module.scss";
import { achievementsList } from "@/assets/achievementsList";
import { useTranslations } from "next-intl";

const OpenedAchievementsProgressText = ({
  openedAchievementsQuantity,
}: {
  openedAchievementsQuantity: number;
}) => {
  const t = useTranslations("homePage");

  return (
    <div className={styles.achievementsProgressTextWrapper}>
      <div className={styles.textWrapperHeader}>
        <Image
          src={"/achievement-icon.svg"}
          alt="achievement icon"
          width={24}
          height={24}
        />
        <h1>
          {t("achievements.openedAchievementsProgress.textWrapperHeader")}
          {/* між компонентом/леяутом achievements і openedAchievementsProgress є OpenedAchievements.tsx, але я вирішив не додавати ще одну ланку, тому в файлі перекладів я зробив саме таким чином */}
        </h1>
      </div>
      <p>{openedAchievementsQuantity} / 143</p>
    </div>
  );
};

export default function OpenedAchvmntsProgress() {
  const openedAchievementsQuantity = achievementsList.length;

  return (
    <div className={styles.openedAchievementsProgress}>
      <OpenedAchievementsProgressText openedAchievementsQuantity={openedAchievementsQuantity}/>
      <div className={styles.achievementsProgressBar}>
        <div
          style={{
            width: `${(openedAchievementsQuantity / 143) * 100}%`,
            background:
              "linear-gradient(to left, rgba(213, 186, 148, 1), rgba(185, 135, 86, 1), rgba(83, 68, 52, 1))",
            borderRadius: "8px",
          }}
        />
        <div
          style={{
            width: `${100 - (openedAchievementsQuantity / 143) * 100}%`,
            background: `rgba(83, 83, 83, 1)`,
            borderRadius: "8px",
          }}
        />
      </div>
    </div>
  );
}

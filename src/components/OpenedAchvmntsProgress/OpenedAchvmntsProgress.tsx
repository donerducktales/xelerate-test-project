import Image from "next/image";
import styles from "./OpenedAchvmntsProgress.module.scss";
import scssvariables from "@/styles/_variables.module.scss";

export default function OpenedAchvmntsProgress() {
  return (
    <div className={styles.openedAchievementsProgress}>
      <div className={styles.achievementsProgressTextWrapper}>
        <div className={styles.textWrapperHeader}>
          <Image
            src={"/achievement-icon.svg"}
            alt="achievement icon"
            width={24}
            height={24}
          />
          <h1>Відкрито досягнень</h1>
        </div>
        <p>18 / 143</p>
      </div>
      <div className={styles.achievementsProgressBar}>
        <div
          style={{
            width: "150px",
            background:
              "linear-gradient(to left, rgba(213, 186, 148, 1), rgba(185, 135, 86, 1), rgba(83, 68, 52, 1))",
            borderRadius: "8px",
          }}
        />
        <div
          style={{
            width: "100%",
            background: `rgba(83, 83, 83, 1)`,
            borderRadius: "8px",
          }}
        />
      </div>
    </div>
  );
}

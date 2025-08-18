import { useTranslations } from 'next-intl'
import styles from './Achievements.module.scss'
import OpenedAchievements from './OpenedAchievements/OpenedAchievements'
import SelectAchievements from './SelectAchievements/SelectAchievements'

export default function Achievements() {
  const t = useTranslations("homePage");
  
  return (
    <section className={styles.achievements}>
      <div className={styles.achievementsHeaderWrapper}>
        <h1>{t("achievements.h1")}</h1>
        <h2>{t("achievements.h2")}</h2>
      </div>
      <OpenedAchievements />
      <SelectAchievements />
    </section>
  )
}

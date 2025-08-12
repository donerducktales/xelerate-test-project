import styles from './Achievements.module.scss'
import OpenedAchievements from './OpenedAchievements/OpenedAchievements'
import SelectAchievements from './SelectAchievements/SelectAchievements'

export default function Achievements() {
  return (
    <section className={styles.achievements}>
      <div className={styles.achievementsHeaderWrapper}>
        <h1>Досягнення</h1>
        <h2>Ви крутіші, ніж 87% спеціалістів!</h2>
      </div>
      <OpenedAchievements />
      <SelectAchievements />
    </section>
  )
}

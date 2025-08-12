import SelectAchievementsWrap from '../SelectAchievementsWrap/SelectAchievementsWrap'
import styles from './SelectAchievements.module.scss'

export default function SelectAchievements() {
  return (
    <section className={styles.selectAchievements}>
      <SelectAchievementsWrap />
    </section>
  )
}

import OpenedAchvmntsProgress from '@/components/OpenedAchvmntsProgress/OpenedAchvmntsProgress';
import styles from './OpenedAchievements.module.scss';

export default function OpenedAchievements() {
  return (
    <section className={styles.openedAchievements}>
      <OpenedAchvmntsProgress />
    </section>
  )
}

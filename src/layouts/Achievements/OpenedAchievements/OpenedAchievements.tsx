import OpenedAchvmntsProgress from '@/components/OpenedAchvmntsProgress/OpenedAchvmntsProgress';
import styles from './OpenedAchievements.module.scss';
import OpenedAchvmntsCounterWrap from '../OpenedAchvmntsCounterWrap/OpenedAchvmntsCounterWrap';

export default function OpenedAchievements() {
  return (
    <section className={styles.openedAchievements}>
      <OpenedAchvmntsProgress />
      <OpenedAchvmntsCounterWrap />
    </section>
  )
}

import OpenedAchvmntsCounter from '@/components/OpenedAchvmntsCounter/OpenedAchvmntsCounter';
import styles from './OpenedAchvmntsCounterWrap.module.scss';

export default function OpenedAchvmntsCounterWrap() {
  return (
    <div className={styles.openedAchievementsCounterWrap}>
      <OpenedAchvmntsCounter
        amount={8}
        achvmntType="Досягнень відрито 1 рангу"
      />
      <OpenedAchvmntsCounter
        amount={7}
        achvmntType="Досягнень відрито 2 рангу"
      />
      <OpenedAchvmntsCounter
        amount={3}
        achvmntType="Досягнень відрито 3 рангу"
      />
      <OpenedAchvmntsCounter
        amount={127}
        achvmntType="Досягнень закрито"
      />
    </div>
  );
}

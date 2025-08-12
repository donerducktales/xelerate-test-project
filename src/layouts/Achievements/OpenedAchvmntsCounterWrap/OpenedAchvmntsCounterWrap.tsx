import OpenedAchvmntsCounter from '@/components/OpenedAchvmntsCounter/OpenedAchvmntsCounter';
import styles from './OpenedAchvmntsCounterWrap.module.scss';
import { achievementsList } from '@/assets/achievementsList';

export default function OpenedAchvmntsCounterWrap() {
  const closedAchievements = 143 - achievementsList.length;
  
  return (
    <div className={styles.openedAchievementsCounterWrap}>
      <OpenedAchvmntsCounter
        amount={4}
        achvmntType="Досягнень відрито 1 рангу"
      />
      <OpenedAchvmntsCounter
        amount={0}
        achvmntType="Досягнень відрито 2 рангу"
      />
      <OpenedAchvmntsCounter
        amount={0}
        achvmntType="Досягнень відрито 3 рангу"
      />
      <OpenedAchvmntsCounter
        amount={closedAchievements}
        achvmntType="Досягнень закрито"
      />
    </div>
  );
}

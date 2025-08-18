import styles from './page.module.scss'
import { raleway } from "@/assets/fonts/fonts";
import Achievements from '@/layouts/Achievements/Achievements';
import AchievementType from '@/layouts/AchievementType/AchievementType';

export default function Home() {
  return (
    <main className={`${styles.main} ${raleway.className}`}>
      <div className={styles.mainWrapper}>
        <Achievements />
        <AchievementType />
      </div>
    </main>
  );
}

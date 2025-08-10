import styles from '@/app/page.module.scss'
import { raleway } from '../assets/fonts/fonts';
import Achievements from '@/layouts/Achievements/Achievements';

export default function Home() {
  return (
    <main className={`${styles.main} ${raleway.className}`}>
      <div className={styles.mainWrapper}>
        <Achievements />
      </div>
    </main>
  );
}

import styles from '@/app/page.module.scss'
import { raleway } from '../assets/fonts/fonts';

export default function Home() {
  return (
    <main className={`${styles.main} ${raleway.className}`}>
      hello
    </main>
  );
}

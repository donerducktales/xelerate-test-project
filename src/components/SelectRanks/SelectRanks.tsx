import { raleway } from '@/assets/fonts/fonts';
import styles from './SelectRanks.module.scss'
import Image from 'next/image';

export default function SelectRanks() {
  return (
    // в майбутньому його треба зробити кастомним
    <div className={styles.selectRanksWrapper}>
      <select
        name="selectRanks"
        className={`${styles.selectRanks} ${raleway.className}`}
      >
        <option value="Всі ранги">Всі ранги</option>
      </select>
      <div className={styles.selectRanksArrow}>
        <Image 
          src={'./down-arrow.svg'}
          alt='down arrow'
          width={24}
          height={24}
        />
      </div>
    </div>
  );
}

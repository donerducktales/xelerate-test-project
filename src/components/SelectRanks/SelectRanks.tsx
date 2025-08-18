import { raleway } from '@/assets/fonts/fonts';
import styles from './SelectRanks.module.scss'
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function SelectRanks() {
  const t = useTranslations("homePage");
  
  return (
    // в майбутньому його треба зробити кастомним
    <div className={styles.selectRanksWrapper}>
      <select
        name="selectRanks"
        className={`${styles.selectRanks} ${raleway.className}`}
      >
        <option value={`${t("achievements.selectRanks.selectOption")}`}>
          {t("achievements.selectRanks.selectOption")}
        </option>
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

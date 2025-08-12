import { raleway } from '@/assets/fonts/fonts';
import styles from './SelectRanks.module.scss'

export default function SelectRanks() {
  return (
    // в майбутньому його треба зробити кастомним
    <select name="selectRanks" className={`${styles.selectRanks} ${raleway.className}`}>
      <option value="Всі ранги">Всі ранги</option>
      <option value="lorem">Lorem</option>
      <option value="lorem ipsum">Lorem ipsum</option>
    </select>
  );
}

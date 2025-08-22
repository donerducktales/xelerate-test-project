"use client"

import useSelectAchievementsStore from '@/lib/states/SelectAchievementState';
import styles from './SelectAchievementCard.module.scss';

export default function SelectAchievementCard({
  orderNumber,
  name,
  clickName,
  achievementsQuantity,
}: {
  orderNumber: string;
  name: string;
  clickName: "all" | "platform" | "specialist";
  achievementsQuantity: number;
}) {
  const { value, setValue } = useSelectAchievementsStore();
  const isActive = value === clickName;

  return (
    <div
      className={`${styles.selectAchievementCard} ${isActive ? styles.active : ''}`}
      onClick={() => setValue(clickName)}
    >
      <h1>{orderNumber}</h1>
      <div className={styles.achivementsQuantityRow}>
        <h2>{name}</h2>
        <p>{achievementsQuantity}</p>
      </div>
    </div>
  );
}

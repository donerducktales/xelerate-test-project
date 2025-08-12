import styles from './SelectAchievementCard.module.scss';

export default function SelectAchievementCard({
  orderNumber,
  name,
  achievementsQuantity,
}: {
  orderNumber: string,
  name: string,
  achievementsQuantity: number,
}) {
  return (
    <div className={styles.selectAchievementCard}>
      <h1>{orderNumber}</h1>
      <div className={styles.achivementsQuantityRow}>
        <h2>{name}</h2>
        <p>{achievementsQuantity}</p>
      </div>
    </div>
  );
}

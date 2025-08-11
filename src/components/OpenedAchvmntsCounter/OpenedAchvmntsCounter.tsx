import styles from "./OpenedAchvmntsCounter.module.scss";

export default function OpenedAchvmntsCounter({
  amount,
  achvmntType,
}: {
  amount: number;
  achvmntType: string;
}) {
  return (
    <div className={styles.openedAchvmntsCounter}>
      <h1>{amount}</h1>
      <p>{achvmntType}</p>
    </div>
  );
}

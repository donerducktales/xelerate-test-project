import styles from './Achievements.module.scss'

export default function Achievements() {
  return (
    <section className={styles.achievements}>
      <div className={styles.achievementsHeaderWrapper}>
        <h1>Досягнення</h1>
        <h2>Ви крутіші, ніж 87% спеціалістів!</h2>
      </div>
    </section>
  )
}

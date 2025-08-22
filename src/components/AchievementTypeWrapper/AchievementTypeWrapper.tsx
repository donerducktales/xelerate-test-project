import { AchievementsList } from "@/assets/achievementsList";
import styles from "./AchievementTypeWrapper.module.scss";
import AchievementTypeCard from "../AchievementTypeCard/AchievementTypeCard";
import useSelectRanksStore from "@/lib/states/SelectRanksState";

interface AchievementTypeWrapperProps {
  achievementName: string;
  achievementQuantity: number;
  achievementCard: AchievementsList[];
}

const FilteredByRank = ({
  achievementCard,
}: {
  achievementCard: AchievementsList[];
}) => {
  const { rank } = useSelectRanksStore();
  let filteredAchivementCard = achievementCard;

  if (rank === "rank1") {
    filteredAchivementCard = achievementCard.filter((el) => el.rank === 1);
  } else if (rank === "rank2") {
    filteredAchivementCard = achievementCard.filter((el) => el.rank === 2);
  } else if (rank === "rank3") {
    filteredAchivementCard = achievementCard.filter((el) => el.rank === 3);
  }

  return (
    <>
      {filteredAchivementCard.map((el) => (
        <AchievementTypeCard
          id={el.id}
          key={el.id}
          achievementName={el.achievementName}
          achievementDescription={el.achievementDescription}
          completed={el.completed}
          opened={el.opened}
          additionalInfo={el.additionalInfo}
          achievementType={el.achievementType}
          progress={el.progress}
          maxProgress={el.maxProgress}
          rank={el.rank}
        />
      ))}
    </>
  );
};

export default function AchievementTypeWrapper({
  achievementName,
  achievementQuantity,
  achievementCard,
}: AchievementTypeWrapperProps) {
  return (
    <section className={styles.achievementTypeWrapper}>
      <div className={styles.achievementTypeWrapText}>
        <h1>{achievementName}</h1>
        <p>{achievementQuantity}</p>
      </div>
      <div className={styles.achievementTypeCards}>
        <FilteredByRank achievementCard={achievementCard} />
      </div>
    </section>
  );
}

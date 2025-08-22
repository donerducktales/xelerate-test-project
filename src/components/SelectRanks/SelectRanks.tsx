"use client";

import { raleway } from "@/assets/fonts/fonts";
import styles from "./SelectRanks.module.scss";
import Image from "next/image";
import { useLocale } from "next-intl";
import { Translations } from "@/assets/achievementsList";
import useSelectRanksStore from "@/lib/states/SelectRanksState";

interface RanksList {
  id: number;
  rankType: "all" | "rank1" | "rank2" | "rank3";
  rankText: Translations;
}

const ranksList: RanksList[] = [
  {
    id: 0,
    rankType: "all",
    rankText: {
      en: "All ranks",
      uk: "Всі ранги",
    },
  },
  {
    id: 1,
    rankType: "rank1",
    rankText: {
      en: "Rank 1",
      uk: "Ранг 1",
    },
  },
  {
    id: 2,
    rankType: "rank2",
    rankText: {
      en: "Rank 2",
      uk: "Ранг 2",
    },
  },
  {
    id: 3,
    rankType: "rank3",
    rankText: {
      en: "Rank 3",
      uk: "Ранг 3",
    },
  },
];

export default function SelectRanks() {
  const locale = useLocale();
  const { setRank } = useSelectRanksStore();

  return (
    // в майбутньому його треба зробити кастомним
    <div className={styles.selectRanksWrapper}>
      <select
        name="selectRanks"
        className={`${styles.selectRanks} ${raleway.className}`}
      >
        {ranksList.map((el) => (
          <option
            value={el.rankText[locale]}
            key={el.id}
            onClick={() => setRank(el.rankType)}
          >
            {el.rankText[locale]}
          </option>
        ))}
      </select>
      <div className={styles.selectRanksArrow}>
        <Image
          src={"./down-arrow.svg"}
          alt="down arrow"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
}

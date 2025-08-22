"use client";

import { raleway } from "@/assets/fonts/fonts";
import styles from "./SelectRanks.module.scss";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Translations } from "@/assets/achievementsList";
import useSelectRanksStore from "@/lib/states/SelectRanksState";
import { useState } from "react";

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

const RanksListWrapper = ({
  open,
  setOpen,
  locale,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  locale: string;
}) => {
  const { rank, setRank } = useSelectRanksStore();

  function handleClick(selectedRank: "all" | "rank1" | "rank2" | "rank3") {
    setOpen(!open);
    setRank(selectedRank);
  }

  const filteredRanks = ranksList.filter((el) => el.rankType !== rank);

  return (
    <div className={styles.ranksListWrapper}>
      {filteredRanks.map((el) => (
        <div
          className={styles.ranksListElem}
          key={el.id}
          onClick={() => handleClick(el.rankType)}
        >
          <p>{el.rankText[locale]}</p>
        </div>
      ))}
    </div>
  );
};

export default function SelectRanks() {
  const locale = useLocale();
  const t = useTranslations("homePage");
  const [open, setOpen] = useState<boolean>(false);
  const { rank } = useSelectRanksStore();

  return (
    <div className={styles.selectRanksWrapper}>
      <div
        className={`${styles.selectRanks} ${
          open === true ? styles.active : ""
        } ${raleway.className}`}
        onClick={() => setOpen(!open)}
      >
        <h1>
          {rank === "all"
            ? t("achievements.selectRanks.selectOption.all")
            : rank === "rank1"
            ? t("achievements.selectRanks.selectOption.rank1")
            : rank === "rank2"
            ? t("achievements.selectRanks.selectOption.rank2")
            : rank === "rank3"
            ? t("achievements.selectRanks.selectOption.rank3")
            : ""
          }
        </h1>
        <div className={styles.selectRanksArrow}>
          <Image
            src={"./down-arrow.svg"}
            alt="down arrow"
            width={24}
            height={24}
          />
        </div>
      </div>
      {open && (
        <RanksListWrapper open={open} setOpen={setOpen} locale={locale} />
      )}
    </div>
  );
}

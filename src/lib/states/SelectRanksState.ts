import { create } from "zustand";

type State = {
  rank: "all" | "rank1" | "rank2" | "rank3";
};

type Action = {
  setRank: (selectedValue: "all" | "rank1" | "rank2" | "rank3") => void;
};

const useSelectRanksStore = create<State & Action>((set) => ({
  rank: "all",
  setRank: (selectedValue) => set(() => ({ rank: selectedValue })),
}));

export default useSelectRanksStore;

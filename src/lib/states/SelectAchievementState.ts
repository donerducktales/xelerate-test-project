import { create } from "zustand";

type State = {
  value: 'all' | 'platform' | 'specialist'
}

type Action = {
  setValue: (selectedValue: "all" | "platform" | "specialist") => void;
};

const useSelectAchievementsStore = create<State & Action>((set) => ({
  value: 'all',
  setValue: (selectedValue) => set(() => ({value: selectedValue}))
}))

export default useSelectAchievementsStore;
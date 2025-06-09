import { create } from "zustand";

interface toggle {
  isToggledMen: boolean;
  toggleMen: () => void;
  setToggledMen: (value: boolean) => void;
}

export const useToggleMen = create<toggle>((set) => ({
  // initial state
  isToggledMen: false,

  // toggle
  toggleMen: () => set((state) => ({ isToggledMen: !state.isToggledMen })),

  //   set the state of the toggle
  setToggledMen: (value) => set({ isToggledMen: value }),
}));

import { create } from "zustand";

interface toggle {
  isToggledKids: boolean;
  toggleKids: () => void;
  setToggledKids: (value: boolean) => void;
}

export const useToggleKids = create<toggle>((set) => ({
  // initial state
  isToggledKids: false,

  // toggle
  toggleKids: () => set((state) => ({ isToggledKids: !state.isToggledKids })),

  //   set the state of the toggle
  setToggledKids: (value) => set({ isToggledKids: value }),
}));

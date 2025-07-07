import { create } from "zustand";

interface toggle {
  isToggledWomen: boolean;
  toggleWomen: () => void;
  setToggledWomen: (value: boolean) => void;
}

export const useToggleWomen = create<toggle>((set) => ({
  // initial state
  isToggledWomen: false,

  // toggle
  toggleWomen: () =>
    set((state) => ({ isToggledWomen: !state.isToggledWomen })),

  //   set the state of the toggle
  setToggledWomen: (value) => set({ isToggledWomen: value }),
}));

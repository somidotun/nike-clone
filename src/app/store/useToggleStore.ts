import { create } from "zustand";

interface toggle {
  isToggled: boolean;
  toggle: () => void;
  setToggled: (value: boolean) => void;
}

export const useToggleStore = create<toggle>((set) => ({
  // initial state
  isToggled: false,

  // toggle
  toggle: () => set((state) => ({ isToggled: !state.isToggled })),

  //   set the state of the toggle
  setToggled: (value) => set({ isToggled: value }),
}));

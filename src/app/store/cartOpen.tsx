import { create } from "zustand";
interface toggle {
  isToggledCart: boolean;
  toggleCart: () => void;
  setToggledCart: (value: boolean) => void;
}

export const useToggleCart = create<toggle>((set) => ({
  // initial state
  isToggledCart: false,

  // toggle
  toggleCart: () =>
    set((state) => ({
      isToggledCart: !state.isToggledCart,
    })),

  // set state
  setToggledCart: (value: boolean) => set({ isToggledCart: value }),
}));

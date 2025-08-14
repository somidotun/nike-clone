import { create } from "zustand";
interface toggle {
  isToggledProfile: boolean;
  toggleProfile: () => void;
  setToggledProfile: (value: boolean) => void;
}

export const useToggleProfile = create<toggle>((set) => ({
  // initial state
  isToggledProfile: false,

  // toggle
  toggleProfile: () =>
    set((state) => ({
      isToggledProfile: !state.isToggledProfile,
    })),

  // set state
  setToggledProfile: (value: boolean) => set({ isToggledProfile: value }),
}));

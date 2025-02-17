import { create } from "zustand";

type OnboardingModalStore = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useOnboardingModal = create<OnboardingModalStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

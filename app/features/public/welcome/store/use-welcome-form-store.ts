import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { localPersistStorage } from "~/lib/persist-storage";

import { WelcomeFormSchema } from "../schema";

type WelcomeFormStoreType = {
  data: WelcomeFormSchema;
  step: number;
  setStep: (step: number) => void;
  nextStep: () => void;
  previousStep: () => void;
  updateFields: (fields: Partial<WelcomeFormSchema>) => void;
  clearFields: () => void;
};

const initialState = {
  data: {} as WelcomeFormSchema,
  step: 1,
};

export const useWelcomeFormStore = create<WelcomeFormStoreType>()(
  persist(
    (set) => ({
      ...initialState,
      setStep: (step) => set({ step }),
      nextStep: () =>
        set((state) => ({
          step: Math.min(state.step + 1),
        })),
      previousStep: () =>
        set((state) => ({
          step: Math.max(state.step - 1, 0),
        })),
      updateFields: (fields) =>
        set((state) => ({ data: { ...state.data, ...fields } })),
      clearFields: () => set({ ...initialState }),
    }),
    {
      name: "welcome-form-storage",
      storage: createJSONStorage(() => localPersistStorage),
    },
  ),
);

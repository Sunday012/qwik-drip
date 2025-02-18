import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { localPersistStorage } from "~/lib/persist-storage";

type FormType = {
  step: number;
  email: string;
  setStep: (newStep: number) => void;
  setEmail: (newEmail: string) => void;
  clearForm: () => void;
};

const initialState = {
  step: 1,
  email: "",
};

export const useAuthFormStore = create<FormType>()(
  persist(
    (set) => ({
      ...initialState,
      setStep: (newStep) => set({ step: newStep }),
      setEmail: (newEmail) => set({ email: newEmail }),
      clearForm: () => set({ ...initialState }),
    }),
    {
      name: "auth-form-storage",
      storage: createJSONStorage(() => localPersistStorage),
    },
  ),
);

export default useAuthFormStore;

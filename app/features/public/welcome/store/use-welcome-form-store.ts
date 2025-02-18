import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { localPersistStorage } from "~/lib/persist-storage";

type FormData = {
  gender: string;
  otherGender: string;
  age: string;
  meal: string;
  weight: string;
  goalWeight: string;
  mostWeight: string;
  otherMostWeight: string;
  healthCondition: string;
  medication: string;
  otherMedication: string;
  reason: string;
  otherReason: string;
  allergies: string;
};

const INITIAL_DATA: FormData = {
  gender: "",
  otherGender: "",
  age: "",
  meal: "",
  weight: "",
  otherMostWeight: "",
  goalWeight: "",
  mostWeight: "",
  healthCondition: "",
  medication: "",
  otherMedication: "",
  reason: "",
  otherReason: "",
  allergies: "",
};

type WelcomeFormStoreType = {
  data: FormData;
  updateFields: (fields: Partial<FormData>) => void;
  clearFields: () => void;
};

const initialState = {
  data: INITIAL_DATA,
};

export const useWelcomeFormStore = create<WelcomeFormStoreType>()(
  persist(
    (set) => ({
      ...initialState,
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

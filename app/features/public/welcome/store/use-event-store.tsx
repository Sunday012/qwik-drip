import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { localPersistStorage } from "~/lib/persist-storage";

type FormType = {
  event: string;
  invitee: string;
  setEvent: (newEvent: string) => void;
  setInvitee: (newInvitee: string) => void;
};

export const useEventStore = create<FormType>()(
  persist(
    (set) => ({
      event: "",
      invitee: "",
      setEvent: (newEvent) => set({ event: newEvent }),
      setInvitee: (newInvitee) => set({ invitee: newInvitee }),
    }),
    {
      name: "event-storage",
      storage: createJSONStorage(() => localPersistStorage),
    },
  ),
);

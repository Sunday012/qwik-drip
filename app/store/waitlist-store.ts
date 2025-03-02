import {create} from 'zustand';

interface WaitlistState {
    isOpen: boolean;
    openWaitlist: () => void;
    closeWaitlist: () => void;
}

const useWaitlistStore = create<WaitlistState>((set) => ({
    isOpen: false,
    openWaitlist: () => set({ isOpen: true }),
    closeWaitlist: () => set({ isOpen: false }),
}));

export default useWaitlistStore;
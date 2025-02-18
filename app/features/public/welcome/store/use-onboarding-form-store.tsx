import * as React from "react";
import { create } from "zustand";

interface OnboardingFormState {
  currentStepIndex: number;
  steps: React.ReactElement[];
  nextStep: () => void;
  previousStep: () => void;
  goToStep: (index: number) => void;
  setSteps: (steps: React.ReactElement[]) => void;
}

export const useOnboardingFormStore = create<OnboardingFormState>((set) => ({
  currentStepIndex: 0,
  steps: [],
  setSteps: (steps) => set({ steps }),
  nextStep: () =>
    set((state) => ({
      currentStepIndex: Math.min(
        state.currentStepIndex + 1,
        state.steps.length - 1,
      ),
    })),
  previousStep: () =>
    set((state) => ({
      currentStepIndex: Math.max(state.currentStepIndex - 1, 0),
    })),
  goToStep: (index) =>
    set((state) => ({
      currentStepIndex: Math.min(Math.max(index, 0), state.steps.length - 1),
    })),
}));

export function useOnboardingForm(steps: React.ReactElement[]) {
  const store = useOnboardingFormStore();
  const { currentStepIndex, nextStep, previousStep, goToStep, setSteps } =
    store;

  const memoizedSteps = React.useMemo(() => steps, [steps]);

  React.useEffect(() => {
    // Only update store if steps have changed
    if (memoizedSteps !== store.steps) {
      setSteps(memoizedSteps);
    }
  }, [memoizedSteps, store.steps, setSteps]);

  return {
    currentStepIndex,
    step: store.steps[currentStepIndex],
    steps: store.steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === store.steps.length - 1,
    goToStep,
    previousStep,
    nextStep,
  };
}

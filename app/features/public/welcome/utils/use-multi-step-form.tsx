import { ReactElement, useState } from "react";

export function useMultiStepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);


  function nextStep() {
    setCurrentStepIndex((i) => {
      if (i >= (i >= steps.length - 1 ? i : i + 1)) return i;
      return i + 1;
    });
  }

  function previousStep() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function goToStep(index: number) {
    setCurrentStepIndex((i) => Math.min(Math.max(index, 0), steps.length - 1));
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goToStep,
    previousStep,
    nextStep,
  };
}

import { useEffect, useMemo } from "react";
import { useNavigate } from "@tanstack/react-router";

import { Route } from "~/routes/(public)/_public/welcome";

import { stepsData } from "../data";

const MAX_STEP = stepsData.length;

const useStepQueryParam = () => {
  const navigate = useNavigate({
    from: Route.fullPath,
  });
  const { step, submit } = Route.useSearch();
  const activeStep = step;
  const visitedStep: Set<number> = useMemo(() => new Set(), []);
  
  console.log("Step Query Param", { step, submit, visitedStep });

  const previousStep = () => {
    navigate({
      search: (prev) => {
        const prevStep = prev.step;
        const newStep = Math.max(prevStep - 1, 1);
        prev.step = newStep;
        return prev;
      },
    });
  };

  const nextStep = () => {
    navigate({
      search: (prev) => {
        const prevStep = prev.step;
        const newStep = Math.min(prevStep + 1, MAX_STEP);
        prev.step = newStep;
        visitedStep.add(prevStep);
        return prev;
      },
    });
  };

  useEffect(() => {
    navigate({
      search: (prev) => {
        const step = prev.step;
        if (
          !isNaN(step) &&
          step >= 1 &&
          step <= MAX_STEP &&
          visitedStep.has(step - 1)
        ) {
          return prev;
        }

        prev.step = 1;
        prev.submit = false;
        return prev;
      },
    });
  }, [navigate, visitedStep]);

  return {
    submit,
    activeStep,
    previousStep,
    nextStep,
  };
};

export { useStepQueryParam };

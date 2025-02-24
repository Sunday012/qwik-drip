import { useEffect, useMemo } from "react";
import { useNavigate } from "@tanstack/react-router";

import { Route } from "~/routes/(public)/_public/welcome";

import { stepsData } from "../data";

const MAX_STEP = stepsData.length;

export const useWelcomeStepQuery = () => {
  const navigate = useNavigate({
    from: Route.fullPath,
  });
  const { step, submit } = Route.useSearch();
  const activeStep = step;

  console.log("Step Query Param", { step, submit });

  const previousStep = () => {
    navigate({
      search: (prev) => ({ step: Math.max(prev.step - 1, 0) }),
    });
  };

  const nextStep = () => {
    navigate({
      search: (prev) => ({ step: Math.min(prev.step + 1, MAX_STEP) }),
    });
  };

  return {
    submit,
    activeStep,
    previousStep,
    nextStep,
  };
};

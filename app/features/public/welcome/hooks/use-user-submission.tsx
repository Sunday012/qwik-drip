import { useFormContext } from "react-hook-form";

import { stepsData } from "../data";
import { PlanSchemaType } from "../schema";
import { CheckboxLabel, PlanType, RadioLabel } from "../types";

type labelType = RadioLabel | CheckboxLabel;
type NameType = Partial<keyof PlanSchemaType>;

const flattenedSteps = stepsData.flatMap((step) => step.form || []);

const useUserSubmission = () => {
  const { getValues } = useFormContext<PlanSchemaType>();
  const userValues = getValues();
  const { plan, yearlyPlan } = userValues;

  const planType: PlanType = yearlyPlan ? "yearly" : "monthly";

  const selectedPlanForm = flattenedSteps.find((formItem) => {
    const label = formItem?.label as labelType;
    return label?.[planType]?.type === plan;
  });
  const planAmount = (selectedPlanForm?.label as labelType)[planType]?.amount;

  const addOns = flattenedSteps
    .filter(
      (step) => step.field === "checkbox" && userValues[step.name as NameType],
    )
    .map((field) => (field?.label as labelType)[planType]);

  const totalAmount = addOns
    .map((addOn) => Number(addOn.amount.match(/\d+/)))
    .reduce((acc, curr) => acc + curr, Number(planAmount?.match(/\d+/)));

  console.log("User Submission", {
    userValues,
    plan,
    planType,
    planAmount,
    addOns,
    totalAmount,
  });

  return {
    plan,
    planType,
    planAmount,
    addOns,
    totalAmount,
  };
};

export { useUserSubmission };

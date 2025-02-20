import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { welcomeFormSchema } from "../schema";
import { FormWrapper } from "./form-wrapper";
import { RadioOption } from "./radio-option";

const healthConditionSchema = z.object({
  healthCondition: welcomeFormSchema.shape.healthCondition,
});

type HealthConditionForm = z.infer<typeof healthConditionSchema>;

type UserFormProps = {
  defaultValues?: HealthConditionForm;
  updateFields: (fields: Partial<HealthConditionForm>) => void;
};

export function ConditionStep({ defaultValues, updateFields }: UserFormProps) {
  const { setValue, watch } = useForm<HealthConditionForm>({
    resolver: zodResolver(healthConditionSchema),
    defaultValues: defaultValues || {
      healthCondition: undefined,
    },
  });

  const watchedHealthCondition = watch("healthCondition");

  const handleChange = (value: string) => {
    setValue(
      "healthCondition",
      value as HealthConditionForm["healthCondition"],
    );
    updateFields({
      healthCondition: value as HealthConditionForm["healthCondition"],
    });
  };

  return (
    <FormWrapper
      title="Do you have any of these health conditions?"
      subheading=""
    >
      <RadioOption
        id="diabetes"
        label="Diabetes (Type 1 or Type 2)"
        name="healthCondition"
        value="diabetes"
        onChange={handleChange}
        checked={watchedHealthCondition === "diabetes"}
      />

      <RadioOption
        id="thyroid"
        label="Thyroid disorders (e.g., hypothyroidism)"
        name="healthCondition"
        value="thyroid"
        onChange={handleChange}
        checked={watchedHealthCondition === "thyroid"}
      />

      <RadioOption
        id="hypertension"
        label="Hypertension or cardiovascular conditions"
        name="healthCondition"
        value="hypertension"
        onChange={handleChange}
        checked={watchedHealthCondition === "hypertension"}
      />

      <RadioOption
        id="pcos"
        label="PCOS (Polycystic Ovary Syndrome)"
        name="healthCondition"
        value="pcos"
        onChange={handleChange}
        checked={watchedHealthCondition === "pcos"}
      />

      <RadioOption
        id="sleep_apnea"
        label="Sleep apnea"
        name="healthCondition"
        value="sleep_apnea"
        onChange={handleChange}
        checked={watchedHealthCondition === "sleep_apnea"}
      />

      <RadioOption
        id="depression_anxiety"
        label="Depression or anxiety"
        name="healthCondition"
        value="depression_anxiety"
        onChange={handleChange}
        checked={watchedHealthCondition === "depression_anxiety"}
      />

      <RadioOption
        id="none"
        label="None"
        name="none"
        value="none"
        onChange={handleChange}
        checked={watchedHealthCondition === "none"}
      />
    </FormWrapper>
  );
}

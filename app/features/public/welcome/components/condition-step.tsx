import { useFormContext } from "react-hook-form";
import { z } from "zod";

import { WelcomeFormSchema, welcomeFormSchema } from "../schema";
import { RadioField } from "../types";
import { FormContainer, WelcomeStepFormProps } from "./form/form-container";
import { RadioOption } from "./radio-option";

export function ConditionStep({ data, updateFields }: WelcomeStepFormProps) {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<WelcomeFormSchema>();

  const watchedHealthCondition = watch("healthCondition");

  const handleChange = (value: string) => {
    setValue("healthCondition", value as WelcomeFormSchema["healthCondition"]);
    updateFields({
      healthCondition: value as WelcomeFormSchema["healthCondition"],
    });
  };

  return (
    <FormContainer heading={data.heading} description={data.description}>
      {errors.gender && (
        <p className="my-2 text-right text-sm font-medium text-destructive sm:text-base">
          {errors.gender?.message}
        </p>
      )}
      {data.form &&
        (data.form as RadioField[]).map((form) => {
          const name = form.name as keyof WelcomeFormSchema;

          const { label, value, inputVisible } = form;

          return (
            <RadioOption
              key={label}
              id={label}
              label={label}
              inputVisible={inputVisible}
              value={value}
              error={errors[name]}
              {...register(name as keyof WelcomeFormSchema)}
            />
          );
        })}
    </FormContainer>
  );
}

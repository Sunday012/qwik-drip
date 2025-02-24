import { useFormContext } from "react-hook-form";

import { WelcomeFormSchema } from "../schema";
import { RadioField } from "../types";
import { FormContainer, WelcomeStepFormProps } from "./form/form-container";
import { RadioOption } from "./radio-option";

export function MealStep({ data, updateFields }: WelcomeStepFormProps) {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<WelcomeFormSchema>();

  const mealValue = watch("meal");

  const handleChange = (value: string) => {
    setValue("meal", value as WelcomeFormSchema["meal"]);
    updateFields({
      meal: value as WelcomeFormSchema["meal"],
    });
  };

  return (
    <FormContainer heading={data.heading} description={data.description}>
      {errors.meal && (
        <p className="my-2 text-right text-sm font-medium text-destructive sm:text-base">
          {errors.meal?.message}
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

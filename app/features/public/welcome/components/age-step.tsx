import { useFormContext } from "react-hook-form";

import { WelcomeFormSchema } from "../schema";
import { RadioField } from "../types";
import { FormContainer, WelcomeStepFormProps } from "./form/form-container";
import { RadioOption } from "./radio-option";

export function AgeStep({ data, updateFields }: WelcomeStepFormProps) {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<WelcomeFormSchema>();

  const watchAge = watch("age");

  const handleChange = (value: string) => {
    setValue("age", value as WelcomeFormSchema["age"]);
    updateFields({ age: value as WelcomeFormSchema["age"] });
  };

  return (
    <FormContainer heading={data.heading} description={data.description}>
      {errors.age && (
        <p className="my-2 text-right text-sm font-medium text-destructive sm:text-base">
          {errors.age?.message}
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

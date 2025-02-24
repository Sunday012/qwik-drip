import { useFormContext } from "react-hook-form";
import { z } from "zod";

import { WelcomeFormSchema, welcomeFormSchema } from "../schema";
import { RadioField } from "../types";
import { FormContainer } from "./form-container";
import { WelcomeStepFormProps } from "./form/form-container";
import { RadioOption } from "./radio-option";

const allergiesSchema = z.object({
  allergies: welcomeFormSchema.shape.allergies,
});

type AllergiesFormData = z.infer<typeof allergiesSchema>;

type UserFormProps = {
  defaultValues?: AllergiesFormData;
  updateFields: (fields: Partial<AllergiesFormData>) => void;
};

export function AllergiesStep({ data, updateFields }: WelcomeStepFormProps) {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<WelcomeFormSchema>();

  const watchedAllergies = watch("allergies");

  const handleChange = (value: string) => {
    setValue("allergies", value as AllergiesFormData["allergies"]);
    updateFields({ allergies: value as AllergiesFormData["allergies"] });
  };

  return (
    <FormContainer title="Do you have any allergies?" subheading="">
      {errors.reason && (
        <p className="my-2 text-right text-sm font-medium text-destructive sm:text-base">
          {errors.reason?.message}
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

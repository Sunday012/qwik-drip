import { useFormContext } from "react-hook-form";

import { WelcomeFormSchema } from "../schema";
import { RadioField } from "../types";
import { FormContainer, WelcomeStepFormProps } from "./form/form-container";
import { RadioOption } from "./radio-option";
import { TextareaInput } from "./textarea-input";

export function WeightStep({ data, updateFields }: WelcomeStepFormProps) {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<WelcomeFormSchema>();

  const selectedMostWeight = watch("mostWeight");

  const handleOtherChange = (value: string) => {
    setValue("otherMostWeight", value, {
      shouldValidate: true,
    });
    updateFields({ otherMostWeight: value });
  };

  return (
    <FormContainer heading={data.heading} description={data.description}>
      {errors.mostWeight && (
        <p className="my-2 text-right text-sm font-medium text-destructive sm:text-base">
          {errors.mostWeight?.message}
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
      {selectedMostWeight === "Other" && (
        <>
          <TextareaInput
            value={watch("otherMostWeight") || ""}
            onChange={handleOtherChange}
          />
          {errors.otherMostWeight && (
            <span className="text-sm text-red-500">
              {errors.otherMostWeight?.message}
            </span>
          )}
        </>
      )}
      {/* {data.form &&
        (data.form as CheckboxField[]).map((form) => {
          const name = form.name as keyof WelcomeFormSchema;

          const { label, value, inputVisible } = form;

          return (
            <CheckboxOption
              key={label}
              id={label}
              label={label}
              inputVisible={inputVisible}
              value={value}
              error={errors[name]}
              {...register(name as keyof WelcomeFormSchema)}
            />
          );
        })} */}
      {/* {mostWeightValue === "other" && (
        <>
          <TextareaInput
            value={watch("otherMostWeight") || ""}
            onChange={handleOtherChange}
          />
          {errors.gender && (
            <span className="text-sm text-red-500">
              {errors.otherGender?.message}
            </span>
          )}
        </>
      )} */}
    </FormContainer>
  );
}

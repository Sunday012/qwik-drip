import { useFormContext } from "react-hook-form";

import { WelcomeFormSchema } from "../schema";
import { RadioField, WelcomeStepsData } from "../types";
import { FormContainer } from "./form/form-container";
import { RadioOption } from "./radio-option";
import { TextareaInput } from "./textarea-input";

type WelcomeStepFormProps = {
  data: WelcomeStepsData;
  updateFields: (fields: Partial<WelcomeFormSchema>) => void;
};

export function GenderStep({ data, updateFields }: WelcomeStepFormProps) {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<WelcomeFormSchema>();

  const selectedGender = watch("gender");

  const handleChange = (value: string) => {
    setValue("gender", value as WelcomeFormSchema["gender"], {
      shouldValidate: true,
    });
    updateFields({ gender: value as WelcomeFormSchema["gender"] });
  };

  const handleOtherChange = (value: string) => {
    setValue("otherGender", value, {
      shouldValidate: true,
    });
    updateFields({ otherGender: value });
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
      {selectedGender === "Other" && (
        <>
          <TextareaInput
            value={watch("otherGender") || ""}
            onChange={handleOtherChange}
          />
          {errors.gender && (
            <span className="text-sm text-red-500">
              {errors.otherGender?.message}
            </span>
          )}
        </>
      )}
    </FormContainer>
  );
}

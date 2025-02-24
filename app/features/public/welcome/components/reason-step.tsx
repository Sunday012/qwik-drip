import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";

import { WelcomeFormSchema } from "../schema";
import { RadioField } from "../types";
import { FormContainer, WelcomeStepFormProps } from "./form/form-container";
import { RadioOption } from "./radio-option";
import { TextareaInput } from "./textarea-input";

export function ReasonStep({ data, updateFields }: WelcomeStepFormProps) {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<WelcomeFormSchema>();

  const reasonValue = watch("reason");

  const handleChange = (value: string) => {
    setValue("reason", value as WelcomeFormSchema["reason"]);
    updateFields({ reason: value as WelcomeFormSchema["reason"] });
  };

  const handleOtherChange = (value: string) => {
    setValue("otherReason", value);
    updateFields({ otherReason: value });
  };

  return (
    <FormContainer heading={data.heading} description={data.description}>
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
      {reasonValue === "Other" && (
        <>
          <TextareaInput
            value={watch("otherReason") || ""}
            onChange={handleOtherChange}
          />
          {errors.otherReason && (
            <span className="text-sm text-red-500">
              {errors.otherReason?.message}
            </span>
          )}
        </>
      )}
    </FormContainer>
  );
}

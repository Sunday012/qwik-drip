import { useFormContext } from "react-hook-form";

import { WelcomeFormSchema } from "../schema";
import { RadioField } from "../types";
import { FormContainer, WelcomeStepFormProps } from "./form/form-container";
import { RadioOption } from "./radio-option";
import { TextareaInput } from "./textarea-input";

export function MedicationStep({ data, updateFields }: WelcomeStepFormProps) {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<WelcomeFormSchema>();

  const currentMedication = watch("medication");

  const handleChange = (value: string) => {
    setValue("medication", value as WelcomeFormSchema["medication"], {
      shouldValidate: true,
    });
    updateFields({ medication: value as WelcomeFormSchema["medication"] });
  };

  const handleOtherChange = (value: string) => {
    setValue("otherMedication", value, { shouldValidate: true });
    updateFields({ otherMedication: value });
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

          if (label === "Yes") {
            return (
              <>
                <RadioOption
                  key={label}
                  id={label}
                  label={label}
                  inputVisible={inputVisible}
                  value={value}
                  error={errors[name]}
                  {...register(name as keyof WelcomeFormSchema)}
                />
                {currentMedication === "Yes" && (
                  <>
                    <TextareaInput
                      value={watch("otherMedication") || ""}
                      onChange={handleOtherChange}
                    />
                    {errors.otherMedication && (
                      <span className="text-sm text-red-500">
                        {errors.otherMedication?.message}
                      </span>
                    )}
                  </>
                )}
              </>
            );
          }

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

import { useId } from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";

import { Input } from "~/components/ui/input";

import { WelcomeFormSchema, welcomeFormSchema } from "../schema";
import { InputField } from "../types";
import { FormContainer, WelcomeStepFormProps } from "./form/form-container";

export function GoalStep({ data, updateFields }: WelcomeStepFormProps) {
  const id = useId();
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<WelcomeFormSchema>();

  const watchGoalWeight = watch("goalWeight");

  const handleChange = (value: string) => {
    setValue(
      "goalWeight",
      parseFloat(value) as WelcomeFormSchema["goalWeight"],
    );
    updateFields({
      goalWeight: parseFloat(value) as WelcomeFormSchema["goalWeight"],
    });
  };

  return (
    <FormContainer heading={data.heading} description={data.description}>
      {errors.weight && (
        <p className="my-2 text-right text-sm font-medium text-destructive sm:text-base">
          {errors.weight?.message}
        </p>
      )}
      {data.form &&
        (data.form as InputField[]).map((form) => {
          const name = form.name as keyof WelcomeFormSchema;

          const { type, placeholder } = form;

          return (
            <>
              <div className="w-full space-y-2">
                <div className="flex rounded-lg shadow-sm shadow-black/5">
                  <Input
                    id={`${id}-weight`}
                    type={type}
                    placeholder={placeholder}
                    className="peer -me-px h-[40px] w-11/12 rounded-e-none p-4 shadow-none sm:h-[60px] lg:h-[80px] lg:w-11/12"
                    {...register(name as keyof WelcomeFormSchema)}
                  />
                  <span className="z-10 inline-flex items-center rounded-e-lg border border-input px-3 text-sm text-[#363840]">
                    KG
                  </span>
                </div>
                {errors.goalWeight && (
                  <p className="text-sm text-red-500">
                    {errors.goalWeight.message}
                  </p>
                )}
              </div>
              <div className="mt-[40px]">
                <p className="text-blue-500 underline">
                  I'm not sure; I'd like guidance.
                </p>
              </div>
            </>
          );
        })}
    </FormContainer>
  );
}

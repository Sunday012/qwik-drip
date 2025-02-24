import { useId } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormContext } from "react-hook-form";

import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

import { WelcomeFormSchema, welcomeFormSchema } from "../schema";
import { InputField } from "../types";
import { FormContainer, WelcomeStepFormProps } from "./form/form-container";

export function BmiStep({ data, updateFields }: WelcomeStepFormProps) {
  const id = useId();
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<WelcomeFormSchema>();

  const weightValue = watch("weight");

  // const handleChange = (value: string) => {
  //   setValue("weight", parseFloat(value) as WelcomeFormSchema["weight"]);
  //   updateFields({ weight: parseFloat(value) as WelcomeFormSchema["weight"] });
  // };

  return (
    <FormContainer heading={data.heading} description={data.description}>
      {data.form &&
        (data.form as InputField[]).map((form) => {
          const name = form.name as keyof WelcomeFormSchema;

          const { label, type, placeholder } = form;

          return (
            <div className="w-full space-y-2" key={label}>
              <Label
                htmlFor={`${id}-weight`}
                className="mb-4 flex self-start text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]"
              >
                {label}
              </Label>
              <div className="flex rounded-lg shadow-sm shadow-black/5">
                <Input
                  id={`${id}-weight`}
                  placeholder={placeholder}
                  type={type}
                  className="peer -me-px h-[40px] w-11/12 rounded-e-none p-4 shadow-none sm:h-[60px] lg:h-[80px] lg:w-11/12"
                  {...register(name as keyof WelcomeFormSchema)}
                />
                <span className="z-10 inline-flex items-center rounded-e-lg border border-input px-3 text-sm text-[#363840]">
                  KG
                </span>
              </div>
              {errors.weight && (
                <p className="text-sm text-red-500">{errors.weight.message}</p>
              )}
            </div>
          );
        })}
    </FormContainer>
  );
}

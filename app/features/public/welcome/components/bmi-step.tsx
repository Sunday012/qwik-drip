import { useId } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

import { welcomeFormSchema } from "../schema";
import { FormWrapper } from "./form-wrapper";

const weightSchema = z.object({
  weight: welcomeFormSchema.shape.weight,
});

type WeightFormData = z.infer<typeof weightSchema>;

type UserFormProps = {
  defaultValues?: WeightFormData;
  updateFields: (fields: Partial<WeightFormData>) => void;
};

export function BmiStep({ defaultValues, updateFields }: UserFormProps) {
  const id = useId();
  const {
    setValue,
    formState: { errors },
    watch,
  } = useForm<WeightFormData>({
    resolver: zodResolver(weightSchema),
    defaultValues: defaultValues || {
      weight: undefined,
    },
  });

  const weightValue = watch("weight");

  const handleChange = (value: string) => {
    setValue("weight", parseFloat(value) as WeightFormData["weight"]);
    updateFields({ weight: parseFloat(value) as WeightFormData["weight"] });
  };

  return (
    <FormWrapper title="How much do you weigh currently?" subheading="">
      <div className="w-full space-y-2">
        <Label
          htmlFor={`${id}-weight`}
          className="mb-4 flex self-start text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]"
        >
          Enter your current weight
        </Label>
        <div className="flex rounded-lg shadow-sm shadow-black/5">
          <Input
            id={`${id}-weight`}
            type="text"
            name="weight"
            value={weightValue || ""}
            onChange={(e) => handleChange(e.target.value)}
            className="peer -me-px h-[80px] w-11/12 rounded-e-none p-4 shadow-none"
            autoFocus
          />
          <span className="z-10 inline-flex items-center rounded-e-lg border border-input px-3 text-sm text-[#363840]">
            KG
          </span>
        </div>
        {errors.weight && (
          <p className="text-sm text-red-500">{errors.weight.message}</p>
        )}
      </div>
    </FormWrapper>
  );
}

import { useId } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Input } from "~/components/ui/input";

import { welcomeFormSchema } from "../schema";
import { FormWrapper } from "./form-wrapper";

const goalSchema = z.object({
  goalWeight: welcomeFormSchema.shape.goalWeight,
});

type FormData = z.infer<typeof goalSchema>;

type UserFormProps = {
  defaultValues?: FormData;
  updateFields: (fields: Partial<FormData>) => void;
};

export function GoalStep({ defaultValues, updateFields }: UserFormProps) {
  const id = useId();
  const { setValue, watch } = useForm<FormData>({
    resolver: zodResolver(goalSchema),
    defaultValues: defaultValues || {
      goalWeight: undefined,
    },
  });

  const watchGoalWeight = watch("goalWeight");

  const handleChange = (value: string) => {
    setValue("goalWeight", parseFloat(value) as FormData["goalWeight"]);
    updateFields({ goalWeight: parseFloat(value) as FormData["goalWeight"] });
  };

  return (
    <FormWrapper title="What is your goal weight?" subheading="">
      <div className="w-full space-y-2">
        <div className="flex rounded-lg shadow-sm shadow-black/5">
          <Input
            id={`${id}-weight`}
            type="text"
            name="goalWeight"
            value={watchGoalWeight || ""}
            onChange={(e) => handleChange(e.target.value)}
            className="peer -me-px h-[40px] w-11/12 rounded-e-none p-4 shadow-none sm:h-[60px] lg:h-[80px] lg:w-11/12"
            autoFocus
          />
          <span className="z-10 inline-flex items-center rounded-e-lg border border-input px-3 text-sm text-[#363840]">
            KG
          </span>
        </div>
      </div>
      <div className="mt-[40px]">
        <p className="text-blue-500 underline">
          I'm not sure; I'd like guidance.
        </p>
      </div>
    </FormWrapper>
  );
}

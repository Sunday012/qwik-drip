import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { welcomeFormSchema } from "../schema";
import { FormWrapper } from "./form-wrapper";
import { RadioOption } from "./radio-option";
import { TextareaInput } from "./textarea-input";

const weightStepSchema = z.object({
  mostWeight: welcomeFormSchema.shape.mostWeight,
  otherMostWeight: welcomeFormSchema.shape.otherMostWeight,
});

type WeightStepData = z.infer<typeof weightStepSchema>;

type UserFormProps = {
  defaultValues?: WeightStepData;
  updateFields: (fields: Partial<WeightStepData>) => void;
};

export function WeightStep({ defaultValues, updateFields }: UserFormProps) {
  const { setValue, watch } = useForm<WeightStepData>({
    resolver: zodResolver(weightStepSchema),
    defaultValues: defaultValues || {
      mostWeight: undefined,
      otherMostWeight: undefined,
    },
  });

  const mostWeightValue = watch("mostWeight");

  const handleChange = (value: string) => {
    setValue("mostWeight", value as WeightStepData["mostWeight"]);
    updateFields({ mostWeight: value as WeightStepData["mostWeight"] });
  };

  const handleOtherChange = (value: string) => {
    setValue("otherMostWeight", value);
    updateFields({ otherMostWeight: value });
  };

  return (
    <FormWrapper
      title="What part of your body holds the most weight?"
      subheading=""
    >
      <RadioOption
        id="abdomen"
        label="Abdomen"
        name="mostWeight"
        value="abdomen"
        onChange={handleChange}
        checked={mostWeightValue === "abdomen"}
        autoFocus
      />
      <RadioOption
        id="hips_thighs"
        label="Hips and thighs"
        name="mostWeight"
        value="hips_thighs"
        onChange={handleChange}
        checked={mostWeightValue === "hips_thighs"}
      />
      <RadioOption
        id="arms_shoulders"
        label="Arms and shoulders"
        name="mostWeight"
        value="arms_shoulders"
        onChange={handleChange}
        checked={mostWeightValue === "arms_shoulders"}
      />
      <RadioOption
        id="entire_body"
        label="Entire body evenly distributed"
        name="mostWeight"
        value="entire_body"
        onChange={handleChange}
        checked={mostWeightValue === "entire_body"}
      />
      <RadioOption
        id="other"
        label="Other"
        name="other"
        value="other"
        onChange={handleChange}
        checked={mostWeightValue === "other"}
      />
      {mostWeightValue === "other" && (
        <TextareaInput
          value={watch("otherMostWeight") || ""}
          onChange={handleOtherChange}
          placeholder="Please specify"
        />
      )}
    </FormWrapper>
  );
}

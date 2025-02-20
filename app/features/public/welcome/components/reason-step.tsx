import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { welcomeFormSchema } from "../schema";
import { FormContainer } from "./form-container";
import { RadioOption } from "./radio-option";
import { TextareaInput } from "./textarea-input";

const reasonSchema = z.object({
  reason: welcomeFormSchema.shape.reason,
  otherReason: welcomeFormSchema.shape.otherReason,
});

type ReasonData = z.infer<typeof reasonSchema>;

type UserFormProps = {
  defaultValues?: ReasonData;
  updateFields: (fields: Partial<ReasonData>) => void;
};

export function ReasonStep({ defaultValues, updateFields }: UserFormProps) {
  const { watch, setValue } = useForm<ReasonData>({
    resolver: zodResolver(reasonSchema),
    defaultValues: defaultValues || {
      reason: undefined,
      otherReason: "",
    },
  });

  const reasonValue = watch("reason");

  const handleChange = (value: string) => {
    setValue("reason", value as ReasonData["reason"]);
    updateFields({ reason: value as ReasonData["reason"] });
  };

  const handleOtherChange = (value: string) => {
    setValue("otherReason", value);
    updateFields({ otherReason: value });
  };

  return (
    <FormContainer title="What's your reason for losing weight?" subheading="">
      <RadioOption
        id="improve_health"
        label="Improve overall health"
        value="improve_health"
        checked={reasonValue === "improve_health"}
        onChange={handleChange}
        name="reason"
      />

      <RadioOption
        id="boost_confidence"
        label="Boost self-confidence and appearance"
        value="boost_confidence"
        checked={reasonValue === "boost_confidence"}
        onChange={handleChange}
        name="reason"
      />

      <RadioOption
        id="manage_medical_condition"
        label="Manage a medical condition"
        value="manage_medical_condition"
        checked={reasonValue === "manage_medical_condition"}
        onChange={handleChange}
        name="reason"
      />

      <RadioOption
        id="prep_for_event"
        label="Prepare for a specific event (e.g., wedding, surgery)"
        value="prep_for_event"
        checked={reasonValue === "prep_for_event"}
        onChange={handleChange}
        name="reason"
      />

      <RadioOption
        id="other"
        label="Other"
        value="other"
        checked={reasonValue === "other"}
        onChange={handleChange}
        name="reason"
      />

      {reasonValue === "other" && (
        <TextareaInput
          value={watch("otherReason") || ""}
          onChange={handleOtherChange}
          placeholder="Please specify"
        />
      )}
    </FormContainer>
  );
}

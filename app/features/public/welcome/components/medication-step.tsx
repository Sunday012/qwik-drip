import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { welcomeFormSchema } from "../schema";
import { FormWrapper } from "./form-wrapper";
import { RadioOption } from "./radio-option";
import { TextareaInput } from "./textarea-input";

const medicationSchema = z.object({
  medication: welcomeFormSchema.shape.medication,
  otherMedication: welcomeFormSchema.shape.otherMedication,
});

type MedicationData = z.infer<typeof medicationSchema>;

type UserFormProps = {
  defaultValues?: MedicationData;
  updateFields: (fields: Partial<MedicationData>) => void;
};

export function MedicationStep({ defaultValues, updateFields }: UserFormProps) {
  const { register, watch, setValue } = useForm<MedicationData>({
    resolver: zodResolver(medicationSchema),
    defaultValues: defaultValues || {
      medication: undefined,
      otherMedication: "",
    },
  });

  const currentMedication = watch("medication");

  const handleChange = (value: string) => {
    setValue("medication", value as MedicationData["medication"]);
    updateFields({ medication: value as MedicationData["medication"] });
  };

  const handleOtherChange = (value: string) => {
    setValue("otherMedication", value);
    updateFields({ otherMedication: value });
  };

  return (
    <FormWrapper title="Are you currently on any medication?" subheading="">
      <form>
        <RadioOption
          id="yes_medications"
          label="Yes"
          name="medication"
          value="yes_medications"
          onChange={handleChange}
          checked={currentMedication === "yes_medications"}
        />

        {currentMedication === "yes_medications" && (
          <TextareaInput
            onChange={handleOtherChange}
            value={watch("otherMedication") || ""}
            placeholder="Please specify"
          />
        )}

        <RadioOption
          id="no_allergies"
          label="No"
          name="medication"
          value="no_allergies"
          onChange={handleChange}
          checked={currentMedication === "no_allergies"}
        />
      </form>
    </FormWrapper>
  );
}

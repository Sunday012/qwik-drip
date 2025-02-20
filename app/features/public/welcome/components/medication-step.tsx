import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { welcomeFormSchema } from "../schema";
import { FormContainer } from "./form-container";
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
  const {
    register,
    watch,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm<MedicationData>({
    resolver: zodResolver(medicationSchema),
    defaultValues: defaultValues || {
      medication: undefined,
      otherMedication: "",
    },
  });

  const currentMedication = watch("medication");

  const onSubmit = (data: MedicationData) => {
    updateFields(data);
  };

  const handleChange = (value: string) => {
    setValue("medication", value as MedicationData["medication"], {
      shouldValidate: true,
    });
    updateFields({ medication: value as MedicationData["medication"] });
  };

  const handleOtherChange = (value: string) => {
    setValue("otherMedication", value, { shouldValidate: true });
    updateFields({ otherMedication: value });
  };

  return (
    <FormContainer title="Are you currently on any medication?" subheading="">
      <form
        className="flex w-full flex-col space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <RadioOption
          id="yes_medications"
          label="Yes"
          {...register("medication")}
          value="yes_medications"
          onChange={handleChange}
          checked={currentMedication === "yes_medications"}
        />

        {currentMedication === "yes_medications" && (
          <div>
            <TextareaInput
              onChange={handleOtherChange}
              value={watch("otherMedication") || ""}
              placeholder="Please specify"
            />
            {errors.otherMedication && (
              <p className="mt-1 text-sm text-red-500">
                {errors.otherMedication.message}
              </p>
            )}
          </div>
        )}

        <RadioOption
          id="no_allergies"
          label="No"
          {...register("medication")}
          value="no_medications"
          onChange={handleChange}
          checked={currentMedication === "no_medications"}
        />

        {errors.medication && (
          <p className="text-sm text-red-500">{errors.medication.message}</p>
        )}
      </form>
    </FormContainer>
  );
}

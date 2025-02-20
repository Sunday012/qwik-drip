import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { welcomeFormSchema } from "../schema";
import { FormContainer } from "./form-container";
import { RadioOption } from "./radio-option";

const allergiesSchema = z.object({
  allergies: welcomeFormSchema.shape.allergies,
});

type AllergiesFormData = z.infer<typeof allergiesSchema>;

type UserFormProps = {
  defaultValues?: AllergiesFormData;
  updateFields: (fields: Partial<AllergiesFormData>) => void;
};

export function AllergiesStep({ defaultValues, updateFields }: UserFormProps) {
  const { watch, setValue } = useForm<AllergiesFormData>({
    resolver: zodResolver(allergiesSchema),
    defaultValues: defaultValues || {
      allergies: undefined,
    },
  });

  const watchedAllergies = watch("allergies");

  const handleChange = (value: string) => {
    setValue("allergies", value as AllergiesFormData["allergies"]);
    updateFields({ allergies: value as AllergiesFormData["allergies"] });
  };

  return (
    <FormContainer title="Do you have any allergies?" subheading="">
      <RadioOption
        id="yes_medications"
        label="Yes, to specific medications"
        value="yes_medications"
        checked={watchedAllergies === "yes_medications"}
        onChange={handleChange}
        name="allergies"
      />

      <RadioOption
        id="yes_food"
        label="Yes, to specific foods"
        value="yes_food"
        checked={watchedAllergies === "yes_food"}
        onChange={handleChange}
        name="allergies"
      />

      <RadioOption
        id="yes_environment"
        label="Yes, to environmental factors (e.g., pollen, dust)"
        value="yes_environment"
        checked={watchedAllergies === "yes_environment"}
        onChange={handleChange}
        name="allergies"
      />

      <RadioOption
        id="no_allergies"
        label="No known allergies"
        value="no_allergies"
        checked={watchedAllergies === "no_allergies"}
        onChange={handleChange}
        name="allergies"
      />
    </FormContainer>
  );
}

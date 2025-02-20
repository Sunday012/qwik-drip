import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { welcomeFormSchema } from "../schema";
import { FormContainer } from "./form-container";
import { RadioOption } from "./radio-option";

const ageSchema = z.object({
  age: welcomeFormSchema.shape.age,
});

type AgeFormData = z.infer<typeof ageSchema>;

type UserFormProps = {
  defaultValues?: AgeFormData;
  updateFields: (fields: Partial<AgeFormData>) => void;
};

export function AgeStep({ defaultValues, updateFields }: UserFormProps) {
  const { setValue, watch } = useForm<AgeFormData>({
    resolver: zodResolver(ageSchema),
    defaultValues: defaultValues || {
      age: undefined,
    },
  });

  const watchAge = watch("age");

  const handleChange = (value: string) => {
    setValue("age", value as AgeFormData["age"]);
    updateFields({ age: value as AgeFormData["age"] });
  };

  return (
    <FormContainer title="How old are you?" subheading="">
      <RadioOption
        id="18_24"
        label="18-24"
        value="18_24"
        checked={watchAge === "18_24"}
        onChange={handleChange}
        name="age"
      />
      <RadioOption
        id="25_34"
        label="25-34"
        value="25_34"
        checked={watchAge === "25_34"}
        onChange={handleChange}
        name="age"
      />
      <RadioOption
        id="35_44"
        label="35-44"
        value="35_44"
        checked={watchAge === "35_44"}
        onChange={handleChange}
        name="age"
      />
      <RadioOption
        id="45_54"
        label="45-54"
        value="45_54"
        checked={watchAge === "45_54"}
        onChange={handleChange}
        name="age"
      />
      <RadioOption
        id="55+"
        label="55+"
        value="55+"
        checked={watchAge === "55+"}
        onChange={handleChange}
        name="age"
      />
    </FormContainer>
  );
}

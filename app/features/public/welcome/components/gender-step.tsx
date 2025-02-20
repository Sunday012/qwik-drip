import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { welcomeFormSchema } from "../schema";
import { FormWrapper } from "./form-wrapper";
import { RadioOption } from "./radio-option";
import { TextareaInput } from "./textarea-input";

const genderSchema = z.object({
  gender: welcomeFormSchema.shape.gender,
  otherGender: welcomeFormSchema.shape.otherGender,
});

type GenderFormData = z.infer<typeof genderSchema>;

type UserFormProps = {
  defaultValues?: GenderFormData;
  updateFields: (fields: Partial<GenderFormData>) => void;
};

export function GenderStep({ defaultValues, updateFields }: UserFormProps) {
  const { setValue, watch } = useForm<GenderFormData>({
    resolver: zodResolver(genderSchema),
    defaultValues: defaultValues || {
      gender: undefined,
      otherGender: undefined,
    },
  });

  const selectedGender = watch("gender");

  const handleChange = (value: string) => {
    setValue("gender", value as GenderFormData["gender"]);
    updateFields({ gender: value as GenderFormData["gender"] });
  };

  const handleOtherChange = (value: string) => {
    setValue("otherGender", value);
    updateFields({ otherGender: value });
  };

  return (
    <FormWrapper title="What's your gender?" subheading="">
      <RadioOption
        id="male"
        label="Male"
        value="male"
        checked={selectedGender === "male"}
        onChange={handleChange}
        name="gender"
      />
      <RadioOption
        id="female"
        label="Female"
        value="female"
        checked={selectedGender === "female"}
        onChange={handleChange}
        name="gender"
      />
      <RadioOption
        id="non_binary"
        label="Non-Binary"
        value="non_binary"
        checked={selectedGender === "non_binary"}
        onChange={handleChange}
        name="gender"
      />
      <RadioOption
        id="other"
        label="Other"
        value="other"
        checked={selectedGender === "other"}
        onChange={handleChange}
        name="gender"
      />

      {selectedGender === "other" && (
        <TextareaInput
          value={watch("otherGender") || ""}
          onChange={handleOtherChange}
        />
      )}
    </FormWrapper>
  );
}

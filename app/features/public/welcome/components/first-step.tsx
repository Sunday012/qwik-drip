import { CustomInput } from "./custom-input";
import { FormWrapper } from "./form-wrapper";
import { RadioOption } from "./radio-option";

type UserData = {
  gender: string;
  otherGender?: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function FirstStep({
  gender,
  otherGender,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper title="What's your gender?" subheading="">
      <RadioOption
        id="male"
        label="Male"
        value="male"
        checked={gender === "male"}
        onChange={(value) => updateFields({ gender: value })}
        name="gender"
        autoFocus
      />

      <RadioOption
        id="female"
        label="Female"
        value="female"
        checked={gender === "female"}
        onChange={(value) => updateFields({ gender: value })}
        name="gender"
      />

      <RadioOption
        id="non_binary"
        label="Non-Binary"
        value="non_binary"
        checked={gender === "non_binary"}
        onChange={(value) => updateFields({ gender: value })}
        name="gender"
      />

      <RadioOption
        id="other"
        label="Other"
        value="other"
        checked={gender === "other"}
        onChange={(value) => updateFields({ gender: value })}
        name="gender"
      />

      {gender === "other" && (
        <CustomInput
          value={otherGender || ""}
          onChange={(value) => updateFields({ otherGender: value })}
        />
      )}
    </FormWrapper>
  );
}

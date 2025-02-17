import { FormWrapper } from "./form-wrapper";
import { RadioOption } from "./radio-option";

type UserData = {
  age: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function SecondStep({ age, updateFields }: UserFormProps) {
  return (
    <FormWrapper title="How old are you?" subheading="">
      <RadioOption
        id="18_24"
        label="18-24"
        value="18_24"
        checked={age === "18_24"}
        onChange={(value) => updateFields({ age: value })}
        name="age"
        autoFocus
      />

      <RadioOption
        id="25_34"
        label="25-34"
        value="25_34"
        checked={age === "25_34"}
        onChange={(value) => updateFields({ age: value })}
        name="age"
      />

      <RadioOption
        id="35_44"
        label="35-44"
        value="35_44"
        checked={age === "35_44"}
        onChange={(value) => updateFields({ age: value })}
        name="age"
      />

      <RadioOption
        id="45_54"
        label="45-54"
        value="45_54"
        checked={age === "45_54"}
        onChange={(value) => updateFields({ age: value })}
        name="age"
      />

      <RadioOption
        id="55+"
        label="55+"
        value="55+"
        checked={age === "55+"}
        onChange={(value) => updateFields({ age: value })}
        name="age"
      />
    </FormWrapper>
  );
}

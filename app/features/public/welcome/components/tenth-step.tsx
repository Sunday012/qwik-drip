import { FormWrapper } from "./form-wrapper";
import { RadioOption } from "./radio-option";

type UserData = {
  allergies: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function TenthStep({ allergies, updateFields }: UserFormProps) {
  return (
    <FormWrapper title="Do you have any allergies?" subheading="">
      <RadioOption
        id="yes_medications"
        label="Yes, to specific medications"
        value="yes_medications"
        checked={allergies === "yes_medications"}
        onChange={(value) => updateFields({ allergies: value })}
        name="allergies"
        autoFocus
      />

      <RadioOption
        id="yes_food"
        label="Yes, to specific foods"
        value="yes_food"
        checked={allergies === "yes_food"}
        onChange={(value) => updateFields({ allergies: value })}
        name="allergies"
      />

      <RadioOption
        id="yes_environment"
        label="Yes, to environmental factors (e.g., pollen, dust)"
        value="yes_environment"
        checked={allergies === "yes_environment"}
        onChange={(value) => updateFields({ allergies: value })}
        name="allergies"
      />

      <RadioOption
        id="no_allergies"
        label="No known allergies"
        value="no_allergies"
        checked={allergies === "no_allergies"}
        onChange={(value) => updateFields({ allergies: value })}
        name="allergies"
      />
    </FormWrapper>
  );
}

import { FormWrapper } from "./form-wrapper";
import { RadioOption } from "./radio-option";
import { CustomInput } from "./custom-input";

type UserData = {
    medication: string,
    otherMedication: string,
}

type UserFormProps = UserData & {
    updateFields: (fields: Partial<UserData> ) => void
}

export function EighthStep({medication, otherMedication, updateFields}: UserFormProps ) {

  return (
    <FormWrapper title='Are you currently on any medication?' subheading=''>
      <RadioOption
        id="yes_medications"
        label="Yes"
        value="yes_medications"
        checked={medication === "yes_medications"}
        onChange={(value) => updateFields({ medication: value })}
        name="medication"
        autoFocus
      />

      {medication === "yes_medications" && (
        <CustomInput
          value={otherMedication || ""}
          onChange={(value) => updateFields({ otherMedication: value })}
          placeholder="Please specify"
        />
      )}

      <RadioOption
        id="no_allergies"
        label="No"
        value="no_allergies"
        checked={medication === "no_allergies"}
        onChange={(value) => updateFields({ medication: value })}
        name="medication"
      />
    </FormWrapper>
  )
}

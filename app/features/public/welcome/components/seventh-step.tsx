import { FormWrapper } from "./form-wrapper";
import { RadioOption } from "./radio-option";

type UserData = {
  healthCondition: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function SeventhStep({
  healthCondition,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper
      title="Do you have any of these health conditions?"
      subheading=""
    >
      <RadioOption
        id="diabetes"
        label="Diabetes (Type 1 or Type 2)"
        value="diabetes"
        checked={healthCondition === "diabetes"}
        onChange={(value) => updateFields({ healthCondition: value })}
        name="healthCondition"
        autoFocus
      />

      <RadioOption
        id="thyroid"
        label="Thyroid disorders (e.g., hypothyroidism)"
        value="thyroid"
        checked={healthCondition === "thyroid"}
        onChange={(value) => updateFields({ healthCondition: value })}
        name="healthCondition"
      />

      <RadioOption
        id="hypertension"
        label="Hypertension or cardiovascular conditions"
        value="hypertension"
        checked={healthCondition === "hypertension"}
        onChange={(value) => updateFields({ healthCondition: value })}
        name="healthCondition"
      />

      <RadioOption
        id="pcos"
        label="PCOS (Polycystic Ovary Syndrome)"
        value="pcos"
        checked={healthCondition === "pcos"}
        onChange={(value) => updateFields({ healthCondition: value })}
        name="healthCondition"
      />

      <RadioOption
        id="sleep_apnea"
        label="Sleep apnea"
        value="sleep_apnea"
        checked={healthCondition === "sleep_apnea"}
        onChange={(value) => updateFields({ healthCondition: value })}
        name="healthCondition"
      />

      <RadioOption
        id="depression_anxiety"
        label="Depression or anxiety"
        value="depression_anxiety"
        checked={healthCondition === "depression_anxiety"}
        onChange={(value) => updateFields({ healthCondition: value })}
        name="healthCondition"
      />

      <RadioOption
        id="none"
        label="None"
        value="none"
        checked={healthCondition === "none"}
        onChange={(value) => updateFields({ healthCondition: value })}
        name="healthCondition"
      />
    </FormWrapper>
  );
}

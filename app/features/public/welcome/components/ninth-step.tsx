import { FormWrapper } from "./form-wrapper";
import { RadioOption } from "./radio-option";
import { CustomInput } from "./custom-input";

type UserData = {
  reason: string;
  otherReason: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function NinthStep({
  reason,
  otherReason,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper title="What's your reason for losing weight?" subheading="">
      <RadioOption
        id="improve_health"
        label="Improve overall health"
        value="improve_health"
        checked={reason === "improve_health"}
        onChange={(value) => updateFields({ reason: value })}
        name="reason"
        autoFocus
      />

      <RadioOption
        id="boost_confidence"
        label="Boost self-confidence and appearance"
        value="boost_confidence"
        checked={reason === "boost_confidence"}
        onChange={(value) => updateFields({ reason: value })}
        name="reason"
      />

      <RadioOption
        id="manage_medical_condition"
        label="Manage a medical condition"
        value="manage_medical_condition"
        checked={reason === "manage_medical_condition"}
        onChange={(value) => updateFields({ reason: value })}
        name="reason"
      />

      <RadioOption
        id="prep_for_event"
        label="Prepare for a specific event (e.g., wedding, surgery)"
        value="prep_for_event"
        checked={reason === "prep_for_event"}
        onChange={(value) => updateFields({ reason: value })}
        name="reason"
      />

      <RadioOption
        id="other"
        label="Other"
        value="other"
        checked={reason === "other"}
        onChange={(value) => updateFields({ reason: value })}
        name="reason"
      />

      {reason === "other" && (
        <CustomInput
          value={otherReason || ""}
          onChange={(value) => updateFields({ otherReason: value })}
          placeholder="Please specify"
        />
      )}
    </FormWrapper>
  );
}

import { FormWrapper } from "./form-wrapper";
import { RadioOption } from "./radio-option";
import { TextareaInput } from "./textarea-input";

type UserData = {
  mostWeight: string;
  otherMostWeight: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function SixthStep({
  mostWeight,
  otherMostWeight,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper
      title="What part of your body holds the most weight?"
      subheading=""
    >
      <RadioOption
        id="abdomen"
        label="Abdomen"
        value="abdomen"
        checked={mostWeight === "abdomen"}
        onChange={(value) => updateFields({ mostWeight: value })}
        name="mostWeight"
        autoFocus
      />

      <RadioOption
        id="hips_thighs"
        label="Hips and thighs"
        value="hips_thighs"
        checked={mostWeight === "hips_thighs"}
        onChange={(value) => updateFields({ mostWeight: value })}
        name="mostWeight"
      />

      <RadioOption
        id="arms_shoulders"
        label="Arms and shoulders"
        value="arms_shoulders"
        checked={mostWeight === "arms_shoulders"}
        onChange={(value) => updateFields({ mostWeight: value })}
        name="mostWeight"
      />

      <RadioOption
        id="entire_body"
        label="Entire body evenly distributed"
        value="entire_body"
        checked={mostWeight === "entire_body"}
        onChange={(value) => updateFields({ mostWeight: value })}
        name="mostWeight"
      />

      <RadioOption
        id="other"
        label="Other"
        value="other"
        checked={mostWeight === "other"}
        onChange={(value) => updateFields({ mostWeight: value })}
        name="mostWeight"
      />

      {mostWeight === "other" && (
        <TextareaInput
          value={otherMostWeight || ""}
          onChange={(value) => updateFields({ otherMostWeight: value })}
          placeholder="Please specify"
        />
      )}
    </FormWrapper>
  );
}

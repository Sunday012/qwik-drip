import { FormWrapper } from "./form-wrapper";
import { RadioOption } from "./radio-option";

type UserData = {
  meal: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function ThirdStep({ meal, updateFields }: UserFormProps) {
  return (
    <FormWrapper title="How often do you eat in a day?" subheading="">
      <RadioOption
        id="1_2meals"
        label="1-2 meals"
        value="1_2meals"
        checked={meal === "1_2meals"}
        onChange={(value) => updateFields({ meal: value })}
        name="meal"
        autoFocus
      />

      <RadioOption
        id="3meals"
        label="3 meals"
        value="3meals"
        checked={meal === "3meals"}
        onChange={(value) => updateFields({ meal: value })}
        name="meal"
      />

      <RadioOption
        id="4_5_small_meals_or_snacks"
        label="4-5 small meals/snacks"
        value="4_5_small_meals_or_snacks"
        checked={meal === "4_5_small_meals_or_snacks"}
        onChange={(value) => updateFields({ meal: value })}
        name="meal"
      />

      <RadioOption
        id="eat_frequently_throughout_the_day"
        label="I eat frequently throughout the day"
        value="eat_frequently_throughout_the_day"
        checked={meal === "eat_frequently_throughout_the_day"}
        onChange={(value) => updateFields({ meal: value })}
        name="meal"
      />

      <RadioOption
        id="my_eating_pattern_varies"
        label="My eating pattern varies"
        value="my_eating_pattern_varies"
        checked={meal === "my_eating_pattern_varies"}
        onChange={(value) => updateFields({ meal: value })}
        name="meal"
      />
    </FormWrapper>
  );
}

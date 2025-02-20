import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { welcomeFormSchema } from "../schema";
import { FormContainer } from "./form-container";
import { RadioOption } from "./radio-option";

export const mealStepSchema = z.object({
  meal: welcomeFormSchema.shape.meal,
});

type MealStepForm = z.infer<typeof mealStepSchema>;

type MealFormProps = {
  defaultValues?: MealStepForm;
  updateFields: (fields: Partial<MealStepForm>) => void;
};

export function MealStep({ defaultValues, updateFields }: MealFormProps) {
  const { setValue, watch } = useForm<MealStepForm>({
    resolver: zodResolver(mealStepSchema),
    defaultValues: defaultValues || {
      meal: undefined,
    },
  });

  const mealValue = watch("meal");

  React.useEffect(() => {
    if (mealValue) {
      updateFields({ meal: mealValue });
    }
  }, [mealValue, updateFields]);

  const handleChange = (value: string) => {
    setValue("meal", value as MealStepForm["meal"]);
    updateFields({
      meal: value as MealStepForm["meal"],
    });
  };

  return (
    <FormContainer title="How often do you eat in a day?" subheading="">
      <RadioOption
        id="1_2meals"
        label="1-2 meals"
        value="1_2meals"
        checked={mealValue === "1_2meals"}
        onChange={handleChange}
        name="meal"
        autoFocus
      />

      <RadioOption
        id="3meals"
        label="3 meals"
        value="3meals"
        checked={mealValue === "3meals"}
        onChange={handleChange}
        name="meal"
      />

      <RadioOption
        id="4_5_small_meals_or_snacks"
        label="4-5 small meals/snacks"
        value="4_5_small_meals_or_snacks"
        checked={mealValue === "4_5_small_meals_or_snacks"}
        onChange={handleChange}
        name="meal"
      />

      <RadioOption
        id="eat_frequently_throughout_the_day"
        label="I eat frequently throughout the day"
        value="eat_frequently_throughout_the_day"
        checked={mealValue === "eat_frequently_throughout_the_day"}
        onChange={handleChange}
        name="meal"
      />

      <RadioOption
        id="my_eating_pattern_varies"
        label="My eating pattern varies"
        value="my_eating_pattern_varies"
        checked={mealValue === "my_eating_pattern_varies"}
        onChange={handleChange}
        name="meal"
      />
    </FormContainer>
  );
}

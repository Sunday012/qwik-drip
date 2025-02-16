import FormWrapper from "./form-wrapper";

type UserData = {
  meal: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function ThirdStep({ meal, updateFields }: UserFormProps) {
  return (
    <FormWrapper title="How often do you eat in a day?" subheading="">
      <label
        htmlFor="1_2meals"
        className={`flex w-full cursor-pointer flex-row-reverse items-start justify-between rounded-lg border-[1px] border-solid p-4 transition-colors duration-300 ease-in-out ${
          meal === "1_2meals" ? "border-[#4272DD]" : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="meal"
          id="1_2meals"
          value="1_2meals"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          autoFocus
          onChange={(e) => updateFields({ meal: e.target.value })}
          required
          checked={meal === "1_2meals"}
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          1-2 meals
        </p>
      </label>

      <label
        htmlFor="3meals"
        className={`flex w-full cursor-pointer flex-row-reverse items-start justify-between rounded-lg border-[1px] border-solid p-4 transition-colors duration-300 ease-in-out ${
          meal === "3meals" ? "border-[#4272DD]" : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="meal"
          id="3meals"
          value="3meals"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          onChange={(e) => updateFields({ meal: e.target.value })}
          required
          checked={meal === "3meals"}
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          3 meals
        </p>
      </label>

      <label
        htmlFor="4_5_small_meals_or_snacks"
        className={`flex w-full cursor-pointer flex-row-reverse items-start justify-between rounded-lg border-[1px] border-solid p-4 transition-colors duration-300 ease-in-out ${
          meal === "4_5_small_meals_or_snacks"
            ? "border-[#4272DD]"
            : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="meal"
          id="4_5_small_meals_or_snacks"
          value="4_5_small_meals_or_snacks"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          onChange={(e) => updateFields({ meal: e.target.value })}
          required
          checked={meal === "4_5_small_meals_or_snacks"}
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          4-5 small meals/snacks
        </p>
      </label>

      <label
        htmlFor="eat_frequently_throughout_the_day"
        className={`flex w-full cursor-pointer flex-row-reverse items-start justify-between rounded-lg border-[1px] border-solid p-4 transition-colors duration-300 ease-in-out ${
          meal === "eat_frequently_throughout_the_day"
            ? "border-[#4272DD]"
            : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="meal"
          id="eat_frequently_throughout_the_day"
          value="eat_frequently_throughout_the_day"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          onChange={(e) => updateFields({ meal: e.target.value })}
          required
          checked={meal === "eat_frequently_throughout_the_day"}
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          I eat frequently throughout the day
        </p>
      </label>

      <label
        htmlFor="my_eating_pattern_varies"
        className={`flex w-full cursor-pointer flex-row-reverse items-start justify-between rounded-lg border-[1px] border-solid p-4 transition-colors duration-300 ease-in-out ${
          meal === "my_eating_pattern_varies"
            ? "border-[#4272DD]"
            : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="meal"
          id="my_eating_pattern_varies"
          value="my_eating_pattern_varies"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          onChange={(e) => updateFields({ meal: e.target.value })}
          required
          checked={meal === "my_eating_pattern_varies"}
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          My eating pattern varies
        </p>
      </label>
    </FormWrapper>
  );
}

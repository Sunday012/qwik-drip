import FormWrapper from "./form-wrapper";

type UserData = {
  goalWeight: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function FifthStep({ goalWeight, updateFields }: UserFormProps) {
  return (
    <FormWrapper title="What is your goal weight?" subheading="">
      <label
        htmlFor="under_50kg"
        className="flex w-full cursor-pointer items-start justify-between rounded-lg border-[1px] border-solid border-[rgba(0,0,0,0.1)] transition-colors duration-300 ease-in-out"
      >
        <input
          type="text"
          name="goal_weight"
          id="goal_weight"
          value={goalWeight || ""}
          className="peer w-11/12 p-4"
          autoFocus
          onChange={(e) => updateFields({ goalWeight: e.target.value })}
          required
        />
        <div className="border-l-solid w-[2/12] border-l-[1px] border-l-[#E6E6E6] p-4">
          <p>KG</p>
        </div>
      </label>
    </FormWrapper>
  );
}

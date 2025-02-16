import FormWrapper from "./form-wrapper";

type UserData = {
  allergies: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function TenthStep({ allergies, updateFields }: UserFormProps) {
  return (
    <FormWrapper title="Do you have any allergies?" subheading="">
      <label
        htmlFor="yes_medications"
        className={`flex w-full cursor-pointer flex-row-reverse items-start justify-between rounded-lg border-[1px] border-solid p-4 transition-colors duration-300 ease-in-out ${
          allergies === "yes_medications"
            ? "border-[#4272DD]"
            : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="allergies"
          id="yes_medications"
          value="yes_medications"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          autoFocus
          onChange={(e) => updateFields({ allergies: e.target.value })}
          required
          checked={allergies === "yes_medications"}
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          Yes, to specific medications
        </p>
      </label>

      <label
        htmlFor="yes_food"
        className={`flex w-full cursor-pointer flex-row-reverse items-start justify-between rounded-lg border-[1px] border-solid p-4 transition-colors duration-300 ease-in-out ${
          allergies === "yes_food"
            ? "border-[#4272DD]"
            : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="allergies"
          id="yes_food"
          value="yes_food"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          onChange={(e) => updateFields({ allergies: e.target.value })}
          required
          checked={allergies === "yes_food"}
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          Yes, to specific foods
        </p>
      </label>

      <label
        htmlFor="yes_environment"
        className={`flex w-full cursor-pointer flex-row-reverse items-start justify-between rounded-lg border-[1px] border-solid p-4 transition-colors duration-300 ease-in-out ${
          allergies === "yes_environment"
            ? "border-[#4272DD]"
            : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="allergies"
          id="yes_environment"
          value="yes_environment"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          onChange={(e) => updateFields({ allergies: e.target.value })}
          checked={allergies === "yes_environment"}
          required
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          Yes, to environmental factors (e.g., pollen, dust)
        </p>
      </label>

      <label
        htmlFor="no_allergies"
        className={`flex w-full cursor-pointer flex-row-reverse items-start justify-between rounded-lg border-[1px] border-solid p-4 transition-colors duration-300 ease-in-out ${
          allergies === "no_allergies"
            ? "border-[#4272DD]"
            : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="allergies"
          id="no_allergies"
          value="no_allergies"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          onChange={(e) => updateFields({ allergies: e.target.value })}
          required
          checked={allergies === "no_allergies"}
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          No known allergies
        </p>
      </label>
    </FormWrapper>
  );
}

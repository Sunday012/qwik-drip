import FormWrapper from "./form-wrapper";

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
      <label
        htmlFor="abdomen"
        className={`flex w-full cursor-pointer flex-row-reverse items-start justify-between rounded-lg border-[1px] border-solid p-4 transition-colors duration-300 ease-in-out ${
          mostWeight === "abdomen"
            ? "border-[#4272DD]"
            : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="mostWeight"
          id="abdomen"
          value="abdomen"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          autoFocus
          onChange={(e) => updateFields({ mostWeight: e.target.value })}
          required
          checked={mostWeight === "abdomen"}
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          Abdomen
        </p>
      </label>

      <label
        htmlFor="hips_thighs"
        className={`flex w-full cursor-pointer flex-row-reverse items-start justify-between rounded-lg border-[1px] border-solid p-4 transition-colors duration-300 ease-in-out ${
          mostWeight === "hips_thighs"
            ? "border-[#4272DD]"
            : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="mostWeight"
          id="hips_thighs"
          value="hips_thighs"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          onChange={(e) => updateFields({ mostWeight: e.target.value })}
          required
          checked={mostWeight === "hips_thighs"}
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          Hips and thighs
        </p>
      </label>

      <label
        htmlFor="arms_shoulders"
        className={`flex w-full cursor-pointer flex-row-reverse items-start justify-between rounded-lg border-[1px] border-solid p-4 transition-colors duration-300 ease-in-out ${
          mostWeight === "arms_shoulders"
            ? "border-[#4272DD]"
            : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="mostWeight"
          id="arms_shoulders"
          value="arms_shoulders"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          onChange={(e) => updateFields({ mostWeight: e.target.value })}
          required
          checked={mostWeight === "arms_shoulders"}
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          Arms and shoulders
        </p>
      </label>

      <label
        htmlFor="entire_body"
        className={`flex w-full cursor-pointer flex-row-reverse items-start justify-between rounded-lg border-[1px] border-solid p-4 transition-colors duration-300 ease-in-out ${
          mostWeight === "entire_body"
            ? "border-[#4272DD]"
            : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="mostWeight"
          id="entire_body"
          value="entire_body"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          onChange={(e) => updateFields({ mostWeight: e.target.value })}
          required
          checked={mostWeight === "entire_body"}
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          Entire body evenly distributed
        </p>
      </label>

      <label
        htmlFor="other"
        className={`flex w-full cursor-pointer flex-row-reverse items-start justify-between rounded-lg border-[1px] border-solid p-4 transition-colors duration-300 ease-in-out ${
          mostWeight === "other"
            ? "border-[#4272DD]"
            : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="mostWeight"
          id="other"
          value="other"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          onChange={(e) => updateFields({ mostWeight: e.target.value })}
          required
          checked={mostWeight === "other"}
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          Other
        </p>
      </label>

      {/* Conditionally render input field if "Other" is selected */}
      {mostWeight === "other" && (
        <div className="w-full">
          <textarea
            placeholder="Please specify"
            value={otherMostWeight || ""}
            className="placeholder:font-paragraph w-full rounded-lg border-[1px] border-solid border-[rgba(0,0,0,0.1)] p-4 text-left placeholder:text-lg placeholder:text-[#7F8493] focus:border-[#4272DD] focus:outline-none"
            onChange={(e) => updateFields({ otherMostWeight: e.target.value })}
          />
        </div>
      )}
    </FormWrapper>
  );
}

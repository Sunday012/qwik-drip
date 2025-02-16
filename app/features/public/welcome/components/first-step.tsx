import FormWrapper from "./form-wrapper";

type UserData = {
  gender: string;
  otherGender?: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function FirstStep({
  gender,
  otherGender,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper title="What’s your gender?" subheading="">
      <label
        htmlFor="male"
        className={`flex h-[60px] w-full cursor-pointer flex-row-reverse items-center justify-between rounded-lg border-[1px] border-solid p-4 shadow-[0px_1px_3px_0px_#1D0D680D_0px_5px_5px_0px_#1D0D680A_0px_12px_7px_0px_#1D0D6808] transition-colors duration-300 ease-in-out ${
          gender === "male" ? "border-[#4272DD]" : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="gender"
          id="male"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          onChange={(e) => updateFields({ gender: e.target.value })}
          autoFocus
          required
          value="male"
          checked={gender === "male"}
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          Male
        </p>
      </label>

      <label
        htmlFor="female"
        className={`flex h-[60px] w-full cursor-pointer flex-row-reverse items-center justify-between rounded-lg border-[1px] border-solid p-4 shadow-[0px_1px_3px_0px_#1D0D680D_0px_5px_5px_0px_#1D0D680A_0px_12px_7px_0px_#1D0D6808] transition-colors duration-300 ease-in-out ${
          gender === "female" ? "border-[#4272DD]" : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="gender"
          id="female"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          onChange={(e) => updateFields({ gender: e.target.value })}
          value="female"
          required
          checked={gender === "female"}
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          Female
        </p>
      </label>

      <label
        htmlFor="non_binary"
        className={`flex h-[60px] w-full cursor-pointer flex-row-reverse items-center justify-between rounded-lg border-[1px] border-solid p-4 shadow-[0px_1px_3px_0px_#1D0D680D_0px_5px_5px_0px_#1D0D680A_0px_12px_7px_0px_#1D0D6808] transition-colors duration-300 ease-in-out ${
          gender === "non_binary"
            ? "border-[#4272DD]"
            : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="gender"
          id="non_binary"
          value="non_binary"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          onChange={(e) => updateFields({ gender: e.target.value })}
          required
          checked={gender === "non_binary"}
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          Non-Binary
        </p>
      </label>

      <label
        htmlFor="other"
        className={`flex h-[60px] w-full cursor-pointer flex-row-reverse items-center justify-between rounded-lg border-[1px] border-solid p-4 shadow-[0px_1px_3px_0px_#1D0D680D_0px_5px_5px_0px_#1D0D680A_0px_12px_7px_0px_#1D0D6808] transition-colors duration-300 ease-in-out ${
          gender === "other" ? "border-[#4272DD]" : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="gender"
          id="other"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          onChange={(e) => updateFields({ gender: e.target.value })}
          required
          checked={gender === "other"}
          value="other"
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          Other
        </p>
      </label>
      {/* Conditionally render input field if "Other" is selected */}
      {gender === "other" && (
        <div className="h-[60px] w-full shadow-[0px_1px_3px_0px_#1D0D680D_0px_5px_5px_0px_#1D0D680A_0px_12px_7px_0px_#1D0D6808]">
          <input
            type="text"
            placeholder="Please specify"
            className="placeholder:font-paragraph w-full rounded-lg border-[1px] border-solid border-[rgba(0,0,0,0.1)] p-4 placeholder:text-lg placeholder:text-[#7F8493] focus:border-[#4272DD] focus:outline-none"
            value={otherGender || ""}
            onChange={(e) => updateFields({ otherGender: e.target.value })}
          />
        </div>
      )}
    </FormWrapper>
  );
}

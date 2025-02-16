import FormWrapper from "./form-wrapper";

type UserData = {
  age: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function SecondStep({ age, updateFields }: UserFormProps) {
  return (
    <FormWrapper title="How old are you?" subheading="">
      <label
        htmlFor="18_24"
        className={`flex w-full cursor-pointer flex-row-reverse items-start justify-between rounded-lg border-[1px] border-solid p-4 transition-colors duration-300 ease-in-out ${
          age === "18_24" ? "border-[#4272DD]" : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="age"
          id="18_24"
          value="18_24"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          onChange={(e) => updateFields({ age: e.target.value })}
          autoFocus
          required
          checked={age === "18_24"}
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          18-24
        </p>
      </label>

      <label
        htmlFor="25_34"
        className={`flex w-full cursor-pointer flex-row-reverse items-start justify-between rounded-lg border-[1px] border-solid p-4 transition-colors duration-300 ease-in-out ${
          age === "25_34" ? "border-[#4272DD]" : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="age"
          id="25_34"
          value="25_34"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          onChange={(e) => updateFields({ age: e.target.value })}
          required
          checked={age === "25_34"}
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          25-34
        </p>
      </label>

      <label
        htmlFor="35_44"
        className={`flex w-full cursor-pointer flex-row-reverse items-start justify-between rounded-lg border-[1px] border-solid p-4 transition-colors duration-300 ease-in-out ${
          age === "35_44" ? "border-[#4272DD]" : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="age"
          id="35_44"
          value="35_44"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          onChange={(e) => updateFields({ age: e.target.value })}
          required
          checked={age === "35_44"}
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          35-44
        </p>
      </label>

      <label
        htmlFor="45_54"
        className={`flex w-full cursor-pointer flex-row-reverse items-start justify-between rounded-lg border-[1px] border-solid p-4 transition-colors duration-300 ease-in-out ${
          age === "45_54" ? "border-[#4272DD]" : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="age"
          id="45_54"
          value="45_54"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          onChange={(e) => updateFields({ age: e.target.value })}
          required
          checked={age === "45_54"}
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          45-54
        </p>
      </label>
      <label
        htmlFor="55+"
        className={`flex w-full cursor-pointer flex-row-reverse items-start justify-between rounded-lg border-[1px] border-solid p-4 transition-colors duration-300 ease-in-out ${
          age === "55+" ? "border-[#4272DD]" : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="age"
          id="55+"
          value="55+"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          onChange={(e) => updateFields({ age: e.target.value })}
          required
          checked={age === "55+"}
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          55+
        </p>
      </label>
    </FormWrapper>
  );
}

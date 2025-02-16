import FormWrapper from "./form-wrapper";

type UserData = {
  healthCondition: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function SeventhStep({
  healthCondition,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper
      title="Do you have any of these health conditions?"
      subheading=""
    >
      <label
        htmlFor="diabetes"
        className={`flex w-full cursor-pointer flex-row-reverse items-start justify-between rounded-lg border-[1px] border-solid p-4 transition-colors duration-300 ease-in-out ${
          healthCondition === "diabetes"
            ? "border-[#4272DD]"
            : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="healthCondition"
          id="diabetes"
          value="diabetes"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          autoFocus
          onChange={(e) => updateFields({ healthCondition: e.target.value })}
          required
          checked={healthCondition === "diabetes"}
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          Diabetes (Type 1 or Type 2)
        </p>
      </label>

      <label
        htmlFor="thyroid"
        className={`flex w-full cursor-pointer flex-row-reverse items-start justify-between rounded-lg border-[1px] border-solid p-4 transition-colors duration-300 ease-in-out ${
          healthCondition === "thyroid"
            ? "border-[#4272DD]"
            : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="healthCondition"
          id="thyroid"
          value="thyroid"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          onChange={(e) => updateFields({ healthCondition: e.target.value })}
          required
          checked={healthCondition === "thyroid"}
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          Thyroid disorders (e.g., hypothyroidism)
        </p>
      </label>

      <label
        htmlFor="hypertension"
        className={`flex w-full cursor-pointer flex-row-reverse items-start justify-between rounded-lg border-[1px] border-solid p-4 transition-colors duration-300 ease-in-out ${
          healthCondition === "hypertension"
            ? "border-[#4272DD]"
            : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="healthCondition"
          id="hypertension"
          value="hypertension"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          onChange={(e) => updateFields({ healthCondition: e.target.value })}
          required
          checked={healthCondition === "hypertension"}
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          Hypertension or cardiovascular conditions
        </p>
      </label>

      <label
        htmlFor="pcos"
        className={`flex w-full cursor-pointer flex-row-reverse items-start justify-between rounded-lg border-[1px] border-solid p-4 transition-colors duration-300 ease-in-out ${
          healthCondition === "pcos"
            ? "border-[#4272DD]"
            : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="healthCondition"
          id="pcos"
          value="pcos"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          onChange={(e) => updateFields({ healthCondition: e.target.value })}
          required
          checked={healthCondition === "pcos"}
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          PCOS (Polycystic Ovary Syndrome)
        </p>
      </label>

      <label
        htmlFor="sleep_apnea"
        className={`flex w-full cursor-pointer flex-row-reverse items-start justify-between rounded-lg border-[1px] border-solid p-4 transition-colors duration-300 ease-in-out ${
          healthCondition === "sleep_apnea"
            ? "border-[#4272DD]"
            : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="healthCondition"
          id="sleep_apnea"
          value="sleep_apnea"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          onChange={(e) => updateFields({ healthCondition: e.target.value })}
          required
          checked={healthCondition === "sleep_apnea"}
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          Sleep apnea
        </p>
      </label>

      <label
        htmlFor="depression_anxiety"
        className={`flex w-full cursor-pointer flex-row-reverse items-start justify-between rounded-lg border-[1px] border-solid p-4 transition-colors duration-300 ease-in-out ${
          healthCondition === "depression_anxiety"
            ? "border-[#4272DD]"
            : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="healthCondition"
          id="depression_anxiety"
          value="depression_anxiety"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          onChange={(e) => updateFields({ healthCondition: e.target.value })}
          required
          checked={healthCondition === "depression_anxiety"}
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          Depression or anxiety
        </p>
      </label>

      <label
        htmlFor="none"
        className={`flex w-full cursor-pointer flex-row-reverse items-start justify-between rounded-lg border-[1px] border-solid p-4 transition-colors duration-300 ease-in-out ${
          healthCondition === "none"
            ? "border-[#4272DD]"
            : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="healthCondition"
          id="none"
          value="none"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          onChange={(e) => updateFields({ healthCondition: e.target.value })}
          required
          checked={healthCondition === "none"}
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          None
        </p>
      </label>
    </FormWrapper>
  );
}

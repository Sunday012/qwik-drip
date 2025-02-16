import FormWrapper from "./form-wrapper";

type UserData = {
  reason: string;
  otherReason: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function NinthStep({
  reason,
  otherReason,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper title="What's your reason for losing weight?" subheading="">
      <label
        htmlFor="improve_health"
        className={`flex w-full cursor-pointer flex-row-reverse items-start justify-between rounded-lg border-[1px] border-solid p-4 transition-colors duration-300 ease-in-out ${
          reason === "improve_health"
            ? "border-[#4272DD]"
            : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="reason"
          id="improve_health"
          value="improve_health"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          autoFocus
          onChange={(e) => updateFields({ reason: e.target.value })}
          required
          checked={reason === "improve_health"}
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          Improve overall health
        </p>
      </label>

      <label
        htmlFor="boost_confidence"
        className={`flex w-full cursor-pointer flex-row-reverse items-start justify-between rounded-lg border-[1px] border-solid p-4 transition-colors duration-300 ease-in-out ${
          reason === "boost_confidence"
            ? "border-[#4272DD]"
            : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="reason"
          id="boost_confidence"
          value="boost_confidence"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          onChange={(e) => updateFields({ reason: e.target.value })}
          required
          checked={reason === "boost_confidence"}
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          Boost self-confidence and appearance
        </p>
      </label>

      <label
        htmlFor="manage_medical_condition"
        className={`flex w-full cursor-pointer flex-row-reverse items-start justify-between rounded-lg border-[1px] border-solid p-4 transition-colors duration-300 ease-in-out ${
          reason === "manage_medical_condition"
            ? "border-[#4272DD]"
            : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="reason"
          id="manage_medical_condition"
          value="manage_medical_condition"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          onChange={(e) => updateFields({ reason: e.target.value })}
          required
          checked={reason === "manage_medical_condition"}
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          Manage a medical condition
        </p>
      </label>

      <label
        htmlFor="prep_for_event"
        className={`flex w-full cursor-pointer flex-row-reverse items-start justify-between rounded-lg border-[1px] border-solid p-4 transition-colors duration-300 ease-in-out ${
          reason === "prep_for_event"
            ? "border-[#4272DD]"
            : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="reason"
          id="prep_for_event"
          value="prep_for_event"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          onChange={(e) => updateFields({ reason: e.target.value })}
          required
          checked={reason === "prep_for_event"}
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          Prepare for a specific event (e.g., wedding, surgery)
        </p>
      </label>

      <label
        htmlFor="other"
        className={`flex w-full cursor-pointer flex-row-reverse items-start justify-between rounded-lg border-[1px] border-solid p-4 transition-colors duration-300 ease-in-out ${
          reason === "other" ? "border-[#4272DD]" : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="reason"
          id="other"
          value="other"
          className="peer mr-2 mt-1 h-6 w-6 text-blue-500 focus:ring-blue-500"
          onChange={(e) => updateFields({ reason: e.target.value })}
          required
          checked={reason === "other"}
        />
        <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          Other
        </p>
      </label>

      {/* Conditionally render input field if "Other" is selected */}
      {reason === "other" && (
        <div className="w-full">
          <textarea
            placeholder="Please specify"
            className="placeholder:font-paragraph w-full rounded-lg border-[1px] border-solid border-[rgba(0,0,0,0.1)] p-4 placeholder:text-lg placeholder:text-[#7F8493] focus:border-[#4272DD] focus:outline-none"
            value={otherReason || ""}
            onChange={(e) => updateFields({ otherReason: e.target.value })}
          />
        </div>
      )}
    </FormWrapper>
  );
}

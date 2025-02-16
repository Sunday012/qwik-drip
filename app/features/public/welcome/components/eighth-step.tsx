import FormWrapper from './form-wrapper'

type UserData = {
    medication: string,
    otherMedication: string,
}

type UserFormProps = UserData & {
    updateFields: (fields: Partial<UserData> ) => void
}

export function EighthStep({medication, otherMedication, updateFields}: UserFormProps ) {

  return (
    <FormWrapper title='Are you currently on any medication?' subheading=''>
        <label
        htmlFor="yes_medications"
        className={`p-4 rounded-lg flex flex-row-reverse justify-between items-start cursor-pointer w-full border-[1px] border-solid transition-colors duration-300 ease-in-out ${
          medication === "yes_medications" ? "border-[#4272DD]" : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="medication"
          id="yes_medications"
          value="yes_medications"
          className="mt-1 mr-2 text-blue-500 focus:ring-blue-500 w-6 h-6 peer"
          autoFocus
          onChange={e => updateFields({medication: e.target.value})}
          required
          checked={medication==="yes_medications"}
        />
        <p className="text-lg peer-checked:text-[#363840] text-left transition-colors duration-200 ease-in-out text-[#7F8493]">Yes</p>
      </label>

      {/* Conditionally render input field if "Other" is selected */}
      {medication === "yes_medications" && (
        <div className="w-full">
          <textarea
            placeholder="Please specify"
            value={otherMedication || ""}
            className="w-full p-4 border-[1px] border-solid border-[rgba(0,0,0,0.1)] rounded-lg focus:outline-none focus:border-[#4272DD] placeholder:text-lg placeholder:text-[#7F8493] placeholder:font-paragraph text-left"
            onChange={e => updateFields({otherMedication: e.target.value})}
          />
        </div>
      )}

      <label
        htmlFor="no_allergies"
        className={`p-4 rounded-lg flex flex-row-reverse justify-between items-start cursor-pointer w-full border-[1px] border-solid transition-colors duration-300 ease-in-out ${
          medication === "no_allergies" ? "border-[#4272DD]" : "border-[rgba(0,0,0,0.1)]"
        }`}
      >
        <input
          type="radio"
          name="medication"
          id="no_allergies"
          value="no_allergies"
          className="mt-1 mr-2 text-blue-500 focus:ring-blue-500 w-6 h-6 peer"
          onChange={e => updateFields({medication: e.target.value})}
          required
          checked={medication === "no_allergies"}
        />
        <p className="text-lg peer-checked:text-[#363840] text-left transition-colors duration-200 ease-in-out text-[#7F8493]">No</p>
      </label>
    </FormWrapper>
  )
}

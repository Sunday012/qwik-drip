import { cn } from "~/lib/utils";

import FormWrapper from "./form-wrapper";

type UserData = {
  weight: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function FourthStep({ weight, updateFields }: UserFormProps) {
  return (
    <FormWrapper title="How much do you weigh currently?" subheading="">
      <div className="w-full">
        <p className="mb-4 flex self-start text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
          Enter your current weight
        </p>
        <label
          htmlFor="weight"
          className={cn(
            "flex w-full cursor-pointer items-start justify-between rounded-lg border-[1px] border-solid transition-colors duration-300 ease-in-out focus:border-[#4272DD]",
          )}
        >
          <input
            type="text"
            name="weight"
            id="weight"
            value={weight || ""}
            className="peer w-11/12 p-4 h-[80px]"
            autoFocus
            onChange={(e) => updateFields({ weight: e.target.value })}
            required
          />
          <div className="border-l-solid w-[2/12] border-l-[1px] border-l-[#E6E6E6] p-4">
            <p className="text-[#363840]">KG</p>
          </div>
        </label>
        <div className="mt-4">
          Not sure? Use this{" "}
          <a
            href="https://www.calculator.net/bmi-calculator.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            BMI Calculator
          </a>{" "}
          to find out.
        </div>
      </div>
    </FormWrapper>
  );
}

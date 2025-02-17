import { useId } from "react";

import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

import FormWrapper from "./form-wrapper";

type UserData = {
  goalWeight: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function FifthStep({ goalWeight, updateFields }: UserFormProps) {
  const id = useId();

  return (
    <FormWrapper title="What is your goal weight?" subheading="">
      <div className="w-full space-y-2">
        {/* <Label
          htmlFor={`${id}-weight`}
          className="mb-4 flex self-start text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]"
        >
          Enter your current weight
        </Label> */}
        <div className="flex rounded-lg shadow-sm shadow-black/5">
          <Input
            id={`${id}-weight`}
            type="text"
            name="goal_weight"
            value={goalWeight || ""}
            className="peer -me-px h-[80px] w-11/12 rounded-e-none p-4 shadow-none"
            autoFocus
            onChange={(e) => updateFields({ goalWeight: e.target.value })}
            required
          />
          <span className="z-10 inline-flex items-center rounded-e-lg border border-input px-3 text-sm text-[#363840]">
            KG
          </span>
        </div>
      </div>
    </FormWrapper>
  );
}

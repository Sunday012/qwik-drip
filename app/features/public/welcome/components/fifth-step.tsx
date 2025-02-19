import { useId } from "react";

import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

import { FormWrapper } from "./form-wrapper";

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
        <div className="flex rounded-lg shadow-sm shadow-black/5">
          <Input
            id={`${id}-weight`}
            type="text"
            name="goal_weight"
            value={goalWeight || ""}
            className="peer -me-px h-[40px] w-11/12 rounded-e-none p-4 shadow-none sm:h-[60px] lg:h-[80px] lg:w-11/12"
            autoFocus
            onChange={(e) => updateFields({ goalWeight: e.target.value })}
            required
          />
          <span className="z-10 inline-flex items-center rounded-e-lg border border-input px-3 text-sm text-[#363840]">
            KG
          </span>
        </div>
      </div>
      <div className="mt-[40px]">
        <p className="text-blue-500 underline">
          I’m not sure; I’d like guidance.
        </p>
      </div>
    </FormWrapper>
  );
}

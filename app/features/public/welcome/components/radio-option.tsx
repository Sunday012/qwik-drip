import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { cn } from "~/lib/utils";

type RadioOptionProps = {
  id: string;
  label: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  name: string;
  autoFocus?: boolean;
};

export function RadioOption({
  id,
  label,
  value,
  checked,
  onChange,
  name,
  autoFocus,
}: RadioOptionProps) {
  return (
    <Label
      htmlFor={id}
      className={cn(
        "flex h-[80px] w-full cursor-pointer flex-row-reverse items-center justify-between gap-[24px] rounded-[16px] border-[1px] border-solid p-[24px] shadow-[0px_1px_3px_0px_#1D0D680D_0px_5px_5px_0px_#1D0D680A_0px_12px_7px_0px_#1D0D6808] transition-colors duration-300 ease-in-out",
        checked ? "border-[#4272DD]" : "border-[rgba(0,0,0,0.1)]",
      )}
    >
      <Input
        type="radio"
        name={name}
        id={id}
        className="peer mr-2 h-4 w-4 text-blue-500 focus:ring-blue-500"
        onChange={(e) => onChange(e.target.value)}
        value={value}
        checked={checked}
        required
        autoFocus={autoFocus}
      />
      <p className="text-left text-lg text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840]">
        {label}
      </p>
    </Label>
  );
}

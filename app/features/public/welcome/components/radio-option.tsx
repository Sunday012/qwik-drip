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
        "flex w-full cursor-pointer flex-row-reverse items-center justify-between rounded-[16px] border-[1px] border-solid p-[16px] shadow-[0px_1px_3px_0px_#1D0D680D_0px_5px_5px_0px_#1D0D680A_0px_12px_7px_0px_#1D0D6808] transition-colors duration-300 ease-in-out",
        "h-[60px] gap-[12px]",
        "md:h-[70px] md:gap-[16px] md:p-[20px]",
        "lg:h-[80px] lg:gap-[24px] lg:p-[24px]",
        checked ? "border-[#4272DD]" : "border-[rgba(0,0,0,0.1)]",
      )}
    >
      <Input
        type="radio"
        name={name}
        id={id}
        className="peer mr-2 h-3 w-3 text-blue-500 focus:ring-blue-500 md:h-3.5 md:w-3.5 lg:h-4 lg:w-4"
        onChange={(e) => onChange(e.target.value)}
        value={value}
        checked={checked}
        required
        autoFocus={autoFocus}
      />
      <p className="text-left text-base text-[#7F8493] transition-colors duration-200 ease-in-out peer-checked:text-[#363840] md:text-lg">
        {label}
      </p>
    </Label>
  );
}

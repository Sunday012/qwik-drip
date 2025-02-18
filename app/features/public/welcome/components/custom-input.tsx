import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

type CustomInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function CustomInput({
  value,
  onChange,
  placeholder = "Please specify",
}: CustomInputProps) {
  return (
    <div className="w-full shadow-[0px_1px_3px_0px_#1D0D680D_0px_5px_5px_0px_#1D0D680A_0px_12px_7px_0px_#1D0D6808]">
      <Textarea
        placeholder={placeholder}
        className="h-[162px] w-full gap-[24px] rounded-lg border-[2px] border-solid border-[rgba(0,0,0,0.1)] p-[24px] placeholder:font-paragraph placeholder:text-lg placeholder:text-[#7F8493] focus:border-[#4272DD] focus:outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

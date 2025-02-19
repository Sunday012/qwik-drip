import { Textarea } from "~/components/ui/textarea";
import { cn } from "~/lib/utils";

type TextareaInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
};

export function TextareaInput({
  value,
  onChange,
  placeholder = "Please specify",
  className,
  inputClassName,
}: TextareaInputProps) {
  return (
    <div
      className={cn(
        "w-full shadow-[0px_1px_3px_0px_#1D0D680D_0px_5px_5px_0px_#1D0D680A_0px_12px_7px_0px_#1D0D6808]",
        className,
      )}
    >
      <Textarea
        placeholder={placeholder}
        className={cn(
          "h-[120px] w-full gap-[16px] rounded-lg border-[2px] border-solid border-[rgba(0,0,0,0.1)] p-[16px] placeholder:font-paragraph placeholder:text-base placeholder:text-[#7F8493] focus:border-[#4272DD] focus:outline-none md:h-[140px] md:gap-[20px] md:p-[20px] md:placeholder:text-lg lg:h-[162px] lg:gap-[24px] lg:p-[24px]",
          inputClassName,
        )}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

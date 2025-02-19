import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";

type FormInputProps = {
  id?: string;
  placeholder?: string;
  type: string;
  className?: string;
  inputClassName?: string;
  value?: string;
  onChange: (value: string) => void;
};
export function FormInput({
  id,
  placeholder,
  type,
  className,
  inputClassName,
  value,
  onChange,
}: FormInputProps) {
  return (
    <div
      className={cn(
        "group relative rounded-lg border border-input bg-background shadow-sm shadow-black/5 transition-shadow focus-within:border-ring focus-within:outline-none focus-within:ring-[3px] focus-within:ring-ring/20 has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50 [&:has(input:is(:disabled))_*]:pointer-events-none",
        className,
      )}
    >
      <Input
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        type={type}
        className={cn(
          "h-[55px] transition-all duration-200 group-focus-within:h-[57px] group-focus-within:pt-2 has-[input:not(:placeholder-shown)]:h-[57px] has-[input:not(:placeholder-shown)]:pt-2",
          inputClassName,
        )}
      />
    </div>
  );
}
